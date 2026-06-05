ItemEvents.tooltip(event => {
    //event.add(['minecraft:lantern', 'minecraft:soul_lantern'], "Crouch+Right-Click to equip on your belt!")
    event.addAdvanced(['minecraft:lantern', 'minecraft:soul_lantern'], (item, advanced, text) => {
        text.add(1, "Crouch+Right-Click to equip on your belt!");
    })
})