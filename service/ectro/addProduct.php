<?php
include 'connection.php';
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST ');
header('Access-Control-Allow-Headers: Content-Type ');
$conn = OpenCon();
$data = json_decode(file_get_contents('php://input'));
$date = date("y-m-d");
$color = implode(",",array_unique($data->colour));
/* JSON FORMAT
 {
    "name" : "name",
    "desc" : "desc",
    "img64" : "img64",
    "imgname" : "imgname",
    "imgtype" : "imgtype",
    "prodtype" : "productType",
    "dimension" : "dimension",
    "weight" : "weight",
    "wattage" : "wattage",
    "colour" : "colour"
 }
*/
$rows = array();
$quary = '';
if($data->updates){
    $quary = "CALL `196546`($data->id,'$data->name','$data->desc','$data->img64','$data->imgname','$data->imgtype',$data->prodtype,'$data->dimension','$data->weight','$data->wattage','$color')";
} else {
    $quary = "CALL `196543`('$data->name','$data->desc','$data->img64','$data->imgname','$data->imgtype',$data->prodtype,'$date','$data->dimension','$data->weight','$data->wattage','$color')";
}
if ($result = $conn -> query($quary)) {
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
}else{
    $row[] = $conn -> error;
}
print json_encode($rows);
CloseCon($conn);
?>