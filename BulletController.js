export default class BulletController () {

    constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletsAtATime = maxBulletsAtATime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("sounds/shoot.wav");
    }

    shoot() {

    }
}