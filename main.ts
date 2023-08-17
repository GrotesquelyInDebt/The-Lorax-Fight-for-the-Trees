enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkingRight,
    Punching,
    Walking2
}
namespace SpriteKind {
    export const theotherplayer = SpriteKind.create()
    export const Countdown = SpriteKind.create()
    export const CRIT = SpriteKind.create()
    export const CRIT2 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    75,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    assets.animation`myAnim2`,
    75,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    pause(400)
    Smashed = 1
    animation.stopAnimation(animation.AnimationTypes.MovementAnimation, mySprite2)
    mySprite2.setImage(assets.image`myImage0`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.theotherplayer, function (sprite, otherSprite) {
    if (punched == 1) {
        if (randint(1, 5) == 1) {
            statusbar2.value += -15
            punched = 0
            mySprite5 = sprites.create(assets.image`myImage14`, SpriteKind.CRIT2)
            mySprite5.setPosition(mySprite2.x + 3.5, mySprite2.y - 25)
            pause(500)
            sprites.destroy(mySprite5, effects.disintegrate, 500)
        } else {
            statusbar2.value += -7.5
            punched = 0
        }
    } else if (Smashed == 1) {
        if (randint(1, 5) == 1) {
            statusbar.value += -15
            Smashed = 0
            mySprite4 = sprites.create(assets.image`myImage14`, SpriteKind.CRIT)
            mySprite4.setPosition(mySprite.x - 15, mySprite.y - 35)
            pause(500)
            sprites.destroy(mySprite4, effects.spray, 500)
        } else {
            statusbar.value += -7.5
            Smashed = 0
        }
    } else {
        punched = 0
        Smashed = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite2)
    pause(200)
    mySprite2.setImage(assets.image`myImage11`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    pause(200)
    mySprite.setImage(assets.image`myImage3`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    pause(200)
    mySprite.setImage(assets.image`myImage1`)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.setGameOverMessage(true, "The Lorax wins!")
    game.gameOver(true)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverMessage(true, "The Onceler wins!")
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite2, ActionKind.Walking2)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    pause(450)
    punched = 1
    animation.stopAnimation(animation.AnimationTypes.MovementAnimation, mySprite)
    mySprite.setImage(assets.image`myImage`)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite2, ActionKind.Walking2)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite2)
    pause(200)
    mySprite2.setImage(assets.image`myImage13`)
})
/**
 * Don´t touch any keys during the countdown, or else it will say there is an error. Just restart it if you do.
 */
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let punched = 0
let Smashed = 0
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Countdown)
mySprite3.setPosition(37, 4)
mySprite3.setScale(2, ScaleAnchor.Middle)
animation.runImageAnimation(
mySprite3,
assets.animation`myAnim4`,
1000,
false
)
pause(4000)
sprites.destroy(mySprite3, effects.none, 500)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaadddddddddddddddd
    dddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddadddddddddddddddd
    dddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddaaaaddddddddddddddd
    ddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddaaaaaddddddddddddddd
    dddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddaaaaaaadddddddddddddd
    dddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddaaaaadadddddddddddddd
    dddddddddddd1dddddddaaaadddddddddddddddddddddddddddd1dddddddaaaadddddddddddddddddddddddddddd1dddddddaaaadddddddddddddddddddddddddddd1dddddddaaaadddddddddddddddd
    dddddddddddd1ddddddaaaaaaadddddddddddddddddddddddddd1ddddddaaaaaaadddddddddddddddddddddddddd1ddddddaaaaaaadddddddddddddddddddddddddd1ddddddaaaaaaadddddddddddddd
    dddddddddddd1dddddaaaaaaaadddddddddddddddddddddddddd1dddddaaaaaaaadddddddddddddddddddddddddd1dddddaaaaaaaadddddddddddddddddddddddddd1dddddaaaaaaaadddddddddddddd
    dddddddddddd1ddddaaaaaaaaaaadddddddddddddddddddddddd1ddddaaaaaaaaaaadddddddddddddddddddddddd1ddddaaaaaaaaaaadddddddddddddddddddddddd1ddddaaaaaaaaaaadddddddddddd
    ddaadddddddd1ddadaaaaaaaaaaaaadddd1dddddddaadddddddd1ddadaaaaaaaaaaaaadddd1dddddddaadddddddd1ddadaaaaaaaaaaaaadddd1dddddddaadddddddd1ddadaaaaaaaaaaaaadddd1ddddd
    daaaaadddddd1ddaaaaaaaaaaaaaaadddd1ddddddaaaaadddddd1ddaaaaaaaaaaaaaaadddd1ddddddaaaaadddddd1ddaaaaaaaaaaaaaaadddd1ddddddaaaaadddddd1ddaaaaaaaaaaaaaaadddd1ddddd
    aaaaaaaadddd1dddaaaaaaaaaaaaaadddd1dddddaaaaaaaadddd1dddaaaaaaaaaaaaaadddd1dddddaaaaaaaadddd1dddaaaaaaaaaaaaaadddd1dddddaaaaaaaadddd1dddaaaaaaaaaaaaaadddd1ddddd
    aaaaaaaaadddd1ddddaaaaaaaaaaaadddd1dddddaaaaaaaaadddd1ddddaaaaaaaaaaaadddd1dddddaaaaaaaaadddd1ddddaaaaaaaaaaaadddd1dddddaaaaaaaaadddd1ddddaaaaaaaaaaaadddd1ddddd
    daaaaaaaaddddd1ddddaaaaaaa444444d11dddd3daaaaaaaaddddd1ddddaaaaaaa444444d11dddd3daaaaaaaaddddd1ddddaaaaaaa444444d11dddd3daaaaaaaaddddd1ddddaaaaaaa444444d11dddd3
    daaaaaaaaaddddd11aaaaaaa4444444441dddd3ddaaaaaaaaaddddd11aaaaaaa4444444441dddd3ddaaaaaaaaaddddd11aaaaaaa4444444441dddd3ddaaaaaaaaaddddd11aaaaaaa4444444441dddd3d
    aaaaaaaadddddddd11aaaaaaaa44a44311ddddddaaaaaaaadddddddd11aaaaaaaa44a44311ddddddaaaaaaaadddddddd11aaaaaaaa44a44311ddddddaaaaaaaadddddddd11aaaaaaaa44a44311dddddd
    aaaaaaaaaddddddaaa1aaaaaaa4aaa4113dddddaaaaaaaaaaddddddaaa1aaaaaaa4aaa4113dddddaaaaaaaaaaddddddaaa1aaaaaaa4aaa4113dddddaaaaaaaaaaddddddaaa1aaaaaaa4aaa4113ddddda
    aaaa1aaddddddaaaaaaaaaaaaaaaaa11ddddddaaaaaa1aaddddddaaaaaaaaaaaaaaaaa11ddddddaaaaaa1aaddddddaaaaaaaaaaaaaaaaa11ddddddaaaaaa1aaddddddaaaaaaaaaaaaaaaaa11ddddddaa
    aaaa1aaaadddddaaaaaaaaaaaaaaa11dddddddaaaaaa1aaaadddddaaaaaaaaaaaaaaa11dddddddaaaaaa1aaaadddddaaaaaaaaaaaaaaa11dddddddaaaaaa1aaaadddddaaaaaaaaaaaaaaa11dddddddaa
    aaaa1aa1aaddddddaaaa44444aaaaaadddddddaaaaaa1aa1aaddddddaaaa44444aaaaaadddddddaaaaaa1aa1aaddddddaaaa44444aaaaaadddddddaaaaaa1aa1aaddddddaaaa44444aaaaaadddddddaa
    aaaa1aa1aaddddd34444444444aaaaaaaaadddaaaaaa1aa1aaddddd34444444444aaaaaaaaadddaaaaaa1aa1aaddddd34444444444aaaaaaaaadddaaaaaa1aa1aaddddd34444444444aaaaaaaaadddaa
    aaaa1a1aaadddd44444444444aa444aaaaadddaaaaaa1a1aaadddd44444444444aa444aaaaadddaaaaaa1a1aaadddd44444444444aa444aaaaadddaaaaaa1a1aaadddd44444444444aa444aaaaadddaa
    aaaa111a44ad3334444444444443444aaadddddaaaaa111a44ad3334444444444443444aaadddddaaaaa111a44ad3334444444444443444aaadddddaaaaa111a44ad3334444444444443444aaaddddda
    aaaa11a44aaa44444444444444443444aaddddaaaaaa11a44aaa44444444444444443444aaddddaaaaaa11a44aaa44444444444444443444aaddddaaaaaa11a44aaa44444444444444443444aaddddaa
    aaa11aaaaa4444444444444444444aaaaaaaaaaaaaa11aaaaa4444444444444444444aaaaaaaaaaaaaa11aaaaa4444444444444444444aaaaaaaaaaaaaa11aaaaa4444444444444444444aaaaaaaaaaa
    aa11aaaa4444444444444444a11aaaaaaaaa1aaaaa11aaaa4444444444444444a11aaaaaaaaa1aaaaa11aaaa4444444444444444a11aaaaaaaaa1aaaaa11aaaa4444444444444444a11aaaaaaaaa1aaa
    aa1aaaa4aaaa444344a44344a11aaa44aaaa1aaaaa1aaaa4aaaa444344a44344a11aaa44aaaa1aaaaa1aaaa4aaaa444344a44344a11aaa44aaaa1aaaaa1aaaa4aaaa444344a44344a11aaa44aaaa1aaa
    aa1a1aaaaaa444a44aa444aaa11aaa144aaa1aaaaa1a1aaaaaa444a44aa444aaa11aaa144aaa1aaaaa1a1aaaaaa444a44aa444aaa11aaa144aaa1aaaaa1a1aaaaaa444a44aa444aaa11aaa144aaa1aaa
    a11a1aaaaaa4aaa4aaaaa4aaa11aaa1aaaaa1aaaa11a1aaaaaa4aaa4aaaaa4aaa11aaa1aaaaa1aaaa11a1aaaaaa4aaa4aaaaa4aaa11aaa1aaaaa1aaaa11a1aaaaaa4aaa4aaaaa4aaa11aaa1aaaaa1aaa
    a1111aaaaaaaa4aaa44aaaaaa11aaa1aaaaaa1aaa1111aaaaaaaa4aaa44aaaaaa11aaa1aaaaaa1aaa1111aaaaaaaa4aaa44aaaaaa11aaa1aaaaaa1aaa1111aaaaaaaa4aaa44aaaaaa11aaa1aaaaaa1aa
    a111aaaaaaaa44aa44aaaaaaa11aaa1aaaaaa1aaa111aaaaaaaa44aa44aaaaaaa11aaa1aaaaaa1aaa111aaaaaaaa44aa44aaaaaaa11aaa1aaaaaa1aaa111aaaaaaaa44aa44aaaaaaa11aaa1aaaaaa1aa
    a1aaaaaaaaaa4aaaaaaa1aaaa11aa1aaaaaaa111a1aaaaaaaaaa4aaaaaaa1aaaa11aa1aaaaaaa111a1aaaaaaaaaa4aaaaaaa1aaaa11aa1aaaaaaa111a1aaaaaaaaaa4aaaaaaa1aaaa11aa1aaaaaaa111
    11aaaaaaaaaaaaaaaaaa1aaaa111a1aaaaaaaaa111aaaaaaaaaaaaaaaaaa1aaaa111a1aaaaaaaaa111aaaaaaaaaaaaaaaaaa1aaaa111a1aaaaaaaaa111aaaaaaaaaaaaaaaaaa1aaaa111a1aaaaaaaaa1
    a1aaaaaaaaaaaaaaaaaa1aaaa1111aaaaaaaaaaaa1aaaaaaaaaaaaaaaaaa1aaaa1111aaaaaaaaaaaa1aaaaaaaaaaaaaaaaaa1aaaa1111aaaaaaaaaaaa1aaaaaaaaaaaaaaaaaa1aaaa1111aaaaaaaaaaa
    a1aaaaaaaaaaaaaaaaaa1aaaa1111aaa444aaaaaa1aaaaaaaaaaaaaaaaaa1aaaa1111aaa444aaaaaa1aaaaaaaaaaaaaaaaaa1aaaa1111aaa444aaaaaa1aaaaaaaaaaaaaaaaaa1aaaa1111aaa444aaaaa
    a1444aa444aaaaaaaaaa1aaaa111aaa444aaaaaaa1444aa444aaaaaaaaaa1aaaa111aaa444aaaaaaa1444aa444aaaaaaaaaa1aaaa111aaa444aaaaaaa1444aa444aaaaaaaaaa1aaaa111aaa444aaaaaa
    444444aa444aaaaaaaaa1aaaa111aa444aa44444444444aa444aaaaaaaaa1aaaa111aa444aa44444444444aa444aaaaaaaaa1aaaa111aa444aa44444444444aa444aaaaaaaaa1aaaa111aa444aa44444
    4444aaaa1444aaaaaaaa1aaaa111aaaaa44444444444aaaa1444aaaaaaaa1aaaa111aaaaa44444444444aaaa1444aaaaaaaa1aaaa111aaaaa44444444444aaaa1444aaaaaaaa1aaaa111aaaaa4444444
    4444444a1aaaaaaaa1aa1aaaa111aaaa444444444444444a1aaaaaaaa1aa1aaaa111aaaa444444444444444a1aaaaaaaa1aa1aaaa111aaaa444444444444444a1aaaaaaaa1aa1aaaa111aaaa44444444
    4444444444aaaaaaa1aa1aaaa1111a4444a444444444444444aaaaaaa1aa1aaaa1111a4444a444444444444444aaaaaaa1aa1aaaa1111a4444a444444444444444aaaaaaa1aa1aaaa1111a4444a44444
    44444a4444aaaaaaa1aa1aaaa111444414aa44a444444a4444aaaaaaa1aa1aaaa111444414aa44a444444a4444aaaaaaa1aa1aaaa111444414aa44a444444a4444aaaaaaa1aa1aaaa111444414aa44a4
    a444aaa11a11aaaaa1aa1aaaa11114441aa44aaaa444aaa11311aaaaa1aa1aaaa11114441aa44aaaa444aaa11311aaaaa1aa1aaaa11114441aa44aaaa444aaa11311aaaaa1aa1aaaa11114441aa44aaa
    aa14aaa11a1aaaaaa11a11aaa1111aaa11aaaaaaaa14aaa1131aaaaaa11a11aaa1111aaa11aaaaaaaa14aaa1131aaaaaa11a11aaa1111aaa11aaaaaaaa14aaa1131aaaaaa11a11aaa1111aaa11aaaaaa
    aa1aaaa1111aaaaaaa1111aaa1111aaa11aaaaaaaa1aaaa1111aaaaaaa1111aaa1111aaa11aaaaaaaa1aaaa1111aaaaaaa1111aaa1111aaa11aaaaaaaa1aaaa1111aaaaaaa1111aaa1111aaa11aaaaaa
    aa1aaaa11aaaaaaaaaa111aaa1111aaa11aaaaaaaa1aaaa11aaaaaaaaaa111aaa1111aaa11aaaaaaaa1aaaa11aaaaaaaaaa111aaa1111aaa11aaaaaaaa1aaaa11aaaaaaaaaa111aaa1111aaa11aaaaaa
    aa1aaaa11aaaaaaaaaaa111aa1111aaa11aaaaaaaa1aaaa11aaaaaaaaaaa111aa1111aaa11aaaaaaaa1aaaa11aaaaaaaaaaa111aa1111aaa11aaaaaaaa1aaaa11aaaaaaaaaaa111aa1111aaa11aaaaaa
    aaa1aaa11aaaaaaaaaaa111aa1111aaa11aaaaaaaaa1aaa11aaaaaaaaaaa111aa1111aaa11aaaaaaaaa1aaa11aaaaaaaaaaa111aa1111aaa11aaaaaaaaa1aaa11aaaaaaaaaaa111aa1111aaa11aaaaaa
    aaa11a111aaaa44a444aa41aa1111aaa11aa1aaaaaa11a111aaaa44a444aa41aa1111aaa11aa1aaaaaa11a111aaaa44a444aa41aa1111aaa11aa1aaaaaa11a111aaaa44a444aa41aa1111aaa11aa1aaa
    aaa111111aaa444444444444a11111aa11aa1aaaaaa111111aaa444444444444a11111aa11aa1aaaaaa111111aaa444444444444a11111aa11aa1aaaaaa111111aaa444444444444a11111aa11aa1aaa
    aaaa11111aa4444444444444111111a11aa11aaaaaaa11111aa4444444444444111111a11aa11aaaaaaa11111aa4444444444444111111a11aa11aaaaaaa11111aa4444444444444111111a11aa11aaa
    aaaaa1111aaa4434444444a4111111a11aa1aaaaaaaaa1111aaa4434444444a4111111a11aa1aaaaaaaaa1111aaa4434444444a4111111a11aa1aaaaaaaaa1111aaa4434444444a4111111a11aa1aaaa
    aaaaa111aa44aa444444a4aa111111a11a1aaaaaaaaaa111aa44aa444444a4aa111111a11a1aaaaaaaaaa111aa44aa444444a4aa111111a11a1aaaaaaaaaa111aa44aa444444a4aa111111a11a1aaaaa
    aaaaa111aaaaa44aa44aa4aa111111a111aaaaaaaaaaa111aaaaa44aa44aa4aa111111a111aaaaaaaaaaa111aaaaa44aa44aa4aa111111a111aaaaaaaaaaa111aaaaa44aa44aa4aa111111a111aaaaaa
    aaaaa111aaa1a4aaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1a4aaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1a4aaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1a4aaaaaaaaaaa1111111aaaaaaaa
    aaaaa111aaa1aaaaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1aaaaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1aaaaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1aaaaaaaaaaaaa1111111aaaaaaaa
    aaaaa111aaa1a1aaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa1111111aaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa1111111aaaaaaaa
    aaaaa111aaa1a1aaaaaaaaaaa111111aaaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa111111aaaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa111111aaaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa111111aaaaaaaaa
    aaaaa111aaa1a1aaaaaaaaaaa11111aaaaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa11111aaaaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa11111aaaaaaaaaaaaaaa111aaa1a1aaaaaaaaaaa11111aaaaaaaaaa
    aaaaa11aaaa111aaaaaaaaaaa11111aaaaaaaaaaaaaaa11aaaa111aaaaaaaaaaa11111aaaaaaaaaaaaaaa11aaaa111aaaaaaaaaaa11111aaaaaaaaaaaaaaa11aaaa111aaaaaaaaaaa11111aaaaaaaaaa
    aaaaa11aaa111aaaaaaaaaaaa11111aaaaaaaaaaaaaaa11aaa111aaaaaaaaaaaa11111aaaaaaaaaaaaaaa11aaa111aaaaaaaaaaaa11111aaaaaaaaaaaaaaa11aaa111aaaaaaaaaaaa11111aaaaaaaaaa
    aaaa111aaa1aaaaaaaaaddaaa11111adaaaaaaaaaaaa111aaa1aaaaaaaaaddaaa11111adaaaaaaaaaaaa111aaa1aaaaaaaaaddaaa11111adaaaaaaaaaaaa111aaa1aaaaaaaaaddaaa11111adaaaaaaaa
    aaaa111aaa1aaaaaaaaaadda111111aaddaaaadaaaaa111aaa1aaaaaaaaaadda111111aaddaaaadaaaaa111aaa1aaaaaaaaaadda111111aaddaaaadaaaaa111aaa1aaaaaaaaaadda111111aaddaaaada
    aaaa111a111aaaaaaaaaaaaa1111111aadaaaddaaaaa111a111aaaaaaaaaaaaa1111111aadaaaddaaaaa111a111aaaaaaaaaaaaa1111111aadaaaddaaaaa111a111aaaaaaaaaaaaa1111111aadaaadda
    ddaa111111aaaaaaaadaaaaa1111111aaaaaadaaddaa111111aaaaaaaadaaaaa1111111aaaaaadaaddaa111111aaaaaaaadaaaaa1111111aaaaaadaaddaa111111aaaaaaaadaaaaa1111111aaaaaadaa
    3dda11111aaddaaaaddaaaad1111111daaaaaaaaadda11111aaddaaaaddaaaad1111111daaaaaaaaadda11111aaddaaaaddaaaad1111111daaaaaaaaadda11111aaddaaaaddaaaad1111111daaaaaaaa
    3ddd11111aaaddaaddaadadd1111111daaadaaaaaddd11111aaaddaaddaadadd1111111daaadaaaaaddd11111aaaddaaddaadadd1111111daaadaaaaaddd11111aaaddaaddaadadd1111111daaadaaaa
    3ddd111aaaaaaaaadaaddddd1111111ddaddaadaaddd111aaaaaaaaadaaddddd1111111ddaddaadaaddd111aaaaaaaaadaaddddd1111111ddaddaadaaddd111aaaaaaaaadaaddddd1111111ddaddaada
    dddd111daaaaaaaaaaaddddd1111111ddddaaddddddd111daaaaaaaaaaaddddd1111111ddddaaddddddd111daaaaaaaaaaaddddd1111111ddddaaddddddd111daaaaaaaaaaaddddd1111111ddddaaddd
    dddd111daaadaadddaaddddd1111111ddddddddddddd111daaadaadddaaddddd1111111ddddddddddddd111daaadaadddaaddddd1111111ddddddddddddd111daaadaadddaaddddd1111111ddddddddd
    dddd111daadddaddddaddddd1111111ddddddddddddd111daadddaddddaddddd1111111ddddddddddddd111daadddaddddaddddd1111111ddddddddddddd111daadddaddddaddddd1111111ddddddddd
    dddd111ddddddddddddddddd1111111ddddddddddddd111ddddddddddddddddd1111111ddddddddddddd111ddddddddddddddddd1111111ddddddddddddd111ddddddddddddddddd1111111ddddddddd
    dddd1113dddddddddddddddd1111111ddddddddddddd1113dddddddddddddddd1111111ddddddddddddd1113dddddddddddddddd1111111ddddddddddddd1113dddddddddddddddd1111111ddddddddd
    dddd1113dddddddddddddddd1111111ddddddddddddd1113dddddddddddddddd1111111ddddddddddddd1113dddddddddddddddd1111111ddddddddddddd1113dddddddddddddddd1111111ddddddddd
    dddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddd
    dddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddd
    dddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddddddd1111dddddddddddddddd1111111ddddddddd
    dddd11113ddddddddddddddd1111111ddddddddddddd11113ddddddddddddddd1111111ddddddddddddd11113ddddddddddddddd1111111ddddddddddddd11113ddddddddddddddd1111111ddddddddd
    dddd11111ddddddddddddddd1111111ddddddddddddd11111ddddddddddddddd1111111ddddddddddddd11111ddddddddddddddd1111111ddddddddddddd11111ddddddddddddddd1111111ddddddddd
    dddd11111ddddddddddddddd1111111ddddddddddddd11111ddddddddddddddd1111111ddddddddddddd11111ddddddddddddddd1111111ddddddddddddd11111ddddddddddddddd1111111ddddddddd
    dddd111113ddddddddddddd311111113dddddddddddd111113ddddddddddddd311111113dddddddddddd111113ddddddddddddd311111113dddddddddddd111113ddddddddddddd311111113dddddddd
    dddd111113ddddddddddddd111111113dddddddddddd111113ddddddddddddd111111113dddddddddddd111113ddddddddddddd111111113dddddddddddd111113ddddddddddddd111111113dddddddd
    ddd3111111ddddddddddddd111111111ddddddddddd3111111ddddddddddddd111111111ddddddddddd3111111ddddddddddddd111111111ddddddddddd3111111ddddddddddddd111111111dddddddd
    ddd3111111dddddddddddd3111111111ddddddddddd3111111dddddddddddd3111111111ddddddddddd3111111dddddddddddd3111111111ddddddddddd3111111dddddddddddd3111111111dddddddd
    99311111113ddddddddddd11111111999999999999311111113ddddddddddd11111111999999999999311111113ddddddddddd11111111999999999999311111113ddddddddddd111111119999999999
    99999999111ddddddddd3311199999999999999999999999111ddddddddd3311199999999999999999999999111ddddddddd3311199999999999999999999999111ddddddddd33111999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.theotherplayer)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
let anim = animation.createAnimation(ActionKind.Walking, 75)
let anim2 = animation.createAnimation(ActionKind.Walking2, 125)
controller.moveSprite(mySprite, 100, 0)
controller.player2.moveSprite(mySprite2, 80, 0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.value = 100
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
mySprite.setPosition(40, 99)
mySprite2.setPosition(130, 67)
statusbar.attachToSprite(mySprite, -2, -18)
statusbar2.attachToSprite(mySprite2, -12, 0)
statusbar.setColor(9, 11)
statusbar2.setColor(9, 11)
anim.addAnimationFrame(assets.image`myImage1`)
anim.addAnimationFrame(assets.image`myImage2`)
anim.addAnimationFrame(assets.image`myImage3`)
anim.addAnimationFrame(assets.image`myImage3`)
anim.addAnimationFrame(assets.image`myImage2`)
anim.addAnimationFrame(assets.image`myImage1`)
anim.addAnimationFrame(assets.image`myImage1`)
anim.addAnimationFrame(assets.image`myImage2`)
anim.addAnimationFrame(assets.image`myImage3`)
anim.addAnimationFrame(assets.image`myImage3`)
anim.addAnimationFrame(assets.image`myImage2`)
anim.addAnimationFrame(assets.image`myImage1`)
anim.addAnimationFrame(assets.image`myImage1`)
animation.attachAnimation(mySprite, anim)
anim2.addAnimationFrame(assets.image`myImage12`)
anim2.addAnimationFrame(assets.image`myImage13`)
anim2.addAnimationFrame(assets.image`myImage12`)
anim2.addAnimationFrame(assets.image`myImage11`)
anim2.addAnimationFrame(assets.image`myImage12`)
anim2.addAnimationFrame(assets.image`myImage13`)
anim2.addAnimationFrame(assets.image`myImage12`)
anim2.addAnimationFrame(assets.image`myImage11`)
anim2.addAnimationFrame(assets.image`myImage12`)
anim2.addAnimationFrame(assets.image`myImage13`)
anim2.addAnimationFrame(assets.image`myImage12`)
anim2.addAnimationFrame(assets.image`myImage11`)
animation.attachAnimation(mySprite2, anim2)
forever(function () {
	
})
