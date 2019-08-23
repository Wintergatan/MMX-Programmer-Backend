import cloneDeep from 'lodash.clonedeep';

function initChannel(barsPerPlate) {
  // Number of total bars
  return {
    eights: Array(barsPerPlate).fill([false, false, false, false]),
    quarters: Array(barsPerPlate).fill([false, false, false, false]),
    thirds: Array(barsPerPlate).fill([false, false, false])
  };
}

export default function generateProgrammingWheel(numberOfPlates) {
  const barsPerPlate = 64 / numberOfPlates;
  const programmingPlate = {
    drums: {
      kick: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      },
      snare: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      },
      hihat: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      },
      cymbal: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      }
    },
    bass: {
      E: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      },
      A: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      },
      D: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      },
      G: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      }
    },
    vibraphone: {
      bars: {
        channel1: initChannel(barsPerPlate),
        channel2: initChannel(barsPerPlate)
      }
    }
  };
  const result = [];
  for (let index = 0; index < numberOfPlates; index += 1) {
    result.push(cloneDeep(programmingPlate));
  }
  return result;
}
