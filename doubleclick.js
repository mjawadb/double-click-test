const click = document.getElementsByClassName('click-sec')[0]; 
const clickCounter = document.querySelector('.click-count .counter');
const doubleClickCounter = document.querySelector('.dblclick-count .counter');

function counterAnimation(counter, count) {
    counter.innerHTML = count++;
    counter.style.display = 'inherit';
    counter.style.animation = 'fadeIn .1s forwards';
    setTimeout(() => {
        counter.style.fontSize = '4em';
    }, 100);
}



// var prevClickMicrotime = microtime(true);
// function microtime(get_as_float) {
//   var now = new Date()
//     .getTime() / 1000;
//   var s = parseInt(now, 10);

// //   console.log((Math.round((now - s))));
// //   console.log((Math.round((now - s) * 1000) / 1000) + ' ' + s);
//   return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
// }


// // let a = new Date().getTime() / 1000;
// // let s = parseInt(a, 10);
// // console.log(new Date().getTime());
// // console.log(a);
// // console.log(s);



// var prevClickMicrotime = microtime(true);

// let i = 1;
// let j = 1;
// function clickEvent() {
//     let clickTime = microtime(true);
//     let diff = clickTime - prevClickMicrotime;
//     console.log(diff);
//     if(diff <= 0.08) {
//         counterAnimation(doubleClickCounter, j);
//         doubleClickCounter.innerHTML = j++;
//     }
//     prevClickMicrotime = clickTime;
//     counterAnimation(clickCounter, i);
//     clickCounter.innerHTML = i++;
// }

// click.addEventListener('click', function() {
//     clickEvent();
// });


var prevClick = getTime(true) 
function getTime(condition) {
    let sekarang = new Date().getTime() / 1000;
    let calc = parseInt(sekarang, 10);

    return (condition) ? sekarang : (Math.round((sekarang - calc) * 1000) / 1000) + ' ' + calc;
}

var prevClick = getTime(true);

let i = 1;
let j = 1;
function diClick() {
    let newClick = getTime(true);
    let perbedaanWaktu = newClick - prevClick;
    if(perbedaanWaktu <= 0.08) {
        counterAnimation(doubleClickCounter, j);
        doubleClickCounter.innerHTML = j++;
        doubleClickCounter.style.animation = 'redFont .3s forwards';
        setTimeout(() => {
            doubleClickCounter.style.animation = 
            'whiteSmokeFont .3s forwards';
        }, 500);
    }
    prevClick = newClick;
    counterAnimation(clickCounter, i);
    clickCounter.innerHTML = i++;
}

click.addEventListener('click', function() {
    diClick();
});


