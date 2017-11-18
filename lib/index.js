#!/usr/bin/env node

var _ = require('lodash');

var fullStar = '★';
var emptyStar = '☆';
var MAX_STARS = 5;
var stars = process.argv.slice(2)[0] || 0;
stars = stars > MAX_STARS ? MAX_STARS : stars;
var rating = '';
_.range(stars).forEach(function () {
    rating += fullStar;
});
_.range(MAX_STARS - stars).forEach(function () {
    rating += emptyStar;
});

console.log(rating);