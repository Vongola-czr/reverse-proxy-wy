<?php

    # 用户名 商品图片
   
    $shopname = $_GET['shopname'];
    $pic = $_GET['pic'];
    $price = $_GET['price'];
    $shop_id = $_GET['shop_id'];
    
       
    // $shopname ='1';
    // $pic = '2';
    // $price = '23';
    // $shop_id = '4';
    
    // $sql = "SELECT * FROM `car` WHERE 'shop_id' != '$shop_id'";

    // $res = mysqli_query($con,$sql);

    $con = mysqli_connect('localhost','root','123456','163shop');
    $sqlt = "INSERT INTO `car` (`id`, `shopname`, `pic`,`price`,`shop_id`,`buy_num`) VALUES (NULL, '$shopname', '$pic','$price','$shop_id','1')";
    $res1 = mysqli_query($con,$sqlt);
    
    // echo $shopname,$pic,$price,$shop_id;
    if($res1){
        print_r(1);
    }else{
        echo "2";
    }

?>