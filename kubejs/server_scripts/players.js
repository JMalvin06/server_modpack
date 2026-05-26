PlayerEvents.tick(event => {
    const player = event.player
    var lastBiome = player.getPersistentData().get("curr_biome");
    var currentBiome = player.level.getBiome(player.blockPosition()).unwrapKey().get();
    currentBiome = currentBiome.location().toString();

    if (lastBiome != currentBiome) {
        var rawList =  player.getPersistentData().get("visited_biomes");
        
        var biomeList = []
        if (rawList != null) {
            for (var i = 0; i < rawList.size(); i++) {
                biomeList.push(rawList.get(i).getAsString());
            }
        }

        if (!biomeList.includes(currentBiome)) {
            biomeList.push(currentBiome);
            player.getPersistentData().put("visited_biomes", biomeList);
        }
    }
    player.getPersistentData().put("curr_biome", currentBiome);
});
