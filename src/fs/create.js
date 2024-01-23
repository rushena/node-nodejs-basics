import path from 'path';
import { createWriteStream } from 'fs';

const create = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'fresh.txt');

  const fileStream = createWriteStream(filePath, {
    flags: 'ax'
  });

  fileStream.on('error', () => {
    throw Error('FS operation failed');
  })

  fileStream.write('I am fresh and young');

  fileStream.end();
};

await create();