'use strict'; //o JavaScript acusa mais erros.

window.addEventListener('load', function (event) {
  var inputRed = document.querySelector('input#red'),
    inputGreen = document.querySelector('input#green'),
    inputBlue = document.querySelector('input#blue');

  var redValue = document.querySelector('input#redValue'),
    greenValue = document.querySelector('input#greenValue'),
    blueValue = document.querySelector('input#blueValue');

  var quadrado = document.querySelector('div#quadrado');

  inputRed.addEventListener('input', function () {
    redValue.value = this.value;
    quadrado.style.backgroundColor =
      'rgb(' +
      redValue.value +
      ',' +
      greenValue.value +
      ',' +
      blueValue.value +
      ')';
  });

  inputGreen.addEventListener('input', function () {
    greenValue.value = this.value;
    quadrado.style.backgroundColor =
      'rgb(' +
      redValue.value +
      ',' +
      greenValue.value +
      ',' +
      blueValue.value +
      ')';
  });

  inputBlue.addEventListener('input', function () {
    blueValue.value = this.value;
    quadrado.style.backgroundColor =
      'rgb(' +
      redValue.value +
      ',' +
      greenValue.value +
      ',' +
      blueValue.value +
      ')';
  });

  redValue.addEventListener('input', function () {
    inputRed.value = this.value;
    quadrado.style.backgroundColor =
      'rgb(' +
      redValue.value +
      ',' +
      greenValue.value +
      ',' +
      blueValue.value +
      ')';
  });

  greenValue.addEventListener('input', function () {
    inputGreen.value = this.value;
    quadrado.style.backgroundColor =
      'rgb(' +
      redValue.value +
      ',' +
      greenValue.value +
      ',' +
      blueValue.value +
      ')';
  });

  blueValue.addEventListener('input', function () {
    inputBlue.value = this.value;
    quadrado.style.backgroundColor =
      'rgb(' +
      redValue.value +
      ',' +
      greenValue.value +
      ',' +
      blueValue.value +
      ')';
  });
});
