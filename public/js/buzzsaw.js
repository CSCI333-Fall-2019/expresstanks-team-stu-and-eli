

// Buzzsaw class
class Buzzsaw {
    constructor(sposX, sposY, color) {
        this.acceleration = createVector(0, 0);
        this.velocity = p5.Vector.random2D();
        this.position = createVector(sposX, sposY);
        this.r = 3.0;
        this.maxspeed = 3;    // Maximum speed
        this.maxforce = 0.02; // Maximum steering force
        this.color = color;

        // Load the buzzsaw sound
//        soundFormats('mp3', 'ogg', 'wav');
//        this.buzzSound = loadSound('sounds/saw.mp3');
    }

    // Forces go into acceleration
    applyForce(force) {
        this.acceleration.add(force);
    }
    
    // Method to update location
    update(target) {
        // Update the steering toward the target
        let steeringForce = this.seek(target.pos);
        this.acceleration.add(steeringForce);
        // Update velocity
        this.velocity.add(this.acceleration);
        // Limit speed
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);
        // Reset acceleration to 0 each cycle
        this.acceleration.mult(0);

//        if (this.buzzSound && dist(this.position.x, this.position.y, target.pos.x, target.pos.y) < 20)
//            buzzSound.play();
    }

    // Render the shot to the screen
    render(loopCount) {
        push();
            translate(this.position.x,this.position.y);
            rotate(loopCount);
            fill(this.color);
            stroke(200);
            rect(0,0, 16, 16);
        pop();
    }

    // A method that calculates and applies a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target) {
        if(!target)
            return;
        let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
        // Normalize desired and scale to maximum speed
        desired.normalize();
        desired.mult(this.maxspeed);
        // Steering = Desired minus Velocity
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce); // Limit to maximum steering force
        return steer;
    }
}