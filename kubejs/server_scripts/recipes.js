ServerEvents.recipes(event => {
    event.shapeless('plushie_buddies:plushie_chicken',
        ['plushie_buddies:fabric', 'plushie_buddies:sewing_needle', 'plushie_buddies:stuffing', 'minecraft:egg']
    ).stage('chicken_plush');

    event.shapeless('plushie_buddies:plushie_frog',
        ['plushie_buddies:fabric', 'plushie_buddies:sewing_needle', 'plushie_buddies:stuffing', 'ribbits:maraca']
    ).stage('frog_plush');

    event.remove({output: 'naturescompass:naturescompass'});
    event.shaped('naturescompass:naturescompass', [
        'SWS',
        'WCW',
        'SWS'
    ], {
        S: "#minecraft:saplings",
        W: "#minecraft:logs",
        C: "minecraft:compass"
    }).stage('natures_compass');

    event.shapeless('naturescompass:naturescompass', ['naturescompass:naturescompass', 'minecraft:compass'])
    .stage('natures_compass');

    event.remove({output: 'create:dough'});
    event.remove({output: 'create:wheat_flour'});
    //event.custom({result: 'farm_and_charm:dough', inputs: ['minecraft:water_bucket'], type: 'farm_and_charm:crafting_bowl'});
    //event.remove({input: 'create:wheat_flour'});
    //event.remove('create:wheat_flour');
    //event.addRecipe({input: ['farm_and_charm:yeast', 'farm_and_charm']})
    event.remove({input: ['create:wheat_flour', 'minecraft:water_bucket'], type: 'minecraft:crafting_shapeless'});
    event.remove({input: 'create:wheat_flour', type: 'create:splashing'});
    event.remove({input: 'create:wheat_flour', type: 'create:mixing'});

    var ingredients = ['#farm_and_charm:flour', 'farm_and_charm:yeast']
    ingredients.push({ fluid: 'minecraft:water', amount: 81000});
    event.recipes.create.mixing(Item.of('farm_and_charm:dough', 5), ingredients);

    event.recipes.create.crushing([Item.of('farm_and_charm:flour',2), Item.of('farm_and_charm:flour', 2).withChance(0.25), Item.of('minecraft:wheat_seeds', 2).withChance(0.25)], "#forge:grains/wheats");
    event.recipes.create.milling([Item.of('farm_and_charm:flour',2), Item.of('farm_and_charm:flour', 2).withChance(0.50), Item.of('minecraft:wheat_seeds', 2).withChance(0.25)], "#forge:grains/wheats")
    
    event.recipes.create.milling(Item.of('minecraft:redstone',2), 'spelunkery:cinnabar');
    event.recipes.create.milling(Item.of('minecraft:redstone',6), 'spelunkery:rough_cinnabar');
    //event.recipes.create.sandpaper_polishing(Item.of('spelunkery:cinnabar',2), 'spelunkery:rough_cinnabar');

    event.recipes.create.pressing(Item.of('betterend:thallasium_forged_plate'), 'betterend:thallasium_ingot');
    event.recipes.create.pressing(Item.of('betterend:terminite_forged_plate'), 'betterend:terminite_ingot');
    event.recipes.create.pressing(Item.of('betterend:aeternium_forged_plate'), 'betterend:aeternium_ingot');

    event.shaped('ribbits:maraca', [
        'S',
        'W'
    ], {S: "#c:seeds", W: "minecraft:stick"});
    //event.recipes.create.mixing([Fluid.of('minecraft:water'), 'minecraft:dead_bush'], ['#minecraft:saplings', '#minecraft:saplings']);
});
