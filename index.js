var app = Vue.createApp({
    mixins: [
        dragonMixin,
    ],
    data: function() {
        return {
            elements: fRElements,
            keybladesMap: keybladesMap,
            // activeKeyblade: 'KingdomKey',
        };
    },
    computed: {
        getActiveDragon: function() {
            return this.keybladesMap[activeDragon];
        },
        activeKeyblade: function() {
            return this.keybladeIDFromParams;
        },
    },
    methods: {
        updateActiveDragon: function(newDragon) {
            this.activeDragon = newDragon;
        },
    },
});

app.use(router);

