LootJS.modifiers((event) => {
    const roughCinnabarEntry = LootEntry.of('spelunkery:rough_cinnabar').applyOreBonus("fortune");
    event.addBlockLootModifier('#minecraft:redstone_ores')
        .removeLoot('minecraft:redstone')
        .removeLoot("spelunkery:rough_cinnabar")
        .addLoot(roughCinnabarEntry);
    event.addBlockLootModifier('#spelunkery:redstone_ores')
        .removeLoot('minecraft:redstone')
        .removeLoot("spelunkery:rough_cinnabar")
        .addLoot(roughCinnabarEntry);
    
    event.addBlockLootModifier('#minecraft:diamond_ores')
        .replaceLoot("minecraft:diamond", 'spelunkery:rough_diamond');
    event.addBlockLootModifier('#minecraft:emerald_ores')
        .replaceLoot("minecraft:emerald", 'spelunkery:rough_emerald');
    event.addBlockLootModifier('#minecraft:lapis_ores')
        .replaceLoot("minecraft:lapis_lazuli", LootEntry.of('spelunkery:rough_lazurite').limitCount([1,3]).applyOreBonus("fortune"));
    
});
