window.renderStatistics = function (ctx, names, times) {
  'use strict';
  var width, height, indentX, indentY, name, i, timesInt, maxTime, time;
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

  timesInt = [];
  for (i = 0; i < times.length; i = i + 1) {
    timesInt[i] = Math.round(times[i] / 1000);
  }

  maxTime = -1;
  for (i = 0; i < timesInt.length; i = i + 1) {
    time = timesInt[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  indentX = 160;
  for (i = 0; i < timesInt.length; i = i + 1) {
    name = names[i];
    time = timesInt[i];
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(250, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0, ', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join;
    }
    width = 40;
    height = 150 * time / maxTime;
    indentY = 230 - (150 * time / maxTime);
    ctx.fillRect(indentX, indentY, width, height);
    indentX = indentX + 90;
  }
};
