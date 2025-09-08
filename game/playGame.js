function sortearAte(max) {
    return Math.floor(Math.random() * max);
}

function retornaEscolha(number) {
    if (number == 0) return "Stone Warrior";
    if (number == 1) return "Grand Paper Meister";
    if (number == 2) return "Scissor Monster";
}

function comecarBatalha(usuario) {
    maquina = sortearAte(3);

    if (usuario == maquina) return alert("You both chose " + retornaEscolha(maquina) + ".\nWow! That's a Tie!");

    if ((    usuario == 0 && maquina == 2) 
        ||  (usuario == 1 && maquina == 0) 
        ||  (usuario == 2 && maquina == 1)) 
        return alert("The pc chose " + retornaEscolha(maquina) + ".\nYou did it! Victory!!!");
    else 
        return alert("The pc chose " + retornaEscolha(maquina) + ".\n Oh no... You were defeated...");  
}