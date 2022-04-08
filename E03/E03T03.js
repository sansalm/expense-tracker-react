const songs = ['Yesterday', 'One', 'Down Payment Blues', 'Urheiluhullu'];

for(let i = 0; i < songs.length; i++) {
    console.log(`The song name is ${songs[i]}.`);

}

for (const song of songs) {
    console.log(`The name of the song is ${song}`);
}

console.log(songs) 