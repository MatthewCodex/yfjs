const abc = extend(Wall, "abc", {size: 1, category: Category.units, buildVisibility: BuildVisibility.shown});

abc.buildType = () => extend(Wall.WallBuild, abc, {
    onDestroyed: function() {
        this.super$onDestroyed();

        // 1. Force your numeric values to be strict primitives for Java
        // 'length' MUST be parsed as an explicit integer or Java rejects the method match
        let damage = parseFloat(25.0);
        let posX = parseFloat(this.x);
        let posY = parseFloat(this.y);
        let angle = parseFloat(Mathf.random(360.0));
        let length = parseInt(10); 

        // 2. Safely call the method using a guaranteed color (Color.white)
        // to ensure an undefined color isn't causing the method match failure
        //const LightningClass = Packages.mindustry.entities.Lightning;
        
        LightningClass.create(
            this.team, 
            Color.white, 
            damage, 
            posX, 
            posY, 
            angle, 
            length
        );

        //Sounds.spark.at(this.x, this.y);
    }
});
require("mod.js")