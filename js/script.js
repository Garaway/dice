

    let score0El = document.getElementById('score--0');
    let score1El = document.getElementById('score--1');
    let current0El = document.getElementById('current--0');
    let current1El = document.getElementById('current--1');
    let player0 = document.querySelector('.player--0');
    let player1 = document.querySelector('.player--1');

    let btnRoll = document.querySelector('.btn__roll-dice');
    let btnHold = document.querySelector('.btn__hold')
    let btnNewGame = document.querySelector('.btn__new-game');
    let dice = document.querySelector('.dice');


    let activePlayer = 0;
    let scoreCurrent = 0;
    let scores = [0, 0];
    let playing = true;

    const zeroing = function () {
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        dice.classList.add('hidden');

        current0El.textContent = 0;
        current1El.textContent = 0;
        score0El.textContent = 0;
        score1El.textContent = 0;

        playing = true;
        scoreCurrent = 0;
        activePlayer = 0;
        scores = [0, 0];

        player0.classList.remove('player--winner');
        player1.classList.remove('player--winner');
    }

    zeroing();

    const switchPlayer = function () {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        scoreCurrent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }

    btnRoll.addEventListener('click', function () {
        if (playing) {
            let diceRandom = Math.trunc(Math.random() * 6) + 1;

            dice.classList.remove('hidden');
            dice.src = `img/dice-${diceRandom}.png`;
            console.log(diceRandom);

            if (diceRandom !== 1) {
                scoreCurrent += diceRandom;
                document.getElementById(`current--${activePlayer}`).textContent = scoreCurrent;
            } else {
                switchPlayer();
            }
        }
    })

    btnHold.addEventListener('click', function () {
        if (playing) {
            scores[activePlayer] += scoreCurrent;

            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

            if (scores[activePlayer] >= 20) {
                playing = false;
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            } else {
                switchPlayer();
            }
        }
    })


    btnNewGame.addEventListener('click', zeroing);




