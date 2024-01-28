const parseArgs = () => {
  const argsList = process.argv.slice(2);
  const argsKeys = argsList.filter((_, key) => key % 2 === 0);
  const argsValues = argsList.filter((_, key) => key % 2 === 1);

  const res = argsKeys.map((value, key) => `${value.replace('--', '')} is ${argsValues[key]}`).join(', ');

  console.log(res);
};

parseArgs();