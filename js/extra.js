$.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      displaySearchData(result); 
    }).fail(function(err) {
      throw err;
    });



function displaySearchData(data){
    
    
    var docs = data.response.docs;
    var html2 = "";
    $.each(docs, function(i,data){
        
        //console.log(data.headline.main);
        
        html2 += '<a class="nyt-url" href="' + data.web_url + '" target="_blank">';
        html2 += '<h4 class="nyt-headline">' + data.headline.main + '</h4></a>';

        html2 += '<p class="nyt-byline">'
        
        if (data.byline) {
            html2 += data.byline.original  + " | ";
        }

        html2 += 'Published: ' + data.pub_date + '</p>';
        html2 += '<p class="list-group-item-text">'
        html2 +=  data.snippet +'</p>';             
        html2 += ' <hr>'
        
        
    });
    
    //after loop code
    $("#nytimes-results").append(html2);
    
 
    } //displaySearchData