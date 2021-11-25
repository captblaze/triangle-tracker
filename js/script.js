$(document).ready(function() {
    $("#insurance").submit(function(event){

    const first =$("#firstNumber").val();
    const second =$("#secondNumber").val();
    const third =$("#thirdNumber").val();
    const fouth =$("#fouthNumber").val();

  
    if (first === second && second === third && third===first) {
        console.log('it works')
      $('#equilateral').show();
    } else if (first === second && first && second !== third || first === third && first && third !== second || second ===third && second && third !== first) {
        console.log('it works 2')
      $('#isosceles').show();
    } else if (first !== second && second !== third && third !== first) {
        console.log('it works 3')
        $('#scalene').show(); 
    }else {
        console.log('it works 4')
     $('#notTriangle').text(`this is not a triangle`);
    }

    event.preventDefault();

    });
  });