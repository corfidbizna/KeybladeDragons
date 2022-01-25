app.component('keyblade-preview', {
    mixins: [
        dragonMixin,
    ],
    props: {
        keybladeID: String,
        active: Boolean,
    },
    computed: {
        keyblade: function() {
            return keybladesMap[this.keybladeID];
        },
        gameThumbnail: function() {
            var gameIndex = this.keyblade.gameIndex;
            var gameName = kHGames[gameIndex];
            var urlPrefix = 'https://kh.wiki.gallery/images/';
            var gameIconMap = {
                'KINGDOM HEARTS': '0/0b/KH1_icon.png',
                'Chain of Memories': '',
                'KINGDOM HEARTS II': 'a/ae/KH2_icon.png',
                '358/2 Days': 'f/f3/358_icon.png',
                'Birth by Sleep': 'a/af/BBS_icon.png',
                'Re:coded': '6/69/KHC_icon.png',
                'Dream Drop Distance': '4/45/KH3D_icon.png',
                'Unchained χ / Union Cross': 'e/e4/KHCHI_icon.png',
                'KINGDOM HEARTS III': '4/4c/KH3_icon.png',
            };
            return (urlPrefix + gameIconMap[gameName]);
        },
        title: function() {
            return (
                this.keyblade.name 
                + ', from ' 
                + kHGames[this.keyblade.gameIndex]
            );
        },
        dragonPortraitURL: function() {
            /* var url = 'https://www1.flightrising.com/rendern/portraits/' + trunkatedID + '/' + dergID + 'p.png';
            var url = (
                'https://www1.flightrising.com/rendern/portraits/'
                + trunkatedID
                + '/'
                + dergID
                + 'p.png'
            );
            var url = [
                'https://www1.flightrising.com/rendern/portraits',
                trunkatedID,
                dergID + 'p.png'
            ].join('/'); */
            if (!this.keyblade.dergID) {
                var url = "https://flightrising.com/rendern/portraits/1/noavatarp.png";
                return url;
            }
            var dergID = this.keyblade.dergID;
            var url = `https://www1.flightrising.com/rendern/portraits/${this.getTrunkatedID(dergID)}/${dergID}p.png`;
            return url;
        },
        breedIcon: function() {
            var breed = dragonsMap[this.keyblade.dergID].species;
            var breedIndex = fRBreeds.findIndex(
                (element) => element === breed
            );
            return (
                'https://www1.flightrising.com/static/cms/breeds/' 
                + (breedIndex + 1) 
                + '/icon.png'
            );
        },
        silhouetteIcon: function() {
            var silhouette = dragonsMap[this.keyblade.dergID].silhouette;
            return (
                'https://www1.flightrising.com/static/layout/lair/icons/' 
                + silhouette.toLowerCase() 
                + '.png'
            );
        },
        elementIcon: function() {
            var element = dragonsMap[this.keyblade.dergID].element;
            return (
                'https://www1.flightrising.com/static/icons/' 
                + element.toLowerCase() 
                + '_rune.png'
            );
        },
    },
    template: /*html*/`
    <router-link
        class="keyblade-preview"
        :to="'/' + keybladeID + '/' + activeView"
        :data-goats="activeView"
    >
        <div
            class="key-box"
            :class="{
                [keybladeID]: true,
                active: active,
            }"
        >
            <div
                class="name-container"
                :class="'game-' + keyblade.gameIndex"
            >
                <img 
                    class="game-image"
                    :src="gameThumbnail"
                />
                <div
                    class="name"
                >{{keyblade.name}}</div>
            </div>
            <div>
                <div
                    class="key-info"
                    :title="title"
                >
                    <img 
                        :src="'./KeybladeImages/' + keybladeID + '.png'"
                        class="key-image"
                    />
                </div>
                <div
                    class="dragon-info"
                >
                    <div>
                        <img 
                            :src="dragonPortraitURL"
                            width="75"
                            height="75"
                        />
                    </div>
                    <div>
                        <img 
                            class="iconette breed"
                            :src="breedIcon"
                            :title="keyblade.breed"
                        />
                        <img 
                            class="iconette silhouette"
                            :src="silhouetteIcon"
                            :title="keyblade.silhouette"
                        />
                        <img 
                            class="iconette element"
                            :src="elementIcon"
                            :title="keyblade.element"
                        />
                    </div>
                    <div
                        class="dragon-id"
                    >{{keyblade.dergID}}</div>
                </div>
            </div>
        </div>
    </router-link>
    `,
})