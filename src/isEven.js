#!/usr/bin/env node

/* eslint-disable import/extensions */

const getEven = (number) => number % 2 === 0;

const isEven = (n) => (getEven(n) ? 'yes' : 'no');

export default isEven;
