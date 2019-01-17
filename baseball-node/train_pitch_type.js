const tf = require('@tensorflow/tfjs-node');
const pitch_model = require('./pitch_type');

async function run() {
  // TODO - add test/eval metrics!
  pitch_model.model.summary();
  await pitch_model.model.fitDataset(pitch_model.trainingData, {
    epochs: 2,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log(epoch, logs.loss);
      }
    }
  });

  pitch_model.evaluate(false);
}

run();
