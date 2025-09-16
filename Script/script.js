let victoires = 0;
let defaites = 0;
let nuls = 0;

const choix = ["Pierre", "Papier", "Ciseaux"];
const resultat = document.getElementById("resultat");
const victoiresEl = document.getElementById("victoires");
const defaitesEl = document.getElementById("defaites");
const nulsEl = document.getElementById("nuls");

document.getElementById("reset").addEventListener("click", () => {
    victoires = 0;
    defaites = 0;
    nuls = 0;
    updateCompteurs();
    resultat.textContent = "Compteurs réinitialisés.";
});

function jouer(coupJoueur) {
    const coupOrdi = choix[Math.floor(Math.random() * 3)];
    let message = `Vous avez choisi ${coupJoueur}. L'ordinateur a choisi ${coupOrdi}. `;

    if (coupJoueur === coupOrdi) {
        message += "Match nul !";
        nuls++;
    } else if (
        (coupJoueur === "Pierre" && coupOrdi === "Ciseaux") ||
        (coupJoueur === "Papier" && coupOrdi === "Pierre") ||
        (coupJoueur === "Ciseaux" && coupOrdi === "Papier")
    ) {
        message += "Vous gagnez !";
        victoires++;
    } else {
        message += "Vous perdez !";
        defaites++;
    }

    resultat.textContent = message;
    updateCompteurs();
}

function updateCompteurs() {
    victoiresEl.textContent = victoires;
    defaitesEl.textContent = defaites;
    nulsEl.textContent = nuls;
}

document.getElementById("pierre").addEventListener("click", () => jouer("Pierre"));
document.getElementById("papier").addEventListener("click", () => jouer("Papier"));
document.getElementById("ciseaux").addEventListener("click", () => jouer("Ciseaux"));