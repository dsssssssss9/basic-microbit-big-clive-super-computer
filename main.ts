let Delay = 20
led.setDisplayMode(DisplayMode.Greyscale)
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
    basic.pause(randint(0, Delay))
    led.unplot(randint(0, 4), randint(0, 4))
    basic.pause(randint(0, Delay))
    led.toggle(randint(0, 4), 0)
})
