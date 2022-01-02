app.component('dragon-visuals', {
    mixins: [
        dragonMixin,
    ],
    props: {
        id: String,
    },
    computed: {
        keyblade: function() {
            return keybladesMap[this.id];
        },
    },
    template: /*html*/ `
        <div id="dragon-visuals">
            <div
                class="key-box"
            >
                <div>
                    <img 
                        :src="'./KeybladeImages/' + id + '.png'"
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
});