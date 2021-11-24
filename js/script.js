$(document).ready(function() {
    $("#insurance").submit(function(event){

    const first =$("#firstNumber").val();
    const second =$("#secondNumber").val();
    const third =$("#thirdNumber").val();
    const fouth =$("#fouthNumber").val();
  
    if ( gender=== "female" && ageBracket ==="young") {
      $('#youngFem').show();
    } else if (gender === "female" && ageBracket === "matured") {
      
      $('#maturedFem').show();
    } else if (gender === "male" && ageBracket === "matured") {
      
        $('#maturedMale').show(); 
    } else if (gender === "male" && ageBracket === "young")
    $('#youngMale').show();    
    else {
     $('Please fill the form correctly or leave my dating app').show();
    }
    event.preventDefault();

    });
  });