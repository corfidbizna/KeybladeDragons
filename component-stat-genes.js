app.component('dragon-stat', {
    mixins: [
        dragonMixin,
    ],
    props: {
        // keybladeID: String,
        propToCheck: String,
        stringToCompare: String,
    },
    computed: {
        total: function() {
            return dragons.length; 
        },
        propertyQuantity: function() {
            var count = 0; 
            var property = this.propToCheck;
            var value = this.stringToCompare;
            if (dragons[0].property) {
                dragonsMap.forEach(function(dragon, index) {
                    if (dragon.property === value){
                        count++;
                    }
                });
            }
            return count;
        },
        percentOfTotal: function() {
            return this.propertyQuantity / this.total;
        },
    },
    template: /* html */ `
        <div>
            <span>{{propertyQuantity}} ({{percentOfTotal}} of total)</span>
        </div>
    `,
})