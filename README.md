# RoulletteContract

A simple game of roulette in Assemblyscript. You will bet for some amount and your bet will be either Even or Odd, randomly generated by the Roulette System and will range between 1 and 36. You will guess either true or false as to wether the bet is even or odd.
The winner will be either the contract AKA the casino or you, the player. This game is inspired by Gyan Lakshmi.

INSTRUCTIONS:
Make sure you are logged into a testnet account using near login

Build the contract using yarn asb

Run ./scripts/1.init.sh

export CONTRACT=<dev-123-456>
export OWNER=<yourtestnetaccount.testnet>

You will play the game by calling 3 functions sequentially- createGame, joinGame, and endGame using
the 2.run.sh script. 

The specific instructions for this game are inside the script itself. 

Have fun!
