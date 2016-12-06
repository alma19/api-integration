// Built by LucyBot. www.lucybot.com
function getNYTimesSearchData(data){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "46329db47b004e7b972659da297e6ff0",
      'q': "black lives matter"
    });
    
    $.ajax({
      type: "GET",
      dataType: "json",
      cache: false,
      url: url,
      success: parseData
    });
    
} 
    
    
    
         
   function parseData (json){
    
    var html2=""; 
   $.each(json.response.docs, function(i,data){
    
    
    var date = new Date(data.pub_date);
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = days[date.getDay()];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = months[date.getMonth()];
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();
    
    
   
    html2 += '<div class="news">';
    html2 += '<a class="nyt-url" href="' + data.web_url + '" target="_blank">';
    html2 += '<h4 class="nyt-headline">' + data.headline.main + '</h4></a>';

    html2 += '<p class="nyt-byline">'
        
    html2 += '<div class="date">' + data.byline.original + ' | ' + month + ' ' + dayOfMonth + ', ' + year + '</div>'

    //html2 += 'Published: ' + data.pub_date + '</p>';
    html2 += '<p class="list-group-item-text">'
    html2 +=  data.snippet +'</p>';             
    html2 += ' <hr>'
    html2 += ' </div>'
    
    
    
    
   });
  
   
   $("#nytimes-results").append(html2); 
   
    
   }
    
    
    
getNYTimesSearchData();