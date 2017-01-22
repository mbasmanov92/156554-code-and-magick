'use strict';
var ctx, names, times, canvas;
var renderStatistics;

names = ['Вы', 'Юрий', 'Игорь'],

times = [1050.33, 2058.65, 3154.98];

ctx = canvas.getContext('2d');


window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 30, 320, 270);

};

canvas = document.querySelector('canvas');
window.renderStatistics(ctx, names, times);


