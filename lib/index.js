#!/usr/bin/env node

var fullStar = '★';
var emptyStar = '☆';
var MAX_STARS = 5;
var stars = Math.max(process.argv.slice(2)[0] || 0, 0);
console.log(
    fullStar.repeat(Math.min(MAX_STARS, stars)) +
    emptyStar.repeat(MAX_STARS - stars)
);