const path = require('path');
const concurrently = require('concurrently');
const examples = require('../examples.json');

const command = {
  clean: 'shx rm -rf build dist',
  install: 'npm i --force',
  build: 'npm run build',
}[process.env.CMD]

const allExamples = [...examples.onChain, ...examples.offChain];

const cmds = allExamples.map(example => ({
  command,
  cwd: path.resolve(__dirname, '..', example)
}))

concurrently(
  cmds,
  {
    killOthers: ['failure'],
    maxProcesses: 5,
  }
);
