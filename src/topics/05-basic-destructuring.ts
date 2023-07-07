interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Mess",
    details: {
        author: "Ed sheran",
        year: 2015
    }
}
console.log(audioPlayer);

//destructuring from object
// const { audioVolume, songDuration, song, details } = audioPlayer;


// destructuring to array
const [, , trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

console.table(trunks || 'There is no "Trunks"');


export { };