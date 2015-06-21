<?php
	/**
	* 
	*/
	include_once("DatabaseConexion.php");
	class Champion 
	{
		var $championId;
		var $championName;

		function __construct($championId = 0, $championName = "")
		{
			$this -> championId = $championId;
			$this -> championName = $championName;
		}

		function save(){
			$conexion = new DatabaseConexion();
			$sql = "INSERT INTO champions (championId, championName) VALUES ('".$this -> championId."', '".$this -> championName."');";
			$resultados = $conexion -> ejecutar($sql);
			$this -> championId = $resultados;
			return $resultados;
		}

		function get(){
			$conexion = new DatabaseConexion();
			$sql = "SELECT * FROM champions WHERE championId = ".$this -> championId.";";
			$resultados = $conexion -> ejecutar($sql);
			foreach ($resultados as $fila) {
				$this -> championId = $fila["championId"];
				$this -> championName = $fila["championName"];
			}
		}

		function ifExists(){
			$conexion = new DatabaseConexion();
			$sql = "SELECT * FROM champions WHERE championId = ".$this -> championId.";";
			$resultados = $conexion -> ejecutar($sql);
			if(mysqli_num_rows($resultados) > 0){
				return true;
			}
			return false;
		}

	}
?>