import stream from 'stream';
const transform = async () => {
  const transformText = new stream.Transform({
    transform(chunk, encoding, callback) {
      const res = chunk.toString().split('').filter((letter) => letter !== '\n').reverse();
      res.push('\n');
      callback(null, res.join(''));
    }
  });

  process.stdin.pipe(transformText).pipe(process.stdout);
};

await transform();