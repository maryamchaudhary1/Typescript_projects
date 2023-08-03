export {}
function make_album (artist : string, title : string) {
    let album = {
        artist_name : artist,
        album_title: title,
    }
    return album;
}
let first_album = make_album('Taylor Swift','Midnights');
let second_album = make_album('Justin Bieber', 'Justice');
console.log('first album',first_album);
console.log('second album', second_album);

function make_album_with_track(artist : string,title : string,track? : number){
    if (track = undefined) {
        let album = {
            artist_name : artist,
            album_title : title,
            album_track : track,
        }
        return album;
    }
    else {
        let album = {
            artist_name : artist,
            album_title : title
        }
        return album;
    }
}

let album1 = make_album_with_track ("Atif Aslam","Aadat");
let album2 = make_album_with_track ('Ali Azmat','Junoon');
let album3 = make_album_with_track ('Ali','Pak',9);

console.log(album1);
console.log(album2);
console.log(album3);