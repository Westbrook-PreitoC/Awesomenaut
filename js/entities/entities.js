game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "player",
                width: 64,
                height: 64,
                spritewidth: "64",
                spriteheight: "64",
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
            }]);

        this.body.setVelocity(5, 20);

    },
    update: function(delta) {
        if (me.input.isKeyPressed("right")) {
            //sets the position of my x by adding the velocity defined above in
            //setVelocity() and multiplying it by me.timer.tick.
            //me.timer.tickmakes the movement look smooth
            this.body.vel.x += this.body.accel.x * me.timer.tick;
        }
        else if (me.input.isKeyPressed("left")) {

            this.body.vel.x -= this.body.accel.x / me.timer.tick;
        }
        else {
            this.body.vel.x = 0;
        }
        //sets the y position of my character by adding the velocity set above in setVelocity() times me.timer.tick
        //me.timer.tick makes the character move at a smooth pace even if updates are irregular

        if (me.input.isKeyPressed("up")) {

            this.body.vel.y -= this.body.accel.y * me.timer.tick;
        }

        this.body.update(delta);
        return true;
    }
});