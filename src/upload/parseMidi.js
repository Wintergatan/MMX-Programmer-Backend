import { Midi } from '@tonejs/midi';
import generateProgrammingWheel from './generateProgrammingWheel';

const instruments = {
  drums: {
    12: 'kick',
    24: 'snare',
    36: 'hihat',
    48: 'cymbal'
  },
  bass: {
    4: 'E',
    5: 'E',
    6: 'E',
    7: 'E',
    8: 'E',
    9: 'E',
    10: 'E',
    11: 'E',
    12: 'E',
    13: 'E',
    14: 'E',
    15: 'E',
    16: 'E',
    17: 'E',
    18: 'E',
    19: 'E',
    20: 'E',
    21: 'E',
    22: 'E',
    23: 'E',
    24: 'E',
    25: 'E',
    33: 'A',
    34: 'A',
    35: 'A',
    36: 'A',
    37: 'A',
    38: 'A',
    39: 'A',
    40: 'A',
    41: 'A',
    42: 'A',
    43: 'A',
    44: 'A',
    45: 'A',
    46: 'A',
    47: 'A',
    48: 'A',
    49: 'A',
    50: 'A',
    51: 'A',
    52: 'A',
    53: 'A',
    54: 'A',
    55: 'A',
    56: 'A',
    62: 'D',
    63: 'D',
    64: 'D',
    65: 'D',
    66: 'D',
    67: 'D',
    68: 'D',
    69: 'D',
    70: 'D',
    71: 'D',
    72: 'D',
    73: 'D',
    74: 'D',
    75: 'D',
    76: 'D',
    77: 'D',
    78: 'D',
    79: 'D',
    80: 'D',
    81: 'D',
    82: 'D',
    83: 'D',
    91: 'G',
    92: 'G',
    93: 'G',
    94: 'G',
    95: 'G',
    96: 'G',
    97: 'G',
    98: 'G',
    99: 'G',
    100: 'G',
    101: 'G',
    102: 'G',
    103: 'G',
    104: 'G',
    105: 'G',
    106: 'G',
    107: 'G',
    108: 'G',
    109: 'G',
    110: 'G',
    111: 'G',
    112: 'G'
  },
  vibraphone: {
    35: 'bars',
    36: 'bars',
    38: 'bars',
    40: 'bars',
    42: 'bars',
    43: 'bars',
    45: 'bars',
    47: 'bars',
    48: 'bars',
    50: 'bars',
    52: 'bars'
  }
};

export default function parseMidi(midiFile) {
  const midi = new Midi(midiFile);

  const programmingWheel = generateProgrammingWheel(8);

  const previousPushedNotes = {
    drums: {
      kick: 0,
      snare: 0,
      hihat: 0,
      cymbal: 0
    },
    bass: {
      E: 0,
      A: 0,
      D: 0,
      G: 0
    },
    vibraphone: {
      bars: 0
    }
  };

  function pushNote(keys, instrument, note) {
    const subInstrument = instruments[instrument][note.midi];
    const manual1Treshold = 0.3858267716535433;
    const alternatingTreshold = 0.7795275590551181;

    // between 0 and 63
    const time = note.time / 2;

    // let channel;
    // if (note.velocity > 0 && note.velocity < manual1Treshold) {
    //   // manual 1
    //   channel = 0;
    // } else if (note.velocity < alternatingTreshold) {
    //   // manual 2
    //   channel = 1;
    // } else {
    //   const previousChannel = previousPushedNotes[instrument][subInstrument];
    //   if (previousChannel === 0) {
    //     channel = 1;
    //   } else {
    //     channel = 0;
    //   }
    //   previousPushedNotes[instrument][subInstrument] = channel;
    // }

    // result[instrument][subInstrument][channel].push({
    //   midi: note.midi,
    //   name: note.name,
    //   time: note.time / 2
    // });
  }

  midi.tracks[0].notes.forEach(note => {
    const { midi: noteMidi } = note;
    const drumKeys = Object.keys(instruments.drums).map(x => parseInt(x, 10));
    const bassKeys = Object.keys(instruments.bass).map(x => parseInt(x, 10));
    const vibraphoneKeys = Object.keys(instruments.vibraphone).map(x => parseInt(x, 10));
    if (drumKeys.includes(noteMidi)) {
      // is drums note
      pushNote(drumKeys, 'drums', note);
    } else if (bassKeys.includes(noteMidi)) {
      // is bass guitar note
      pushNote(bassKeys, 'bass', note);
    } else if (vibraphoneKeys.includes(noteMidi)) {
      // is vibraphone note
      pushNote(vibraphoneKeys, 'vibraphone', note);
    } else {
      // not a note we can use, note assigned
    }
  });
  return programmingWheel;
}
