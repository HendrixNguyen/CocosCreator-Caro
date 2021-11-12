import PlayerTurn from './PlayerTurn';
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass()
export default class NewScript extends cc.Component {

    @property([cc.Label])
    btnList: cc.Label[] = [];

    playerSide: string;

    @property({type: PlayerTurn})
    playerTurn: PlayerTurn = null;

    // LIFE-CYCLE CALLBACKS:

    //Dont know this function ?
    setGameControlReferenceOnButtons() {
        for (let i = 0; i < this.btnList.length; i++) {
            this.btnList[i].getComponentInChildren(PlayerTurn).setGameControllerReference(this);
        };
    }

    endTurn(): void {
        if( this.btnList[0].string === this.playerSide && this.btnList[1].string === this.playerSide && this.btnList[2].string === this.playerSide) {
            this.GameOver();
        };
        if (this.btnList[3].string === this.playerSide && this.btnList[4].string === this.playerSide && this.btnList[5].string === this.playerSide) {
            this.GameOver();
        };

        this.changeSides();
    }

    changeSides() {
        this.playerSide = (this.playerSide === "X") ? "O" : "X";
    }

    getPlayerSide(): string {
        // console.log(playerSide);
        // return playerSide.toString();
        return this.playerSide;
    }

    GameOver() {
        for (let i = 0; i < this.btnList.length; i++) {
            this.btnList[i].getComponentInChildren(cc.Button).interactable = false;
        }
    }

    onLoad() {

    }

    start() {    }


    // update (dt) {}
}
