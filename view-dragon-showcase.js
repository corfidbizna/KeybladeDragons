window.viewDragonShowcase = {
    name: 'dragon-showcase',
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
        sceneImage: function() {
            var sceneID = parseInt(dragonsMap[this.keyblade.dergID].sceneID);
            if (sceneID < 12) {
                return ("https://www1.flightrising.com/static/layout/profile/backgrounds/" + sceneID + ".jpg");
            }
            return ("https://www1.flightrising.com/static/cms/scene/" + sceneID + ".png")
        },
        sceneStyle: function() {
            var sceneID = parseInt(dragonsMap[this.keyblade.dergID].sceneID);
            var url = ("https://www1.flightrising.com/static/cms/scene/" + sceneID + ".png");
            var isScene = true;
            if (sceneID < 12) {
                var dergElement = dragonsMap[this.keyblade.dergID].element;
                var elementID = Object.keys(frElementsMap).findIndex(function(element) {
                    return element === dergElement;
                }) + 1;
                url = ("https://www1.flightrising.com/static/layout/profile/backgrounds/" + elementID + ".jpg");
                isScene = false;
            }
            if (isScene) {
                return `
                    background-image: 
                        linear-gradient(
                            to bottom, 
                            rgba(255,255,255,0.90) 0%, 
                            rgba(255,255,255,0.60) 20%,
                            rgba(255,255,255,0.50) 30%, 
                            rgba(255,255,255,0.45) 35%, 
                            rgba(255,255,255,0.45) 60%, 
                            rgba(255,255,255,0.50) 65%, 
                            rgba(255,255,255,0.60) 75%, 
                            rgba(255,255,255,1.00) 100%), 
                            url(` + url + `);
                `;
            }
            return "background-color: #FFF; background-image: url(" + url + ");";
        },
    },
    template: /*html*/ `
        <div id="dragon-showcase">
            <div 
                class="key-box"
                :style="sceneStyle"
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
};
