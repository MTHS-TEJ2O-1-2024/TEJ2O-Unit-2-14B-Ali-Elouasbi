/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program shows while loops in action
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, the sprite moves clockwise
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite([loopCounter][0], [loopCounter][1])

    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, [loopCounter][0])
        loopCounter += 1
        basic.pause(500)
    }
    
    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.Y, [loopCounter][0])
        loopCounter += 1
        basic.pause(500)
    }

    loopCounter = 0
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, [loopCounter][0])
        loopCounter =- 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the sprite moves counter-clockwise
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    loopCounter -= 1
    sprite = game.createSprite([loopCounter][0], [loopCounter][1])

    while (loopCounter >= 5) {
        sprite.set(LedSpriteProperty.X, [loopCounter][0])
        loopCounter -= 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
