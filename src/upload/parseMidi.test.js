import fs from 'fs';
import parseMidi from './parseMidi';

test('parse midi file to common json format', () => {
  const midiData = fs.readFileSync('velocity.mid');
  const expectedResult = {
    drums: {
      kick: [[], []],
      snare: [[], []],
      hihat: [[], []],
      cymbal: [[], []]
    },
    bass: {
      E: [[], []],
      A: [[], []],
      D: [
        [
          {
            midi: 68,
            name: 'G#4',
            time: 0
          },
          {
            midi: 68,
            name: 'G#4',
            time: 0.5
          },
          {
            midi: 68,
            name: 'G#4',
            time: 2.5
          }
        ],
        [
          {
            midi: 68,
            name: 'G#4',
            time: 1
          },
          {
            midi: 68,
            name: 'G#4',
            time: 1.5
          },
          {
            midi: 68,
            name: 'G#4',
            time: 2
          },
          {
            midi: 68,
            name: 'G#4',
            time: 3
          }
        ]
      ],
      G: [[], []]
    },
    vibraphone: {
      bars: [[], []]
    }
  };
  expect(parseMidi(midiData)).toStrictEqual(expectedResult);
});
