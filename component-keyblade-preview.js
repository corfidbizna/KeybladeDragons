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
        gameColor: function() {
            var alpha = '0.25'; //'0.25'
            var gameIndex = this.keyblade.gameIndex;
            var gameName = kHGames[gameIndex];
            var gameColorMap = {
                'KINGDOM HEARTS': 'rgb(55, 96, 184, ' + alpha + ')',
                'Chain of Memories': 'rgb(255, 0, 255, ' + alpha + ')',
                'KINGDOM HEARTS II': 'rgb(84, 91, 104, ' + alpha + ')',
                '358/2 Days': 'rgb(186, 77, 30, ' + alpha + ')',
                'Birth by Sleep': 'rgb(59, 158, 233, ' + alpha + ')',
                'Re:coded': 'rgb(237, 220, 34, ' + alpha + ')',
                'Dream Drop Distance': 'rgb(225, 37, 235, ' + alpha + ')',
                'Unchained χ / Union Cross': 'rgb(41, 176, 151, ' + alpha + ')',
                'KINGDOM HEARTS III': 'rgb(78, 82, 89, ' + alpha + ')',
            };
            return gameColorMap[gameName];
        },
        backgroundGradient: function() {
            var active = this.active;
            if (active) {
                return "background-image: none; z-index: 1;";
            }
            var gameGradient = `
                background-image: 
                    linear-gradient(`
                    + this.getGameColor(0.25)
                    + ` 0%,
                    ` + this.getGameColor(1)
                    + ` 100%
                    ),
                `;
            var baseGradient = `
                linear-gradient(
                    to bottom,
                    #DDD 0%,
                    #EEE 10%,
                    #EEE 50%,
                    #DDD 100%
                )
            ;`;
            return gameGradient + baseGradient;
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
    methods: {
        getGameColor: function(alpha) {
            var gameIndex = this.keyblade.gameIndex;
            var gameName = kHGames[gameIndex];
            var gameColorMap = {
                'KINGDOM HEARTS': 'rgb(55, 96, 184, ' + alpha + ')',
                'Chain of Memories': 'rgb(255, 0, 255, ' + alpha + ')',
                'KINGDOM HEARTS II': 'rgb(84, 91, 104, ' + alpha + ')',
                '358/2 Days': 'rgb(186, 77, 30, ' + alpha + ')',
                'Birth by Sleep': 'rgb(59, 158, 233, ' + alpha + ')',
                'Re:coded': 'rgb(237, 220, 34, ' + alpha + ')',
                'Dream Drop Distance': 'rgb(225, 37, 235, ' + alpha + ')',
                'Unchained χ / Union Cross': 'rgb(41, 176, 151, ' + alpha + ')',
                'KINGDOM HEARTS III': 'rgb(78, 82, 89, ' + alpha + ')',
            };
            return gameColorMap[gameName];
        }
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
            :style="backgroundGradient"
        >
            <div
                class="name-container"
                :class="'game-' + keyblade.gameIndex"
                :style="'background-color: ' + gameColor + ';'"
            >
                <div
                    class="name"
                >{{keyblade.name}}</div>
            </div>
            <div class="main-contents">
                <div
                    class="dragon-info"
                >
                    <div
                        class="key-info"
                        :title="title"
                    >
                        <img 
                            class="game-image"
                            :src="gameThumbnail"
                        />
                        <img 
                            :src="'./KeybladeImages/' + keybladeID + '.png'"
                            class="key-image"
                        />
                    </div>
                    <div
                        class="derg-portrait"
                    >
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