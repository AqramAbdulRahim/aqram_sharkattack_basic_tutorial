namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    mySprite,
    assets.animation`shooting shark`,
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.destroy(effects.disintegrate, 100)
    mySprite.destroy(effects.bubbles, 500)
    game.over(false)
})
let myFood: Sprite = null
let myEnemy: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(60)
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`ocean1`)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    myDecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    myEnemy.setPosition(randint(0, 160), 0)
    myEnemy.vy = 75
    animation.runImageAnimation(
    myEnemy,
    assets.animation`animated enemy`,
    50,
    true
    )
})
game.onUpdateInterval(2100, function () {
    myFood = sprites.create(assets.image`food`, SpriteKind.Food)
    myFood.setPosition(162, randint(5, 115))
    myFood.vx = -95
    animation.runImageAnimation(
    myFood,
    assets.animation`animated food`,
    200,
    true
    )
})
