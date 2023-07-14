const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myaudio");

var answer=0;

function generateequation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyans1 = Math.floor(Math.random() * 13);
    var dummyans2 = Math.floor(Math.random() * 13);

    var allans=[];
    var switchans=[];

    answer=eval(num1*num2);

    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;
    
    allans=[answer,dummyans1,dummyans2];

    for(i=allans.length;i--;){
        switchans.push(allans.splice(Math.floor(Math.random()*(i+1)),1)[0]);
    };

    option1.innerHTML=switchans[0];
    option2.innerHTML=switchans[1];
    option3.innerHTML=switchans[2];

    
};
// if option 1 is clicked
option1.addEventListener("click",function(){
    if(option1.innerHTML == answer)
    {
        generateequation();
    }
    else{
        audio.play();
    }

});
// if option 2 is clicked
option2.addEventListener("click",function(){
    if(option2.innerHTML == answer)
    {
        generateequation();
    }
    else{
        audio.play();
    }

});
// if option 3 is clicked
option3.addEventListener("click",function(){
    if(option3.innerHTML == answer)
    {
        generateequation();
    }
    else{
        audio.play();
    }

});

// intial call
generateequation();