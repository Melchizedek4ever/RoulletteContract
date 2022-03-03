
import { context, logging, storage, PersistentDeque, u128, RNG, PersistentMap, ContractPromiseBatch } from "near-sdk-as";

enum GameState {
    Created,
    Joined,
    Ended
}
    @nearBindgen
export class Roulette {
    gameId: u32;
	player: string;
	guess: boolean;
	initialAmount: u128;	
    betAmount: u128;
    winner: string;
    gameState: GameState

    constructor() {
        const rng = new RNG<u32>(1, u32.MAX_VALUE);
        const roll = rng.next();
        this.gameId = roll;
        this.player = "None";
        this.guess = false;
        this.initialAmount = context.attachedDeposit;
        this.betAmount = u128.Zero;
        this.gameState = GameState.Created;
        this.winner = context.sender;
    }    
}

//const games = new PersistentDeque<Roulette>("r");
const gameMap = new PersistentMap<u32, Roulette>("gr");

export function createGame(): u32 {
    logging.log("createGame() was called");
    const roulette = new Roulette();
//  games.pushFront(roulette);
    gameMap.set(roulette.gameId, roulette);
    return roulette.gameId;
}

export function joinGame(_gameId: u32, _guess:boolean): boolean {
    logging.log("joinGame() was called");
    assert(context.attachedDeposit !=u128.Zero, "You have no chips to play with!")
    if(context.attachedDeposit == u128.Zero){
        return false;
    }
    const game = gameMap.getSome(_gameId);
    game.player = context.sender
    game.guess = _guess;
    game.gameState = GameState.Joined;
    game.betAmount = context.attachedDeposit;
    gameMap.set(_gameId, game);
    return true;

}

export function endGame(_gameId: u32): string {
    logging.log("endGame() was called")
    const game = gameMap.getSome(_gameId);
    const rng = new RNG<u32>(1, 36);
    const winning_num = rng.next();
    
    if(winning_num%2 == 1){
        logging.log("your number is odd ")
        if(game.guess == false){
            game.winner = game.player;
        }
    }
    else{
        if(game.guess == true){
            logging.log("your number is even")
            game.winner = game.player;
        }
    }

game.gameState = GameState.Ended;    
gameMap.set(_gameId, game);

const to_beneficiary = ContractPromiseBatch.create(game.winner);
to_beneficiary.transfer(u128.add(game.betAmount, game.initialAmount));

return game.winner;
}