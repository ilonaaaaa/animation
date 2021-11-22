class animation extends Phaser.Scene{
    preload(){

        //this.load.image('boy_style_4_run', 'png/run/run-1.png');

        for(let i=1;i<=8;i++) {
            this.load.image('boy_style_4_run' + i, 'png/run/run-' + i + '.png');
        }
    }

    create(){
        this.bgAnimation = this.add.sprite(0, 0, 'run_animation').setOrigin(0,0);
        this.anims.create({
            key: 'animation_run',
            frames: [
                {key:'bg-animation-1'},
                {key:'bg-animation-2'},
                {key:'bg-animation-3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bgAnimation.play('animation');
        }

}
