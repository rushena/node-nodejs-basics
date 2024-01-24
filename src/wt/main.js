import {Worker} from 'worker_threads';
import {availableParallelism} from 'os';
import path from 'path';

const cpusLength = availableParallelism();

const performCalculations = async () => {

  const startNumber = 10;
  const folderPath = path.dirname(process.argv[1]);
  const workerFilePath = path.join(folderPath, 'worker.js');

  let nullsArray = (new Array(cpusLength)).fill(null);

  Promise.all(nullsArray.map((_, k) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerFilePath, {
        workerData: startNumber + k
      });

      worker.on('message', data => {
        resolve({
          status: 'resolved',
          data: data
        })
      })

      worker.on('error', data => {
        resolve({
          status: 'error',
          data: null
        })
      })
    })
  })).then(data => {
    console.log(data);
  });
};

await performCalculations();