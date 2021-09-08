function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    console.log("First number -" + number1 + "Second number - " + number2);
    Actual_answer = parseInt(number1) * parseInt(number2);
    console.log("actual answer is : " + Actual_answer);
    question = "<h4 id = 'question'>" + number1 + "&nbsp;" + "X" + "&nbsp" + number2 + "</h4>";
    input = "<br id = 'answer_br'>Answer &nbsp; :<input id = 'answerInput' placeholder = 'answer' type='number' > &nbsp;" ;
    check_button = "<button id = 'check' class='btn btn-success' onclick = 'check()' >Check</button> ";
    row = question + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}

