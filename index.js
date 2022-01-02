var app = Vue.createApp({
    data: function() {
        return {
            games: kHGames,
            elements: fRElements,
            breeds: fRBreeds,
            keybladesMap: keybladesMap,
            activeDragon: 'KingdomKey',
        };
    },
    computed: {
        getActiveDragon: function() {
            return this.keybladesMap[activeDragon];
        },
    },
    methods: {
        updateActiveDragon: function(newDragon) {
            this.activeDragon = newDragon;
        },
        getGameThumbnail: function(gameIndex) {
            var urlPrefix = 'https://kh.wiki.gallery/images/';
            var urlRemainder = '';
            switch (this.games[gameIndex]) {
                case 'KINGDOM HEARTS':
                    urlRemainder = '0/0b/KH1_icon.png';
                    break;
                case 'Chain of Memories': 
                    urlRemainder = '';
                    break;
                case 'KINGDOM HEARTS II': 
                    urlRemainder = 'a/ae/KH2_icon.png';
                    break;
                case '358/2 Days': 
                    urlRemainder = 'f/f3/358_icon.png';
                    break;
                case 'Birth by Sleep': 
                    urlRemainder = 'a/af/BBS_icon.png';
                    break;
                case 'Re:coded': 
                    urlRemainder = '6/69/KHC_icon.png';
                    break;
                case 'Dream Drop Distance': 
                    urlRemainder = '4/45/KH3D_icon.png';
                    break;
                case 'Unchained χ / Union Cross': 
                    urlRemainder = 'e/e4/KHCHI_icon.png';
                    break;
                case 'KINGDOM HEARTS III': 
                    urlRemainder = '4/4c/KH3_icon.png';
                    break;
                default: 
                    break;
            };
            return (urlPrefix + urlRemainder);
        },
        getTrunkatedID: function(dergID) {
            var trunkatedID = Math.floor((dergID/100) + 1);
            return trunkatedID;
        },
        getDragonPortraitURL: function(dergID) {
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
            var url = `https://www1.flightrising.com/rendern/portraits/${this.getTrunkatedID(dergID)}/${dergID}p.png`;
            return url;
        },
        getDragonRenderURL: function(dergID) {
            var url = `https://www1.flightrising.com/rendern/350/${this.getTrunkatedID(dergID)}/${dergID}_350.png`;
            return url;
        },
        getDragonBodyURL: function(dergID) {
            var url = `https://www1.flightrising.com/dgen/dressing-room/dragon?did=${dergID}&skin=0&apparel=&xt=dressing.png`;
            return url;
        },
    },
});
