function adduser(){
    var player1 = document.getElementById("player_1_username").value;
    var player2 = document.getElementById("player_2_username").value;

    localStorage.setItem("player 1" , player1);
    localStorage.setItem("player 2" , player2);

    window.location = "game_quiz_page.html";
}