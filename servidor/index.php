<?php 
	include_once("Champion.php");
	include_once("SummonerSpell.php");

	function getResponseMessage($httpResponse,$requestType){
		$responseCode = 0;
		if($httpResponse && $httpResponse[0]){
			$responseHeader = $httpResponse[0];
			$responseHeaderArray = preg_split('/\s+/',$responseHeader);
			$responseCode = $responseHeaderArray[1];
		}
		
		$message = '';
		switch($responseCode){
			case '404': 
				if($requestType=='getSummoner')
					$message = 'El summoner no existe en esta región.';
				else if($requestType=='getSepctInfo')
					$message = 'El summoner no se encuentra jugando en este momento.';
				else if($requestType=='getLeague')
					$message = 'No existe la liga del summoner.';
				break;
			case '503': $message = 'Servicio no disponible.';
				break;
			default: $message = 'Error desconocido';
			break;
		}

		return $message;
	}

	$summoner_name = $_REQUEST["summ"]; //nombre de usuario a buscar.
	// Estandarizar el nombre.
	$summoner_name = preg_replace('/\s+/', '', $summoner_name);
	$summoner_name = strtolower($summoner_name);

	$server = strtolower($_REQUEST["serv"]); //tipo de operación a realizar.
	$api_key = "42fafbb1-0736-4c03-add6-21c3c4f18830";
	$servers = array("eune" => "EUN1", "euw" => "EUW1", "kr" => "KR1", "ru" => "RU", "tr" => "TR1", "lan" => "LA1", "na" => "NA1", "br" => "BR1", "las" => "LA2", "oce" => "OC1");

	$finalJson = "";
	if($summoner_name != "" && $server != ""){
		$jsonurl = "https://lan.api.pvp.net/api/lol/".$server."/v1.4/summoner/by-name/".$summoner_name."?api_key=".$api_key;
		if( ($json = @file_get_contents($jsonurl)) === false ){
			
			$message = getResponseMessage($http_response_header, 'getSummoner');

			echo json_encode( array('success' => false, 'response' => $message) );
			return;
		}

		$summoner_array = json_decode($json, true);
		$summoner_id = $summoner_array[$summoner_name]["id"];

		$jsonurl2 = "https://lan.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/".$servers[$server]."/".$summoner_id."?api_key=".$api_key;
		
		if( ($json2 = @file_get_contents($jsonurl2)) === false ){

			$message = getResponseMessage($http_response_header, 'getSepctInfo');

			echo json_encode( array('success' => false, 'response' => $message) );
			return;
		}

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
			$jsonurl3 = "https://lan.api.pvp.net/api/lol/".$server."/v2.5/league/by-summoner/".$summonerIds."/entry?api_key=42fafbb1-0736-4c03-add6-21c3c4f18830";

			if( ($json3 = @file_get_contents($jsonurl3)) === false ){

				$message = getResponseMessage($http_response_header, 'getLeague');

				echo json_encode( array('success' => false, 'response' => $message) );
				return;
			}

			$summoners_array = json_decode($json3, true);

			$finalJson = "			
				<table >
					<thead class='red'>
						<th>Summoner Name</th>
						<th>Champion</th>
						<th>Tier</th>
					</thead>
					<tbody>
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
						<tr>
							<td>
								<img src='http://ddragon.leagueoflegends.com/cdn/5.10.1/img/profileicon/".$profileIconId.".png' style='width:30;height:30px;clear:none;float:left;'>
								<a target='_blank' href='http://".$server.".op.gg/summoner/userName=".$participant["summonerName"]."'>
									".$participant["summonerName"]."
								</a>
							</td>
							<td>
								<div style='margin:0 auto;display:table;'>
									<img src='images/".$Champion -> championName.".png ' class='champion-icon' style='width:30;height:30px;clear:none;float:left;'>
									<div style='height:30px;width:15px;clear:none;float:left;position:relative;'>
										<img src='images/".$SummonerSpell1 -> summonerSpellName.".png' class='spell-icon-1' style='position:absolute;width:14px;height:14px;top:0;left:2px;'>
										<br>
										<img src='images/".$SummonerSpell2 -> summonerSpellName.".png' class='spell-icon-2' style='position:absolute;width:14px;height:14px;bottom:0;left:2px;'>
									</div>
								</div>
							</td>
							<td>".$tier." ".$division."(".$leaguePoints." LP)</td>
						</tr>


					 ";
				$index++;
				if($index == 6){
					$finalJson.= "</tbody>
						 </table>
						 <br><br>
						 <table>
						 	<thead class='blue'>
							<th>Summoner Name</th>
							<th>Champion</th>
							<th>Tier</th>
						</thead>
						<tbody>";
				}
			}
		}

		$finalJson.= "</tbody>
			</table>";
		


	}
	else{
		//$finalJson = "false";
		echo json_encode(array('success' => false, 'response' =>  'Ingresa un summoner name.'));
		return;
	}

	echo json_encode( array('success' => true, 'response' =>  $finalJson));

?> 