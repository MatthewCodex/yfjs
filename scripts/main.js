const battery_lightning = extend(Battery, "abc", {size: 1, category: Category.units, buildVisibility: BuildVisibility.shown});

battery_lightning.buildType = () => extend(Battery.BatteryBuild, battery_lightning, {
    onDestroyed: function() {
        this.super$onDestroyed();

        const LightningClass = Packages.mindustry.entities.Lightning;
        for(let i = 0; i < 10; i++) {
        // 1. Force your numeric values to be strict primitives for Java
        // 'length' MUST be parsed as an explicit integer or Java rejects the method match
        let damage = parseFloat(25.0);
        let posX = parseFloat(this.x);
        let posY = parseFloat(this.y);
        let angle = parseFloat(Mathf.random(360.0));
        let length = parseInt(16); 

        //  2. Safely call the method using a guaranteed color (Color.white)
        // to ensure an undefined color isn't causing the method match failure
        
        LightningClass.create(
            this.team, 
            Color.white, 
            damage, 
            posX, 
            posY, 
            angle,
            length
        );
        }
        //Sounds.spark.at(this.x, this.y);
    }
});

