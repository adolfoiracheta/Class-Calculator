class Calculator {

  constructor(name) {
    this.name = name
    this.result = 0;
  }

  add(num) {
    //summation code
    this.result = num + this.result;
    this.print();
  }

  subtract(num) {
    //subtraction code
    this.result =this.result - num;
    this.print();
  }

  clear() {
    //clear result
    this.result = 0;
    this.print()
  }

  print() {
    console.log(this.result)
  }
}

//delcare and instantiate class
var calc = new Calculator('Counter');

//have fun with the calculator
calc.add(8);
calc.add(10);
calc.subtract(5);
calc.print();