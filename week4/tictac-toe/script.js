// var div = document.getElementsByClassName('box')[0];
//     div.addEventListener('click', function (event) {
//     document.getElementsByClassName("result")[0].innerHTML = currentPlayer;
// });


 //remove
 function remove() {
    var elements = document.getElementsByClassName("box");
    for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML= " ";
    }
  }

  

let player = "X";

const box = document.getElementsByClassName("box");

  for (let i = 0; i < box.length; i++) {

    box[i].addEventListener("click", function() {
        if (box[i].innerHTML.trim() == "")
        {
        box[i].innerHTML = player;
        //changes player turns
        player = player == "X" ? "O" : "X";
        }
  });
}
