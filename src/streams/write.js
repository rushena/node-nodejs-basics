import {createWriteStream} from 'fs';
import path from 'path';

const write = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(filePath);
  process.stdin.pipe(writeStream);
};

await write();