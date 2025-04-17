import * as math from 'math.js' ;

const ctx = document.getElementById('canvas');
console.log(math.facto(5))
function curve(data){
    new Chart(ctx,{
        type: type,

    })
}
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// function draw() {
//     offsetX = 25;
//     offsetY = 25;
//     const canvas = document.getElementById("canvas");
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//         ctx.beginPath();
        

//         ctx.strokeStyle = "blue";
//         x=0;
//         for (y = 50; y <= 100; y++) {
              
//                 ctx.lineTo(x, y); 
//                 x++;
            
//         }
//         ctx.stroke();
//     }
// }


// draw()

