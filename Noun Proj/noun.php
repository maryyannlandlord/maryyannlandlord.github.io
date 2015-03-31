<?php
    //Use this OAuth library -> http://oauth.googlecode.com/svn/code/php/OAuth.php
    require("OAuth.php");
    
    if (isset($_POST['url'])) {
    
    $cc_key  = "2cb7ed900791433a9d8879ba01adc982";
    $cc_secret = "3dd2c708c98442c5ae29528b652a6f5c";
    $url = $_POST['url'];
    $args = array();
    $args["limit"] = 10;
     
    $consumer = new OAuthConsumer($cc_key, $cc_secret);
    $request = OAuthRequest::from_consumer_and_token($consumer, NULL,"GET", $url, $args);
    $request->sign_request(new OAuthSignatureMethod_HMAC_SHA1(), $consumer, NULL);
    $url = sprintf("%s?%s", $url, OAuthUtil::build_http_query($args));
    $ch = curl_init();
    $headers = array($request->to_header());
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $rsp = curl_exec($ch);
    //$results = json_decode($rsp);
    //print_r($results);
    print_r($rsp);
    }
    else
    {
    echo("TERM NOT SET");
    }
?>