<?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    session_start();
    foreach (getallheaders() as $name => $value) {
        echo "$name: $value\n";
    }
    if( $_SERVER['session'] != $_SESSION['accessToken'] || $_SERVER['ipv4'] != $_SESSION['ip'] ){
        $data = new stdClass();
        $data->status = 1;
        $data->msg = 'session closed';
        echo json_encode($data);
    }
?>