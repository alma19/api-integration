//$(document).ready(function(){
//    initMap();
//
//});
            
            //help from https://github.com/megannpainter/final-project/blob/master/js/googlemap.js
            var map;
            var mapCenter = {lat: 41.8781, lng: -87.6298};
            
            var one = {lat: 41.8781, lng: -87.6298}; 
            var three = {lat: 28.8029, lng: -81.2695};
            var four = {lat: 43.0389, lng: -87.9065};
            var five = {lat: 40.5795, lng: -74.1502};
            var six = {lat: 39.7092, lng: -84.0633};
            var seven = {lat: 38.7442, lng: -90.3054};
            var eight = {lat: 34.0522, lng: -118.2437};
            var nine = {lat: 30.3322, lng: -81.6557};
            var ten = {lat: 41.4993, lng: -81.6944};
            var eleven = {lat: 30.10239, lng: -96.07535};
            var twelve = {lat: 36.1540, lng: -95.9928};
            var thirteen = {lat: 32.8546, lng: -79.9748};
            var fourteen = {lat: 30.4583, lng: -91.1403};
            var fifteen = {lat: 44.9916, lng: -93.1663};
            var sixteen = {lat: 39.3673, lng: -76.7953};
            var seventeen = {lat: 35.2271, lng: -80.8431};
           
       
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: mapCenter,
          zoom: 4,
          scrollwheel:false,
          labels: true
          });
        
    //rekia boyd
    var marker = new google.maps.Marker({
          position: one,
          map: map,
          title: 'Rekia Boyd'
        });
        var stringOne =
         "<h1 class='map-title'>Rekia Boyd</h1>"+
            "<img src='http://i.huffpost.com/gen/1482412/images/o-REKIA-facebook.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Rekia Boyd was shot on March 21, 2012 by Dante Servin, a Chicago Police officer, on Chicago's West side</p>" +
            "<p class='map-text col-xs-8'>Servin was charged with involuntary manslaughter, but was acquitted in April 2015, which sparked national protests and outrage. </p>"+
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.chicagotribune.com/news/local/breaking/ct-chicago-cop-dante-servin-resigns-met-20160518-story.html' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
    var infowindow = new google.maps.InfoWindow({
            content: stringOne, 
            position: one,
          });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
    
    
    
    
    //trayon martin 
    var marker3 = new google.maps.Marker({
          position: three,
          map: map,
          title: 'Trayvon Martin'
        });
        var stringThree =
            "<h1 class='map-title'>Trayvon Martin</h1>"+
            "<img src='http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDYwNjczNTQ5.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Though not a case of police brutality, the fatal shooting on Trayvon Martin helped to spark the #BlackLivesMatter movement.  </p>" +
            "<p class='map-text col-xs-8'>Trayvon Martin, 17,was shot and killed on February 26, 2012 in Sanford, Florida by neighborhood watch captain George Zimmerman. Martin was unarmed at the time. </p>"+
            "<p class='map-text col-xs-8'>Martin's murder, Zimmerman's acquittal of second-degree murder, and manslaughter, sparked Alicia Garza to write 'Black people. I love you. I love us. Our lives matter, Black Lives Matter.'  </p>"+
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.cnn.com/2013/06/05/us/trayvon-martin-shooting-fast-facts/' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    var infowindow3 = new google.maps.InfoWindow({
            content: stringThree, 
            position: three,
          });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
        });
    

    //dontre hamilton  
    var marker4 = new google.maps.Marker({
          position: four,
          map: map,
          title: 'Dontre Hamilton'
        });
        var stringFour =
            "<h1 class='map-title'>Dontre Hamilton</h1>"+
            "<img src='http://www.gannett-cdn.com/-mm-/884df20f8f36905a8d706dd865a4d6786fe69141/c=0-33-430-606&r=537&c=0-0-534-712/local/-/media/2014/12/22/USATODAY/USATODAY/635548451048826855-AP-Police-Crisis-Training.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Dontre Hamilton was shot and killed on April 30, 2014 in Milwaukee, Wisconsin, by police officer Christopher Manney. Manney was reported to have fired at least 13, maybe even 14 times.</p>" +
            "<p class='map-text col-xs-8'>Manney did not face any criminal charges for killing Hamilton. </p>"+
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.nytimes.com/2014/12/23/us/former-milwaukee-police-officer-wont-be-charged-in-death-of-black-man-in-park.html' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    var infowindow4 = new google.maps.InfoWindow({
            content: stringFour, 
            position: four,
          });
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
        });
    
    //eric garner  
    var marker5 = new google.maps.Marker({
          position: five,
          map: map,
          title: 'Eric Garner'
        });
        var stringFive =
             "<h1 class='map-title'>Eric Garner</h1>"+
            "<img src='http://assets.nydailynews.com/polopoly_fs/1.2414632.1446052154!/img/httpImage/image.jpg_gen/derivatives/article_750/cigs.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Eric Garner, 43, was selling cigarettes in Staten Island, New York when he was arrested, and put into a chokehold that resulted in his death.</p>" +
            "<p class='map-text col-xs-8'>Garner's death sparked national outrage, causing his repeated phrase of 'I Can't Breathe' to become a rallying cry for protestors across the country. </p>"+
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.nytimes.com/2014/08/02/nyregion/staten-island-man-died-from-officers-chokehold-autopsy-finds.html' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    var infowindow5 = new google.maps.InfoWindow({
            content: stringFive, 
            position: five,
          });
    marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
        });
    
    //john crawford   
    var marker6 = new google.maps.Marker({
          position: six,
          map: map,
          title: 'John Crawford III'
        });
        var stringSix =
            "<h1 class='map-title'>John Crawford III</h1>"+
            "<img src='http://www.theroot.com/wp-content/uploads/2015/08/johncrawford.jpg?quality=90&strip=all' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>John Crawford III, 22, was shot and killed on August 5, 2014 by two police officers in a Walmart in Beavercrek, Ohio.</p>" +
            "<p class='map-text col-xs-8'>Police had responded to a 911 regarding Crawford and a gun. The gun in question was a BB gun. There were no indictments for the officers. </p>"+
            "<div class='col-xs-4'></div>"+
            "<a href='https://www.washingtonpost.com/news/post-nation/wp/2014/09/25/ohio-wal-mart-surveillance-video-shows-police-shooting-and-killing-john-crawford-iii/?utm_term=.f02f109866ef' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    var infowindow6 = new google.maps.InfoWindow({
            content: stringSix, 
            position: six,
          });
    marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
        });
    
     //michael brown   
    var marker7 = new google.maps.Marker({
          position: seven,
          map: map,
          title: 'Michael Brown'
        });
        var stringSeven =
            "<h1 class='map-title'>Michael Brown</h1>"+
            "<img src='http://cdn1.pri.org/sites/default/files/story/images/140824-michael-brown-4p_e151133bf82ab2e33cf09a4fe0ebb405.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Michael Brown, 18, was unarmed when he was fatally shot by police officer Darren Wilson in Ferguson, Missouri on August 9, 2014. </p>" +
            "<p class='map-text col-xs-8'>Michael Brown's death sparked a wave of outrage and protests across the country. The lack of indictment of Wilson sparked another wave of protests, and led to the Justice Department to demand that Ferguson overhaul and remake its crimina ljustice system. </p>"+
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.nytimes.com/interactive/2014/08/13/us/ferguson-missouri-town-under-siege-after-police-shooting.html' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    var infowindow7 = new google.maps.InfoWindow({
            content: stringSeven, 
            position: seven,
          });
    
    marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
        });

    //ezell ford   
    var marker8 = new google.maps.Marker({
          position: eight,
          map: map,
          title: 'Ezell Ford'
        });
        var stringEight =
            "<h1 class='map-title'>Ezell Ford</h1>"+
            "<img src='http://media.nbclosangeles.com/images/1200*675/12-29-14_Ezell-Ford.JPG' class='map-pic col-xs-4'>" + 
            '<p class="map-text col-xs-8"> Ezell Ford, 25, was shot and killed dead by LAPD officers on August 11, 2014. </p>' +
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.latimes.com/local/lanow/la-me-ezell-ford-shooting-sg-storygallery.html' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
            
    var infowindow8 = new google.maps.InfoWindow({
            content: stringEight, 
            position: eight,
          });
    marker8.addListener('click', function() {
        infowindow8.open(map, marker8);
        });
    
     //akai gurley    
    //var marker9 = new google.maps.Marker({
    //      position: nine,
    //      map: map,
    //      title: 'Jordan Davis'
    //    });
    //    var stringNine =
    //        "<h1 class='map-title'>Jordan Davis</h1>"+
    //        "<img src='https://static01.nyt.com/images/2014/02/03/multimedia/opdoc-davis/opdoc-davis-videoSixteenByNine1050.jpg' class='map-pic col-xs-4'>" + 
    //        "<p class='map-text col-xs-8'>Michael Brown, 18, was unarmed when he was fatally shot by police officer Darren Wilson in Ferguson, Missouri on August 9, 2014. </p>" +
    //        "<p class='map-text col-xs-8'>Michael Brown's death sparked a wave of outrage and protests across the country. The lack of indictment of Wilson sparked another wave of protests, and led to the Justice Department to demand that Ferguson overhaul and remake its crimina ljustice system. </p>"+
    //        "<div class='col-xs-4'></div>"+
    //        "<a href='http://www.nytimes.com/interactive/2014/08/13/us/ferguson-missouri-town-under-siege-after-police-shooting.html' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    //var infowindow9 = new google.maps.InfoWindow({
    //        content: stringNine, 
    //        position: nine,
    //      });
    //marker9.addListener('click', function() {
    //    infowindow9.open(map, marker9);
    //    });
    
    //tamir rice    
    var marker10 = new google.maps.Marker({
          position: ten,
          map: map,
          title: 'Tamir Rice'
        });
        var stringTen =
            "<h1 class='map-title'>Tamir Rice</h1>"+
            "<img src='http://i.dailymail.co.uk/i/pix/2014/11/24/2372CEF800000578-2846889-image-18_1416849811041.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Tamir Rice was 12 years old when he was shot and killed by Cleveland, Ohio police. He was playing in a park with a toy gun that was mistaken for a real one. </p>" +
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.nytimes.com/2015/01/23/us/in-tamir-rice-shooting-in-cleveland-many-errors-by-police-then-a-fatal-one.html' class='map-text col-xs-8' target='_blank'>More Information.</a>"; 
            
    var infowindow10 = new google.maps.InfoWindow({
            content: stringTen, 
            position: ten,
          });
    marker10.addListener('click', function() {
        infowindow10.open(map, marker10);
        });
    
     //antonio martin  
    var marker11 = new google.maps.Marker({
          position: eleven,
          map: map,
          title: 'Sandra Bland'
        });
        var stringEleven =
            "<h1 class='map-title'>Sandra Bland</h1>"+
            "<img src='http://i2.cdn.cnn.com/cnnnext/dam/assets/150721165002-sandra-bland-sister-tapper-intv-lead-00034525-large-169.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>On July 13, 2015 Sandra Bland was found hanged in her jail cell in Waller County, Texas. </p>" +
            "<p class='map-text col-xs-8'>While her death was rulled as a suicide, the events leading up to her arrest, and her alarming appearance in her mug shot caused suspicious around the circumstances of her death. Many believed that Bland had not taken her own life, but had been murdered, and that the suicide claims where nothing more than a coverup by the Waller County police. </p>" + 
            "<div class='col-xs-4'></div>"+
            "<a href='http://highline.huffingtonpost.com/articles/en/sandra-bland-jail-deaths/' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow11 = new google.maps.InfoWindow({
            content: stringEleven, 
            position: eleven,
          });
    marker11.addListener('click', function() {
        infowindow11.open(map, marker11);
        });
    
     //Eric Harris  
    var marker12 = new google.maps.Marker({
          position: twelve,
          map: map,
          title: 'Eric Harris'
        });
        var stringTwelve =
            "<h1 class='map-title'>Eric Harris</h1>"+
            "<img src='http://img.huffingtonpost.com/asset/scalefit_630_noupscale/572398a7160000e40031d247.jpeg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Eric Harris, 44, was unarmed when he was shot and killed by Oklahoma volunteer reserve deputy Robert Bates on April 2, 2015. </p>" +
            "<p class='map-text col-xs-8'> Bates was found guilty of manslaughter, and will serve the maximum of four years in prison.</p>" + 
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.huffingtonpost.com/entry/oklahoma-deputy-who-killed-eric-harris-found-guilty-of-manslaughter_us_57239339e4b0b49df6ab2d4f' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow12 = new google.maps.InfoWindow({
            content: stringTwelve, 
            position: twelve,
          });
    marker12.addListener('click', function() {
        infowindow12.open(map, marker12);
        });
    
    //Walter Scott  
    var marker13 = new google.maps.Marker({
          position: thirteen,
          map: map,
          title: 'Walter Scott'
        });
        var stringThirteen =
            "<h1 class='map-title'>Walter Scott</h1>"+
            "<img src='http://www.workers.org/wp-content/uploads/walter-scott.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Walter Scott, 50, was unarmed when he was shot in the back multiple times by pollice officer Michael Slager. The shooting happened on April 4, 2015, in North Charleston.</p>" +
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.theatlantic.com/politics/archive/2015/04/shot-and-killed-while-running-away/389976/' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow13 = new google.maps.InfoWindow({
            content: stringThirteen, 
            position: thirteen,
          });
    marker13.addListener('click', function() {
        infowindow13.open(map, marker13);
        });
    
    //alton sterling 
    var marker14 = new google.maps.Marker({
          position: fourteen,
          map: map,
          title: 'Alton Sterling'
        });
        var stringFourteen =
            "<h1 class='map-title'>Alton Sterling</h1>"+
            "<img src='http://cdn.thedailybeast.com/content/dailybeast/articles/2016/07/06/alton-sterling-father-of-five-one-more-black-man-shot-down-by-american-police/jcr:content/image.crop.800.500.jpg/48927634.cached.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Alton Sterling, 37, was shot and killed after being pinned to the ground by two white police officers. The shooting happened on July 7, 2016, in Baton Rouge, Louisiana. </p>" +
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.nytimes.com/2016/07/06/us/alton-sterling-baton-rouge-shooting.html' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow14 = new google.maps.InfoWindow({
            content: stringFourteen, 
            position: fourteen,
          });
    marker14.addListener('click', function() {
        infowindow14.open(map, marker14);
        });

        //philandro castle
    var marker15 = new google.maps.Marker({
          position: fifteen,
          map: map, 
          title: 'Philando Castile'
        });
        var stringFifteen =
            "<h1 class='map-title'>Philando Castile</h1>"+
            "<img src='http://assets.nydailynews.com/polopoly_fs/1.2706986.1468241246!/img/httpImage/image.jpg_gen/derivatives/article_750/diamond12n-2-web.jpg' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Philando Castile was fatally shot at a traffice stop on July 5, 2016 in Falcon Heights, Minnesota. His fiancee, Diamond Reynolds, live-streamed the aftermath on the shooting on Facebook, which thrust the situation into national spotlight.  </p>" +
            "<p class='map-text col-xs-8'>Jeronimo Yanez, the officer that shot him, was charged with second-degree manslaughter and two felony counts of dangerous discharge of a firearm.</p>" +
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.cnn.com/2016/11/16/us/officer-charged-philando-castile-killing/' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow15 = new google.maps.InfoWindow({
            content: stringFifteen, 
            position: fifteen,
          });
    marker15.addListener('click', function() {
        infowindow15.open(map, marker15);
        });
    
     //korryn gaines 
    var marker16 = new google.maps.Marker({
          position: sixteen,
          map: map,
          title: 'Korryn Gaines'
        });
        var stringSixteen =
            "<h1 class='map-title'>Philando Castile</h1>"+
            "<img src='https://heavyeditorial.files.wordpress.com/2016/08/korryn-gaines-4-e1470106504958.jpg?quality=65&strip=all&strip=all' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Korryn Gaines, 23, was fatally shot on August 1, 2016 in Baltimore County, Maryland. </p>" +
            "<p class='map-text col-xs-8'>Gaines was holding her 1-year-old child when the police entered her home. Both Gaines and her son were killed. </p>" +
            "<div class='col-xs-4'></div>"+
            "<a href='https://www.washingtonpost.com/news/post-nation/wp/2016/08/02/korryn-gaines-is-the-ninth-black-woman-shot-and-killed-by-police-this-year/?utm_term=.919393e54281' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow16 = new google.maps.InfoWindow({
            content: stringSixteen, 
            position: sixteen,
          });
    marker16.addListener('click', function() {
        infowindow16.open(map, marker16);
        });
    
     //keith scott 
    var marker17 = new google.maps.Marker({
          position: seventeen,
          map: map,
          title: 'Keith Scott'
        });
        var stringSeventeen =
            "<h1 class='map-title'>Keith Scott</h1>"+
            "<img src='https://heavyeditorial.files.wordpress.com/2016/09/cs2y-aoukaa5sgg-e1474438146121.jpg?quality=65&strip=all&strip=all' class='map-pic col-xs-4'>" + 
            "<p class='map-text col-xs-8'>Keith Lamont Scott, 43, was shot and killed by Officer Brentley Vinson on September 20, 2016 in Charlotte, North Carolina.  </p>" +
            "<p class='map-text col-xs-8'>Scott was shot in the parking lot of his apartment complex.Scott's wife shared a video she had taken of the incident, which led to the case getting state-wide, and national attention.</p>" +
            "<div class='col-xs-4'></div>"+
            "<a href='http://www.nbcnews.com/news/us-news/no-charges-killing-keith-lamont-scott-whose-police-encounter-was-n690126' class='map-text col-xs-8' target='_blank'>More Information.</a>";
            
    var infowindow17 = new google.maps.InfoWindow({
            content: stringSeventeen, 
            position: seventeen,
          });
    marker17.addListener('click', function() {
        infowindow17.open(map, marker17);
        });
    
    }