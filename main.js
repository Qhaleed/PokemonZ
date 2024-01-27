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

    //Inserting the professor 
    // var professorImage = document.createElement("img");
    // professorImage.src = "components/Characters/professor-jean.jpg"
    // professorImage.style.width = "30%"
    // professorImage.style.height = "100%"
    // professorImage.style.margin = "auto"
    // overlay.appendChild(professorImage)


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
            yesButton.classList.add("yes-button");

            yesButton.textContent = "Yes it is!"
            yesButton.style.margin = "auto"
            yesButton.style.width = "50%"
            yesButton.style.height = "5vh"

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
              
                gameStart.addEventListener("click", function () {
                    overlay.style.backgroundColor = "red"
                    overlay.style.color = "white"

                    intro.textContent = "Please agreee to the terms and conditions for this shitbox";
                    mainIntro.textContent = "And this is where we input the things that we need"
                    gameStart.textContent = "I agree!";
                })
            })
        }

        
    })


} )




// How to call this function? here ya go

