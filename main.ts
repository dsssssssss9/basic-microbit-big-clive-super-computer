basic.clearScreen()
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(100)
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
    basic.pause(50)
})
