let distance = 0
let left = 0
let right = 0
let alpha = 0
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    while (distance > 10) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        215,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(100)
        distance = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    if (distance <= 10) {
        robotbit.MotorStopAll()
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        215,
        robotbit.Motors.M1B,
        0
        )
        basic.pause(1150)
        left = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    while (left > 10) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        215,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(100)
        left = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    if (left <= 10) {
        robotbit.MotorStopAll()
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(1185)
        right = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    while (right > 10) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        215,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(100)
        right = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    if (right <= 10) {
        robotbit.MotorStopAll()
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(1185)
        alpha = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    while (alpha > 10) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        215,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(100)
        alpha = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
    }
    if (alpha <= 10) {
        robotbit.MotorStopAll()
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        -177
        )
        basic.pause(1185)
    }
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # . # . .
        . # # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . . #
        . # . . #
        . # # # #
        . . . . #
        . # # # #
        `)
    basic.pause(500)
})
