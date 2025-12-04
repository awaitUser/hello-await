#!/usr/bin/env node

const { displayProfile, displayMinimal } = require('../src/index');

const args = process.argv.slice(2);
const isMinimal = args.includes('--minimal') || args.includes('--m');

if (isMinimal) {
  displayMinimal();
} else {
  displayProfile();
}
