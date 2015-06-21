<?php
	/**
	* 
	*/
	include_once("DatabaseConexion.php");
	class SummonerSpell 
	{
		var $summonerSpellId;
		var $summonerSpellName;

		function __construct($summonerSpellId = 0, $summonerSpellName = "")
		{
			$this -> summonerSpellId = $summonerSpellId;
			$this -> summonerSpellName = $summonerSpellName;
		}

		function save(){
			$conexion = new DatabaseConexion();
			$sql = "INSERT INTO summoner_spells (summonerSpellId, summonerSpellName) VALUES ('".$this -> summonerSpellId."', '".$this -> summonerSpellName."');";
			$resultados = $conexion -> ejecutar($sql);
			$this -> summonerSpellId = $resultados;
			return $resultados;
		}

		function get(){
			$conexion = new DatabaseConexion();
			$sql = "SELECT * FROM summoner_spells WHERE summonerSpellId = ".$this -> summonerSpellId.";";
			$resultados = $conexion -> ejecutar($sql);
			foreach ($resultados as $fila) {
				$this -> summonerSpellId = $fila["summonerSpellId"];
				$this -> summonerSpellName = $fila["summonerSpellName"];
			}
		}

		function ifExists(){
			$conexion = new DatabaseConexion();
			$sql = "SELECT * FROM summoner_spells WHERE summonerSpellId = ".$this -> summonerSpellId.";";
			$resultados = $conexion -> ejecutar($sql);
			if(mysqli_num_rows($resultados) > 0){
				return true;
			}
			return false;
		}

	}
?>