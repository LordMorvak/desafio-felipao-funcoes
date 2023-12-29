let victories = 5
let defeats = 5
const balanceVictories = victories - defeats
let level = calculateLevel(victories, defeats)

console.log("O Herói tem saldo de " + balanceVictories + " Vitorias, e esta no nivel de " + level)

function calculateLevel(victories, defeats) {
    const balanceVictories = victories - defeats
    let level = "Ferro"
   
    if (balanceVictories >= 11 && balanceVictories <= 20) {
      level = "Bronze"

    } else if (balanceVictories >= 21 && balanceVictories <= 50) {
      level = "Prata"

    } else if (balanceVictories >= 51 && balanceVictories <= 80) {
      level = "Ouro"

    } else if (balanceVictories >= 81 && balanceVictories <= 90) {
      level = "Diamante"

    } else if (balanceVictories >= 91 && balanceVictories <= 100) {
      level = "Lendario"

    } else if (balanceVictories >= 101) {
      level = "Imortal"
    }
   
    return level
   }