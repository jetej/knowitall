/* 
 * YHack 2014
 */

var newsArray = new Array("cnn", "bbc", "nyt", "yahoonews", "fox", "googlenews", "none");
var sportsArray = new Array("espn", "yahoosports", "mlb", "nfl", "nba", "nhl", "none");
var marketArray = new Array("cnnmoney", "yahoofinance", "cnbc", "forbes", "marketwatch", "none");

function selected(array) {
    for (var i = 0; i < array.length; i ++) {
        var currentSelection = array[i];
        if (document.getElementById(currentSelection).selected === true) {
            return currentSelection;
        }
    }
    return false;
}

//function tryAgain() {
//    
//}

function getNonNormal() {
    var urls = new Array();
    document.getElementById("genericInputMaster").setAttribute("class", "hidden");
    var nonNormal = document.getElementsByClassName("rssUrl");
    for (var i = 0; i < nonNormal.length; i++) {
        var current = nonNormal[i].value;
        urls.push(current);
    }
    return urls;
}

function save() {
    var news = selected(newsArray);
    var sports = selected(sportsArray);
    var market = selected(marketArray);
    
    var alienValues = getNonNormal();
    var storage = chrome.storage.local;

    storage.set({"news": news});
    storage.set({"sports": sports});
    storage.set({"market": market});
    storage.set({"userLists": alienValues}); 
}

function saveHandler(element) {
    setTimeout(save, 10);
    window.location.replace("home.html");
}

document.addEventListener("DOMContentLoaded", function() {
   document.querySelector('#save').addEventListener('click', saveHandler); 
});