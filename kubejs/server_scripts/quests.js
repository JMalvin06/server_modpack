FTBQuestsEvents.completed('39B7304D25F62828', event => {
    event.player.tell('You completed the quest!');
});


FTBQuestsEvents.customTask('36BD868B6D161CA1', event => {
    event.maxProgress = 1 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).
    
    // Check if player is wearing apple
    event.setCheck((task, player) => {
        //player.tell(player.getArmorSlots());
        task.progress = 0;
        const TrinketsApi = Java.loadClass("dev.emi.trinkets.api.TrinketsApi");
        const componentOpt = TrinketsApi.getTrinketComponent(player);

        if (componentOpt.isPresent()) {
            const component = componentOpt.get();

            if (component.isEquipped(Item.of("minecraft:apple"))) {
                task.progress = 1;
            }
        }
    })
})

FTBQuestsEvents.customTask('2394A1458A891B7A', event => {
    event.maxProgress = 40 // Sets the Progress Count.

    event.setCheckTimer(20) // Checks for progress every 1 second (20 ticks).

    event.setCheck((task, player) => {
        var biomeList = player.getPersistentData().get("visited_biomes");
        if (biomeList != null) {
            var biome_count = biomeList.size();
            task.progress = biome_count;
        } else {
            task.progress = 0;
        }
    })
})

CommonAddedEvents.entityTame(event => {
    event.player.tell("Tamed animal!");
    var pet_list = event.player.persistentData.get("pets");
    if (pet_list == null) {
        pet_list = [event.animal.entityType.toString()];
    } else {
        pet_list.push(event.animal.entityType.toString());
    }

    event.player.persistentData.put("pets", pet_list);
    event.player.persistentData.put("has_pet", true);
})

