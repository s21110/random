let X = 0
basic.forever(function () {
    X = 0
    for (let index = 0; index < 5; index++) {
        basic.clearScreen()
        led.plot(X, 0)
        basic.pause(100)
        X += 1
    }
})
