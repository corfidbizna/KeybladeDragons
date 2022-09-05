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
            chartPaddingTop: 20,
            chartPaddingBot: 104,
            chartPaddingSides: 16,
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
        viewbox: function() {
            var padding = this.barPadding;
            var width = this.barWidth; 
            var horizontalOffsets = this.chartPaddingSides;
            return [
                0,
                -(200 + this.chartPaddingTop),
                (
                    padding 
                    + ((width + padding) * (this.comparisonCount + 1)) 
                    + horizontalOffsets),
                (200 + this.chartPaddingBot)
            ].join(' ');
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
            var horizontalOffsets = this.chartPaddingSides;
            return padding + ((width + padding) * index) + horizontalOffsets;
        },
        getYHeight: function(toCheck) {
            return 200 * ((this.propertyQuantity(toCheck)) / this.maxCount);
        },
    },
    template: /* html */ `
<svg
    height="300" :viewBox="viewbox"
>
    <g
        class="chart"
    >
        <g
            class="bar"
            v-for="(item, index) in sourceOfCompare"
            :key="item"
        >
            <rect
                :class="item"
                :x="getXSpacing(index)" 
                :y="-getYHeight(item)" 
                width="16" 
                :height="getYHeight(item)" 
                rx="2"
                :fill="getFill(item)"
            />
            <text
                class="bar-quantity"
                :y="-(4 + getYHeight(item))"
                :x="getXSpacing(index) + (getXSpacing(0)/2)"
                color="#FFF"
            >{{propertyQuantity(item)}}</text>
            <text 
                class="bar-label"
                y="12"
                :style="'transform: translateX(' + getXSpacing(index) + 'px) rotate(-80deg) translateX(-4px)'"
            >{{item}}</text>
        </g>
    </g>
</svg>
    `,
})