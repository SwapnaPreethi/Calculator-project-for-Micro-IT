function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
  }
  
  function appendSymbol(symbol) {
    document.getElementById('display').value += symbol;
  }
  
  function calculateResult() {
    let display = document.getElementById('display').value;
    try {
      let result = eval(display);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }