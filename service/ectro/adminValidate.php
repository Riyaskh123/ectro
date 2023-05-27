<?php
    include 'connection.php';
    $conn = OpenCon();
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    $input = json_decode(file_get_contents('php://input'));
    /* JSON FORMAT
    {
        "status": "ok",
        "msg": "Logged in",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
            "id": 1,
            "name": "Karn",
            "username": "karn.yong@mecallapi.com",
            "email": "karn.yong@mecallapi.com",
            "avatar": "https://www.mecallapi.com/users/1.png"
        }
    }
    */
    $token = bin2hex(random_bytes(16));
    $data = new stdClass();
    $user = new stdClass();
    $IP =  $input->ip;
    $result = $conn -> query("SELECT id,name,email,username,avatar from admin_user where username = '{$input->userid}' and password = '{$input->password}';");
    $rowcount = mysqli_num_rows($result);
    if ($rowcount>0){
        while($row = mysqli_fetch_array($result)) {
            $user->id = $row['id'];
            $user->name = $row['name'];
            $user->email = $row['email'];
            $user->username = $row['username'];
            $user->avatar = $row['avatar'];
        }
        $data->status = "success";
        $data->msg = "Logged In";
        $data->accessToken = $token;
        $data->user = $user;
        session_start();
        $_SESSION['accessToken'] = $token;
        $_SESSION['ip'] = $IP;
    }
    else{
        $data->status = "fail";
        $data->msg = "Entered user or password incorrect";
    }
    echo json_encode($data);
    CloseCon($conn);
?>