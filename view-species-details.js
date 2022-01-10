// This component has been depricated 
// and its unique contents have been moved 
// into "view-dragon-visuals.js"

window.viewSpeciesDetails = {
    name: 'species-details',
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
    template: /*html*/`
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
