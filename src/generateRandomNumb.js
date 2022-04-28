#!/usr/bin/env node

/* eslint-disable import/extensions */

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

export default getRandomInt;
