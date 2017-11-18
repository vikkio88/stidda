#!/usr/bin/env node

var fullStar = '★';
var emptyStar = '☆';
var MAX_STARS = 5;
var stars = Math.max(process.argv.slice(2)[0] || 0, 0);
var rating = '';

stars = Math.min(MAX_STARS, stars);
rating += fullStar.repeat(stars);
rating += emptyStar.repeat(MAX_STARS - stars);

console.log(rating);
