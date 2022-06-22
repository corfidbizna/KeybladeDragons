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
    mounted: function() {
        window.document.body.addEventListener('keydown', this.keydownListener)
    },
    beforeDestroy: function() {
        window.document.body.removeEventListener('keydown', this.keydownListener);
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
        keydownListener: function(keydownEvent) {
            var direction = 0;
            var keyblade = this.activeKeyblade;
            var keybladeNames = Object.keys(keybladesMap);
            if (keydownEvent.key === 'ArrowLeft') {
                var direction = -1;
                // keydownEvent.preventDefault(); 
                // ^^ Hey Browser, don't do what you normally do. 
            }
            if (keydownEvent.key === 'ArrowRight') {
                var direction = 1;
            }
            var activeBladeIndex = keybladeNames.findIndex((blade) => blade === keyblade);
            var newActiveBladeIndex = activeBladeIndex + direction;
            if (newActiveBladeIndex < 0) {
                newActiveBladeIndex = keybladeNames.length - 1;
            }
            if (newActiveBladeIndex >= keybladeNames.length) {
                newActiveBladeIndex = 0;
            }
            if (activeBladeIndex != newActiveBladeIndex) {
                router.push(
                    this.$route.fullPath.replace(
                        keyblade, keybladeNames[newActiveBladeIndex]
                    )
                );
            }
        },
    },
});

app.use(router);

