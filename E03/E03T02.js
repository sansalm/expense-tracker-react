const musician = {
    name: 'Sting',
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: {
      type: 'bass'
    }
  };


let { name, instrument } = musician;

let { name: nameOfArtist, instrument: instrumentOfArtist } = musician;

let { instrument: { type: instumentTypeOfArtist}} = musician;

let { instrument: { make: instrumentMakeOfArtist = "unknown" }} = musician;


for (let x in musician) {

  console.log(`${x} = ${musician[x]}`);

}