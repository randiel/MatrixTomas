<?php
//CAMBIARLE EL LIMITE DE MEMORIA Y TIEMPO
ini_set('max_execution_time', 0);//300->5 min
ini_set('memory_limit', '-1');
ini_set('display_errors',1);

//establecer hora local
date_default_timezone_set('America/Lima');
//$fecha_de_hoy=date('_Y-m-d_h-i-s_a');

//cargar el phpexcel
//require_once "../lib/PHPExcel/IOFactory.php";
$nombre=$_POST['nArchivo'];
$maestro=$_FILES['maestro']['name'];
$tamanio=$_FILES['maestro']['size'];
//$maestroStock=$_FILES['maestroStock']['name'];
//$maestroValor=$_FILES['maestroValor']['name'];
//$maestroLectura=$_FILES['maestroLectura']['name'];

//$ext=array_pop(explode(".",$maestro));
$directorio = "../storage/";
$nombreArchivo = date('Ymd_His_').$maestro;
$statusCarga = "Correcto";
move_uploaded_file($_FILES['maestro']['tmp_name'],$directorio.$nombreArchivo);

//cargamos el phpexcel
/*
$objReader = PHPExcel_IOFactory::createReader('Excel2007');
$objReader->setReadDataOnly(true);
*/

$sql="insert into ldc (ldcnomc,ldcnomfilc,ldcstac,ldctamc) values ";
$sql.="(";
$sql.="\"".$nombre."\",";
$sql.="\"".$nombreArchivo."\",";
$sql.="\"".$statusCarga."\",";
$sql.="\"".$tamanio."\"";
$sql.=")";

mysql_connect("localhost","root","d3v3l0p3r");
mysql_select_db("tomasdb") or die ("no se puede conectar a la bd");
mysql_query($sql) or die(mysql_error());

echo "{success:true}";
?>

