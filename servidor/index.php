<?php 
	include_once("Champion.php");
	include_once("SummonerSpell.php");
	$summoner_name = $_REQUEST["summ"]; //nombre de usuario a buscar.
	$server = strtolower($_REQUEST["serv"]); //tipo de operación a realizar.
	$api_key = "42fafbb1-0736-4c03-add6-21c3c4f18830";
	$finalJson = "";
	if($summoner_name != "" && $server != ""){
		$jsonurl = "https://lan.api.pvp.net/api/lol/".$server."/v1.4/summoner/by-name/".$summoner_name."?api_key=".$api_key;
		$json = file_get_contents($jsonurl);
		$summoner_array = json_decode($json, true);
		$summoner_id = $summoner_array[$summoner_name]["id"];
		$servers = array("eune" => "EUN1", "euw" => "EUW1", "kr" => "KR1", "ru" => "RU", "tr" => "TR1", "lan" => "LA1", "na" => "NA1", "br" => "BR1", "las" => "LA2", "oce" => "OC1");
		$jsonurl2 = "https://lan.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/".$servers[$server]."/".$summoner_id."?api_key=".$api_key;
		$json2 = file_get_contents($jsonurl2);
		$game_array = json_decode($json2, true);

		$summonerIds = "";
		$summoners_array = "";
		$x = 0;
		foreach ($game_array["participants"] as $participant) {
			$summonerIds.= $participant["summonerId"];
			if($x + 1 !=  count($game_array["participants"])){
				$summonerIds.= ",";
			}
			$x++;
		}
		
		$jsonurl3 = "";
		

		if($summonerIds != ""){
			$jsonurl3 = "https://lan.api.pvp.net/api/lol/lan/v2.5/league/by-summoner/".$summonerIds."/entry?api_key=42fafbb1-0736-4c03-add6-21c3c4f18830";
			$json3 = file_get_contents($jsonurl3);
			$summoners_array = json_decode($json3, true);

			$finalJson = "			
				<table style='width:100%;margin-top:100px;border:solid 1px #eee;padding-left:5px;padding-right:5px;background:white;'>
					<thead style='background-color:#333;border-bottom:solid 5px #041c4c;color:white;'>
						<th style='text-align:center;'>Summoner Name</th>
						<th style='text-align:center;'>Champion</th>
						<th style='text-align:center;'>Tier</th>
					</thead>
					<tbody style='margin-top:15px;'>
			 	";
			$index = 1;
			foreach ($game_array["participants"] as $participant) {
				$profileIconId = $participant["profileIconId"];
				$participantId = $participant["summonerId"];
				$tier = "Unranked";
				$division = "None";
				$leaguePoints = "0";

				$entries = $summoners_array[$participantId];
				foreach ($entries as $entry) {
					if($entry["queue"] == "RANKED_SOLO_5x5"){
						$leaguePoints = $entry["entries"][0]["leaguePoints"];
						$division = $entry["entries"][0]["division"];
						$tier = $entry["tier"];
					}
				}


				$Champion = new Champion($participant["championId"]);
				$Champion -> get();

				$SummonerSpell1 = new SummonerSpell($participant["spell1Id"]);
				$SummonerSpell1 -> get();

				$SummonerSpell2 = new SummonerSpell($participant["spell2Id"]);
				$SummonerSpell2 -> get();

				$finalJson.= "
						<tr style='text-align:center;padding-top:10px;'>
							<td><a target='_blank' href='http://".$server.".op.gg/summoner/userName=".$participant["summonerName"]."'>
								<img src='http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/".$profileIconId.".png' style='width:30;height:30px;clear:none;float:left;'>
								".$participant["summonerName"]."
								</a>
							</td>
							<td>
								<div style='margin:0 auto;display:table;'>
									<img src='images/".$Champion -> championName.".png ' style='width:30;height:30px;clear:none;float:left;'>
									<div style='height:30px;width:15px;clear:none;float:left;'>
										<img src='images/".$SummonerSpell1 -> summonerSpellName.".png' style='width:15px;height:15px;margin-top:-5px;'>
										<br>
										<img src='images/".$SummonerSpell2 -> summonerSpellName.".png' style='width:15px;height:15px;margin-top:-15px;'>
									</div>
								</div>
							</td>
							<td>".$tier." ".$division."(".$leaguePoints.")</td>
						</tr>


					 ";
				$index++;
				if($index == 6){
					$finalJson.= "</tbody>
						 </table>
						 <br><br>
						 <table style='width:100%;border:solid 1px #eee;padding-left:5px;padding-right:5px;background:white;'>
						 	<thead style='background-color:#333;border-bottom:solid 5px #581618;color:white;'>
							<th style='text-align:center;'>Summoner Name</th>
							<th style='text-align:center;'>Champion</th>
							<th style='text-align:center;'>Tier</th>
						</thead>
						<tbody style='margin-top:15px;'>";
				}
			}
		}

		$finalJson.= "</tbody>
			</table>";
		


	}
	else{
		$finalJson = "false";
	}

	echo json_encode($finalJson);

?> 