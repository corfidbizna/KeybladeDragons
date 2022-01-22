/*            */
/*    Data    */
/*            */
var kHGames = [
    'KINGDOM HEARTS',
    'Chain of Memories', // No Keyblades live here. 
    'KINGDOM HEARTS II',
    '358/2 Days',
    'Birth by Sleep',
    'Re:coded',
    'Dream Drop Distance',
    'Unchained χ / Union Cross',
    'KINGDOM HEARTS III',
];
var fRElements = [
    'Earth',
    'Plague',
    'Wind',
    'Water',
    'Lightning',
    'Ice',
    'Shadow',
    'Light',
    'Arcane',
    'Nature',
    'Fire',
    'Shade', // Not an element of FR, but dragons with this 
];           // will get the Shade (black) frames.
var fRBreeds = [
    /* Modern Breeds */
    'Fae',
    'Guardian',
    'Mirror',
    'Pearlcatcher',
    'Ridgeback',
    'Tundra',
    'Spiral',
    'Imperial',
    'Snapper',
    'Wildclaw',
    'Nocturne',
    'Coatl',
    'Skydancer',
    'Bogsneak',
    'Obelisk',
    'UNUSED',
    /* Ancient Breeds */
    'Gaoler',
    'Banescale',
    'Veilspun',
];

/*            */
/*   Blades   */
/*            */
var keyblades = [
    {
        id: "KingdomKey",
        name: "Kingdom Key",
        gameIndex: 0,
        dergID: 15046924
    },
    {
        id: "LadyLuck",
        name: "Lady Luck",
        gameIndex: 0,
        dergID: 16394067
    },
    {
        id: "Olympia",
        name: "Olympia",
        gameIndex: 0,
        dergID: 56121178
    },
    {
        id: "JungleKing",
        name: "Jungle King",
        gameIndex: 0,
        dergID: 13657285
    },
    {
        id: "ThreeWishes",
        name: "Three Wishes",
        gameIndex: 0,
        dergID: 12563878
    },
    {
        id: "Pumpkinhead",
        name: "Pumpkinhead",
        gameIndex: 0,
        dergID: 13629389
    },
    {
        id: "WishingStar",
        name: "Wishing Star",
        gameIndex: 0,
        dergID: 55174302
    },
    {
        id: "Crabclaw",
        name: "Crabclaw",
        gameIndex: 0,
        dergID: 54114362
    },
    {
        id: "FairyHarp",
        name: "Fairy Harp",
        gameIndex: 0,
        dergID: 56749586
    },
    {
        id: "DivineRose",
        name: "Divine Rose",
        gameIndex: 0,
        dergID: 18227294
    },
    {
        id: "Spellbinder",
        name: "Spellbinder",
        gameIndex: 0,
        dergID: 12283922
    },
    {
        id: "MetalChocobo",
        name: "Metal Chocobo",
        gameIndex: 0,
        dergID: 53613854
    },
    {
        id: "Lionheart",
        name: "Lionheart",
        gameIndex: 0,
        dergID: 55539104
    },
    {
        id: "DiamondDust",
        name: "Diamond Dust",
        gameIndex: 0,
        dergID: 8978770
    },
    {
        id: "OneWingedAngel",
        name: "One-Winged Angel",
        gameIndex: 0,
        dergID: 52903216
    },
    {
        id: "Oathkeeper",
        name: "Oathkeeper",
        gameIndex: 0,
        dergID: 12781581
    },
    {
        id: "Oblivion",
        name: "Oblivion",
        gameIndex: 0,
        dergID: 18246380
    },
    {
        id: "UltimaKH1",
        name: "Ultima",
        gameIndex: 0,
        dergID: 54240400
    },
    {
        id: "PeoplesHearts",
        name: "People's Hearts",
        gameIndex: 0,
        dergID: 12611206
    },
    {
        id: "StarSeeker",
        name: "Star Seeker",
        gameIndex: 2,
        dergID: 51774403
    },
    {
        id: "HiddenDragon",
        name: "Hidden Dragon",
        gameIndex: 2,
        dergID: 13643712
    },
    {
        id: "RumblingRose",
        name: "Rumbling Rose",
        gameIndex: 2,
        dergID: 51945891
    },
    {
        id: "HerosCrest",
        name: "Hero's Crest",
        gameIndex: 2,
        dergID: 54940512
    },
    {
        id: "Monochrome",
        name: "Monochrome",
        gameIndex: 2,
        dergID: 12669181
    },
    {
        id: "MysteriousAbyss",
        name: "Mysterious Abyss",
        gameIndex: 2,
        dergID: 55038058
    },
    {
        id: "FollowTheWind",
        name: "Follow the Wind",
        gameIndex: 2,
        dergID: 14251391
    },
    {
        id: "WishingLamp",
        name: "Wishing Lamp",
        gameIndex: 2,
        dergID: 53683161
    },
    {
        id: "DecisivePumpkin",
        name: "Descisive Pumpkin",
        gameIndex: 2,
        dergID: 54684749
    },
    {
        id: "PhotonDebugger",
        name: "Photon Debugger",
        gameIndex: 2,
        dergID: 30274943
    },
    {
        id: "CircleOfLife",
        name: "Circle of Life",
        gameIndex: 2,
        dergID: 51923758
    },
    {
        id: "SweetMemories",
        name: "Sweet Memories",
        gameIndex: 2,
        dergID: 54099682
    },
    {
        id: "GullWing",
        name: "Gull Wing",
        gameIndex: 2,
        dergID: 54637227
    },
    {
        id: "GuardianSoul",
        name: "Guardian Soul",
        gameIndex: 2,
        dergID: 51419725
    },
    {
        id: "SleepingLion",
        name: "Sleeping Lion",
        gameIndex: 2,
        dergID: 12356399
    },
    {
        id: "Fenrir",
        name: "Fenrir",
        gameIndex: 2,
        dergID: 54608573
    },
    {
        id: "BondOfFlame",
        name: "Bond of Flame",
        gameIndex: 2,
        dergID: 13789514
    },
    {
        id: "TwoBecomeOne",
        name: "Two Become One",
        gameIndex: 2,
        dergID: 57291293
    },
    {
        id: "FatalCrest",
        name: "Fatal Crest",
        gameIndex: 2,
        dergID: 50918526
    },
    {
        id: "WinnersProof",
        name: "Winner's Proof",
        gameIndex: 2,
        dergID: 55549088
    },
    {
        id: "UltimaKH2",
        name: "Ultima",
        gameIndex: 2,
        dergID: 54357913
    },
    {
        id: "WayToTheDawn",
        name: "Way to the Dawn",
        gameIndex: 2,
        dergID: 38743794
    },
    {
        id: "DestinysEmbrace",
        name: "Destiny's Embrace",
        gameIndex: 2,
        dergID: 17724951
    },
    {
        id: "MissingAche",
        name: "Missing Ache",
        gameIndex: 3,
        dergID: 48377777
    },
    {
        id: "OminousBlight",
        name: "Ominous Blight",
        gameIndex: 3,
        dergID: 48401548
    },
    {
        id: "AbaddonPlasma",
        name: "Abaddon Plasma",
        gameIndex: 3,
        dergID: 54270026
    },
    {
        id: "PainOfSolitude",
        name: "Pain Of Solitude",
        gameIndex: 3,
        dergID: 48392099
    },
    {
        id: "SignOfInnocence",
        name: "Sign Of Innocence",
        gameIndex: 3,
        dergID: 40653260
    },
    {
        id: "CrownOfGuilt",
        name: "Crown of Guilt",
        gameIndex: 3,
        dergID: 14365734
    },
    {
        id: "AbyssalTide",
        name: "Abyssal Tide",
        gameIndex: 3,
        dergID: 12842754
    },
    {
        id: "Leviathan",
        name: "Leviathan",
        gameIndex: 3,
        dergID: 12330397
    },
    {
        id: "TrueLightsFlight",
        name: "True Light's Flight",
        gameIndex: 3,
        dergID: 48389536
    },
    {
        id: "RejectionOfFate",
        name: "Rejection of Fate",
        gameIndex: 3,
        dergID: 14447317
    },
    {
        id: "MidnightRoar",
        name: "Midnight Roar",
        gameIndex: 3,
        dergID: 57240355
    },
    {
        id: "GlimpseOfDark",
        name: "Glimpse of Darkness",
        gameIndex: 3,
        dergID: 18277680
    },
    {
        id: "TotalEclipse",
        name: "Total Eclipse",
        gameIndex: 3,
        dergID: 11503095
    },
    {
        id: "SilentDirge",
        name: "Silent Dirge",
        gameIndex: 3,
        dergID: 18277678
    },
    {
        id: "LunarEclipse",
        name: "Lunar Eclipse",
        gameIndex: 3,
        dergID: 53610383
    },
    {
        id: "DarkerThanDark",
        name: "Darker than Darkness",
        gameIndex: 3,
        dergID: 12352765
    },
    {
        id: "AstralBlast",
        name: "Astral Blast",
        gameIndex: 3,
        dergID: 56865289
    },
    {
        id: "MaverickFlare",
        name: "Maverick Flare",
        gameIndex: 3,
        dergID: 14447316
    },
    {
        id: "TwilightBlaze",
        name: "Twilight Blaze",
        gameIndex: 3,
        dergID: 14447313
    },
    {
        id: "Omega",
        name: "Omega",
        gameIndex: 3,
        dergID: 54784963
    },
    {
        id: "Umbrella",
        name: "Umbrella",
        gameIndex: 3,
        dergID: 52548728
    },
    {
        id: "Abudae",
        name: "Abudae",
        gameIndex: 3,
        dergID: 55367819
    },
    {
        id: "TreasureTrove",
        name: "Treasure Trove",
        gameIndex: 4,
        dergID: 47924330
    },
    {
        id: "StrokeOfMidnight",
        name: "Stroke of Midnight",
        gameIndex: 4,
        dergID: 25089353
    },
    {
        id: "FairyStars",
        name: "Fairy Stars",
        gameIndex: 4,
        dergID: 40804817
    },
    {
        id: "VictoryLine",
        name: "Victory Line",
        gameIndex: 4,
        dergID: 60872881
    },
    {
        id: "MarkOfAHero",
        name: "Mark of a Hero",
        gameIndex: 4,
        dergID: 45648758
    },
    {
        id: "HyperDrive",
        name: "Hyper Drive",
        gameIndex: 4,
        dergID: 13704566
    },
    {
        id: "PixiePetal",
        name: "Pixie Petal",
        gameIndex: 4,
        dergID: 14988244
    },
    {
        id: "Sweetstack",
        name: "Sweetstack",
        gameIndex: 4,
        dergID: 14512950
    },
    {
        id: "NoName",
        name: "No Name",
        gameIndex: 4,
        dergID: 48396864
    },
    {
        id: "RoyalRadiance",
        name: "Royal Radiance",
        gameIndex: 4,
        dergID: 45957116
    },
    {
        id: "UltimaBbS",
        name: "Ultima",
        gameIndex: 4,
        dergID: 47722786
    },
    {
        id: "EndsOfTheEarth",
        name: "Ends of the Earth",
        gameIndex: 4,
        dergID: 12129239
    },
    {
        id: "Darkgnaw",
        name: "Darkgnaw",
        gameIndex: 4,
        dergID: 54271293
    },
    {
        id: "ChaosRipper",
        name: "Chaos Ripper",
        gameIndex: 4,
        dergID: 54305679
    },
    {
        id: "Rainfell",
        name: "Rainfell",
        gameIndex: 4,
        dergID: 12570049
    },
    {
        id: "Stormfall",
        name: "Stormfall",
        gameIndex: 4,
        dergID: 12129240
    },
    {
        id: "Brightcrest",
        name: "Brightcrest",
        gameIndex: 4,
        dergID: 53173484
    },
    {
        id: "MastersDefender",
        name: "Master's Defender",
        gameIndex: 4,
        dergID: 13759667
    },
    {
        id: "WaywardWind",
        name: "Wayward Wind",
        gameIndex: 4,
        dergID: 17668006
    },
    {
        id: "FrolicFlame",
        name: "Frolic Flame",
        gameIndex: 4,
        dergID: 54211418
    },
    {
        id: "LostMemory",
        name: "Lost Memory",
        gameIndex: 4,
        dergID: 47928896
    },
    {
        id: "Xehanort",
        name: "Xehanort",
        gameIndex: 4,
        dergID: 21146563
    },
    {
        id: "VoidGear",
        name: "Void Gear",
        gameIndex: 4,
        dergID: 56257174
    },
    {
        id: "Wooden",
        name: "Wooden",
        gameIndex: 4,
        dergID: 72302418
    },
    {
        id: "ZeroOne",
        name: "Zero/One",
        gameIndex: 5,
        dergID: 57534118
    },
    {
        id: "NightmaresEnd",
        name: "Nightmare's End",
        gameIndex: 6,
        dergID: 14928288
    },
    {
        id: "MirageSplit",
        name: "Mirage Split",
        gameIndex: 6,
        dergID: 57173289
    },
    {
        id: "SkullNoise",
        name: "Skull Noise",
        gameIndex: 6,
        dergID: 52549542
    },
    {
        id: "GuardianBell",
        name: "Guardian Bell",
        gameIndex: 6,
        dergID: 55266297
    },
    {
        id: "DualDisc",
        name: "Dual Disc",
        gameIndex: 6,
        dergID: 20197700
    },
    {
        id: "FerrisGear",
        name: "Ferris Gear",
        gameIndex: 6,
        dergID: 54606119
    },
    {
        id: "OceanRage",
        name: "Ocean Rage",
        gameIndex: 6,
        dergID: 52879436
    },
    {
        id: "KnockoutPunch",
        name: "Knockout Punch",
        gameIndex: 6,
        dergID: 53352904
    },
    {
        id: "AllForOne",
        name: "All for One",
        gameIndex: 6,
        dergID: 54645901
    },
    {
        id: "Counterpoint",
        name: "Counterpoint",
        gameIndex: 6,
        dergID: 47562982
    },
    {
        id: "Divewing",
        name: "Divewing",
        gameIndex: 6,
        dergID: 51959886
    },
    {
        id: "SweetDreams",
        name: "Sweet Dreams",
        gameIndex: 6,
        dergID: 67549415
    },
    {
        id: "Unbound",
        name: "Unbound",
        gameIndex: 6,
        dergID: 48688713
    },
    {
        id: "EndOfPain",
        name: "End of Pain",
        gameIndex: 6,
        dergID: 51007316
    },
    {
        id: "UltimaDDD",
        name: "Ultima",
        gameIndex: 6,
        dergID: 54393943
    },
    {
        id: "FlameLiberator",
        name: "Flame Liberator",
        gameIndex: 6,
        dergID: 57429678
    },
    {
        id: "YoungXehanort",
        name: "Young Xehanort",
        gameIndex: 6,
        dergID: 72064670
    },
    {
        id: "HerosOrigin",
        name: "Hero's Origin",
        gameIndex: 8,
        dergID: 48632981
    },
    {
        id: "ShootingStar",
        name: "Shooting Star",
        gameIndex: 8,
        dergID: 56802860
    },
    {
        id: "FavoriteDeputy",
        name: "Favorite Deputy",
        gameIndex: 8,
        dergID: 47913889
    },
    {
        id: "EverAfter",
        name: "Ever After",
        gameIndex: 8,
        dergID: 52238998
    },
    {
        id: "HappyGear",
        name: "Happy Gear",
        gameIndex: 8,
        dergID: 42575407
    },
    {
        id: "CrystalSnow",
        name: "Crystal Snow",
        gameIndex: 8,
        dergID: 42083532
    },
    {
        id: "HunnySpout",
        name: "Hunny Spout",
        gameIndex: 8,
        dergID: 55337950
    },
    {
        id: "WheelOfFate",
        name: "Wheel of Fate",
        gameIndex: 8,
        dergID: 42750652
    },
    {
        id: "NanoGear",
        name: "Nano Gear",
        gameIndex: 8,
        dergID: 45466968
    },
    {
        id: "GrandChef",
        name: "Grand Chef",
        gameIndex: 8,
        dergID: 52877984
    },
    {
        id: "ClassicTone",
        name: "Classic Tone",
        gameIndex: 8,
        dergID: 61168882
    },
    {
        id: "UltimaKH3",
        name: "Ultima",
        gameIndex: 8,
        dergID: 53935370
    },
    {
        id: "StarCluster",
        name: "Star Cluster",
        gameIndex: 8,
        dergID: 54538619
    },
    {
        id: "Braveheart",
        name: "Braveheart",
        gameIndex: 8,
        dergID: 38642406
    },
    {
        id: "MidnightBlue",
        name: "Midnight Blue",
        gameIndex: 8,
        dergID: 67442536
    },
    {
        id: "PhantomGreen",
        name: "Phantom Green",
        gameIndex: 8,
        dergID: 67608298
    },
    {
        id: "DawnTillDusk",
        name: "Dawn Till Dusk",
        gameIndex: 8,
        dergID: 68990709
    },
    {
        id: "ElementEncoder",
        name: "Element Encoder",
        gameIndex: 8,
        dergID: 68369368
    },
    {
        id: "AdventRed",
        name: "Advent Red",
        gameIndex: 8,
        dergID: 75174766
    },
    {
        id: "Starlight",
        name: "Starlight",
        gameIndex: 7,
        dergID: 37894616
    },
    {
        id: "MoogleOGlory",
        name: "Moogle O' Glory",
        gameIndex: 7,
        dergID: 54273226
    },
    {
        id: "BadGuyBreaker",
        name: "Bad Guy Breaker",
        gameIndex: 7,
        dergID: 59047654
    },
    {
        id: "Angius",
        name: "Angius",
        gameIndex: 7,
        dergID: 74962088
    },
    {
        id: "Leopardus",
        name: "Leopardus",
        gameIndex: 7,
        dergID: 51886167
    },
    {
        id: "Unicornis",
        name: "Unicornis",
        gameIndex: 7,
        dergID: 53728504
    },
    {
        id: "Ursus",
        name: "Ursus",
        gameIndex: 7,
        dergID: 70984038
    },
    {
        id: "Vulpus",
        name: "Vulpus",
        gameIndex: 7,
        dergID: 71712439
    },
    {
        id: "KEYBLADE",
        name: "Keyblade",
        gameIndex: 7,
        dergID: 71731909
    }
];
var keybladesMap = {};
keyblades.forEach(function (keyblade) {
    keybladesMap[keyblade.id] = keyblade;
});

/*            */
/*  Dragons   */
/*            */
var dragonsMap = {
    8978770: {
        name: "DiamondDust",
        dragonID: 8978770,
        species: "Snapper",
        silhouette: "Female",
        element: "Ice",
        sceneID: 37882,
        familiarID: 35765,
        colors: [
            "Caribbean",
            "Caribbean",
            "Ice"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Smoke"
        ]
    },
    11503095: {
        name: "TotalEclipse",
        dragonID: 11503095,
        species: "Imperial",
        silhouette: "Male",
        element: "Fire",
        sceneID: 34837,
        familiarID: 34723,
        colors: [
            "Obsidian",
            "Obsidian",
            "Fire"
        ],
        genes: [
            "Vipera",
            "Freckle",
            "Spines"
        ]
    },
    12129239: {
        name: "EndsOfTheEarth",
        dragonID: 12129239,
        species: "Guardian",
        silhouette: "Male",
        element: "Earth",
        sceneID: 34843,
        familiarID: 20827,
        colors: [
            "Soil",
            "Goldenrod",
            "Rose"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    12129240: {
        name: "Stormfall",
        dragonID: 12129240,
        species: "Tundra",
        silhouette: "Female",
        element: "Earth",
        sceneID: 34843,
        familiarID: 20828,
        colors: [
            "Storm",
            "Steel",
            "Midnight"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    12283922: {
        name: "Spellbinder",
        dragonID: 12283922,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 36048,
        familiarID: 15287,
        colors: [
            "Splash",
            "Sky",
            "Ice"
        ],
        genes: [
            "Ribbon",
            "Eel",
            "Underbelly"
        ]
    },
    12330397: {
        name: "Leviathan",
        dragonID: 12330397,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 39215,
        familiarID: 2591,
        colors: [
            "Black",
            "Splash",
            "Teal"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    12352765: {
        name: "DarkerThanDark",
        dragonID: 12352765,
        species: "Nocturne",
        silhouette: "Female",
        element: "Plague",
        sceneID: 38411,
        familiarID: 16484,
        colors: [
            "Purple",
            "Teal",
            "Azure"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    12356399: {
        name: "SleepingLion",
        dragonID: 12356399,
        species: "Skydancer",
        silhouette: "Female",
        element: "Earth",
        sceneID: 40841,
        familiarID: 987,
        colors: [
            "Silver",
            "Grey",
            "Grey"
        ],
        genes: [
            "Basic",
            "Stripes",
            "Basic"
        ]
    },
    12563878: {
        name: "ThreeWishes",
        dragonID: 12563878,
        species: "Coatl",
        silhouette: "Male",
        element: "Fire",
        sceneID: 37865,
        familiarID: 37353,
        colors: [
            "Lemon",
            "Storm",
            "Pink"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    12570049: {
        name: "Rainfell",
        dragonID: 12570049,
        species: "Guardian",
        silhouette: "Female",
        element: "Ice",
        sceneID: 34843,
        familiarID: 33623,
        colors: [
            "Navy",
            "White",
            "White"
        ],
        genes: [
            "Crystal",
            "Facet",
            "Underbelly"
        ]
    },
    12611206: {
        name: "PeoplesHearts",
        dragonID: 12611206,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 38215,
        familiarID: 42692,
        colors: [
            "Obsidian",
            "Red",
            "Maize"
        ],
        genes: [
            "Basic",
            "Basic",
            "Spines"
        ]
    },
    12669181: {
        name: "Monochrome",
        dragonID: 12669181,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 41418,
        familiarID: 42683,
        colors: [
            "Grey",
            "Silver",
            "White"
        ],
        genes: [
            "Basic",
            "Basic",
            "Underbelly"
        ]
    },
    12781581: {
        name: "Oathkeeper",
        dragonID: 12781581,
        species: "Skydancer",
        silhouette: "Female",
        element: "Light",
        sceneID: 38283,
        familiarID: 15282,
        colors: [
            "White",
            "White",
            "Maize"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Runes"
        ]
    },
    12842754: {
        name: "AbyssalTide",
        dragonID: 12842754,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Fire",
        sceneID: 39215,
        familiarID: 20156,
        colors: [
            "Stonewash",
            "Sky",
            "Sky"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    13629389: {
        name: "Pumpkinhead",
        dragonID: 13629389,
        species: "Nocturne",
        silhouette: "Female",
        element: "Fire",
        sceneID: 34837,
        familiarID: 35009,
        colors: [
            "Charcoal",
            "Charcoal",
            "Jungle"
        ],
        genes: [
            "Clown",
            "Stripes",
            "Basic"
        ]
    },
    13643712: {
        name: "HiddenDragon",
        dragonID: 13643712,
        species: "Spiral",
        silhouette: "Male",
        element: "Light",
        sceneID: 38799,
        familiarID: 11147,
        colors: [
            "Fire",
            "Fire",
            "Fire"
        ],
        genes: [
            "Crystal",
            "Facet",
            "Basic"
        ]
    },
    13657285: {
        name: "JungleKing",
        dragonID: 13657285,
        species: "Wildclaw",
        silhouette: "Male",
        element: "Ice",
        sceneID: 39569,
        familiarID: 36493,
        colors: [
            "Maize",
            "Maize",
            "Maize"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    13704566: {
        name: "HyperDrive",
        dragonID: 13704566,
        species: "Imperial",
        silhouette: "Male",
        element: "Fire",
        sceneID: 1,
        familiarID: 34717,
        colors: [
            "Splash",
            "Leaf",
            "Storm"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Basic"
        ]
    },
    13759667: {
        name: "MastersDefender",
        dragonID: 13759667,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Lightning",
        sceneID: 35018,
        familiarID: 37358,
        colors: [
            "Ice",
            "Charcoal",
            "Brown"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    13789514: {
        name: "BondOfFlame",
        dragonID: 13789514,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Ice",
        sceneID: 35702,
        familiarID: 32677,
        colors: [
            "Silver",
            "Red",
            "Midnight"
        ],
        genes: [
            "Crystal",
            "Basic",
            "Underbelly"
        ]
    },
    14251391: {
        name: "FollowTheWind",
        dragonID: 14251391,
        species: "Spiral",
        silhouette: "Male",
        element: "Ice",
        sceneID: 35959,
        familiarID: 35957,
        colors: [
            "Midnight",
            "Forest",
            "Sand"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Basic"
        ]
    },
    14365734: {
        name: "CrownOfGuilt",
        dragonID: 14365734,
        species: "Skydancer",
        silhouette: "Female",
        element: "Fire",
        sceneID: 36048,
        familiarID: 34791,
        colors: [
            "Ice",
            "Violet",
            "Steel"
        ],
        genes: [
            "Vipera",
            "Shimmer",
            "Basic"
        ]
    },
    14447313: {
        name: "TwilightBlaze",
        dragonID: 14447313,
        species: "Pearlcatcher",
        silhouette: "Female",
        element: "Fire",
        sceneID: 35702,
        familiarID: 34795,
        colors: [
            "Black",
            "Crimson",
            "Sky"
        ],
        genes: [
            "Tiger",
            "Shimmer",
            "Underbelly"
        ]
    },
    14447316: {
        name: "MaverickFlare",
        dragonID: 14447316,
        species: "Nocturne",
        silhouette: "Male",
        element: "Fire",
        sceneID: 35702,
        familiarID: 42030,
        colors: [
            "Obsidian",
            "Crimson",
            "Obsidian"
        ],
        genes: [
            "Tiger",
            "Facet",
            "Basic"
        ]
    },
    14447317: {
        name: "RejectionOfFate",
        dragonID: 14447317,
        species: "Guardian",
        silhouette: "Male",
        element: "Fire",
        sceneID: 37882,
        familiarID: 31196,
        colors: [
            "Ice",
            "Ice",
            "Silver"
        ],
        genes: [
            "Ripple",
            "Daub",
            "Basic"
        ]
    },
    14512950: {
        name: "Sweetstack",
        dragonID: 14512950,
        species: "Snapper",
        silhouette: "Female",
        element: "Earth",
        sceneID: 1,
        familiarID: 25404,
        colors: [
            "Brown",
            "Lemon",
            "Rose"
        ],
        genes: [
            "Clown",
            "Eye Spots",
            "Gembond"
        ]
    },
    14928288: {
        name: "NightmaresEnd",
        dragonID: 14928288,
        species: "Mirror",
        silhouette: "Female",
        element: "Light",
        sceneID: 34842,
        familiarID: 40822,
        colors: [
            "Banana",
            "Gold",
            "Banana"
        ],
        genes: [
            "Fade",
            "Facet",
            "Okapi"
        ]
    },
    14988244: {
        name: "PixiePetal",
        dragonID: 14988244,
        species: "Coatl",
        silhouette: "Female",
        element: "Fire",
        sceneID: 38799,
        familiarID: 25759,
        colors: [
            "Maize",
            "Leaf",
            "Steel"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Basic"
        ]
    },
    15046924: {
        name: "KingdomKey",
        dragonID: 15046924,
        species: "Mirror",
        silhouette: "Male",
        element: "Earth",
        sceneID: 34845,
        familiarID: 22394,
        colors: [
            "Silver",
            "Silver",
            "Lemon"
        ],
        genes: [
            "Basic",
            "Basic",
            "Underbelly"
        ]
    },
    16394067: {
        name: "LadyLuck",
        dragonID: 16394067,
        species: "Imperial",
        silhouette: "Female",
        element: "Fire",
        sceneID: 34841,
        familiarID: 34370,
        colors: [
            "Lavender",
            "Magenta",
            "Lemon"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    17668006: {
        name: "WaywardWind",
        dragonID: 17668006,
        species: "Skydancer",
        silhouette: "Female",
        element: "Wind",
        sceneID: 34843,
        familiarID: 33311,
        colors: [
            "Coal",
            "Goldenrod",
            "Crimson"
        ],
        genes: [
            "Basic",
            "Stripes",
            "Basic"
        ]
    },
    17724951: {
        name: "DestinysEmbrace",
        dragonID: 17724951,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Fire",
        sceneID: 34839,
        familiarID: 37891,
        colors: [
            "Orange",
            "Splash",
            "Maize"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    18227294: {
        name: "DivineRose",
        dragonID: 18227294,
        species: "Coatl",
        silhouette: "Male",
        element: "Fire",
        sceneID: 37360,
        familiarID: 42688,
        colors: [
            "Mulberry",
            "Gold",
            "Green"
        ],
        genes: [
            "Basic",
            "Shimmer",
            "Underbelly"
        ]
    },
    18246380: {
        name: "Oblivion",
        dragonID: 18246380,
        species: "Guardian",
        silhouette: "Male",
        element: "Shadow",
        sceneID: 38283,
        familiarID: 16486,
        colors: [
            "Black",
            "Black",
            "Grey"
        ],
        genes: [
            "Basic",
            "Eye Spots",
            "Basic"
        ]
    },
    18277678: {
        name: "SilentDirge",
        dragonID: 18277678,
        species: "Imperial",
        silhouette: "Male",
        element: "Plague",
        sceneID: 38411,
        familiarID: 34798,
        colors: [
            "Violet",
            "Banana",
            "Soil"
        ],
        genes: [
            "Iridescent",
            "Facet",
            "Underbelly"
        ]
    },
    18277680: {
        name: "GlimpseOfDark",
        dragonID: 18277680,
        species: "Imperial",
        silhouette: "Female",
        element: "Plague",
        sceneID: 34837,
        familiarID: 33457,
        colors: [
            "Thistle",
            "Sand",
            "Swamp"
        ],
        genes: [
            "Iridescent",
            "Facet",
            "Underbelly"
        ]
    },
    20197700: {
        name: "DualDisc",
        dragonID: 20197700,
        species: "Coatl",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 35033,
        familiarID: 40671,
        colors: [
            "Midnight",
            "Midnight",
            "Aqua"
        ],
        genes: [
            "Basic",
            "Basic",
            "Contour"
        ]
    },
    21146563: {
        name: "Xehanort",
        dragonID: 21146563,
        species: "Nocturne",
        silhouette: "Male",
        element: "Lightning",
        sceneID: 38411,
        familiarID: 40821,
        colors: [
            "Black",
            "Black",
            "Charcoal"
        ],
        genes: [
            "Crystal",
            "Butterfly",
            "Spines"
        ]
    },
    25089353: {
        name: "StrokeOfMidnight",
        dragonID: 25089353,
        species: "Imperial",
        silhouette: "Male",
        element: "Fire",
        sceneID: 1,
        familiarID: 33306,
        colors: [
            "Robin",
            "Iris",
            "Stonewash"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Spines"
        ]
    },
    30274943: {
        name: "PhotonDebugger",
        dragonID: 30274943,
        species: "Wildclaw",
        silhouette: "Male",
        element: "Ice",
        sceneID: 35033,
        familiarID: 36299,
        colors: [
            "Midnight",
            "Smoke",
            "Grey"
        ],
        genes: [
            "Crystal",
            "Facet",
            "Smoke"
        ]
    },
    37894616: {
        name: "Starlight",
        dragonID: 37894616,
        species: "Coatl",
        silhouette: "Female",
        element: "Light",
        sceneID: 35018,
        familiarID: 16482,
        colors: [
            "Twilight",
            "Yellow",
            "Banana"
        ],
        genes: [
            "Iridescent",
            "Butterfly",
            "Runes"
        ]
    },
    38642406: {
        name: "Braveheart",
        dragonID: 38642406,
        species: "Pearlcatcher",
        silhouette: "Female",
        element: "Shadow",
        sceneID: 34848,
        familiarID: 28246,
        colors: [
            "Silver",
            "Silver",
            "Oilslick"
        ],
        genes: [
            "Crystal",
            "Facet",
            "Basic"
        ]
    },
    38743794: {
        name: "WayToTheDawn",
        dragonID: 38743794,
        species: "Nocturne",
        silhouette: "Male",
        element: "Lightning",
        sceneID: 38411,
        familiarID: 612,
        colors: [
            "Iris",
            "Crimson",
            "Amethyst"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    40653260: {
        name: "SignOfInnocence",
        dragonID: 40653260,
        species: "Spiral",
        silhouette: "Female",
        element: "Earth",
        sceneID: 36048,
        familiarID: 41628,
        colors: [
            "Midnight",
            "Blackberry",
            "Clay"
        ],
        genes: [
            "Iridescent",
            "Toxin",
            "Basic"
        ]
    },
    40804817: {
        name: "FairyStars",
        dragonID: 40804817,
        species: "Snapper",
        silhouette: "Female",
        element: "Earth",
        sceneID: 1,
        familiarID: 26206 - 1,
        colors: [
            "Splash",
            "Antique",
            "Cream"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    42083532: {
        name: "CrystalSnow",
        dragonID: 42083532,
        species: "Pearlcatcher",
        silhouette: "Female",
        element: "Ice",
        sceneID: 37882,
        familiarID: 21153,
        colors: [
            "Cornflower",
            "Splash",
            "Cornflower"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Ghost"
        ]
    },
    42575407: {
        name: "HappyGear",
        dragonID: 42575407,
        species: "Mirror",
        silhouette: "Female",
        element: "Plague",
        sceneID: 35033,
        familiarID: 638,
        colors: [
            "Silver",
            "Grey",
            "Shale"
        ],
        genes: [
            "Basic",
            "Basic",
            "Thylacine"
        ]
    },
    42750652: {
        name: "WheelOfFate",
        dragonID: 42750652,
        species: "Pearlcatcher",
        silhouette: "Male",
        element: "Arcane",
        sceneID: 35959,
        familiarID: 20146,
        colors: [
            "Flint",
            "Black",
            "Shale"
        ],
        genes: [
            "Crystal",
            "Shimmer",
            "Underbelly"
        ]
    },
    45466968: {
        name: "NanoGear",
        dragonID: 45466968,
        species: "Snapper",
        silhouette: "Male",
        element: "Arcane",
        sceneID: 1,
        familiarID: 7597,
        colors: [
            "Ruby",
            "Dirt",
            "Coral"
        ],
        genes: [
            "Wasp",
            "Bee",
            "Glimmer"
        ]
    },
    45648758: {
        name: "MarkOfAHero",
        dragonID: 45648758,
        species: "Wildclaw",
        silhouette: "Male",
        element: "Ice",
        sceneID: 40825,
        familiarID: 36374,
        colors: [
            "Antique",
            "Metals",
            "Metals"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Opal"
        ]
    },
    45957116: {
        name: "RoyalRadiance",
        dragonID: 45957116,
        species: "Spiral",
        silhouette: "Female",
        element: "Wind",
        sceneID: 34848,
        familiarID: 34773,
        colors: [
            "Beige",
            "Cyan",
            "Cyan"
        ],
        genes: [
            "Crystal",
            "Butterfly",
            "Glimmer"
        ]
    },
    47562982: {
        name: "Counterpoint",
        dragonID: 47562982,
        species: "Spiral",
        silhouette: "Female",
        element: "Arcane",
        sceneID: 34842,
        familiarID: 37352,
        colors: [
            "Splash",
            "Saffron",
            "Banana"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Circuit"
        ]
    },
    47722786: {
        name: "Ultima",
        dragonID: 47722786,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Ice",
        sceneID: 34839,
        familiarID: 25405,
        colors: [
            "Ice",
            "Ice",
            "Ice"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Opal"
        ]
    },
    47913889: {
        name: "FavoriteDeputy",
        dragonID: 47913889,
        species: "Bogsneak",
        silhouette: "Female",
        element: "Nature",
        sceneID: 37360,
        familiarID: 38493,
        colors: [
            "Mantis",
            "Mantis",
            "Radioactive"
        ],
        genes: [
            "Metallic",
            "Facet",
            "Glimmer"
        ]
    },
    47924330: {
        name: "TreasureTrove",
        dragonID: 47924330,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Shadow",
        sceneID: 36759,
        familiarID: 42342,
        colors: [
            "Coal",
            "Stone",
            "Gold"
        ],
        genes: [
            "Jupiter",
            "Alloy",
            "Runes"
        ]
    },
    47928896: {
        name: "LostMemory",
        dragonID: 47928896,
        species: "Pearlcatcher",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 36759,
        familiarID: 33205,
        colors: [
            "White",
            "White",
            "Vermilion"
        ],
        genes: [
            "Basic",
            "Basic",
            "Runes"
        ]
    },
    48377777: {
        name: "MissingAche",
        dragonID: 48377777,
        species: "Tundra",
        silhouette: "Male",
        element: "Light",
        sceneID: 37361,
        familiarID: 41963,
        colors: [
            "Maize",
            "Charcoal",
            "Blackberry"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    48389536: {
        name: "TrueLightsFlight",
        dragonID: 48389536,
        species: "Nocturne",
        silhouette: "Female",
        element: "Arcane",
        sceneID: 37882,
        familiarID: 41970,
        colors: [
            "Ice",
            "Black",
            "Maize"
        ],
        genes: [
            "Metallic",
            "Butterfly",
            "Underbelly"
        ]
    },
    48392099: {
        name: "PainOfSolitude",
        dragonID: 48392099,
        species: "Fae",
        silhouette: "Male",
        element: "Arcane",
        sceneID: 36048,
        familiarID: 42619,
        colors: [
            "Orca",
            "Plum",
            "Lead"
        ],
        genes: [
            "Tiger",
            "Stripes",
            "Basic"
        ]
    },
    48396864: {
        name: "NoName",
        dragonID: 48396864,
        species: "Bogsneak",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 38411,
        familiarID: 28768,
        colors: [
            "Overcast",
            "Aqua",
            "Grape"
        ],
        genes: [
            "Falcon",
            "Bee",
            "Smoke"
        ]
    },
    48401548: {
        name: "OminousBlight",
        dragonID: 48401548,
        species: "Mirror",
        silhouette: "Male",
        element: "Ice",
        sceneID: 37361,
        familiarID: 41965,
        colors: [
            "Coal",
            "Maize",
            "Blackberry"
        ],
        genes: [
            "Ripple",
            "Current",
            "Basic"
        ]
    },
    48632981: {
        name: "HerosOrigin",
        dragonID: 48632981,
        species: "Snapper",
        silhouette: "Male",
        element: "Lightning",
        sceneID: 1,
        familiarID: 37890,
        colors: [
            "Obsidian",
            "Obsidian",
            "Cantaloupe"
        ],
        genes: [
            "Metallic",
            "Alloy",
            "Basic"
        ]
    },
    48657720: {
        name: "Angius",
        dragonID: 48657720,
        species: "Coatl",
        silhouette: "Female",
        element: "Shadow",
        sceneID: 35018,
        familiarID: 1578,
        colors: [
            "Mist",
            "Shale",
            "Obsidian"
        ],
        genes: [
            "Iridescent",
            "Bee",
            "Glimmer"
        ]
    },
    48688713: {
        name: "Unbound",
        dragonID: 48688713,
        species: "Coatl",
        silhouette: "Male",
        element: "Light",
        sceneID: 36048,
        familiarID: 33445,
        colors: [
            "Sapphire",
            "Ultramarine",
            "Blue"
        ],
        genes: [
            "Iridescent",
            "Bee",
            "Underbelly"
        ]
    },
    50918526: {
        name: "FatalCrest",
        dragonID: 50918526,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Ice",
        sceneID: 1,
        familiarID: 35638,
        colors: [
            "Midnight",
            "Coal",
            "Obsidian"
        ],
        genes: [
            "Iridescent",
            "Stripes",
            "Ghost"
        ]
    },
    51007316: {
        name: "EndOfPain",
        dragonID: 51007316,
        species: "Snapper",
        silhouette: "Male",
        element: "Nature",
        sceneID: 1,
        familiarID: 21427,
        colors: [
            "Blood",
            "Ivory",
            "Ivory"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Runes"
        ]
    },
    51419725: {
        name: "GuardianSoul",
        dragonID: 51419725,
        species: "Guardian",
        silhouette: "Male",
        element: "Plague",
        sceneID: 38215,
        familiarID: 21418,
        colors: [
            "Lead",
            "Cerise",
            "Ice"
        ],
        genes: [
            "Lionfish",
            "Stripes",
            "Basic"
        ]
    },
    51774403: {
        name: "StarSeeker",
        dragonID: 51774403,
        species: "Fae",
        silhouette: "Male",
        element: "Water",
        sceneID: 38215,
        familiarID: 28763,
        colors: [
            "Fog",
            "Cornflower",
            "Gloom"
        ],
        genes: [
            "Jupiter",
            "Saturn",
            "Basic"
        ]
    },
    51886167: {
        name: "Leopardus",
        dragonID: 51886167,
        species: "Fae",
        silhouette: "Male",
        element: "Earth",
        sceneID: 35018,
        familiarID: 28239,
        colors: [
            "Honeydew",
            "Murk",
            "Buttercup"
        ],
        genes: [
            "Speckle",
            "Freckle",
            "Runes"
        ]
    },
    51923758: {
        name: "CircleOfLife",
        dragonID: 51923758,
        species: "Tundra",
        silhouette: "Male",
        element: "Wind",
        sceneID: 39895,
        familiarID: 41966,
        colors: [
            "Spring",
            "Marigold",
            "Abyss"
        ],
        genes: [
            "Tapir",
            "Eye Spots",
            "Basic"
        ]
    },
    51945891: {
        name: "RumblingRose",
        dragonID: 51945891,
        species: "Snapper",
        silhouette: "Male",
        element: "Ice",
        sceneID: 42685,
        familiarID: 42687,
        colors: [
            "Midnight",
            "Storm",
            "Amethyst"
        ],
        genes: [
            "Iridescent",
            "Noxtide",
            "Underbelly"
        ]
    },
    51959886: {
        name: "Divewing",
        dragonID: 51959886,
        species: "Ridgeback",
        silhouette: "Female",
        element: "Shadow",
        sceneID: 1,
        familiarID: 31189,
        colors: [
            "Overcast",
            "Carmine",
            "White"
        ],
        genes: [
            "Metallic",
            "Alloy",
            "Ghost"
        ]
    },
    52238998: {
        name: "EverAfter",
        dragonID: 52238998,
        species: "Spiral",
        silhouette: "Female",
        element: "Light",
        sceneID: 41418,
        familiarID: 6604,
        colors: [
            "White",
            "Antique",
            "Gold"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Glimmer"
        ]
    },
    52548728: {
        name: "Unnamed",
        dragonID: 52548728,
        species: "Pearlcatcher",
        silhouette: "Female",
        element: "Wind",
        sceneID: 1,
        familiarID: 42691,
        colors: [
            "White",
            "Oilslick",
            "Midnight"
        ],
        genes: [
            "Metallic",
            "Alloy",
            "Runes"
        ]
    },
    52549542: {
        name: "SkullNoise",
        dragonID: 52549542,
        species: "Guardian",
        silhouette: "Male",
        element: "Shadow",
        sceneID: 1,
        familiarID: 33450,
        colors: [
            "Midnight",
            "Gloom",
            "Gloom"
        ],
        genes: [
            "Ripple",
            "Morph",
            "Ghost"
        ]
    },
    52877984: {
        name: "GrandChef",
        dragonID: 52877984,
        species: "Spiral",
        silhouette: "Male",
        element: "Ice",
        sceneID: 40841,
        familiarID: 747,
        colors: [
            "Slate",
            "Peach",
            "Lemon"
        ],
        genes: [
            "Starmap",
            "Striation",
            "Capsule"
        ]
    },
    52879436: {
        name: "OceanRage",
        dragonID: 52879436,
        species: "Skydancer",
        silhouette: "Female",
        element: "Fire",
        sceneID: 39215,
        familiarID: 25411,
        colors: [
            "Lead",
            "Ice",
            "Maize"
        ],
        genes: [
            "Lionfish",
            "Seraph",
            "Basic"
        ]
    },
    52903216: {
        name: "OneWingedAngel",
        dragonID: 52903216,
        species: "Imperial",
        silhouette: "Male",
        element: "Lightning",
        sceneID: 38411,
        familiarID: 31200,
        colors: [
            "Midnight",
            "Gloom",
            "Silver"
        ],
        genes: [
            "Metallic",
            "Alloy",
            "Glimmer"
        ]
    },
    53173484: {
        name: "Brightcrest",
        dragonID: 53173484,
        species: "Skydancer",
        silhouette: "Female",
        element: "Water",
        sceneID: 39215,
        familiarID: 18982,
        colors: [
            "Cyan",
            "Robin",
            "Blue"
        ],
        genes: [
            "Wasp",
            "Bee",
            "Glimmer"
        ]
    },
    53352904: {
        name: "KnockoutPunch",
        dragonID: 53352904,
        species: "Tundra",
        silhouette: "Female",
        element: "Shadow",
        sceneID: 37361,
        familiarID: 35766,
        colors: [
            "Radioactive",
            "Radioactive",
            "Red"
        ],
        genes: [
            "Pinstripe",
            "Morph",
            "Underbelly"
        ]
    },
    53610383: {
        name: "LunarEclipse",
        dragonID: 53610383,
        species: "Skydancer",
        silhouette: "Female",
        element: "Ice",
        sceneID: 38411,
        familiarID: 33308,
        colors: [
            "Black",
            "Plum",
            "Wisteria"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Glimmer"
        ]
    },
    53613854: {
        name: "MetalChocobo",
        dragonID: 53613854,
        species: "Wildclaw",
        silhouette: "Male",
        element: "Ice",
        sceneID: 34846,
        familiarID: 38495,
        colors: [
            "Yellow",
            "Yellow",
            "Lemon"
        ],
        genes: [
            "Basic",
            "Shimmer",
            "Glimmer"
        ]
    },
    53683161: {
        name: "WishingLamp",
        dragonID: 53683161,
        species: "Coatl",
        silhouette: "Male",
        element: "Earth",
        sceneID: 35702,
        familiarID: 20826,
        colors: [
            "Ivory",
            "Flaxen",
            "Flaxen"
        ],
        genes: [
            "Basic",
            "Noxtide",
            "Glimmer"
        ]
    },
    53728504: {
        name: "Unicornis",
        dragonID: 53728504,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Plague",
        sceneID: 35018,
        familiarID: 23861,
        colors: [
            "White",
            "Antique",
            "Ice"
        ],
        genes: [
            "Iridescent",
            "Facet",
            "Opal"
        ]
    },
    53935370: {
        name: "Ultima",
        dragonID: 53935370,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Water",
        sceneID: 34848,
        familiarID: 40565,
        colors: [
            "Dust",
            "Strawberry",
            "White"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Thylacine"
        ]
    },
    54099682: {
        name: "SweetMemories",
        dragonID: 54099682,
        species: "Snapper",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 34844,
        familiarID: 28770,
        colors: [
            "Cerise",
            "Honey",
            "Banana"
        ],
        genes: [
            "Basic",
            "Facet",
            "Glimmer"
        ]
    },
    54114362: {
        name: "Crabclaw",
        dragonID: 54114362,
        species: "Spiral",
        silhouette: "Male",
        element: "Earth",
        sceneID: 39215,
        familiarID: 33305,
        colors: [
            "Cornflower",
            "Fern",
            "Honey"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Basic"
        ]
    },
    54211418: {
        name: "FrolicFlame",
        dragonID: 54211418,
        species: "Pearlcatcher",
        silhouette: "Female",
        element: "Fire",
        sceneID: 38215,
        familiarID: 32683,
        colors: [
            "Sunset",
            "Sunset",
            "Sunset"
        ],
        genes: [
            "Petals",
            "Butterfly",
            "Glimmer"
        ]
    },
    54240400: {
        name: "Ultima",
        dragonID: 54240400,
        species: "Skydancer",
        silhouette: "Female",
        element: "Earth",
        sceneID: 35018,
        familiarID: 40093,
        colors: [
            "Marigold",
            "Peach",
            "Cyan"
        ],
        genes: [
            "Skink",
            "Bee",
            "Runes"
        ]
    },
    54270026: {
        name: "AbaddonPlasma",
        dragonID: 54270026,
        species: "Pearlcatcher",
        silhouette: "Male",
        element: "Light",
        sceneID: 37361,
        familiarID: 41974,
        colors: [
            "Obsidian",
            "Sanddollar",
            "Ivory"
        ],
        genes: [
            "Iridescent",
            "Butterfly",
            "Runes"
        ]
    },
    54271293: {
        name: "Darkgnaw",
        dragonID: 54271293,
        species: "Snapper",
        silhouette: "Female",
        element: "Plague",
        sceneID: 38411,
        familiarID: 42689,
        colors: [
            "Midnight",
            "Maize",
            "Carmine"
        ],
        genes: [
            "Ripple",
            "Current",
            "Smoke"
        ]
    },
    54273226: {
        name: "MoogleOGlory",
        dragonID: 54273226,
        species: "Pearlcatcher",
        silhouette: "Male",
        element: "Ice",
        sceneID: 42686,
        familiarID: 40794,
        colors: [
            "Pearl",
            "Pearl",
            "Pearl"
        ],
        genes: [
            "Tapir",
            "Striation",
            "Runes"
        ]
    },
    54305679: {
        name: "ChaosRipper",
        dragonID: 54305679,
        species: "Bogsneak",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 38411,
        familiarID: 42690,
        colors: [
            "Coal",
            "Obsidian",
            "Ruby"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Opal"
        ]
    },
    54357913: {
        name: "Ultima",
        dragonID: 54357913,
        species: "Nocturne",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 34839,
        familiarID: 31199,
        colors: [
            "Sky",
            "White",
            "White"
        ],
        genes: [
            "Flaunt",
            "Shimmer",
            "Smoke"
        ]
    },
    54393943: {
        name: "Ultima",
        dragonID: 54393943,
        species: "Ridgeback",
        silhouette: "Male",
        element: "Nature",
        sceneID: 37361,
        familiarID: 415,
        colors: [
            "Cerulean",
            "Iris",
            "Pistachio"
        ],
        genes: [
            "Ripple",
            "Current",
            "Scales"
        ]
    },
    54538619: {
        name: "StarCluster",
        dragonID: 54538619,
        species: "Skydancer",
        silhouette: "Male",
        element: "Wind",
        sceneID: 38215,
        familiarID: 34371,
        colors: [
            "Mist",
            "Stonewash",
            "Cornflower"
        ],
        genes: [
            "Starmap",
            "Constellation",
            "Firefly"
        ]
    },
    54606119: {
        name: "FerrisGear",
        dragonID: 54606119,
        species: "Pearlcatcher",
        silhouette: "Male",
        element: "Shadow",
        sceneID: 41418,
        familiarID: 24511,
        colors: [
            "Stone",
            "Terracotta",
            "Tan"
        ],
        genes: [
            "Starmap",
            "Facet",
            "Glimmer"
        ]
    },
    54608573: {
        name: "Fenrir",
        dragonID: 54608573,
        species: "Wildclaw",
        silhouette: "Female",
        element: "Ice",
        sceneID: 40824,
        familiarID: 24136,
        colors: [
            "Shale",
            "Lead",
            "Shale"
        ],
        genes: [
            "Ripple",
            "Shimmer",
            "Underbelly"
        ]
    },
    54637227: {
        name: "GullWing",
        dragonID: 54637227,
        species: "Fae",
        silhouette: "Male",
        element: "Fire",
        sceneID: 39685,
        familiarID: 38620,
        colors: [
            "Dust",
            "Orca",
            "Dust"
        ],
        genes: [
            "Crystal",
            "Alloy",
            "Underbelly"
        ]
    },
    54645901: {
        name: "AllForOne",
        dragonID: 54645901,
        species: "Fae",
        silhouette: "Female",
        element: "Ice",
        sceneID: 40841,
        familiarID: 41967,
        colors: [
            "Beige",
            "Gold",
            "Rose"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    54684749: {
        name: "DecisivePumpkin",
        dragonID: 54684749,
        species: "Mirror",
        silhouette: "Male",
        element: "Light",
        sceneID: 42541,
        familiarID: 42616,
        colors: [
            "Black",
            "Cerise",
            "Berry"
        ],
        genes: [
            "Ripple",
            "Peregrine",
            "Scales"
        ]
    },
    54784963: {
        name: "Omega",
        dragonID: 54784963,
        species: "Spiral",
        silhouette: "Female",
        element: "Light",
        sceneID: 34848,
        familiarID: 26533,
        colors: [
            "Gold",
            "Buttercup",
            "Buttercup"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Firefly"
        ]
    },
    54940512: {
        name: "HerosCrest",
        dragonID: 54940512,
        species: "Skydancer",
        silhouette: "Female",
        element: "Plague",
        sceneID: 39684,
        familiarID: 23832,
        colors: [
            "Maize",
            "Eldritch",
            "Ultramarine"
        ],
        genes: [
            "Skink",
            "Seraph",
            "Basic"
        ]
    },
    55038058: {
        name: "MysteriousAbyss",
        dragonID: 55038058,
        species: "Pearlcatcher",
        silhouette: "Male",
        element: "Water",
        sceneID: 39215,
        familiarID: 13431,
        colors: [
            "Sky",
            "Periwinkle",
            "Cobalt"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Smoke"
        ]
    },
    55174302: {
        name: "WishingStar",
        dragonID: 55174302,
        species: "Spiral",
        silhouette: "Female",
        element: "Wind",
        sceneID: 37359,
        familiarID: 15289,
        colors: [
            "Gold",
            "Dirt",
            "Ivory"
        ],
        genes: [
            "Skink",
            "Striation",
            "Contour"
        ]
    },
    55266297: {
        name: "GuardianBell",
        dragonID: 55266297,
        species: "Guardian",
        silhouette: "Female",
        element: "Light",
        sceneID: 1,
        familiarID: 25166,
        colors: [
            "Steel",
            "Oilslick",
            "Carrot"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    55337950: {
        name: "HunnySpout",
        dragonID: 55337950,
        species: "Guardian",
        silhouette: "Male",
        element: "Nature",
        sceneID: 34844,
        familiarID: 42621,
        colors: [
            "Ginger",
            "Lemon",
            "Chocolate"
        ],
        genes: [
            "Wasp",
            "Sludge",
            "Firefly"
        ]
    },
    55367819: {
        name: "Abudae",
        dragonID: 55367819,
        species: "Skydancer",
        silhouette: "Female",
        element: "Ice",
        sceneID: 38215,
        familiarID: 24514,
        colors: [
            "Peridot",
            "Honeydew",
            "Robin"
        ],
        genes: [
            "Crystal",
            "Shimmer",
            "Basic"
        ]
    },
    55539104: {
        name: "Lionheart",
        dragonID: 55539104,
        species: "Tundra",
        silhouette: "Male",
        element: "Earth",
        sceneID: 34848,
        familiarID: 37345,
        colors: [
            "Silver",
            "Dust",
            "Ice"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    55549088: {
        name: "WinnersProof",
        dragonID: 55549088,
        species: "Skydancer",
        silhouette: "Female",
        element: "Light",
        sceneID: 38411,
        familiarID: 36303,
        colors: [
            "Forest",
            "Sanddollar",
            "Sanddollar"
        ],
        genes: [
            "Skink",
            "Alloy",
            "Glimmer"
        ]
    },
    56121178: {
        name: "Olympia",
        dragonID: 56121178,
        species: "Guardian",
        silhouette: "Male",
        element: "Light",
        sceneID: 39684,
        familiarID: 36752,
        colors: [
            "Antique",
            "Grey",
            "Yellow"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    56257174: {
        name: "VoidGear",
        dragonID: 56257174,
        species: "Imperial",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 38411,
        familiarID: 28771,
        colors: [
            "Charcoal",
            "Charcoal",
            "Sanguine"
        ],
        genes: [
            "Pinstripe",
            "Toxin",
            "Opal"
        ]
    },
    56749586: {
        name: "FairyHarp",
        dragonID: 56749586,
        species: "Fae",
        silhouette: "Male",
        element: "Wind",
        sceneID: 38799,
        familiarID: 34775,
        colors: [
            "Honeydew",
            "Leaf",
            "Spruce"
        ],
        genes: [
            "Basic",
            "Basic",
            "Spines"
        ]
    },
    56802860: {
        name: "ShootingStar",
        dragonID: 56802860,
        species: "Fae",
        silhouette: "Female",
        element: "Ice",
        sceneID: 38215,
        familiarID: 40562,
        colors: [
            "Stonewash",
            "Sky",
            "Stonewash"
        ],
        genes: [
            "Starmap",
            "Alloy",
            "Firefly"
        ]
    },
    56865289: {
        name: "AstralBlast",
        dragonID: 56865289,
        species: "Skydancer",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 39745,
        familiarID: 34750,
        colors: [
            "White",
            "Obsidian",
            "Azure"
        ],
        genes: [
            "Petals",
            "Bee",
            "Opal"
        ]
    },
    57173289: {
        name: "MirageSplit",
        dragonID: 57173289,
        species: "Nocturne",
        silhouette: "Male",
        element: "Shadow",
        sceneID: 34842,
        familiarID: 40823,
        colors: [
            "Lead",
            "Cyan",
            "Cyan"
        ],
        genes: [
            "Fade",
            "Blend",
            "Runes"
        ]
    },
    57240355: {
        name: "MidnightRoar",
        dragonID: 57240355,
        species: "Skydancer",
        silhouette: "Female",
        element: "Nature",
        sceneID: 34837,
        familiarID: 41969,
        colors: [
            "White",
            "Flint",
            "Tangerine"
        ],
        genes: [
            "Iridescent",
            "Alloy",
            "Filigree"
        ]
    },
    57291293: {
        name: "TwoBecomeOne",
        dragonID: 57291293,
        species: "Nocturne",
        silhouette: "Male",
        element: "Earth",
        sceneID: 34848,
        familiarID: 38551,
        colors: [
            "Ice",
            "Lead",
            "Ice"
        ],
        genes: [
            "Metallic",
            "Alloy",
            "Underbelly"
        ]
    },
    57429678: {
        name: "FlameLiberator",
        dragonID: 57429678,
        species: "Imperial",
        silhouette: "Male",
        element: "Fire",
        sceneID: 35702,
        familiarID: 41112,
        colors: [
            "Obsidian",
            "Gold",
            "Gold"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Runes"
        ]
    },
    57534118: {
        name: "ZeroOne",
        dragonID: 57534118,
        species: "Mirror",
        silhouette: "Male",
        element: "Earth",
        sceneID: 35033,
        familiarID: 33838 - 1,
        colors: [
            "Metals",
            "Moon",
            "Coral"
        ],
        genes: [
            "Wasp",
            "Seraph",
            "Veined"
        ]
    },
    59047654: {
        name: "BadGuyBreaker",
        dragonID: 59047654,
        species: "Snapper",
        silhouette: "Male",
        element: "Fire",
        sceneID: 36759,
        familiarID: 33437,
        colors: [
            "Sanddollar",
            "Ivory",
            "Ivory"
        ],
        genes: [
            "Tapir",
            "Striation",
            "Glimmer"
        ]
    },
    60872881: {
        name: "VictoryLine",
        dragonID: 60872881,
        species: "Nocturne",
        silhouette: "Male",
        element: "Nature",
        sceneID: 1,
        familiarID: 41328,
        colors: [
            "Overcast",
            "Peach",
            "Driftwood"
        ],
        genes: [
            "Petals",
            "Bee",
            "Firefly"
        ]
    },
    61168882: {
        name: "ClassicTone",
        dragonID: 61168882,
        species: "Fae",
        silhouette: "Male",
        element: "Plague",
        sceneID: 41418,
        familiarID: 42684,
        colors: [
            "Latte",
            "Amber",
            "Jade"
        ],
        genes: [
            "Savannah",
            "Trail",
            "Spines"
        ]
    },
    67442536: {
        name: "MidnightBlue",
        dragonID: 67442536,
        species: "Fae",
        silhouette: "Male",
        element: "Water",
        sceneID: 39745,
        familiarID: 25414,
        colors: [
            "Sapphire",
            "Sapphire",
            "Twilight"
        ],
        genes: [
            "Starmap",
            "Bee",
            "Firefly"
        ]
    },
    67549415: {
        name: "SweetDreams",
        dragonID: 67549415,
        species: "Spiral",
        silhouette: "Female",
        element: "Light",
        sceneID: 38215,
        familiarID: 33622,
        colors: [
            "Grape",
            "Mist",
            "Mist"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Underbelly"
        ]
    },
    67608298: {
        name: "PhantomGreen",
        dragonID: 67608298,
        species: "Fae",
        silhouette: "Male",
        element: "Wind",
        sceneID: 37361,
        familiarID: 25413,
        colors: [
            "Gloom",
            "Eldritch",
            "Shadow"
        ],
        genes: [
            "Starmap",
            "Blend",
            "Basic"
        ]
    },
    68369368: {
        name: "ElementEncoder",
        dragonID: 68369368,
        species: "Skydancer",
        silhouette: "Male",
        element: "Wind",
        sceneID: 1,
        familiarID: 15280,
        colors: [
            "Obsidian",
            "Dust",
            "Bronze"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Basic"
        ]
    },
    68990709: {
        name: "DawnTillDusk",
        dragonID: 68990709,
        species: "Skydancer",
        silhouette: "Male",
        element: "Ice",
        sceneID: 39073,
        familiarID: 37889,
        colors: [
            "Ice",
            "Sunset",
            "Avocado"
        ],
        genes: [
            "Basic",
            "Basic",
            "Underbelly"
        ]
    },
    70984038: {
        name: "Ursus",
        dragonID: 70984038,
        species: "Obelisk",
        silhouette: "Male",
        element: "Light",
        sceneID: 35018,
        familiarID: 4156,
        colors: [
            "Tarnish",
            "Clay",
            "Crimson"
        ],
        genes: [
            "Basic",
            "Basic",
            "Basic"
        ]
    },
    71712439: {
        name: "Vulpus",
        dragonID: 71712439,
        species: "Tundra",
        silhouette: "Female",
        element: "Arcane",
        sceneID: 38283,
        familiarID: 1968,
        colors: [
            "Rose",
            "Pearl",
            "Pearl"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Stained"
        ]
    },
    71731909: {
        name: "Unnamed",
        dragonID: 71731909,
        species: "Guardian",
        silhouette: "Female",
        element: "Lightning",
        sceneID: 40841,
        familiarID: 26100,
        colors: [
            "Silver",
            "Silver",
            "Black"
        ],
        genes: [
            "Crystal",
            "Shimmer",
            "Glimmer"
        ]
    },
    72064670: {
        name: "YoungXehanort",
        dragonID: 72064670,
        species: "Bogsneak",
        silhouette: "Male",
        element: "Lightning",
        sceneID: 1,
        familiarID: 25174,
        colors: [
            "Obsidian",
            "Obsidian",
            "Cyan"
        ],
        genes: [
            "Fade",
            "Blend",
            "Thylacine"
        ]
    },
    72302418: {
        name: "Wooden",
        dragonID: 72302418,
        species: "Gaoler",
        silhouette: "Male",
        element: "Earth",
        sceneID: 40825,
        familiarID: 37348,
        colors: [
            "Tan",
            "Dirt",
            "Ginger"
        ],
        genes: [
            "Shaggy (Gaoler)",
            "Stripes (Gaoler)",
            "Basic"
        ]
    },
    74962088: {
        name: "Angius",
        dragonID: 74962088,
        species: "Coatl",
        silhouette: "Female",
        element: "Shadow",
        sceneID: 35018,
        familiarID: 1578,
        colors: [
            "Orca",
            "Ice",
            "Ice"
        ],
        genes: [
            "Metallic",
            "Bee",
            "Filigree"
        ]
    },
    75174766: {
        name: "AdventRed",
        dragonID: 75174766,
        species: "Skydancer",
        silhouette: "Male",
        element: "Plague",
        sceneID: 39745,
        familiarID: 10874,
        colors: [
            "Abyss",
            "Robin",
            "Abyss"
        ],
        genes: [
            "Giraffe",
            "Basic",
            "Basic"
        ]
    },
};
var dragons = Object.values(dragonsMap);

var dragonMixin = {
    computed: {
        keybladeIDFromParams: function () {
            return this.$route.params.keybladeID || 'KingdomKey';
        },
        activeView: function () {
            return this.$route.path.split('/').pop() || 'showcase';
        },
    },
    methods: {
        getTrunkatedID: function (dergID) {
            var trunkatedID = Math.floor((dergID / 100) + 1);
            return trunkatedID;
        },
        getDragonRenderURL: function (dergID) {
            var url = `https://www1.flightrising.com/rendern/350/${this.getTrunkatedID(dergID)}/${dergID}_350.png`;
            return url;
        },
        getDragonBodyURL: function (dergID) {
            var url = `https://www1.flightrising.com/dgen/dressing-room/dragon?did=${dergID}&skin=0&apparel=&xt=dressing.png`;
            return url;
        },
        getSceneImageURL: function (dergID) {
            var url;
            var sceneID = this.dragonsMap[dergID].sceneID;
            if (sceneID < 12) {
                url = `https://www1.flightrising.com/static/layout/profile/backgrounds/${sceneID}.jpg`;
            }
            else {
                url = `https://www1.flightrising.com/static/cms/scene/${sceneID}.png`;
            }
            return url;
        },
        getFamiliarImageURL: function (dergID) {
            var url = `https://www1.flightrising.com/static/cms/familiar/art/${this.dragonsMap[dergID].familiarID}.png`;
            return url;
        },
    },
};

// console.table(keybladesMap);
