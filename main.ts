/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program shows while loops in action
*/

// Variables
let sprite: game.LedSprite = null
let loopCounter = 0

// Setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// When "A" is pressed, the pixels move around the perimeter clockwise
input.onButtonPressed(Button.A, function () {

  // Setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounter = 0

    while (loopCounter < 16) {
        // Move clockwise around the perimeter
        if (loopCounter < 5) {
            // Top
            sprite.set(LedSpriteProperty.X, loopCounter)
            sprite.set(LedSpriteProperty.Y, 0)
        } else if (loopCounter < 9) {
            // Right side
            sprite.set(LedSpriteProperty.X, 4)
            sprite.set(LedSpriteProperty.Y, loopCounter - 4)
        } else if (loopCounter < 13) {
            // Bottom
            sprite.set(LedSpriteProperty.X, 12 - loopCounter)
            sprite.set(LedSpriteProperty.Y, 4)
        } else {
            // Left side
            sprite.set(LedSpriteProperty.X, 0)
            sprite.set(LedSpriteProperty.Y, 16 - loopCounter)
        }
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// When "B" is pressed, the pixels move around the perimeter counterclockwise
input.onButtonPressed(Button.B, function () {

    //Setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    loopCounter = 16

    while (loopCounter >= 0) {
        // Moves sprite
        if (loopCounter < 5) {
            sprite.set(LedSpriteProperty.X, loopCounter)
            sprite.set(LedSpriteProperty.Y, 0)
        } else if (loopCounter < 9) {
            sprite.set(LedSpriteProperty.X, 4)
            sprite.set(LedSpriteProperty.Y, loopCounter - 4)
        } else if (loopCounter < 13) {
            sprite.set(LedSpriteProperty.X, 12 - loopCounter)
            sprite.set(LedSpriteProperty.Y, 4)
        } else {
            sprite.set(LedSpriteProperty.X, 0)
            sprite.set(LedSpriteProperty.Y, 16 - loopCounter)
        }
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
