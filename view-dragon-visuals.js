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
    `,
};