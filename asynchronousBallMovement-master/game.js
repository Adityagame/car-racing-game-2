class game {
    constructor () {

    }
    getState() {
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",function(data) {
            gameState=data.val()
        })
    }
    update(State) {
        database.ref('gameState').update({
           gameState:State 
        })
    }
    start() {
        if (gameState==0) {
            player1=new pl()
            player1.getCount()
            form1=new form()
            form1.display()
        }
    }
}