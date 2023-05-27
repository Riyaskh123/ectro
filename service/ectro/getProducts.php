<?php
    include 'connection.php';
    $conn = OpenCon();
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: "PUT, POST, GET, DELETE, PATCH, OPTIONS"');
    header('Access-Control-Allow-Headers: Content-Type,Authorization');
    //$data = json_decode(file_get_contents('php://input'));
    $data = array();
    if ($result = $conn -> query("CALL `196544`()")) {
        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            //echo implode(" ",$r);
            $rows[] = $r;
        }
        print json_encode($rows);
        }
    CloseCon($conn);
?>