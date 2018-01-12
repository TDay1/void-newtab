String.prototype.replaceChars = function(character, replacement){
        var str = this;
        var a;
        var b;
        for(var i=0; i < str.length; i++){
            if(str.charAt(i) == character){
                a = str.substr(0, i) + replacement;
                b = str.substr(i + 1);
                str = a + b;
            }
        }
        return str;
}

function clock() { //js for the clock
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
document.querySelectorAll('.clock')[0].innerHTML = changeclock(hours) + ":" + changeclock(minutes) + ":" + changeclock(seconds);

  function changeclock(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1); //set value here (milliseconds)

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function search(query){
  if (query == "help") {
    window.location =
    "./help.html";
  }
  else if (query == "-help") {
    window.location =
    "./help.html";
  }
  else if (query == "Help") {
    window.location =
    "./help.html";
  }
  else if (query == "-Help") {
    window.location =
    "./help.html";
  }
  else if (query == "-Help") {
    window.location =
    "./help.html";
  }
  else if (query == "about") {
    window.location =
    "./about.html";
  }
  else if (query == "-about") {
    window.location =
    "./about.html";
  }
  else if (query == "About") {
    window.location =
    "./about.html";
  }
  else if (query == "-About") {
    window.location =
    "./about.html";
  }
  else {
    switch(query.substr(0, 2)){
      //Reddit (non search)
        case "/r":
            query = query.substr(2);
            window.location =
            "https://www.reddit.com/r/" +
            query.replaceChars(" ", "+");
            break;

        case "/r/":
            query = query.substr(2);
            window.location =
            "https://www.reddit.com/r/" +
            query.replaceChars(" ", "+");
            break;

        case "r/":
            query = query.substr(2);
            window.location =
            "https://www.reddit.com/r/" +
            query.replaceChars(" ", "+");
            break;
            //end reddit

            //Go to board
        case "-4":
            query = query.substr(3);
            window.location =
            "http://boards.4chan.org/" +
            query.replaceChars("", "+") ;
            break;

            //start searches
            //youtube search
        case "-y":
            query = query.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            query.replaceChars(" ", "+");
            break;

            //Wikipedia search
        case "-w":
            query = query.substr(3);
            window.location =
            "https://en.wikipedia.org/w/index.php?search=" +
            query.replaceChars(" ", "%20");
            break;

            //Reddit search
        case "-r":
            query = query.substr(3);
            window.location =
            "https://www.reddit.com/search?q=" +
            query.replaceChars(" ", "+");
            break;

            //twitter search
        case "-t":
            query = query.substr(3);
            window.location =
            "https://twitter.com/search?q=" +
            query.replaceChars(" ", "%");
            break;

            //Google search
        case "-g":
            query = query.substr(3);
            window.location =
            "https://www.google.com/search?q=" +
            query.replaceChars("", "+") ;
            break;

            //Amazon Search
        case "-a":
            query = query.substr(3);
            window.location =
            "https://www.amazon.com.au/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" +
            query.replaceChars("", "+") ;
            break;

            //DuckDuckGo search
        case "-d":
            query = query.substr(3);
            window.location =
            "https://duckduckgo.com/?q=" +
            query.replaceChars("", "+") ;
            break;

            //end searches

                //Default to google (I'm feelin lucky)
        default:
            window.location="http://www.google.com/search?q=" +
            query.replaceChars("", "+") + "&btnI" ;
    }
  }
}

window.onload = function(){
    // search
    searchinput = document.getElementById("searchbox");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }

    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");

        }
