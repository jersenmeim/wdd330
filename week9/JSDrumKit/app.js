//using keydown function

document.addEventListener('keydown', play);
document.addEventListener('keydown', down);


function play(e){
  let audio = document.querySelector(`audio[data-key="${e.which}"]`); 
  
  try {
    audio.currentTime = 0;
    audio.play();
  }

  catch(err) {
    console.log("audio not found")
  }
}

function down(e) {
  let div = document.querySelector(`div[data-key="${e.which}"]`);
  
  try {
    div.classList.add("playing");
    setTimeout(function() {
      div.classList.remove("playing");
    }, 100);

    div.style.position ='relative';
    div.style.top += 0 + 'px'; 
    div.style.top = parseInt(div.style.top) + 10 + 'px';

    if(div.style.top == 100 + 'px'){
      div.style.top = '0px';
  }

  }
  catch(err) {
    console.log("DIV not found")
  }  
}




//using keypress function

// document.addEventListener('keypress', play)
// document.addEventListener('keydown', down)



// function play(e){
  
//   switch (e.key) {

//     case 'a':
//       let a = new Audio("sounds/clap.wav");
    
//       a.play();
//       break;
//     case 's':
//       let s = new Audio("sounds/hihat.wav");
     
//       s.play();
//       break;
//     case 'd':
//       let d = new Audio("sounds/kick.wav");
  
//       d.play();
//       break;
//     case 'f':
//       let f = new Audio("sounds/openhat.wav");
   
//       f.play();
//       break;
//     case 'g':
//       let g = new Audio("sounds/boom.wav");
     
//       g.play();
//       break;
//     case 'h':
//       let h = new Audio("sounds/ride.wav");
    
//       h.play();
//       break;
//     case 'j':
//       let j = new Audio("sounds/snare.wav");
      
//       j.play();
//       break;
//     case 'k':
//       let k = new Audio("sounds/tom.wav");
  
//       k.play();
//       break;
//     case 'l':
//       let l = new Audio("sounds/tink.wav");
 
//       l.play();
//       break;

//     default: console.log(e.key);

//   }

// }

// function down(e) {
//   let div = document.querySelector(`div[data-key="${e.which}"]`);

//   div.classList.add("playing");
//   setTimeout(function() {
//     div.classList.remove("playing");
//   }, 100);

//   div.style.position ='relative';
//   div.style.top += 0 + 'px';
//   div.style.top = parseInt(div.style.top) + 10 + 'px';

//   if(div.style.top == 100 + 'px'){
//     div.style.top = '0px';
//   }
// }


//using click function


// let keys = document.querySelectorAll(".key");

// keys.forEach(key => key.addEventListener('click', play));
// keys.forEach(key => key.addEventListener('click', down));
// for (let i = 0; i < keys.length; i++) {keys[i].addEventListener("click", play);} 

// function play(){
//   let x = this.dataset.key;
//   let audio = document.querySelector(`audio[data-key="${x}"]`);
//   let div = document.querySelector(`div[data-key="${x}"]`);
//   audio.currentTime = 0;
//   audio.play();
//   div.classList.add("playing");

//   setTimeout(function() {
//      div.classList.remove("playing");
//   }, 100);
// }

// function down() {
//   let x = this.dataset.key;
//   let div = document.querySelector(`div[data-key="${x}"]`);
//   div.style.position ='relative';
//   div.style.top += 0 + 'px';
//   div.style.top = parseInt(div.style.top) + 10 + 'px';
// if(div.style.top == 100 + 'px'){
//   div.style.top = '0px';
// }
 
// }
