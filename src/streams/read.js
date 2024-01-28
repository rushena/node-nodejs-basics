import path from 'path';
import {createReadStream} from 'fs';

const read = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'fileToRead.txt');

  const readFile = createReadStream(filePath);

  readFile.pipe(process.stdout);

  readFile.on('end', () => {process.stdout.write('\n')});
};

await read();