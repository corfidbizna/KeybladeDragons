app.component('dragon-genes', {
    mixins: [
        dragonMixin,
    ],
    props: {
        // keybladeID: String,
        propToCheck: String,
        stringToCompare: String,
    },
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
        silhouetteIcon: function() {
            var silhouette = dragonsMap[this.keyblade.dergID].silhouette;
            return (
                'https://www1.flightrising.com/static/layout/lair/icons/' 
                + silhouette.toLowerCase() 
                + '.png'
            );
        },
    },
    methods: {
        dragonPortraitURL: function(dergID) {
            if (!dergID) {
                var url = "https://flightrising.com/rendern/portraits/1/noavatarp.png";
                return url;
            }
            // var dergID = this.keyblade.dergID;
            var url = `https://flightrising.com/rendern/coliseum/portraits/${this.getTrunkatedID(dergID)}/${dergID}.png`;
            return url;
        },
        dragonColor: function(colorName) {
            var colors = fRColors;
            var color = colors.find(function(element) {return element.name === colorName}).color;
            if (color) {
                return color;
            }
            return "#F0F";
        },
        dragonEyeColor: function(color) {
            if (frElementsMap[color]) {
                return frElementsMap[color];
            }
            return '#F0F';
        },
    },
    template: /*html*/ `
    <div id="dragon-genes">
        <div 
            class="key-box"
        >
            <div>
                <img
                    class="portrait"
                    :src="dragonPortraitURL(keyblade.dergID)"
                    width="181"
                    height="46"
                >
                <span 
                    class="stat-list"
                >
                    <span
                        class="gene-row"
                        title="ID"
                    >
                        <span>ID: </span>
                        <span
                            class="dragon-id"
                        >{{dragon.dragonID}}</span>
                    </span>
                    <span
                        class="gene-row"
                        title="Breed"
                    >
                        <img 
                            :src="silhouetteIcon"
                            width="18"
                            height="18"
                        >
                        <span
                            class="gene-info"
                        >{{dragon.silhouette}} {{dragon.species}}</span>
                    </span>
                    <span
                        class="gene-row"
                        title="Eye"
                    >
                        <span
                            class="gene-color"
                            :style="'background-color: ' + dragonEyeColor(dragon.element)"
                        ></span>
                        <span
                            class="gene-info"
                        >{{dragon.element}}</span>
                    </span>
                    <span
                        class="gene-row"
                        title="Primary"
                    >
                        <span
                            class="gene-color"
                            :style="'background-color: ' + dragonColor(dragon.colors[0])"
                        ></span>
                        <span
                            class="gene-info"
                        >{{dragon.colors[0]}} {{dragon.genes[0]}}</span>
                    </span>
                    <span
                        class="gene-row"
                        title="Secondary"
                    >
                        <span
                            class="gene-color"
                            :style="'background-color: ' + dragonColor(dragon.colors[1])"
                        ></span>
                        <span
                            class="gene-info"
                        >{{dragon.colors[1]}} {{dragon.genes[1]}}</span>
                    </span>
                    <span
                        class="gene-row"
                        title="Tertiary"
                    >
                        <span
                            class="gene-color"
                            :style="'background-color: ' + dragonColor(dragon.colors[2])"
                        ></span>
                        <span
                            class="gene-info"
                        >{{dragon.colors[2]}} {{dragon.genes[2]}}</span>
                    </span>
                </span>
            </div>
        </div>
    </div>
`,
});