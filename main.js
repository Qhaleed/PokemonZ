var button = document.getElementById("translate-button");
var intro = document.getElementById("intro");
var proceed = document.getElementById("proceed-button");
var overlay = document.getElementById("overlay");
let translated = false;
let counter = 0;
button.addEventListener("click", function () {
    if (translated == false) {
    intro.textContent = "Welcome to the enchanting world of Pokemon Z! Magnificent For adventure Set off, tour the vivid landscapes, and explore a variety of Pokemon With Ng and the others Meet. Your mission as a trainer is clear: Catch, raise and crown Pokemon champions Kuto. Exciting events, challenges, and Pokemon Joy awaits. Caught All Are you ready to come out on top? Pokemon Let's start the adventure of N-Z!";
    translated = true;
}
    else {
        intro.textContent = "ようこそ、ポケモンZの魅惑の世界へ！壮大な 冒険に 出発し、鮮やかな風景を巡り、多彩なポケモ ンたちと 出会おう。トレーナーとしての使命は明確です： ポケモンを捕まえ、育て、ポケモンチャンピオンに輝 くこと。ワクワクする出来事、挑戦、そしてポケモンの 喜びが待っています。すべてを捕ま えてトップに立つ準備はできていますか？ポケモ ンZの冒険を始めましょう！"
        translated = false;
    }
})

// This function is for proceed button
proceed.addEventListener("click", function () {

    intro.textContent = "Hello adventurer!, I am professor Sam. And I will guide you in your pokemon adventure, But before that, please do tell me your name";
    overlay.removeChild(button);



    var nameInput = document.createElement("Input");
    nameInput.style.padding = "10px 20px"
    nameInput.style.width = "30%"

    nameInput.classList.add("nameInput")

    overlay.appendChild(nameInput);

    var nameSubmit = document.createElement("button");
    nameSubmit.textContent = "submit";
    nameSubmit.style.padding= "10px";
    nameSubmit.style.width = "20%";
    nameSubmit.style.borderRadius= "5px";
    
    overlay.appendChild(nameSubmit);
    overlay.removeChild(proceed);

    ///

    nameSubmit.addEventListener("click", function validation () {
        var userName = nameInput.value;
        if (userName == '') {
               
            intro.textContent = "You can tell me your name, don't be shy!";
            return;
        
        }
        else {
        
            
            intro.textContent = "Is your name " + userName + "?";
            overlay.removeChild(nameSubmit)
            overlay.removeChild(nameInput)
            
            
            var yesButton = document.createElement("button") ;
            overlay.appendChild(yesButton)
            yesButton.classList.add("yesButton");

            yesButton.textContent = "Yes it is!"
            yesButton.style.margin = "auto"
            yesButton.style.width = "50%"
            yesButton.style.height = "5vh"
            
            ///

            yesButton.addEventListener("click", function () {
                intro.textContent = " Hello adventurer " + userName + "!";
                var mainIntro = document.createElement("text");
                mainIntro.style.marginBottom = "30px"
                overlay.removeChild(yesButton)
                mainIntro.textContent = "Ah, greetings, young "+ userName + "! A hearty welcome to the world of Pokémon! I am Professor Jean, and I am delighted to guide you on your thrilling journey. Brace yourself for a captivating adventure, where you'll discover marvelous Pokémon, conquer challenges, and forge unbreakable bonds! So, my dear Trainer, with Poké Ball in hand, let the adventure begin!";
            

                var gameStart = document.createElement("button");
                gameStart.textContent = "GAME START"
                gameStart.style.margin = "auto"
                gameStart.style.width = "50%"
                gameStart.style.height = "5vh"

                gameStart.classList.add = "game-start-button"


                overlay.appendChild(mainIntro)
                overlay.appendChild(gameStart)
              

                ///////HANGGANG DITO MUNA PQIGNWEKJGWLKEJG














                gameStart.addEventListener("click", function () {
                    overlay.style.backgroundColor = "red"
                    overlay.style.color = "white"

                    intro.textContent = "Please agreee to the terms and conditions for this shitbox";
                    mainIntro.textContent = "And this is where we input the things that we need"
                    gameStart.textContent = "I agree!";
                    overlay.removeChild(gameStart);
                    var goButton = document.createElement("button");
                    goButton.textContent = "I agree!!";
                    goButton.style.padding = "10px 20px";
                    overlay.appendChild(goButton);

                    goButton.addEventListener("click", function() {
                        overlay.style.opacity ="0";

                       setTimeout(function ()  {
                        overlay.style.opacity = "100%";
                        overlay.textContent = " The game is loading";
                        overlay.style.color = "black"
                        overlay.style.background = "rgba(150, 145, 95, 0.14)";
                       

                        setTimeout(function () {
                            overlay.style.opacity = "0";
                            overlay.style.opacity = "100%"
                            
                        }, 3000) 

                            overlay.style.height = "30vh";
                            overlay.textContent = "Welcome to Pallet Town";
                            overlay.style.background = "rgba(150, 145, 95, 0.8)";
                            var home = document.createElement("textarea")
                            var inside = document.createElement("button");
                            var outside = document.createElement("button");
                            var buttonContainer = document.createElement("div")
                            
                            overlay.appendChild(home);

                            home.textContent = "You are in your home town, and suddenly a HUGE Erruption bang comming from volcano. What do you do? "
                            home.style.padding = "20px";
                            home.style.marginTop = "1%";
                            home.readOnly = true;

                            overlay.appendChild(buttonContainer);
                            buttonContainer.style.width = "80%";
                            buttonContainer.style.height = "auto";
                            buttonContainer.style.display = "flex";
                            buttonContainer.style.flexDirection = "row";
                            buttonContainer.style.margin = "auto";


                            buttonContainer.appendChild(inside);
                            inside.textContent = "Stay inside!";
                            inside.style.padding = "10px 30px";
                           
                            buttonContainer.appendChild(outside);
                            outside.textContent = "Rush outside!";
                            outside.style.padding = "10px 30px";

                            outside.addEventListener("click", function () {
                        
                                home.textContent = "You are now outside, you see a mysterious black dragon pokemon. The dragon pokemon immediately noticed your presence. What do you do?";
                                buttonContainer.removeChild(outside);
                                buttonContainer.removeChild(inside);  


                                var pokeball = document.createElement("button");
                                var run = document.createElement("button");

                                buttonContainer.appendChild(pokeball);
                                pokeball.textContent = "Throw a pokeball"
                                pokeball.style.padding = "10px 30px";

                                buttonContainer.appendChild(run);
                                run.textContent = "Run away"
                                run.style.padding = "10px 30px";

                                    });

                            
                    
                       }, 2000);
                        
                    })
                })
            })

           



        }

        
    })


} )



// function insideButton () {
//     overlay.style.opacity = "0%";
//     setInterval ( function() {
//         overlay.style.opacity = "100%";
//         home.textContent = "You stayed inside, your house fell apart."

//     },2000)
// }


// How to call this function? here ya go

