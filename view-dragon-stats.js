window.viewDragonStats = {
    name: 'dragon-stats',
    mixins: [
        dragonMixin,
    ],
    computed: {
        keybladeID: function() {
            return this.keybladeIDFromParams;
        },
        keyblade: function() {
            return keybladesMap[this.keybladeID];
        },
        dragon: function() {
            return dragonsMap[this.keyblade.dergID];
        }
    },
    template: /* html */`
        <div id="dragon-stats">
            <span>
                <dragon-stat
                    :prop-to-check="dragon.species"
                    string-to-compare="Snapper"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :prop-to-check="dragon.species"
                    string-to-compare="Mirror"
                ></dragon-stat>
            </span>
        </div>
    `,
};
