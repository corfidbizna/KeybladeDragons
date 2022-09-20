app.component('dragon-stat', {
    mixins: [
        dragonMixin,
    ],
    props: {
        graphData: Array,
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
        keybladeID: function() {
            return this.keybladeIDFromParams;
        },
        keyblade: function() {
            return keybladesMap[this.keybladeID];
        },
        dragon: function() {
            return dragonsMap[this.keyblade.dergID];
        },
        maxQuantity: function() {
            var maxCount = -Infinity;
            var data = this.graphData;
            data.forEach(function(item) {
                maxCount = Math.max(maxCount, item.quantity);
            });
            return maxCount; 
        },
        columnCount: function() {
            return this.graphData.length;
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
                    + ((width + padding) * (this.columnCount + 1)) 
                    + horizontalOffsets),
                (200 + this.chartPaddingBot)
            ].join(' ');
        },
    },
    methods: {
        getFill: function(column) {
            var color = "#448";
            if (column.color) {
                return column.color;
            }
            // if (column.name === this.stringToCompare) {
            //     color = "#88A";
            // }
            return color;
        },
        getStroke: function(column) {
            var stroke = "none";
            var values = Object.values(this.dragon);
            values.forEach(function(string) {
                if (column.name === string) {
                    stroke = "#000";
                }
            });
            return stroke;
        },
        getXSpacing: function(index) {
            var padding = this.barPadding;
            var width = this.barWidth; 
            var horizontalOffsets = this.chartPaddingSides;
            return padding + ((width + padding) * index) + horizontalOffsets;
        },
        getYHeight: function(column) {
            return 200 * ((column.quantity) / this.maxQuantity);
        },
    },
    template: /* html */ `
<svg
    height="300" :viewBox="viewbox"
>
    <g
        class="chart"
    >
    <rect
        class="chart-bg"
        :x="chartPaddingSides"
        y="-210"
        :width="getXSpacing(this.graphData.length - 1) + barPadding"
        height="210"
        rx="4"
        fill="#FFF"
    />
        <g
            class="bar"
            v-for="(item, index) in graphData"
            :key="item.name"
        >
            <rect
                :class="item.name"
                :x="getXSpacing(index)" 
                :y="-getYHeight(item)" 
                :width="barWidth" 
                :height="getYHeight(item)" 
                rx="2"
                :fill="getFill(item)"
                :stroke="getStroke(item)"
            />
            <text
                class="bar-quantity"
                :y="-(4 + getYHeight(item))"
                :x="getXSpacing(index) + (getXSpacing(0)/2)"
                color="#FFF"
            >{{item.quantity}}</text>
            <text 
                class="bar-label"
                y="12"
                :style="'transform: translateX(' + getXSpacing(index) + 'px) rotate(-80deg) translateX(-4px)'"
            >{{item.name}}</text>
        </g>
    </g>
</svg>
    `,
})