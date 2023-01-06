const path = require('path');
const concurrently = require('concurrently');
const exampleConfig = require('../examples.json');

const COMMANDS = {
  clean: 'shx rm -rf build dist',
  install: 'npm i --force',
  build: 'npm run build',
  start: 'npm start',
  link: 'npm link ../../token-negotiator',
  unlink: 'npm unlink ../../token-negotiator'
};
const GROUPS = ['onChain', 'offChain'];

cmdArg = process.env.CMD;
if (!COMMANDS[cmdArg]) {
  console.log(`Wrong cmd argument: ${cmdArg}`)
  process.exit(1);
}

groupArg = process.env.GROUP;
if (groupArg && !GROUPS.includes(groupArg)) {
  console.log(`Wrong group argument: ${groupArg}`)
  process.exit(1);
}

examplesArg = process.env.EXAMPLES

const command = COMMANDS[cmdArg];

let examples;
if (examplesArg) {
  examples = examplesArg.split(',');
} else if (groupArg) {
  examples = exampleConfig[groupArg];
} else {
  examples = [...exampleConfig.onChain, ...exampleConfig.offChain];
}

const cmds = examples.map(example => ({
  command,
  cwd: path.resolve(__dirname, '..', example)
}))

// npm link in parallel will cause run condition
// set it to `1` will make the link command run sequentially
// otherwise, it will run all the commands in parallel
const maxProcesses = cmdArg === 'link' ? 1 : undefined;

concurrently(
  cmds,
  {
    killOthers: ['failure'],
    maxProcesses,
  }
);
