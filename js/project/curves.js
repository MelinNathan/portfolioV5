curveSelection1 = document.getElementById('curveSelection1')
curveSelection2 = document.getElementById('curveSelection2')

curveSelection1.addEventListener('change', function () {
    const selection = curveSelection1.value;
    const color = 'blue';
    switch (selection) {
        case 'exponential':
            drawExpo(color);
            break;
        case 'facto':
            drawFacto(color);
            break;
        case 'normale':
            drawNormale(color);
            break;
    }
})

curveSelection2.addEventListener('change', function () {
    const selection = curveSelection2.value;
    const color = 'red';
    switch (selection) {
        case 'exponential':
            drawExpo(color);
            break;
        case 'facto':
            drawFacto(color);
            break;
        case 'normale':
            drawNormale(color);
            break;
    }
})

function drawFacto(color) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();


        ctx.strokeStyle = color;
        x = 0;
        for (y = 0; y <= 100; y++) {

            ctx.lineTo(x, facto(y) * -1 + 600);
            x += 3;

        }
        ctx.stroke();
    }
}

function drawExpo(color) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();


        ctx.strokeStyle = color;
        x = 0;
        for (y = 0; y <= 100; y++) {

            ctx.lineTo(x, Math.exp(y) * -1 + 600);
            // ctx.lineTo(x,Math.tan(y)*5+300); 
            x += 3;

        }
        ctx.stroke();
    }
}


function drawNormale(color) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();


        ctx.strokeStyle = color;
        x = 0;
        for (y = -100; y <= 100; y++) {

            ctx.lineTo(x, normalDistrib(y) * -1000 + 600);
            // ctx.lineTo(x,Math.tan(y)*5+300); 
            console.log(Math.sin(y) * Math.cos(y) * 100)
            x += 3;

        }
        ctx.stroke();
    }
}
