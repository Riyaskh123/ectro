<?php
    include 'connection.php';
    $conn = OpenCon();
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    $data = json_decode(file_get_contents('php://input'));
    /* JSON FORMAT
    {
        "name" : "name",
        "desc" : "desc",
        "img64" : "img64",
        "imgname" : "imgname",
        "imgtype" : "imgtype",
        "prodtype" : "productType"
    }
    */
    if ($result = $conn -> query("CALL addProduct('$data->name','$data->desc','$data->img64','$imgname','$data->imgtype',$data->prodtype)")) {
        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }
        //print json_encode($rows);
        }
    CloseCon($con);
?>