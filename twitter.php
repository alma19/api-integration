<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "4340603247-HnbUWDsyXCPMON1TMA7365OeztGP08hwnKQswBV",
    'oauth_access_token_secret' => "NSOW7L8u2jOb2qqqAwRnnWdZBusUh1ATAWtI7ag7xXVJ1",
    'consumer_key' => "bkPtoPKhRESmrGdeP5AhxtGR1",
    'consumer_secret' => "g62TjCEJ4Occ09b8MKHtgEj2fILkhq6p8WZuFopRPbm0Zg9Q74"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock', 
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
//$twitter = new TwitterAPIExchange($settings);
//echo $twitter->buildOauth($url, $requestMethod)
//             ->setPostfields($postfields)
//             ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#unc&count=100';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);

$tweetData = json_decode( $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(), $assoc=TRUE);

foreach($tweetData['statuses'] as $index => $items){
    $userArray = $items['user'];
    echo '<div class="twitter-tweet">TWEET: ' . $userArray['screen_name']  . $items['text'];
    echo '<br/>' . $items['created_at']; 
    echo '</div>'; 
}; 


 $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
