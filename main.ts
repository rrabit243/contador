let contador = 0
basic.forever(function () {
    contador = 0
    if (0 < 10) {
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            contador += 1
            basic.showNumber(contador)
        }
    }
})
