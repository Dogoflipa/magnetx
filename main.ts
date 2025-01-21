loops.everyInterval(100, function () {
    meter.show(input.magneticForce(Dimension.Strength) / 10)
})
