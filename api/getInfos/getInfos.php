<?php
 header("Content-Type:application/json");

require_once("../db/dbc.php");



$db=DatabaseConnection::getSingleTonInstance();
if($_SERVER["REQUEST_METHOD"] == "GET"){//get customers
    $q="SELECT * FROM northwind.customers;";

    $res=$db->Select($q);

    if(count($res)>0){
        
        echo json_encode($res);
    }
    else
    {
        echo "error";

    }
}
