duration = ''

let song = {
    name: 'songbird',

    get [duration]() {
        return this.duration;
    },

    set [duration](value) {
        this.duration = value;
    } 
};


song.duration = '2:15';
console.log(song.duration);
