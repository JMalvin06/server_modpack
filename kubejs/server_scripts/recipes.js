
const plush_map = {
    plushie_allay: 'minecraft:light_blue_dye',
    plushie_axolotl: 'minecraft:dried_kelp',
    plushie_bee: 'minecraft:honeycomb',
    plushie_chicken: 'minecraft:egg',
    plushie_cow: 'minecraft:leather',
    plushie_fox: 'minecraft:sweet_berries',
    plushie_parrot: 'minecraft:cookie',
    plushie_pig: 'minecraft:carrot',
    plushie_sheep: 'minecraft:white_wool',
    plushie_turtle: 'minecraft:scute',
    plushie_camel: 'minecraft:brown_dye',
    plushie_cat: '#c:raw_fish',
    plushie_creeper: 'minecraft:gunpowder',
    plushie_dolphin: 'minecraft:cyan_dye',
    plushie_enderdragon: 'minecraft:dragon_breath',
    plushie_enderman: 'minecraft:ender_pearl',
    plushie_frog: 'ribbits:maraca',
    plushie_ghast: 'minecraft:ghast_tear',
    plushie_goat: 'minecraft:goat_horn',
    plushie_horse: 'minecraft:saddle',
    plushie_mooshroom: 'minecraft:red_mushroom',
    plushie_panda: 'minecraft:bamboo',
    plushie_polar_bear: 'minecraft:snowball',
    plushie_pufferfish: 'minecraft:pufferfish',
    plushie_rabbit: 'minecraft:rabbit_foot',
    plushie_skeleton_horse: 'minecraft:saddle',
    plushie_sniffer: 'minecraft:sniffer_egg',
    plushie_squid: 'minecraft:ink_sac',
    plushie_wolf: 'farm_and_charm:dog_food',
    plushie_warden: 'minecraft:echo_shard',
    plushie_donkey: 'minecraft:saddle',
    plushie_wither: 'minecraft:nether_star',
    plushie_bat: 'minecraft:black_dye',
    plushie_zoglin: 'minecraft:rotten_flesh',
    plushie_phantom: 'minecraft:phantom_membrane',
    plushie_trader_lama: 'minecraft:light_gray_dye',
    plushie_skeleton: 'minecraft:bone',
    plushie_wandering_trader: 'minecraft:light_gray_dye',
    plushie_spider: 'minecraft:spider_eye',
    plushie_iron_golem: 'minecraft:iron_ingot',
    plushie_witch: 'herbalbrews:witch_hat',
    plushie_pillager: 'minecraft:crossbow',
    plushie_wither_skeleton: 'minecraft:wither_skeleton_skull',
    plushie_vex: 'minecraft:light_blue_dye',
    plushie_zombie: 'minecraft:rotten_flesh',
    plushie_blaze: 'minecraft:blaze_rod',
    plushie_villager: 'minecraft:emerald',
    plushie_hoglin: 'minecraft:porkchop',
    plushie_zombie_villager: 'minecraft:rotten_flesh',
    plushie_magma_cube: 'minecraft:magma_cream',
    plushie_evoker: 'minecraft:totem_of_undying',
    plushie_piglin_brute: 'minecraft:gold_ingot',
    plushie_ravanger: 'minecraft:gray_dye',
    plushie_strider: 'minecraft:warped_fungus_on_a_stick',
    plushie_vindicator: 'minecraft:iron_axe',
    plushie_armadillo: 'minecraft:armadillo_scute',
    plushie_drowned: 'minecraft:trident',
    plushie_cave_spider: 'minecraft:fermented_spider_eye',
    plushie_husk: 'minecraft:rotten_flesh',
    plushie_guardian: 'minecraft:prismarine_shard',
    plushie_piglin: 'minecraft:gold_ingot',
    plushie_mule: 'minecraft:saddle',
    plushie_stray: 'minecraft:bone',
    plushie_slime: 'minecraft:slime_ball',
    plushie_zombified_piglin: 'minecraft:gold_nugget',
    plushie_peter: 'minecraft:white_dye',
    plushie_emperor: 'minecraft:black_dye',
    plushie_glow_squid: 'minecraft:glow_ink_sac',
    plushie_chewie: 'minecraft:brown_dye',
    plushie_llama: 'minecraft:light_gray_dye',
    plushie_storm_soldier: 'minecraft:white_dye',
    plushie_shulker: 'minecraft:shulker_shell',
    plushie_elder_guardian: 'minecraft:prismarine_shard',
    plushie_dark_father: 'minecraft:black_dye',
    plushie_yoga: 'minecraft:green_dye',
    plushie_dan_rolo: 'minecraft:brown_dye'
};

ServerEvents.recipes(event => {
    /*event.shapeless('plushie_buddies:plushie_chicken',
        ['plushie_buddies:fabric', 'plushie_buddies:sewing_needle', 'plushie_buddies:stuffing', 'minecraft:egg']
    ).stage('chicken_plush');

    event.shapeless('plushie_buddies:plushie_frog',
        ['plushie_buddies:fabric', 'plushie_buddies:sewing_needle', 'plushie_buddies:stuffing', 'ribbits:maraca']
    ).stage('frog_plush');*/

    const plush_ids = Ingredient.of(/plushie_buddies:plushie_+/).itemIds;
    plush_ids.forEach(plush => {
        const ingredient  = plush_map[plush.substring(16)];
        event.shapeless(plush,
        ['plushie_buddies:fabric', 'plushie_buddies:sewing_needle', 'plushie_buddies:stuffing', 'plushie_buddies:thread', ingredient]);
    });
    event.remove({ type: 'plushie_buddies:workbench' });

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

    // Make each crafting bowl recipe compatible with the create mixer
    event.forEachRecipe({type: 'farm_and_charm:crafting_bowl'}, recipe => {
        const json = JSON.parse(recipe.json)
        json.ingredients.forEach(ingredient => {         
            if (ingredient.tag != null && ingredient.tag.includes('water')) {
                ingredient.tag = null;
                ingredient.fluid = "minecraft:water"
                ingredient.amount = 81000
            } else if (ingredient.tag != null && ingredient.tag.includes('milk')) {
                ingredient.tag = null;
                ingredient.fluid = "milk:still_milk"
                ingredient.amount = 81000
            }
        })

        event.custom({type: 'create:mixing', results: json.result, ingredients: json.ingredients});
    });

    /*event.forEachRecipe({mod: "betternether", type: "crafting_shaped"}, recipe => {
        const json = JSON.parse(recipe.json);
        json.ingredients.forEach(ingredient => {
            if (ingredient.tag == "c:iron_ingots") {
                ingredient.tag = null;
                ingredient.item = "betternether:cinncinasite_ingot"
            }
        })
    });*/
});