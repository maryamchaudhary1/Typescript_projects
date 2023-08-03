"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title) {
    var album = {
        artist_name: artist,
        album_title: title,
    };
    return album;
}
var first_album = make_album('Taylor Swift', 'Midnights');
var second_album = make_album('Justin Bieber', 'Justice');
console.log('first album', first_album);
console.log('second album', second_album);
function make_album_with_track(artist, title, track) {
    if (track = undefined) {
        var album = {
            artist_name: artist,
            album_title: title,
            album_track: track,
        };
        return album;
    }
    else {
        var album = {
            artist_name: artist,
            album_title: title
        };
        return album;
    }
}
var album1 = make_album_with_track("Atif Aslam", "Aadat");
var album2 = make_album_with_track('Ali Azmat', 'Junoon');
var album3 = make_album_with_track('Ali', 'Pak', 9);
console.log(album1);
console.log(album2);
console.log(album3);
