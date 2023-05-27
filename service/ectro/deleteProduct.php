<?php
    include 'connection.php';
    $conn = OpenCon();
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST ');
    header('Access-Control-Allow-Headers: Content-Type ');
    $data = json_decode(file_get_contents('php://input'));
    /*
    {
        pid: id
    }
    */
    $id = strval($data -> pid);
    if ($result = $conn -> query("call `196545`($id)")) {
        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }
        print json_encode($rows);
    }
    CloseCon($conn);
?>