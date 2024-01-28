import path from 'path';
import {readdir} from 'fs/promises';

const list = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const currentFolderPath = path.join(folderPath, 'files');

  readdir(currentFolderPath, {
    flags: 'r'
  }).then((filenames) => {
    console.log(filenames);
  }).catch(() => {
    throw Error('FS operation failed');
  });
};

await list();