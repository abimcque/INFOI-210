var hp = 100;

function attack() {
    if (hp === 0) {
        return "It fainted!";
    }
    const damage = Math.floor(Math.random() * 16) + 5;
    const hitChance = Math.random();
    if (hitChance >= 0.9) {
        return "The attack missed!";
    } else if (hp - damage <= 0) {
        hp = 0;
        return "It fainted!";
    } else {
        hp -= damage;
        return `The attack did ${damage} damage!`;
    }
}

document.getElementById("attack").addEventListener("click", function () {
    document.getElementById("status").textContent = attack();
    document.getElementById("hp").textContent = hp;
});