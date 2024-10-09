//EXERCISE-1: GUESS THE NUMBER

var ans = Math.floor(Math.random()*100);

var guess=-1;
var count=0;
while(ans!=guess){
    guess=prompt('enter your number');
    count++;
    if(ans > guess){
        console.log("Enter bigger number");
    }
    else if(ans < guess){
        console.log("Enter smaller number");
    }
}


console.log("Congrats you have made the correct guess!");
console.log('Ans was: ',ans);
console.log('YOUR SCORE IS--------->',100-count);


//EXERCISE-2: ROCK PAPER SCISSORS

var arr=['R','P','S'];
var chances=5,count=0;
while(chances>0){
    var input = prompt('Enter your choice (R for Rock, P for Paper, S for Scissors)!');
    
    var num = Math.floor(Math.random()*3); //random num btw 0 and 2
    
    var output = arr[num];
    if(input==output){
        console.log('It`s a tie!');
    }
    else if(input=='R' && output=='S'){
        console.log('You win!!!');
        count++;
    }
    else if(input=='P' && output=='R'){
        console.log('You win!!!');
        count++;
    }
    else if(input=='S' && output=='P'){
        console.log('You win!!!');
        count++;
    }
    else{
        console.log('OOPS....You lose!!!');
    }
   console.log('Opponent`s choice was: ',arr[num]); 
   chances--;
   
}
console.log('You have won ',count,' out of 5!');

//EXERCISE-3: TELLING A RANDOM JOKE

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the computer go to the doctor? Because it had a virus!",
    "Why don't oysters donate to charity? Because they are shellfish!"
];

var count=5;
while(count--){
    var num = Math.floor(Math.random() * jokes.length);

    console.log('Lemme tell you a joke!');
    console.log(jokes[num]); 
    console.log('');
}  

//EXERCISE-4: DISPLAY DIGITAL TIME 

function time(){
    const date = new Date();
    const hours = date.getHours() ;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    //console.log(hours, ':' , minutes, ':' , seconds);
    var display = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById("clock").innerHTML = `<p>${display}</p>`;
}
setInterval(time, 1000);

//EXERCISE-5: PRETEND LIKE A HACKER

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },ms);
    })
}

async function hacker(){
    
    await delay(1000);
    console.log('Initalizing Hack program');
    await delay(2500);
    console.log('Hacking Ashish`s username');
    await delay(2900);
    console.log('Username found aashish17');
    await delay(3100);
    console.log('Connecting to facebook...');
} 

hacker();

//EXERCISE-7: PASSWORD GENERATOR

var letters = [];
var special = [];

for(let i=97;i<=122;i++){
    letters.push(String.fromCharCode(i));
}
console.log(letters)

console.log('Generating Password: ');
var ans='';
var random1 = Math.floor(Math.random()*letters.length);
ans += letters[random1];
var random2 = Math.floor(Math.random()*letters.length);
ans += letters[random2].toUpperCase();


for(let i=33;i<=47;i++){
    special.push(String.fromCharCode(i));
}
for(let i=58;i<=64;i++){
    special.push(String.fromCharCode(i));
}
var random3 = Math.floor(Math.random()*special.length);
ans += special[random3];

for(let i=0;i<5;i++){
   ans += letters[Math.floor(Math.random()*letters.length)];
}

console.log('Your Generated Password: ',ans);

//EXERCISE-8: ALARM

var input = prompt('Enter the time you want to set alarm for (in HH:MM:SS format):')
console.log('Input: ',input);
var alarmSound = document.getElementById("alarmSound");

function time(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

    var ans=hours;
    ans += ":";
    ans+= minutes;
    ans += ":";
    ans+= seconds;
    document.getElementById("clock").innerHTML = `<p>${ans}</p>`;
    if(ans===input){
        alarmSound.play();
        input='';
        alert('BOOM!!!!!!!!!!!!!');
    }
}



setInterval(time,1000);