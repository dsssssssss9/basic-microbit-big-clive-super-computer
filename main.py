led.set_display_mode(DisplayMode.GREYSCALE)
basic.clear_screen()
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
basic.pause(100)

def on_forever():
    led.plot_brightness(randint(0, 4), randint(0, 4), randint(0, 255))
    basic.pause(randint(0, 20))
    led.unplot(randint(0, 4), randint(0, 4))
    basic.pause(randint(0, 20))
    led.toggle(randint(0, 4), 0)
basic.forever(on_forever)
