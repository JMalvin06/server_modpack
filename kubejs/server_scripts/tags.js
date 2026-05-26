ServerEvents.tags('item', event => {
    const mythicOreList = ['topaz','ruby','peridot','jade','aquamarine','sapphire','ametrine'];

    for (const ore of mythicOreList) {
        event.add('mythicupgrades:smithing_templates', 'mythicupgrades:'+ore+'_upgrade_smithing_template');
        event.add('mythicupgrades:ingots', 'mythicupgrades:'+ore+'_ingot');
        event.add('mythicupgrades:upgraded_helmets', 'mythicupgrades:'+ore+'_helmet');
        event.add('mythicupgrades:upgraded_chestplates', 'mythicupgrades:'+ore+'_chestplate');
        event.add('mythicupgrades:upgraded_leggings', 'mythicupgrades:'+ore+'_leggings');
        event.add('mythicupgrades:upgraded_boots', 'mythicupgrades:'+ore+'_boots');
    }

    event.remove('c:iron_ingots', 'betterend:thallasium_ingot');
    event.remove('c:iron_ingots', 'betterend:cincinnasite_ingot');

    event.add('betterend:smithing_hammers', 'betterend:iron_hammer');
    event.add('betterend:smithing_hammers', 'betterend:gold_hammer');
    event.add('betterend:smithing_hammers', 'betterend:diamond_hammer');
    event.add('betterend:smithing_hammers', 'betterend:netherite_hammer');
    event.add('betterend:smithing_hammers', 'betterend:thallasium_hammer');
    event.add('betterend:smithing_hammers', 'betterend:terminite_hammer');

    const betterendOreList = ['thallasium','terminite', 'aeternium'];
    for (const ore of betterendOreList) {
        event.add('betterend:'+ore+'_tools', 'betterend:'+ore+'_shovel');
        event.add('betterend:'+ore+'_tools', 'betterend:'+ore+'_hoe');
        event.add('betterend:'+ore+'_tools', 'betterend:'+ore+'_axe');
        event.add('betterend:'+ore+'_tools', 'betterend:'+ore+'_sword');
        event.add('betterend:'+ore+'_tools', 'betterend:'+ore+'_pickaxe');
    }

    const pedestalMaterials = [
        'andesite',
        'azure_jadestone',
        'diorite_pedestal',
        'eternal_pedestal',
        'flavolite',
        'granite',
        'infusion',
        'purpur',
        'quartz',
        'sandy_jadestone',
        'smaragdant_crystal',
        'sulphuric_rock',
        'umbralith',
        'violecite',
        'virid_jadestone'
    ]

    for (const mat of pedestalMaterials) {
        event.add('betterend:pedestals', 'betterend:'+mat+'_pedestal');
    }
})