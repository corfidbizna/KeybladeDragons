var dragonMixin = {
    methods: {
        getTrunkatedID: function(dergID) {
            var trunkatedID = Math.floor((dergID/100) + 1);
            return trunkatedID;
        },
    },
};
var app = Vue.createApp({
    mixins: [
        dragonMixin,
    ],
    data: function() {
        return {
            elements: fRElements,
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
