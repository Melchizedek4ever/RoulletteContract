#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable"

#echo "deleting $CONTRACT and setting $OWNER as beneficiary"
#echo
#near delete $CONTRACT $OWNER

echo ----------------------------------------------------------------
echo
echo "cleaning up the /neardev folder"
echo
rm -rf /neardev

# exit on first error after this point to avoid redeploying with successful build
set -e

echo ----------------------------------------------------------------
echo 
echo "building the contract"
echo
yarn asb

echo ----------------------------------------------------------------
echo
echo "deploying the contract"
echo
near dev-deploy ./build/release/roullettecontract.wasm