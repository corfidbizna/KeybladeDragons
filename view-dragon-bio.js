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
        // Should this live here? v
        framesPath: function() {
            return 'https://corfid-portfolio.s3.amazonaws.com/flightrising_components/frames2/';
        },
        dragonArtURL: function() {
            var path = 'https://corfid-portfolio.s3.amazonaws.com/flightrising_components/_DergImages/';
            var url;
            url = path + this.keyblade.id + '.png';
            return (url || getDragonRenderURL(this.keyblade.dergID));
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
    },
    template: /*html*/ `
        <div id="bio-box">
            <div 
                class="horizontal-box"
            >
                <img 
                    :src="framesPath + keyblade.element + '/bigs_L.png'"
                >
                <span 
                    class="key-name"
                >{{ processedTitle }}</span>
                <img 
                    :src="
                        framesPath
                        + keyblade.element
                        + '/bigs_R.png'
                    "
                >
            </div>
            <div>
                <img 
                    :src="framesPath + keyblade.element + '/top.png'"
                >
            </div>
            <div
                class="horizontal-box"
            >
                <div 
                    class="derg-art"
                >
                    <img 
                        :src="'https://corfid-portfolio.s3.amazonaws.com/flightrising_components/_DergImages/KingdomKey.png'"
                        width="384"
                        height="384"
                    >
                </div>
                <div
                    class="vertical-box"
                >
                    <img 
                        :src="framesPath + keyblade.element + '/topShort.png'"
                    >
                    <span
                        class="bio-text"
                    >
                        <br>
                        The great Earthshaker pulled Kingdom Key from a deceivingly strong Keyblade. The blade in question holds a unique power and always manages to find itself in key places at the right times—a trait not lost in transition to dragon.
                        <br><br>
                        Kingdom Key isn't one to talk much, but he's always willing to help you out in a pinch. He's a notoriously subtle teacher—some dragons only realizing the lesson has taken place long after it happened. If you see Kingdom Key within earshot when such realizations are exclaimed aloud, you'll catch hints of a smirk on his face.
                        <br>
                        <br>
                    </span>
                    <img 
                        :src="framesPath + keyblade.element + '/bottomShort.png'"
                    >
                </div>
            </div>
            <img 
                :src="
                    framesPath
                    + keyblade.element
                    + '/bottom.png'
                "
            >
        </div>
    `,
};
