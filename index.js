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
            if (keydownEvent.key === 'ArrowLeft') {
                this.nudgeActiveDragon(-1);
                // keydownEvent.preventDefault(); 
                // ^^ Hey Browser, don't do what you normally do. 
            }
            if (keydownEvent.key === 'ArrowRight') {
                this.nudgeActiveDragon(1);
            }
        },
        nudgeActiveDragon: function(direction) {
            if (direction != 0) {
                var keyblade = this.activeKeyblade;
                var keybladeNames = Object.keys(keybladesMap);
                var len = keybladeNames.length;
                var currentIndex = keybladeNames.findIndex((blade) => blade === keyblade);
                var newIndex = (currentIndex + len + direction) %len; 
                router.push(
                    this.$route.fullPath.replace(
                        keyblade, keybladeNames[newIndex]
                    )
                );
            }
        },
    },
});

app.use(router);

