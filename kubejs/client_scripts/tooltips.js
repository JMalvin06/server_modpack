ItemEvents.tooltip(event => {
    //event.add(['minecraft:lantern', 'minecraft:soul_lantern'], "Crouch+Right-Click to equip on your belt!")
    event.addAdvanced(['minecraft:lantern', 'minecraft:soul_lantern'], (item, advanced, text) => {
        text.add(1, "Crouch+Right-Click to equip on your belt!");
    })

    event.addAdvanced("vc_gliders:nether_upgrade", (item, advanced, text) => {
        text.add(1, "Combine with a Glider in an Anvil with to protect it from the Nether heat!");
    })

    event.addAdvanced("vc_gliders:copper_upgrade", (item, advanced, text) => {
        text.add(1, "Combine with a Glider in an Anvil with to protect it from lightning!");
    })
})