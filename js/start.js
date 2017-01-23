'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'red';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 200, 40);
  ctx.fillStyle = 'blue';
  ctx.fillText('Список результатов:', 200, 65);

  var maxTime = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  var x = 160;
  var y = 80;
  var width = 40;
  var height = 150;
  var step = 150/maxTime;
  var indent = 160;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var emptyHeight = (maxTime - time)*step;
    if (name[i] === 'Вы') {
       ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }  else {
        ctx.fillStyle = ['rgba(0, 0, ', ((Math.random()*5)*50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join;
      }
    ctx.fillRect(indent, 80, width, height);

    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(indent, 80, width, emptyHeight);

//    var height = step * time;
//
//    ctx.fillRect(histoX + columnIndent * i, 100, 40, height);
//    ctx.fillStyle = '#000';
//    ctx.fillText(name + ':' + time.toFixed(0), histoX + columnIndent * i, 100 + histoHeight + 20);
    indent = indent + 90;
  }
};




