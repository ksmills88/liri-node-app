# liri-node-app

LIRI is a command line node app that takes in parameters and gives you back data. 

There are currently 4 commands that LIRI recognizes:

my-tweets: 

When called, my last 2 tweets will display with their timestamps.
Future enhancements include assigning the handles to a variable so that they could change on command line input.

spotify-this-song:

When called, this will default to a pre-assigned song and display information about the song, artist, album, and where to go to listen to a preview. We are pulling this information from the spotify-node-api.
When called, and then followed with a song name in format: spotify-this-song "(song name)" , the information for that song name will display.

movie-this:

When called, this will default to a pre-assigned movie and display information about the movie from IMDB's API.
When called, and then followed with a movie name in format: movie-this "(movie name)" , the information for that movie will display.

do-what-it-says:

When called, LIRI will take the text inside of a text file and use it to call on one of the 3 previous commands using the fs Node package to read the text file. 
