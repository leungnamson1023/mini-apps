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
  ele1.addEventListener('click', () => {count % 2 === 0 ? ele1.innerHTML = 'X' : ele1.innerHTML = 'O'; count++; tableArr[0][0] = 1});
  ele2.addEventListener('click', () => {count % 2 === 0 ? ele2.innerHTML = 'X' : ele2.innerHTML = 'O'; count++; tableArr[0][1] = 1});
  ele3.addEventListener('click', () => {count % 2 === 0 ? ele3.innerHTML = 'X' : ele3.innerHTML = 'O'; count++; tableArr[0][2] = 1});
  ele4.addEventListener('click', () => {count % 2 === 0 ? ele4.innerHTML = 'X' : ele4.innerHTML = 'O'; count++; tableArr[1][0] = 1});
  ele5.addEventListener('click', () => {count % 2 === 0 ? ele5.innerHTML = 'X' : ele5.innerHTML = 'O'; count++; tableArr[1][1] = 1});
  ele6.addEventListener('click', () => {count % 2 === 0 ? ele6.innerHTML = 'X' : ele6.innerHTML = 'O'; count++; tableArr[1][2] = 1});
  ele7.addEventListener('click', () => {count % 2 === 0 ? ele7.innerHTML = 'X' : ele7.innerHTML = 'O'; count++; tableArr[2][0] = 1});
  ele8.addEventListener('click', () => {count % 2 === 0 ? ele8.innerHTML = 'X' : ele8.innerHTML = 'O'; count++; tableArr[2][1] = 1});
  ele9.addEventListener('click', () => {count % 2 === 0 ? ele9.innerHTML = 'X' : ele9.innerHTML = 'O'; count++; tableArr[2][2] = 1});

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




  var checkWinner = function() {

    var arr = [];

    arr.push(document.getElementById('oneByOne'));
    arr.push(document.getElementById('oneByTwo'));
    arr.push(document.getElementById('oneByThree'));
    arr.push(document.getElementById('twoByOne'));
    arr.push(document.getElementById('twoByTwo'));
    arr.push(document.getElementById('twoByThree'));
    arr.push(document.getElementById('threeByOne'));
    arr.push(document.getElementById('threeByTwo'));
    arr.push(document.getElementById('threeByThree'));
}







