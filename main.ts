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
    led.plotBrightness(randint(0, 4), randint(0, 4), randint(0, 255))
    basic.pause(randint(0, 20))
    led.unplot(randint(0, 4), randint(0, 4))
    basic.pause(randint(0, 20))
    led.toggle(randint(0, 4), 0)
})
