

require("dotenv").config();
var fs = require("fs");
var request = require("request")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var twitter = require('twitter');
var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitter);

var userInput = process.argv[2];
var secondInput = process.argv[3];

// Code for what to do when the user inputs information. Look for the cases, and action if/else conditions. 
// call upon functions in the switch.

switch (userInput){
    // If user asks for tweets, run function that displays tweets.
    case 'my-tweets':   
        myTweets();
        break;
    
    // if user wants to spotify, if undefined, set the song default to "The Sign", otherwise, pull in the secondInput for the song
    case 'spotify-this-song':
        if(secondInput == undefined){
            var song = "The Sign";
            spotifyThisSong(song);
        }
        else
        {
            var song = secondInput;
            spotifyThisSong(song);
        }
        break;
    // If user wants movie info, if undefined, set default movie to "Mr. Nobody"
    case 'movie-this':
        if(secondInput == undefined){
            var movie = "Mr Nobody";
            showMovieInfo(movie);
        }
        else
        {
            var movie = secondInput;
            showMovieInfo(movie);
        }
        break;
    
}
// Function for tweets

// function for songs

// function for movies

// function for do what it says
