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
            return dragonStatCounterGeneric(fRElements, "element").filter(column => column.quantity != 0);
            // return fRElements;
        },
        fRBreeds: function() {
            return attachColorDataBreeds(dragonStatCounterGeneric(fRBreeds, "species").filter(column => column.quantity != 0));
            // return fRBreeds;
        },
        fRGenes: function() {
            return [
                dragonGeneCountPrimary.filter(column => column.quantity != 0 || !column.name.includes("(")),
                dragonGeneCountSecondary.filter(column => column.quantity != 0 || !column.name.includes("(")),
                dragonGeneCountTertiary.filter(column => column.quantity != 0 || !column.name.includes("("))
            ];
        },
        fRColors: function() {
            return [
                dragonColorCountPrimary,
                dragonColorCountSecondary,
                dragonColorCountTertiary
            ];
            // return fRColors.map(function(color) {
            //     return color.name;
            // });
        },
    },
    template: /* html */`
        <div id="dragon-stats">
            <dragon-genes>
            </dragon-genes>
            <span>
                <dragon-stat
                    :graphData="fRBreeds"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRElements"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRGenes[0]"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRGenes[1]"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRGenes[2]"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRColors[0]"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRColors[1]"
                ></dragon-stat>
            </span>
            <span>
                <dragon-stat
                    :graphData="fRColors[2]"
                ></dragon-stat>
            </span>
        </div>
    `,
};
