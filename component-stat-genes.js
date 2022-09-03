app.component('dragon-stat', {
    mixins: [
        dragonMixin,
    ],
    props: {
        // keybladeID: String,
        propToCheck: String,
        stringToCompare: String,
        sourceOfCompare: Array,
    },
    data: function() {
        return {
            barWidth: 16,
            barPadding: 2,
        };
    },
    computed: {
        total: function() {
            return dragons.length; 
        },
        maxCount: function() {
            var maxCount = -Infinity;
            var list = this.sourceOfCompare;
            var toCheck = this.propToCheck;
            list.forEach(function(toCount) {
                var count = 0; 
                var property = toCheck;
                dragons.forEach(function(dragon) {
                    if (dragon[property] === toCount){
                        count++;
                    }
                });
                maxCount = Math.max(count, maxCount);
            });
            return maxCount;
        },
        comparisonCount: function() {
            return this.sourceOfCompare.length;
        },
        // propertyQuantity: function() {
        //     var count = 0; 
        //     var property = this.propToCheck;
        //     var value = this.stringToCompare;
        //     dragons.forEach(function(dragon, index) {
        //         if (dragon[property] === value){
        //             count++;
        //         }
        //     });
        //     return count;
        // },
        // percentOfTotal: function() {
        //     return (this.propertyQuantity / this.total) * 1000;
        // },
    },
    methods: {
        propertyQuantity: function(toCheck) {
            var count = 0; 
            var property = this.propToCheck;
            var value = toCheck;
            dragons.forEach(function(dragon) {
                if (dragon[property] === value){
                    count++;
                }
            });
            return count;
        },
        percentOfTotal: function(count) {
            return (count / this.total);
        },
        getFill: function(toCheck) {
            var color = "#448";
            if (toCheck === this.stringToCompare) {
                color = "#88A";
            }
            return color;
        },
        getXSpacing: function(index) {
            var padding = this.barPadding;
            var width = this.barWidth; 
            return padding + ((width + padding) * index);
        },
        getYHeight: function(toCheck) {
            return 200 * ((this.propertyQuantity(toCheck)) / this.maxCount);
        },
    },
    template: /* html */ `
<svg
    height="200" viewBox="0 -200 400 200"
>
    <g>
        <rect
            v-for="(item, index) in sourceOfCompare"
            :key="item"
            :class="item"
            :x="getXSpacing(index)" 
            :y="-getYHeight(item)" 
            width="16" 
            :height="getYHeight(item)" 
            rx="2"
            :fill="getFill(item)"
        />
    </g>
</svg>
<div>
    <span>{{propToCheck}}: {{stringToCompare}}</span>
</div>
    `,
})