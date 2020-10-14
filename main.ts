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
    led.plot(randint(0, 4), randint(0, 4))
    basic.pause(randint(0, 20))
    led.unplot(randint(0, 4), randint(0, 4))
    basic.pause(randint(0, 20))
})
