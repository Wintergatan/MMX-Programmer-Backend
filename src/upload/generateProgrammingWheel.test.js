import generateProgrammingWheel from './generateProgrammingWheel';

test('generate empty programming wheel', () => {
  const expectedResult1 = [
    {
      drums: {
        kick: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        snare: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        hihat: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        cymbal: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      bass: {
        E: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        A: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        D: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        G: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      vibraphone: {
        bars: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      }
    },
    {
      drums: {
        kick: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        snare: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        hihat: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        cymbal: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      bass: {
        E: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        A: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        D: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        G: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      vibraphone: {
        bars: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      }
    },
    {
      drums: {
        kick: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        snare: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        hihat: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        cymbal: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      bass: {
        E: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        A: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        D: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        G: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      vibraphone: {
        bars: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      }
    },
    {
      drums: {
        kick: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        snare: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        hihat: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        cymbal: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      bass: {
        E: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        A: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        D: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        },
        G: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      },
      vibraphone: {
        bars: {
          channel1: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          },
          channel2: {
            eights: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            quarters: [
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false],
              [false, false, false, false]
            ],
            thirds: [
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false],
              [false, false, false]
            ]
          }
        }
      }
    }
  ];

  const expectedResult2 = [
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    },
    {
      "drums": {
        "kick": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "snare": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "hihat": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "cymbal": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "bass": {
        "E": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "A": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "D": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        },
        "G": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      },
      "vibraphone": {
        "bars": {
          "channel1": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          },
          "channel2": {
            "eights": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "quarters": [
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ],
              [
                false,
                false,
                false,
                false
              ]
            ],
            "thirds": [
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ],
              [
                false,
                false,
                false
              ]
            ]
          }
        }
      }
    }
  ];

  expect(generateProgrammingWheel(4)).toStrictEqual(expectedResult1);
  expect(generateProgrammingWheel(8)).toStrictEqual(expectedResult2);
});
