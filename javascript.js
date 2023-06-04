var characters = [
    { name: "Quimera de Cristal", powers: ["Poder 1", "Poder 2", "Poder 3", "Poder 4"] },
    { name: "Dragón Ermitaño", powers: ["Poder 1", "Poder 2", "Poder 3", "Poder 4"] },
    { name: "Kraken Acerrifico", powers: ["Poder 1", "Poder 2", "Poder 3", "Poder 4"] },
    { name: "Nebulus Luminoso", powers: ["Poder 1", "Poder 2", "Poder 3", "Poder 4"] },
    { name: "Fantasma Quiebraterra", powers: ["Poder 1", "Poder 2", "Poder 3", "Poder 4"] },
    { name: "Titán Escudero", powers: ["Poder 1", "Poder 2", "Poder 3", "Poder 4"] },
    ];
    
    var playerCharacter;
    var computerCharacter;
    var round = 1;
    
    function selectCharacter(characterIndex) {
        playerCharacter = characters[characterIndex - 1];
        document.getElementById("player-character").textContent = playerCharacter.name;
        startBattle();
    }
    
    function startBattle() {
        if (round > 3) {
            endGame();
            return;
        }
        
        computerCharacter = getRandomCharacter();
        document.getElementById("computer-character").textContent = computerCharacter.name;
        
        var playerPower = prompt("Elige un poder (1-4):");
        var computerPower = getRandomPower();
        
        var result = getBattleResult(playerPower, computerPower);
        document.getElementById("result").textContent = result;
        
        round++;
        document.getElementById("round").textContent = round;
    }
    
    function getRandomCharacter() {
        var randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    }
    
    function getRandomPower() {
        return Math.floor(Math.random() * 4) + 1;
    }
    
    function getBattleResult(playerPower, computerPower) {
        if (playerPower == computerPower) {
            return "Empate";
        } else if ((playerPower == 1 && computerPower == 4) ||
                   (playerPower == 2 && computerPower == 1) ||
                   (playerPower == 3 && computerPower == 2) ||
                   (playerPower == 4 && computerPower == 3)) {
            return "Ganaste";
        } else {
            return "Perdiste";
        }
    }
    
    function endGame() {
        alert("¡Fin del juego!"); 
    }


    
    
    let botonAnimales = document.getElementById('seleccionar_animal')

    botonAnimales.addEventListener('click', elegirmianimal)
    
    function elegirmianimal() {
        let inputQuimera = document.getElementById("Quimera")
        let inputDragon = document.getElementById("Dragon")
        let inputKraken = document.getElementById("Kraken")
        let spananimalJugador = document.getElementById("animalJugador")



        if (inputQuimera.checked){
            spananimalJugador.innerHTML = 'Quimera'
            }

            else if (inputDragon){
                spananimalJugador.innerHTML = 'Dragon'
            }

            else if (inputKraken){
                spananimalJugador.innerHTML = 'Kraken'
            }

        }

    