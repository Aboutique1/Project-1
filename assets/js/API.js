

function testInput(){
    console.log("Keyword Search: "+keywordSearch)
}

$(document).ready(function(){
  
    var keywordSearch = $("#what").val()        

    
    function testInput(){
        console.log("Keyword Search: "+keywordSearch)
    }
   

    
    

    $("#advance").click(function(){

        

            var city = $("#where").val();
            console.log(city)
            var address = city;
            console.log(address);
      
            var jsonLtdLng = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address+"&key="+"AIzaSyC_XDDgdCA0ExFOpyC45djsNLP8biagwGM";
      
            //&key=AIzaSyDlgwjxfDcrU37NOMHv5wjycuXEIs_LqHg

            function addMarker(lat,long, name){

                $('#map').gmap3({
                    action: 'destroy'
                });
            
                var container = $('#map').parent();
                $('#map').remove();
                container.append('<div id="map"></div>');
                
                $('#map').fadeIn("slow").gmap3({
                    center:[lat,long],
                    zoom:4,
                    mapTypeId: "shadeOfGrey", // to select it directly
                  mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                  }
                  }).styledmaptype(
                      "shadeOfGrey",
                      [
                        {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
                        {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
                        {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
                        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
                        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
                        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
                        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
                        {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
                        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
                        {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
                        {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
                      ],
                      {name: "Showing Results for "+name}
                    )
                  .marker([
                    {position:[lat,long]},
                    {icon: 'https://maps.google.com/mapfiles/marker_green.png'}
                ])
                  
            }
      
            $.getJSON(jsonLtdLng, function (data) {
                var lat_long = []

                console.log("Map Data: ",data.results[0]);
                console.log("Longitude: ",data.results[0].geometry.location.lng)
                lat_long[0] = data.results[0].geometry.location.lat;
                lat_long[1] = data.results[0].geometry.location.lng
                var nameOfPlace = data.results[0].address_components[0].long_name
               

                addMarker(lat_long[0],lat_long[1], nameOfPlace )

                $('#map').fadeIn("slow").gmap3({
                    center:[lat_long[0],lat_long[1]],
                    zoom:4,
                    mapTypeId: "shadeOfGrey", // to select it directly
                  mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                  }
                  }).styledmaptype(
                      "shadeOfGrey",
                      [
                        {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
                        {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
                        {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
                        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
                        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
                        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
                        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
                        {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
                        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
                        {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
                        {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
                      ],
                      {name: "Showing Results for "+data.results[0].address_components[0].long_name}
                    )
                  .marker([
                    {position:[lat_long[0],lat_long[1]]},
                    {icon: "https://maps.google.com/mapfiles/marker_grey.png"}
                  ])
                  

               

    

            });
    


      
    

        $("#inputs").animate({top: "20px", right:"290px"}, 800);
        $(".form-control").animate({width: "324px", height:"46px"}, 800);
        $(".sJaLogo").animate({width: "200px", height:"70px"}, 800);
        $(".googleIcon").animate({left: "80%", top:"-38px", width:"10px"}, 800);
        $(".searchIcon").animate({left: "82%", top:"-38px", width:"14px" }, 800);
        $("#advance").animate({right:"50px",top:"-7px"}, 800);
      setTimeout(function(){
        $('#dtBasicExample').fadeIn(4100, function(){
            console.log('Table Fading In')
        })
      }, 100)  
     


        $('.backgroundImage').fadeOut("slow", function(){
            console.log('Background Fade Out')
        })
        console.log('Clicked')
        testInput()
           
var keywordSearch = $("#what").val()     
var keywordLocation = $("#where").val()        

var url = "https://us.jooble.org/api/";
//"865766bc-4b97-4d89-ab0d-804949ff6e6d"."865766bc-4b97-4d89-ab0d-804949ff6e6d" backup key
var key = "a238c5e5-9519-4ad0-a1b0-fe94306b62d7";
var params = "{ keywords:"+ "'" + keywordSearch +"'"+",location:"+ "'" + keywordLocation + "'"+"}"





$('#tableBody').empty()

    //create xmlHttpRequest object
    var http = new XMLHttpRequest();
    //open connection. true - asynchronous, false - synchronous
    http.responseType = 'json'
    http.open("POST", url + key, true);
    
    //Send the proper header information
    http.setRequestHeader("Content-type", "application/json");
        
    //Callback when the state changes
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.response.jobs);
            var response = http.response.jobs

            for(var i = 0; i<http.response.jobs.length;i++){
                console.log(``)
                $('#tableBody').append(
                    `<tr>\
                    <td>${http.response.jobs[i].title}</td>\
                    <td>${http.response.jobs[i].company}</td>\
                    <td>${http.response.jobs[i].location}</td>\
                    <td>${http.response.jobs[i].salary}</td>\
                    <td>${http.response.jobs[i].source}</td>\
                    <td>${http.response.jobs[i].type}</td>\
                  </tr>\
                    `
                )
            }
        }
    }
    //Send request to the server
    console.log("Params: "+params)

        http.send(params);

        setTimeout(function(){
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
            console.log("Table Activated")
        }, 100)
       
     });


    $('#brandLogo').click(function(){
        location.reload()
        console.log("Clicked")
    })

    var whatInput = document.getElementById("what");

// Execute a function when the user releases a key on the keyboard
whatInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("advance").click();
  }
});

var whereInput = document.getElementById("where");

// Execute a function when the user releases a key on the keyboard
whereInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("advance").click();
  }
});


});



