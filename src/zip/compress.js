import {createGzip} from 'zlib';
import {createWriteStream, createReadStream} from 'fs';
import path from 'path';

const compress = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'fileToCompress.txt');
  const zipFile = path.join(folderPath, 'files', 'archive.gz')

  const fileRead = createReadStream(filePath);
  const writeZip = createWriteStream(zipFile);
  const gzip = createGzip();

  fileRead.pipe(gzip).pipe(writeZip);
};

await compress();