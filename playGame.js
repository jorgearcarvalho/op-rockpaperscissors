let userScore = 0;
let pcScore = 0;

function sortearAte(max) {
    return Math.floor(Math.random() * max);
};

function retornaEscolha(number) {
    if (number == 0) return "Stone Warrior";
    if (number == 1) return "Grand Paper Meister";
    if (number == 2) return "Scissor Monster";
};

function atualizarPlacar() {
    document.getElementById("userScore").innerText = "My Score: " + userScore;
    document.getElementById("pcScore").innerText = "Machine's: " + pcScore;
};

function comecarBatalha(usuario) {
    maquina = sortearAte(3);

    console.log("cheguei");

    if (usuario == maquina) return alert("You both chose " + retornaEscolha(maquina) + ".\nWow! That's a Tie!");

    if ((    usuario == 0 && maquina == 2) 
        ||  (usuario == 1 && maquina == 0) 
        ||  (usuario == 2 && maquina == 1))
        {
            userScore ++;
            atualizarPlacar();
            if (userScore == 5) {
                resetarPlacar();
                return alert("You won 5 times, this means you owned the challenge!")
            }
            return alert("The pc chose " + retornaEscolha(maquina) + ".\nYou did it! Victory!!!");    
        }
    else {
        pcScore ++;
        atualizarPlacar();
        if (pcScore == 5) {
            resetarPlacar();
            return alert("You lost 5 times, this means you failed the challenge...")
        }
        return alert("The pc chose " + retornaEscolha(maquina) + ".\n Oh no... You were defeated...");  
    }
}

function resetarPlacar() {
    userScore = 0;
    pcScore = 0;
    atualizarPlacar();
}