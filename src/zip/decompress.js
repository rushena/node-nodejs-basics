import { createUnzip } from 'zlib';
import {createWriteStream, createReadStream} from 'fs';
import path from 'path';

const decompress = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'fileToCompress.txt');
  const zipFile = path.join(folderPath, 'files', 'archive.gz');

  const unZipFile = createUnzip(zipFile);
  const readZip = createReadStream(zipFile);
  const writeNewFile = createWriteStream(filePath);

  readZip.pipe(unZipFile).pipe(writeNewFile);
};

await decompress();