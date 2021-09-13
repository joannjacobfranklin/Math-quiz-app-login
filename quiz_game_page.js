player_1 = localStorage.getItem("player 1");
player_2 = localStorage.getItem("player 2");
console.log(player_1 + "and" + player_2)

player_1_score = 0;
player_2_score = 0;

question_turn = player_2;
answer_turn = player_1;

document.getElementById("player_1_name").innerHTML = player_1 + " - " + "&nbsp;";
document.getElementById("player_2_name").innerHTML = player_2 + " - " + "&nbsp;";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("question_turn_name").innerHTML = question_turn;
document.getElementById("Answer_turn_name").innerHTML = answer_turn;

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

function check(){

    number = document.getElementById("answerInput").value;
    console.log("The player's answer" + number);

    if (number ==  Actual_answer){

       if (answer_turn == player_1){

           player_1_score = player_1_score + 1;
           document.getElementById("player_1_score").innerHTML = player_1_score;

       }
       else{

          player_2_score = player_2_score + 1;
          document.getElementById("player_2_score").innerHTML = player_2_score;   

       }

    }

    if (question_turn == player_2){

        question_turn = player_1;
        document.getElementById("question_turn_name").innerHTML = question_turn;
        
    }
    else{

        question_turn = player_2;
        document.getElementById("question_turn_name").innerHTML = question_turn;

    }

    if (answer_turn == player_1){

        answer_turn = player_2;
        document.getElementById("Answer_turn_name").innerHTML = answer_turn;

    }
    else{

        answer_turn = player_2;
        document.getElementById("Answer_turn_name").innerHTML = answer_turn;

    }
    document.getElementById("output").innerHTML = "";
}


