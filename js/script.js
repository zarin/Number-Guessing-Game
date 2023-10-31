let start = document.querySelector('.start');
let play_btn = document.querySelector('.play_btn');


let p1input = document.querySelector('.p1input');
let p1btn = document.querySelector('.p1btn');
let playerbox1 = document.querySelector('.playerbox1');
let error1 = document.querySelector('.error1');
let player1 = document.querySelector('.player1');


let p2input = document.querySelector('.p2input');
let p2btn = document.querySelector('.p2btn');
let playerbox2 = document.querySelector('.playerbox2');
let error2 = document.querySelector('.error2');
let player2 = document.querySelector('.player2');
let chance = document.querySelector('.chance');
let tried = document.querySelector('.tried');

let attempt=0;

play_btn.addEventListener('click',function(){
    play_btn.style.display = 'none';
    playerbox1.style.display = 'block';

})


p1btn.addEventListener('click',function(){
    let p1value = p1input.value;
    
    if(p1value ==''){
        error1.innerHTML = ("Please Give a Number");
    }
    else if(p1value > 9){
        error1.innerHTML = ("Please Give a Number less than 10");
    }
    else if(p1value <= 0){
        error1.innerHTML = ("Please Give me Value more than 0");
    }
    else{
        error1.innerHTML = '';
        // console.log(p1value);
        playerbox1.style.display = 'none';
        playerbox2.style.display = 'block';
        chance.innerHTML = `Attempt ${++attempt}`;
        chance.style.display = 'block';
    }
})

p2btn.addEventListener('click',()=>{
    chance.innerHTML = `Attempt ${++attempt}`;
    tried.style.display = 'block';

    let p2value = p2input.value;

    if(p2value ==''){
        error2.innerHTML = ("Please Give me a Value");
        chance.innerHTML = `Attempt ${--attempt}`;
    }
    else if(p2value > 9){
        error2.innerHTML = ("Please Give me Value less than 10");
        chance.innerHTML = `Attempt ${--attempt}`;
    }
    else if(p2value <= 0){
        error2.innerHTML = ("Please Give me Value more than 0");
        chance.innerHTML = `Attempt ${--attempt}`;
    }
    else{
        error2.innerHTML = '';
        // console.log(p2input.value,p1input.value);
        let p1value = p1input.value;
        let p2value = p2input.value;

        if(p1value==p2value){
            // console.log("P2 is winner");
            playerbox2.style.display = 'none';
            player2.style.display = 'block';

        }
        else if(attempt > 5){
            // console.log("P1 is winner");
            playerbox2.style.display = 'none';
            player1.style.display = 'block';
        }
        
    }
})
