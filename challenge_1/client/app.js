var count = 0;
var tableArr = [ [0, 0, 0],
                 [0, 0, 0],   
                 [0, 0, 0]
                           ]

// this creates an element variable that contains each rowXColumn 
  var ele1 = document.getElementById('oneByOne');
  var ele2 = document.getElementById('oneByTwo');
  var ele3 = document.getElementById('oneByThree');
  var ele4 = document.getElementById('twoByOne');
  var ele5 = document.getElementById('twoByTwo');
  var ele6 = document.getElementById('twoByThree');
  var ele7 = document.getElementById('threeByOne');
  var ele8 = document.getElementById('threeByTwo');
  var ele9 = document.getElementById('threeByThree');


// this adds an event listener to each rowXColumn
  ele1.addEventListener('click', () => {count % 2 === 0 ? ele1.innerHTML = 'X' : ele1.innerHTML = 'O'; count++; tableArr[0][0] = count});
  ele2.addEventListener('click', () => {count % 2 === 0 ? ele2.innerHTML = 'X' : ele2.innerHTML = 'O'; count++; tableArr[0][1] = count});
  ele3.addEventListener('click', () => {count % 2 === 0 ? ele3.innerHTML = 'X' : ele3.innerHTML = 'O'; count++; tableArr[0][2] = count});
  ele4.addEventListener('click', () => {count % 2 === 0 ? ele4.innerHTML = 'X' : ele4.innerHTML = 'O'; count++; tableArr[1][0] = count});
  ele5.addEventListener('click', () => {count % 2 === 0 ? ele5.innerHTML = 'X' : ele5.innerHTML = 'O'; count++; tableArr[1][1] = count});
  ele6.addEventListener('click', () => {count % 2 === 0 ? ele6.innerHTML = 'X' : ele6.innerHTML = 'O'; count++; tableArr[1][2] = count});
  ele7.addEventListener('click', () => {count % 2 === 0 ? ele7.innerHTML = 'X' : ele7.innerHTML = 'O'; count++; tableArr[2][0] = count});
  ele8.addEventListener('click', () => {count % 2 === 0 ? ele8.innerHTML = 'X' : ele8.innerHTML = 'O'; count++; tableArr[2][1] = count});
  ele9.addEventListener('click', () => {count % 2 === 0 ? ele9.innerHTML = 'X' : ele9.innerHTML = 'O'; count++; tableArr[2][2] = count});

// this creates an event listener as well where if count hits 9, it alerts the page that the game is over
  ele1.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele2.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele3.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele4.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele5.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele6.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele7.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele8.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});
  ele9.addEventListener('click', () => {if (count === 9) {alert('GAME IS OVER')}});

// need to check conditionals to see whether a rowXColumn is a winner or not
  var textOne = document.getElementById('oneByOne');
  var textTwo = document.getElementById('oneByTwo').innerHTML;
  var textThree = document.getElementById('oneByThree').innerHTML;
  var textFour = document.getElementById('twoByOne').innerHTML;
  var textFive = document.getElementById('twoByTwo').innerHTML;
  var textSix = document.getElementById('twoByThree').innerHTML;
  var textSeven = document.getElementById('threeByOne').innerHTML;
  var textEight = document.getElementById('threeByTwo').innerHTML;
  var textNine = document.getElementById('threeByThree').innerHTML;


var isEven = function(num) {
  if (num < 1) {
    return 0;
  } else if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// this will make X's false and O's true

setInterval(function() {
  for (var i = 0; i < tableArr.length; i++) {
    for (var j = 0; j < tableArr.length; j++) {
      if (typeof tableArr[i][j] === 'boolean') {
      //  console.log('dont change me');
      } else {
      tableArr[i][j] = isEven(tableArr[i][j]);
      }
    }
  }
}, 1000)



setInterval(function() {
 // console.log(tableArr[0][0], tableArr[0][1], tableArr[0][2]);
  if ((typeof tableArr[0][0] === 'boolean') && (tableArr[0][0] === tableArr[0][1]) && (tableArr[0][0] === tableArr[0][1])) {
    alert('WINNER');
    window.location.reload()
  } else if ((typeof tableArr[0][0] === 'boolean') && (tableArr[0][0] === tableArr[1][0]) && (tableArr[0][0] === tableArr[2][0])) {
    alert('WINNER');
    window.location.reload()
  } else if ((typeof tableArr[0][0] === 'boolean') && (tableArr[0][0] === tableArr[1][1]) && (tableArr[0][0] === tableArr[2][2])) {
    alert('WINNER');
    window.location.reload()
  }


  if ((typeof tableArr[0][1] === 'boolean') && (tableArr[0][1] === tableArr[1][1]) && (tableArr[0][1] === tableArr[2][1])) {
    alert('WINNER');
    window.location.reload()
  }

  if ((typeof tableArr[0][2] === 'boolean') && (tableArr[0][2] === tableArr[1][1]) && (tableArr[0][2] === tableArr[2][0])) {
    alert('WINNER');
    window.location.reload()
  }

  if ((typeof tableArr[1][0] === 'boolean') && (tableArr[1][0] === tableArr[1][1]) && (tableArr[1][0] === tableArr[1][2])) {
    alert('WINNER');
    window.location.reload()
  }

  if ((typeof tableArr[2][0] === 'boolean') && (tableArr[2][0] === tableArr[2][1]) && (tableArr[2][0] === tableArr[2][2])) {
    alert('WINNER');
    window.location.reload()
  } 
}, 500)















// || 

// 

