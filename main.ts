basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 199)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 199)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 199)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 199)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 199)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 199)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 199)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 199)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 199)
    }
})
