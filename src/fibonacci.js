//Javascript fibonacci with tests. 

function Fibonacci() {}

Fibonacci.prototype.findNth = function (n) {
  if (isNaN(n) || n < 2) {return n;}
  return this.findNth(n-1) + this.findNth(n-2);
};

fibonacci = new Fibonacci();

function firstFibonacci () {
  var result = fibonacci.findNth(1) === 1;
  console.log('first fibonacci pass: ' + result);}

function secondFibonacci () {
  var result = fibonacci.findNth(2) === 1;
  console.log('second fibonacci pass: ' + result);}

function thirdFibonacci () {
  var result = fibonacci.findNth(3) === 2;
  console.log('third fibonacci pass: ' + result);}

function fourthFibonacci () {
  var result = fibonacci.findNth(4) === 3;
  console.log('fourth fibonacci pass: ' + result);}

function fifthFibonacci () {
  var result = fibonacci.findNth(5) === 5;
  console.log('fifth fibonacci pass: ' + result);}

function tenthFibonacci () {
  var result = fibonacci.findNth(10) === 55;
  console.log('tenth fibonacci pass: ' + result);}

function invalidFibonacci () {
  var result = fibonacci.findNth('string') == 'string';
  console.log('invalid fibonacci pass: ' + result);}


firstFibonacci();
secondFibonacci();
thirdFibonacci();
fourthFibonacci();
fifthFibonacci();
tenthFibonacci();
invalidFibonacci();
