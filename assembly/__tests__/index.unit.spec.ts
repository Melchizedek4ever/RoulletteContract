
import{
    createGame,
    endGame,
    joinGame,
} from "../";

import { VMContext, u128, PersistentMap,} from "near-sdk-as";

const contract =("melchizedek.testnet");

describe("Create a game", () => {

/*    it("should create a new game", () => {
        VMContext.setCurrent_account_id(contract);
//        VMContext.setSigner_account_id(contract);
        VMContext.setAttached_deposit(u128.from('50000000000000000000000'));
        expect(createGame).toBeTruthy;
            })
    });
*/
    it("should join game", () => {
        VMContext.setCurrent_account_id(contract);
        VMContext.setAttached_deposit(u128.from('50000000000000000000000'));
        expect(joinGame).toBeTruthy();
    
    it("should end game", () =>{
        VMContext.setCurrent_account_id(contract);
        VMContext.setAttached_deposit(u128.from('50000000000000000000000'));
        expect(endGame).toBeTruthy();
        })
    })})
