import {createReadStream} from 'fs';
import stream from 'stream';
import {createHash} from 'crypto';
import path from 'path';

const calculateHash = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'fileToCalculateHashFor.txt');

  const readFile = createReadStream(filePath);
  const transformFile = new stream.Transform({
    transform(chunk, encoding, callback) {
      const res = createHash('sha256').update(chunk.toString()).digest('hex');
      callback(null, res);
    }
  });

  readFile.pipe(transformFile).pipe(process.stdout);
  readFile.on('end', () => {process.stdout.write('\n')});
};

await calculateHash();