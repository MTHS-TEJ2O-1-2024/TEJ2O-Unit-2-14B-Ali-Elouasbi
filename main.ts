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

// Define the perimeter positions
const perimeter = [
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
    [4, 1], [4, 2], [4, 3], [4, 4], 
    [3, 4], [2, 4], [1, 4], [0, 4], 
    [0, 3], [0, 2], [0, 1]  
]

// when "A" is pressed, the sprite moves clockwise
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(perimeter[loopCounter][0], perimeter[loopCounter][1])

    while (loopCounter < perimeter.length) {
        sprite.set(LedSpriteProperty.X, perimeter[loopCounter][0])
        sprite.set(LedSpriteProperty.Y, perimeter[loopCounter][1])
        loopCounter += 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the sprite moves counter-clockwise
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    loopCounter = perimeter.length - 1
    sprite = game.createSprite(perimeter[loopCounter][0], perimeter[loopCounter][1])

    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, perimeter[loopCounter][0])
        sprite.set(LedSpriteProperty.Y, perimeter[loopCounter][1])
        loopCounter -= 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
