import path from 'path';
import {unlink} from 'fs/promises';

const remove = async () => {
  const folderPath = path.dirname(process.argv[1]);
  const currentFolderPath = path.join(folderPath, 'files', 'fileToRemove.txt');

  const deleteFile = unlink(currentFolderPath);
  deleteFile.catch(() => {
    throw Error('FS operation failed');
  })
};

await remove();