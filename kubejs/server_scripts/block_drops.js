LootJS.modifiers((event) => {
    const roughCinnabarEntry = LootEntry.of('spelunkery:rough_cinnabar').limitCount([1,2]).applyOreBonus("fortune");
    Ingredient.of(/.*redstone_ore.*/).itemIds.forEach(id => {
        event.addBlockLootModifier(id)
        .replaceLoot('minecraft:redstone', roughCinnabarEntry);
    })

    event.addBlockLootModifier('#c:diamond_ores')
        .replaceLoot("minecraft:diamond", LootEntry.of('spelunkery:rough_diamond'));
    event.addBlockLootModifier('#c:emerald_ores')
        .replaceLoot("minecraft:emerald", LootEntry.of('spelunkery:rough_emerald'));
    event.addBlockLootModifier('#c:lapis_ores')
        .replaceLoot("minecraft:lapis_lazuli", LootEntry.of('spelunkery:rough_lazurite').limitCount([1,3]).applyOreBonus("fortune"));
    
});
