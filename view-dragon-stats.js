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
        },
        fRElements: function() {
            return fRElements;
        },
        fRBreeds: function() {
            return fRBreeds;
        },
    },
    template: /* html */`
        <div id="dragon-stats">
            <dragon-genes>
            </dragon-genes>
            <span>
                <dragon-stat
                    prop-to-check="species"
                    :string-to-compare="dragon.species"
                    :source-of-compare="fRBreeds"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    prop-to-check="element"
                    :string-to-compare="dragon.element"
                    :source-of-compare="fRElements"
                ></dragon-stat>
            </span>
        </div>
    `,
};
