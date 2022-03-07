
#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER


#Step 1: Create a Roulette Game by uncommenting ONLY the following line and then running the script
#near call $CONTRACT createGame --amount 10 --account_id $OWNER

#Step 2: Join the Game by uncommenting ONLY the near call line below and then running the script. 
#This needs the following arguments:
#Pass in the _gameid number returned in the command line from calling createGame 
#Pass in your guess as either true or false
#Pass in an amount of money 
#finally pass in your testnet account
#near call $CONTRACT joinGame '{"_gameId":338757941, "_guess":true}' --amount 10 --account_id melchizedek.testnet

#Step 3: call endGame by uncommenting ONLY the following line and then running the script
#near call $CONTRACT endGame '{"_gameId":338757941}' --account_id $OWNER
