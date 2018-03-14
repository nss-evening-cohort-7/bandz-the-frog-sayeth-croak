console.log('frogs r radd');

function printToDom(stuffToPrint, divId) {
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += stuffToPrint;
  }
  