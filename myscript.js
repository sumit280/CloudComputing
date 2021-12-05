
function f1(){
    var name = document.getElementById("moviename").value;
    if(name=="")
    {
        document.getElementById("img1").style.display = "none";
        document.getElementById("page").style.color = "red";
        document.getElementById("page").style.fontSize = "160%";
        document.getElementById("page").innerHTML = "Enter the movie name first."
    }
    else
    {
        var key1 = "ee3f7e5c";
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        url = "https://www.omdbapi.com/?apikey="+ key1 + "&t=" + name ;
        xhttp.open("GET", url);
        xhttp.send();
        xhttp.onload = function(){
            if(xhttp.response["Response"]=="False")
            {
                document.getElementById("img1").style.display = "none";
                document.getElementById("page").style.fontSize = "200%";
                document.getElementById("page").style.color = "red";
                document.getElementById("page").innerHTML = "Please enter the correct name."
            }
            else
            {
            document.getElementById("img1").src = xhttp.response["Poster"];
            document.getElementById("img1").style.display = "inline";
            document.getElementById("page").style.color = "grey";
            document.getElementById("page").style.fontSize = "90%";
            document.getElementById("page").style.marginLeft = "5%";
            document.getElementById("page").innerHTML =   "Title: " +  xhttp.response["Title"]              + "<br>" + "Year: " + xhttp.response["Year"] +
            "<br>" + "Genre: " + xhttp.response["Genre"] + "<br>" + "Director: " +             xhttp.response["Director"] + "<br>" +
            "Actors: " + xhttp.response["Actors"] + "<br>" + "Plot: " + xhttp.response["Plot"] +                "<br>" + "ImdbRating: " +
            xhttp.response["imdbRating"];
            }
        };
    }
}


