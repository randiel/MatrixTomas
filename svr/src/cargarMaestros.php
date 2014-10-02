<?php
//CAMBIARLE EL LIMITE DE MEMORIA Y TIEMPO
ini_set('max_execution_time', 0);//300->5 min
ini_set('memory_limit', '-1');
ini_set('display_errors',1);

//establecer hora local
date_default_timezone_set('America/Lima');
//$fecha_de_hoy=date('_Y-m-d_h-i-s_a');

//cargar el phpexcel
require_once "../lib/PHPExcel/IOFactory.php";

$maestroProducto=$_FILES['maestroProducto']['name'];
$maestroStock=$_FILES['maestroStock']['name'];
$maestroValor=$_FILES['maestroValor']['name'];
$maestroLectura=$_FILES['maestroLectura']['name'];

$directorio = "../storage/";

//cargamos el phpexcel
$objReader = PHPExcel_IOFactory::createReader('Excel2007');
$objReader->setReadDataOnly(true);
mysql_connect("localhost","root","d3v3l0p3r");
mysql_select_db("tomasdb") or die ("no se puede conectar a la bd");

if ($maestroProducto!="") {
	move_uploaded_file($_FILES['maestroProducto']['tmp_name'],$directorio.$maestroProducto);			
	$objPHPExcel = $objReader->load($directorio.$maestroProducto);
	$objWorksheet = $objPHPExcel->getActiveSheet(0);//indicamos que empezamos con la primer hoja
	$highestRow = $objWorksheet->getHighestRow(); //Leemos cuantas filas tiene
	if(!$highestRow){//si tiene 0 filas
	  die("El archivo de excel no contiene informacion o bien esta no es accesible");
	}
	$sql="insert into pro (procodc,proskuc,prodesc,proundc) values ";
	for ($i=2; $i<$highestRow+1 ; $i++) { //filas
		$sql.="(";
		for ($j=1; $j<5 ; $j++) { //columnas
			$valorcampo=$objWorksheet->getCellByColumnAndRow($j, $i)->getValue();
			$sql.="\"".$valorcampo."\",";
		}
		$sql = substr ($sql,0,-1);
		$sql.="),";
	}
	$sql = substr ( $sql, 0, - 1 );
	mysql_query($sql) or die(mysql_error());
	$descripcion='{archivo:'.$maestroProducto.',registros:'.($highestRow-1).'}';
	//$sqllog="insert into log (logdesc,logaccc) values (\"frmCargarMaestros\",\"".$descripcion."\")";
	//mysql_query($sqllog) or die(mysql_error());
}

if ($maestroStock!="") {
	move_uploaded_file($_FILES['maestroStock']['tmp_name'],$directorio.$maestroStock);			
	$objPHPExcel = $objReader->load($directorio.$maestroStock);
	$objWorksheet = $objPHPExcel->getActiveSheet(0);//indicamos que empezamos con la primer hoja
	$highestRow = $objWorksheet->getHighestRow(); //Leemos cuantas filas tiene
	if(!$highestRow){//si tiene 0 filas
	  die("El archivo de excel no contiene informacion o bien esta no es accesible");
	}
	$sql="insert into stk (stkcodc,stkskuc,stkubic,stkundc,stkstkf) values ";
	for ($i=2; $i<$highestRow+1 ; $i++) { //filas
		$sql.="(";
		for ($j=1; $j<6 ; $j++) { //columnas
			$valorcampo=$objWorksheet->getCellByColumnAndRow($j, $i)->getValue();
			$sql.="\"".$valorcampo."\",";
		}
		$sql = substr ($sql,0,-1);
		$sql.="),";
	}
	$sql = substr ( $sql, 0, - 1 );
	mysql_query($sql) or die(mysql_error());
	$descripcion='{archivo:'.$maestroStock.',registros:'.($highestRow-1).'}';
	$sqllog="insert into log (logdesc,logaccc) values (\"frmCargarMaestros\",\"".$descripcion."\")";
	//mysql_query($sqllog) or die(mysql_error());
}

if ($maestroValor!="") {
	move_uploaded_file($_FILES['maestroValor']['tmp_name'],$directorio.$maestroValor);			
	$objPHPExcel = $objReader->load($directorio.$maestroValor);
	$objWorksheet = $objPHPExcel->getActiveSheet(0);//indicamos que empezamos con la primer hoja
	$highestRow = $objWorksheet->getHighestRow(); //Leemos cuantas filas tiene
	if(!$highestRow){//si tiene 0 filas
	  die("El archivo de excel no contiene informacion o bien esta no es accesible");
	}
	$sql="insert into val (valcodc,valskuc,valubic,valundc,valstkf,valstvf) values ";
	for ($i=2; $i<$highestRow+1 ; $i++) { //filas
		$sql.="(";
		for ($j=1; $j<7 ; $j++) { //columnas
			$valorcampo=$objWorksheet->getCellByColumnAndRow($j, $i)->getValue();
			$sql.="\"".$valorcampo."\",";
		}
		$sql = substr ($sql,0,-1);
		$sql.="),";
	}
	$sql = substr ( $sql, 0, - 1 );
	mysql_query($sql) or die(mysql_error());
	$descripcion='{archivo:'.$maestroValor.',registros:'.($highestRow-1).'}';
	$sqllog="insert into log (logdesc,logaccc) values (\"frmCargarMaestros\",\"".$descripcion."\")";
	//mysql_query($sqllog) or die(mysql_error());
}

if ($maestroLectura!="") {
	move_uploaded_file($_FILES['maestroLectura']['tmp_name'],$directorio.$maestroLectura);			
	$objPHPExcel = $objReader->load($directorio.$maestroLectura);
	$objWorksheet = $objPHPExcel->getActiveSheet(0);//indicamos que empezamos con la primer hoja
	$highestRow = $objWorksheet->getHighestRow(); //Leemos cuantas filas tiene
	if(!$highestRow){//si tiene 0 filas
	  die("El archivo de excel no contiene informacion o bien esta no es accesible");
	}
	$sql="insert into pro (procodc,proskuc,prodesc,proundc) values ";
	for ($i=2; $i<$highestRow+1 ; $i++) { //filas
		$sql.="(";
		for ($j=1; $j<5 ; $j++) { //columnas
			$valorcampo=$objWorksheet->getCellByColumnAndRow($j, $i)->getValue();
			$sql.="\"".$valorcampo."\",";
		}
		$sql = substr ($sql,0,-1);
		$sql.="),";
	}
	$sql = substr ( $sql, 0, - 1 );
	mysql_query($sql) or die(mysql_error());
	$descripcion='{archivo:'.$maestroLectura.',registros:'.($highestRow-1).'}';
	$sqllog="insert into log (logdesc,logaccc) values (\"frmCargarMaestros\",\"".$descripcion."\")";
	//mysql_query($sqllog) or die(mysql_error());
}

echo "{success:true}";
?>

