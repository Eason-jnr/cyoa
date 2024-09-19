document.getElementById('spinButton').addEventListener('click', function() {
    // Disable the button after the first click
    document.getElementById('spinButton').disabled = true;

    // List of buffs and debuffs with corresponding story sections
    const outcomes = {
        'Enrage': 'buff-enrage',
        'Regen': 'buff-regen',
        'Unflinching': 'buff-unflinching',
        'Invincible': 'buff-invincible',
        'Bleed': 'buff-bleed',
        'Curse': 'buff-curse',
        'Doom': 'buff-doom',
        'Hex': 'buff-hex'
    };

    // Randomly pick a buff or debuff
    const keys = Object.keys(outcomes);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const selectedOutcome = keys[randomIndex];

    // Show the result in the modal
    document.getElementById('resultText').innerText = `You got: ${selectedOutcome}`;

    // Show the modal
    document.getElementById('resultModal').style.display = 'block';

    // Handle the continue button click to reveal the relevant story section
    document.getElementById('continueButton').onclick = function() {
        // Hide all buff/debuff story sections first
        for (let outcome in outcomes) {
            document.getElementById(outcomes[outcome]).style.display = 'none';
        }

        // Reveal the selected outcome's story section
        document.getElementById(outcomes[selectedOutcome]).style.display = 'block';

        // Hide the modal
        document.getElementById('resultModal').style.display = 'none';
    };
});