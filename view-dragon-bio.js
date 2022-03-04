window.viewDragonBio = {
    name: 'dragon-bio',
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
        dragon: function() {
            return dragonsMap[this.keyblade.dergID];
        },
        // Should this live here? v
        framesPath: function() {
            return 'https://corfid-portfolio.s3.amazonaws.com/flightrising_components/frames2/';
        },
        dragonArtURL: function() {
            var dergID = this.keyblade.dergID;
            var url = this.getDragonRenderURL(dergID);
            var hasArt = false;
            if (hasArt) {
                var path = 'https://corfid-portfolio.s3.amazonaws.com/flightrising_components/_DergImages/';
                url = path + this.keyblade.id + '.png';
            };
            return url;
        },
        processedTitle: function() {
            var title = this.keyblade.name;
            var lengthToWrap = 12;
            if (title.length > lengthToWrap) {
                var wrapAt;
                var letters = title.split('');
                for (let i = lengthToWrap; i > 0; i--) {
                    if (letters[i] == ' ') {
                        wrapAt = i;
                        break;
                    }
                }
                letters.splice(wrapAt, 1, '\n')
                title = letters.join('');
            }
            return title;
        },
        biotext: function() {
            if (this.keyblade.bio) {
                return this.keyblade.bio;
            }
        },
        temptext: function() {
            return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel enim id sapien placerat bibendum at et tellus. Aliquam eget blandit lectus, eget facilisis arcu. Integer blandit ante et dolor facilisis euismod. Ut venenatis tincidunt gravida. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tempus erat libero, id pharetra odio consequat non. Nullam sit amet egestas est. Mauris blandit massa ipsum, sed pretium mauris accumsan eget. Nunc fermentum commodo tincidunt. Etiam ac metus vitae lorem maximus imperdiet. `
            ;
        },
    },
    template: /*html*/ `
        <div id="bio-box">
            <div 
                class="horizontal-box"
            >
                <img 
                    :src="
                        framesPath 
                        + dragon.element 
                        + '/bigs_L.png'
                    "
                >
                <span 
                    class="key-name"
                >{{ processedTitle }}</span>
                <img 
                    :src="
                        framesPath
                        + dragon.element
                        + '/bigs_R.png'
                    "
                >
            </div>
            <div>
                <img 
                    :src="
                        framesPath 
                        + dragon.element 
                        + '/top.png'
                    "
                >
            </div>
            <div
                class="horizontal-box"
            >
                <div 
                    class="derg-art"
                >
                    <img 
                        :src="dragonArtURL"
                        width="384"
                        height="384"
                    >
                </div>
                <div
                    class="vertical-box"
                >
                    <img 
                        :src="
                            framesPath 
                            + dragon.element 
                            + '/topShort.png'
                        "
                    >
                    <span
                        class="bio-text"
                    >
                        <textarea
                            :placeholder="temptext"
                        >{{biotext}}</textarea>
                    </span>
                    <img 
                        :src="
                            framesPath 
                            + dragon.element 
                            + '/bottomShort.png'
                        "
                    >
                </div>
            </div>
            <img 
                :src="
                    framesPath
                    + dragon.element
                    + '/bottom.png'
                "
            >
        </div>
    `,
};
