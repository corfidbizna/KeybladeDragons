app.component('dragon-showcase', {
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
                    :src="'./KeybladeImages/' + id + '.png'"
                    class="key-image"
                >
            </div>
        </div>
    </div>
    `,
});