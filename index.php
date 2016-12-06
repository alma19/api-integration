<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>#BlackLivesMatter</title>
    
    <link rel="stylesheet" href="css/styles.css">

    <!-- Bootstrap -->
   <!-- Latest compiled and minified CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   
   <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  
   <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
     <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/tweetLinkIt.js"></script>
    <script src="//twemoji.maxcdn.com/2/twemoji.min.js?2.2"></script> <!--makes emojis appear / found on http://stackoverflow.com/questions/24682220/issue-displaying-emoji-unicode-characters-pulled-from-twitter-api-on-a-web-app -->
  
    <script>
       function pageComplete(){
          console.log("pagecomplete")
          $('.tweet').tweetLinkify();
      }
    </script>
  
  </head>
  <body>
<!--BASIC TEMPLATE FROM BOOTSTRAP-->
    

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <div class="title">
          <a href="#">#BlackLivesMatter</a>
        </div>
        
        <p>#BlackLivesMatter is mostly commonly known as a hashtag that brings awareness to, and fights against police brutality towards African-Americans. </p>
      </div>
    </div>


    <div class="container">
     

      <div class="row">
        <div class="col-xs-12 col-md-4 col-lg-4">
          <a class="btn  btn-block" href="#ground" role="button"  data-toggle="pill" >On The Ground</a>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-4">
          <a class="btn btn-block active" href="#news" role="button" data-toggle="pill" aria-pressed="true">In The News</a>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-4">
          <a class="btn btn-block active" href="#media" role="button" data-toggle="pill" aria-pressed="true">On Social Media</a>
        </div>

      </div>
      
      <div class="tab-content">
        <div id="ground" class="tab-pane fade in active">
          <h3 class="btn-title">On The Ground</h3>
          <p>Cases of police brutality that gained national attention, and were protested by the #BlackLivesMatter movement. </p>
          <div id="map"></div>
          <script>console.log("here");</script>
        </div>
        <div id="news" class="tab-pane fade">
          <h3 class="btn-title">In The News - The New York Times</h3>
          <div id="nytimes-results"></div>
        </div>
        <div id="media" class="tab-pane fade">
          <h3 class="btn-title">On Social Media</h3>
          <p>Tweets from various Black Lives Matter chapters across the country.</p>
         
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
          $url = 'https://api.twitter.com/1.1/lists/statuses.json';
          $getfield = '?slug=blm&owner_screen_name=queenalma19';
          $requestMethod = 'GET';
          $twitter = new TwitterAPIExchange($settings);
          $tweetData = json_decode($twitter->setGetfield($getfield)
               ->buildOauth($url, $requestMethod)
               ->performRequest(),$assoc=TRUE);
  
        foreach($tweetData as $index => $items){

        
                  $entitiesArray = $items['entities'];
                  $userArray = $items['user'];
                  //echo "<div class = 'user'><img src = '" . $userArray['profile_image_url'] . "'>" .$userArray['name'] . "</div>";
                  echo "<div class='news'>";
                  echo "<div class='social-media'>";
                  echo "<div class='twitter-user'><a href='http://twitter.com/" . $userArray['screen_name'] . "' target='_blank'><img src='" . $userArray['profile_image_url'] . "'/></a> <a class='user-name' href='http://twitter.com/" . $userArray['screen_name'] .  "'target_'blank'>" . $userArray['name'] . "</a> </div>"; 
                  //echo "<div class='user-name'><a href='http://twitter.com/" . $userArray['screen_name'] . "'target_'blank'>" . $userArray['name'] . "</a></div>"; 
                  echo "<div class = 'tweet'><p>". $items['text'] . "</p></div>";
                  $theDate = strtotime($items['created_at']);
                 echo "<div class='tweet-date'>" . date(' D, M jS g:i a', $theDate) . "<hr></div>";
                  
                  
                  echo "</div>";
                  echo "</div>"; 
  
          
  };
  
                        $twitter->setGetfield($getfield)
                       ->buildOauth($url, $requestMethod)
                       ->performRequest();
                
                 echo "<script>pageComplete();</script>";
                       
              ?>      
          
        </div> <!--media-->
      </div>


    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2 class="headings-title">The Beginning</h2>
          <p>The Black Lives Matter movement began as a hashtag on Twitter in response to the death of Trayvon Martin. </p>
          <p><a class="btn" href="http://almawashington.com/586/project2/#page3" target="_blank" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <h2 class="headings-title">The Founders</h2>
          <p>The Black Lives Matter movement, was created by Alicia Garza, Opal Tometi, and Patrisse Cullors. </p>
          <p><a class="btn" href="http://almawashington.com/586/project2/#page4" target="_blank" role="button">View details &raquo;</a></p>
       </div>
        <div class="col-md-4">
          <h2 class="headings-title">The Principles</h2>
          <p>The Black Lives Matter movement has a list of principles by which they guide themselves. </p>
          <p><a class="btn" href="http://almawashington.com/586/project2/#page5" target="_blank" role="button">View details &raquo;</a></p>
        </div>
      </div>

      <hr>

      <footer>
        <p>&copy; 2016 Alma Washington.</p>
      </footer>
    </div> <!-- /container -->

    
 

  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    
    <script src="js/bootstrap.min.js"></script>   
    <script src="js/scripts.js"></script>
    <script src="js/map.js"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAqvJnoRdPpAZpjULU2AaDpC3oX75PXtg&callback=initMap">
    </script>
    
  </body>
</html>