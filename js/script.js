$(document).ready(function() {
    $("#insurance").submit(function(event){

    const first =$("#firstNumber").val();
    const second =$("#secondNumber").val();
    const third =$("#thirdNumber").val();
    const fouth =$("#fouthNumber").val();

  
    if (first === second || third) {
        console.log('it works')
      $('#equilateral').show();
    } else if (first !== second !== third) {
        console.log('it works 2')
      $('#isosceles').show();
    } else if (first !== second !== third) {
        console.log('it works 3')
        $('#scalene').show(); 
    }else {
        console.log('it works 4')
     $('#notTriangle').show();
    }
    event.preventDefault();

    });
  });