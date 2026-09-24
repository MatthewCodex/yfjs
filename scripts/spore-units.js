
// Create and load Uley unit
const uley_module = require("uley");

// Create spore reconstructor and set up stats
const spore_factory = extend(Reconstructor, 'spore-reconstructor', {
  buildVisibility: BuildVisibility.shown,
  size: 5,
  category: Category.units,
  constructTime: 60 * 15
});

spore_factory.requirements = ItemStack.with(
    Items.copper, 350,
    Items.lead, 450,
    Items.silicon, 200,
    Items.metaglass, 300,
    Items.sporePod, 5,
);

// Shoutout to Dimension Crystal mod
const createUnitPlan = (unitFrom, unitTo) => {
    var a = java.util.Arrays.copyOf(Blocks.tetrativeReconstructor.upgrades.get(0), 2);
    a[0] = unitFrom;
    a[1] = unitTo;
    return a;
}

// Add units to spore reconstructor
spore_factory.upgrades.add(
    createUnitPlan(UnitTypes.mega,uley_module.uley_unit)// uley_module.uley_unit),
);



const abc = extend(Wall, "abc", {size: 1});

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
        const LightningClass = Packages.mindustry.entities.Lightning;
        
        LightningClass.create(
            this.team, 
            Color.white, 
            damage, 
            posX, 
            posY, 
            angle, 
            length
        );

        Sounds.spark.at(this.x, this.y);
    }
});
