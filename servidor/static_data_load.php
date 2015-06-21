<?php
	include_once("Champion.php");
	$api_key = "42fafbb1-0736-4c03-add6-21c3c4f18830";
	$jsonurl = "https://global.api.pvp.net/api/lol/static-data/lan/v1.2/champion?champData=all&api_key=".$api_key;
	$json = file_get_contents($jsonurl);
	$champions_array = json_decode($json, true);
	$keys = $champions_array["keys"];
	$champions_data = $champions_array["data"];
	foreach ($keys as $key => $value) {
		//$champion_data = $champions_data[$value];
		$championId = $key;
		$championName = $value;
		$Champion = new Champion($championId, $championName);
		if(!$Champion -> ifExists()){
			$Champion -> save();
		}
	}

	//SummonerSpell Load

	include_once("SummonerSpell.php");
	$api_key = "42fafbb1-0736-4c03-add6-21c3c4f18830";
	$jsonurl = "https://global.api.pvp.net/api/lol/static-data/lan/v1.2/summoner-spell?api_key=".$api_key;
	$json = file_get_contents($jsonurl);
	$summonerspell_array = json_decode($json, true);
	foreach ($summonerspell_array["data"] as $summonerspell) {
		$summonerSpellId = $summonerspell["id"];
		$summonerSpellName = $summonerspell["key"];
		$SummonerSpell = new SummonerSpell($summonerSpellId, $summonerSpellName);
		if(!$SummonerSpell -> ifExists()){
			$SummonerSpell -> save();
		}
	}
?>