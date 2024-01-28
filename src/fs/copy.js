import {readdir, mkdir} from 'fs/promises';
import {createReadStream, createWriteStream} from 'fs';
import path from 'path';

const copy = async () => {
  const folderPath = path.dirname(process.argv[1]);

  const currentFolderPath = path.join(folderPath, 'files');
  const newFolderPath = path.join(folderPath, 'files_copy');

  mkdir(newFolderPath, {
    flags: 'ax'
  }).then(() => {
    return readdir(currentFolderPath, {
      flags: 'r'
    });
  }).then((fileList) => {
    fileList.forEach((filename) => {
      const readFile = createReadStream(path.join(currentFolderPath, filename));
      const writeFile = createWriteStream(path.join(newFolderPath, filename));

      readFile.pipe(writeFile);
    })
  }).catch(() => {
    throw Error('FS operation failed');
  });
};

await copy();
