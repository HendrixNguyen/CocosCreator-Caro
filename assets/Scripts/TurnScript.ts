// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameScript from "./GameScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
        type: [cc.SpriteFrame]
    })
    player: cc.SpriteFrame[] = [];

    spriteRender = new cc.Sprite();

    // @property({
    //     type: GameScript
    // })
    // gameScript: GameScript;

    gameBoard = new GameScript();

    index: number;

    onMouseDown() {
        // this.index = this.node.parent.getComponent(GameScript).playerTurn();
        // this.spriteRender.spriteFrame = this.player[this.index];
        this.index = this.gameBoard.playerTurn();
        console.log(this.index);
        this.spriteRender.spriteFrame = this.player[this.index];
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.spriteRender = this.node.getComponent(cc.Sprite);

        this.node.on('mousedown', this.onMouseDown, this);
    }

    start() {
        this.spriteRender.spriteFrame = null;

    }

    // update (dt) {}
}
