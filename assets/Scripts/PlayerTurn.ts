// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass()
export default class NewScript extends cc.Component {
    game = null;

    @property({type: cc.Button})
    button: cc.Button = null;

    @property(cc.Label)
    buttonText: cc.Label = null;

    @property()
    playerSide: string;

    // LIFE-CYCLE CALLBACKS:

    setSpace() {
        this.playerSide = this.game.getPlayerSide();
        this.buttonText.string = this.playerSide;
        // this.buttonText.string = this.playerSide;
        this.button.interactable = false;
        this.game.endTurn();
    };

    init(game) {
        this.game = this.node.parent.getComponent("Game");
    }
    onLoad() {

    }

    start () {

    }

    // update (dt) {}
}
