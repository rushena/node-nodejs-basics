import path from 'path';
import {createReadStream} from 'fs';

const read = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const currentFilePath = path.join(folderPath, 'files', 'fileToRead.txt');

  let res = '';

  const readFile = createReadStream(currentFilePath, 'utf8');
  readFile.on('data', (chunk) => {
    res += chunk.toString();
  })

  readFile.on('end', () => {
    console.log(res);
  });

  readFile.on('error', () => {
    throw Error('FS operation failed');
  });
};

await read();