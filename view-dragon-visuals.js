window.viewDragonVisuals = {
    name: 'dragon-visuals',
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
        speciesImage: function() {
            var breed = this.keyblade.breed;
            var silhouette = this.keyblade.silhouette;
            return (breed + '_' + silhouette.charAt(0) + '.png').toLowerCase();
        },
    },
    template: /*html*/ `
        <div id="dragon-visuals">
            <div
                class="key-box"
            >
                <div>
                    <img 
                        :src="'./KeybladeImages/' + keybladeID + '.png'"
                        class="key-image"
                    />
                    <img 
                        :src="getDragonRenderURL(keyblade.dergID)"
                        width="350"
                        height="350"
                    />
                    <img 
                        :src="getDragonBodyURL(keyblade.dergID)"
                        width="350"
                        height="350"
                    />
                </div>
            </div>
        </div>
        <div id="species-details">
            <div 
                class="key-box"
            >
                <img
                    :src="'./FRSpecies/' + speciesImage"
                    width="750"
                    height="750"
                >
            </div>
        </div>
    `,
};