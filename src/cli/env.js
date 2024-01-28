const parseEnv = () => {
  const keys = Object.keys(process.env).filter((key) => {
    return key.startsWith('RSS_');
  }).map((key) => {
    return `${key}=${process.env[key]}`
  });

  console.log(keys.join('; '));
};

parseEnv();