import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  const folderPath = path.dirname(process.argv[1]);
  const cpFilePath = path.join(folderPath, 'files', 'script.js');

  const cp = spawn('node', [cpFilePath, ...args]);

  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

spawnChildProcess(['1', 2]);
