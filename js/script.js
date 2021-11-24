$(document).ready(function() {
    $("#insurance").submit(function(event){

    const first =$("#firstNumber").val();
    const second =$("#secondNumber").val();
    const third =$("#thirdNumber").val();
    const fouth =$("#fouthNumber").val();
  
    if ( first = second = third) {
        console.log('it works')
      $('#equilateral').show();
    } else if (first = second != third) {
        console.log('it works')
      $('#isosceles').show();
    } else if (first != second != third) {
        console.log('it works')
        $('#scalene').show(); 
    }else {
        console.log('it works')
     $('#notTriangle').show();
    }
    event.preventDefault();

    });
  });