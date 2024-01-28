import path from 'path';
import {rename as renameFile, readFile} from 'fs/promises';

const rename = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const filePath = path.join(folderPath, 'files', 'wrongFilename.txt');
  const newFilePath = path.join(folderPath, 'files', 'properFilename.md');

  readFile(newFilePath, {
    flag: 'ax+'
  }).then(() => {
    renameFile(filePath, newFilePath);
  }).catch(() => {
    throw Error('FS operation failed');
  })
};

await rename();