'use strict';
window.renderStatistics = function (ctx, names, times) {
  var width;
  var height;
  var indentX;
  var indentY;
  var name;
  var i;
  var maxTime;
  var time;
  var randomBlue;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'red';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 200, 40);
  ctx.fillStyle = 'blue';
  ctx.fillText('Список результатов:', 200, 65);

  maxTime = -1;
  for (i = 0; i < times.length; i = i + 1) {
    time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  indentX = 160;
  for (i = 0; i < times.length; i = i + 1) {
    name = names[i];
    time = Math.round(times[i]);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(250, 0, 0, 1)';
    } else {
      randomBlue = ((Math.random() * 5) * 50).toFixed(0);
      ctx.fillStyle = 'rgba(0, 0,' + randomBlue + ', 1)';
    }
    width = 40;
    height = 150 * time / maxTime;
    indentY = 250 - (150 * time / maxTime);
    ctx.fillRect(indentX, indentY, width, height);
    ctx.fillText(time, indentX, indentY - 10);
    ctx.fillText(name, indentX, 270);
    indentX = indentX + 90;
  }
};
