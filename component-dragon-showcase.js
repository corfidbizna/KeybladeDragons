app.component('dragon-showcase', {
    mixins: [
        dragonMixin,
    ],
    props: {
        keybladeID: String,
    },
    computed: {
        keyblade: function() {
            return keybladesMap[this.keybladeID];
        },
    },
    template: /*html*/`
    <div id="dragon-showcase">
        <div 
            class="key-box"
        >
            <div>
                <img
                    :src="getDragonRenderURL(keyblade.dergID)"
                    width="350"
                    height="350"
                >
                <img
                    :src="'./KeybladeImages/' + keybladeID + '.png'"
                    class="key-image"
                >
            </div>
        </div>
    </div>
    `,
});