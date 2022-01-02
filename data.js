/* 
    Data
*/
var kHGames = [
    'KINGDOM HEARTS',
    'Chain of Memories',
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
    'Shade',
];
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

/* 
    Blades
*/
var keybladesMap = {
    KingdomKey: {
        name: 'Kingdom Key',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 15046924,
        breed: 'Mirror',
        silhouette: 'Male',
        element: 'Earth'
    },
    LadyLuck: {
        name: 'Lady Luck',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 16394067,
        breed: 'Imperial',
        silhouette: 'Female',
        element: 'Fire'
    },
    Olympia: {
        name: 'Olympia',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 56121178,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Light'
    },
    JungleKing: {
        name: 'Jungle King',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 13657285,
        breed: 'Wildclaw',
        silhouette: 'Male',
        element: 'Ice'
    },
    ThreeWishes: {
        name: 'Three Wishes',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 12563878,
        breed: 'Coatl',
        silhouette: 'Male',
        element: 'Fire'
    },
    Pumpkinhead: {
        name: 'Pumpkinhead',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 13629389,
        breed: 'Nocturne',
        silhouette: 'Female',
        element: 'Fire'
    },
    WishingStar: {
        name: 'Wishing Star',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 55174302,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Wind'
    },
    Crabclaw: {
        name: 'Crabclaw',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 54114362,
        breed: 'Spiral',
        silhouette: 'Male',
        element: 'Earth'
    },
    FairyHarp: {
        name: 'Fairy Harp',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 56749586,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Wind'
    },
    DivineRose: {
        name: 'Divine Rose',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 18227294,
        breed: 'Coatl',
        silhouette: 'Male',
        element: 'Fire'
    },
    Spellbinder: {
        name: 'Spellbinder',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 12283922,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Lightning'
    },
    MetalChocobo: {
        name: 'Metal Chocobo',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 53613854,
        breed: 'Wildclaw',
        silhouette: 'Male',
        element: 'Ice'
    },
    Lionheart: {
        name: 'Lionheart',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 55539104,
        breed: 'Tundra',
        silhouette: 'Male',
        element: 'Earth'
    },
    DiamondDust: {
        name: 'Diamond Dust',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 8978770,
        breed: 'Snapper',
        silhouette: 'Female',
        element: 'Ice'
    },
    OneWingedAngel: {
        name: 'One-Winged Angel',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 52903216,
        breed: 'Imperial',
        silhouette: 'Male',
        element: 'Lightning'
    },
    Oathkeeper: {
        name: 'Oathkeeper',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 12781581,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Light'
    },
    Oblivion: {
        name: 'Oblivion',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 18246380,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Shadow'
    },
    UltimaKH1: {
        name: 'Ultima',
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 54240400,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Earth'
    },
    PeoplesHearts: {
        name: "People's Hearts",
        gameIndex: 0,
        imageURL: '[URL]',
        dergID: 12611206,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Lightning'
    },
    StarSeeker: {
        name: 'Star Seeker',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 51774403,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Water'
    },
    HiddenDragon: {
        name: 'Hidden Dragon',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 13643712,
        breed: 'Spiral',
        silhouette: 'Male',
        element: 'Light'
    },
    RumblingRose: {
        name: 'Rumbling Rose',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 51945891,
        breed: 'Snapper',
        silhouette: 'Male',
        element: 'Ice'
    },
    HerosCrest: {
        name: "Hero's Crest",
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 54940512,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Plague'
    },
    Monochrome: {
        name: 'Monochrome',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 12669181,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Lightning'
    },
    MysteriousAbyss: {
        name: 'Mysterious Abyss',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 55038058,
        breed: 'Pearlcatcher',
        silhouette: 'Male',
        element: 'Water'
    },
    FollowTheWind: {
        name: 'Follow the Wind',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 14251391,
        breed: 'Spiral',
        silhouette: 'Male',
        element: 'Ice'
    },
    WishingLamp: {
        name: 'Wishing Lamp',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 53683161,
        breed: 'Coatl',
        silhouette: 'Male',
        element: 'Earth'
    },
    DecisivePumpkin: {
        name: 'Descisive Pumpkin',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 54684749,
        breed: 'Mirror',
        silhouette: 'Male',
        element: 'Light'
    },
    PhotonDebugger: {
        name: 'Photon Debugger',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 30274943,
        breed: 'Wildclaw',
        silhouette: 'Male',
        element: 'Ice'
    },
    CircleOfLife: {
        name: 'Circle of Life',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 51923758,
        breed: 'Tundra',
        silhouette: 'Female',
        element: 'Wind'
    },
    SweetMemories: {
        name: 'Sweet Memories',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 54099682,
        breed: 'Snapper',
        silhouette: 'Female',
        element: 'Lightning'
    },
    GullWing: {
        name: 'Gull Wing',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 54637227,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Plague'
    },
    GuardianSoul: {
        name: 'Guardian Soul',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 51419725,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Fire'
    },
    SleepingLion: {
        name: 'Sleeping Lion',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 12356399,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Earth'
    },
    Fenrir: {
        name: 'Fenrir',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 54608573,
        breed: 'Wildclaw',
        silhouette: 'Female',
        element: 'Ice'
    },
    BondOfFlame: {
        name: 'Bond of Flame',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 13789514,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Ice'
    },
    TwoBecomeOne: {
        name: 'Two Become One',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 57291293,
        breed: 'Nocturne',
        silhouette: 'Male',
        element: 'Earth'
    },
    FatalCrest: {
        name: 'Fatal Crest',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 50918526,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Ice'
    },
    WinnersProof: {
        name: "Winner's Proof",
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 55549088,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Light'
    },
    UltimaKH2: {
        name: 'Ultima',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 54357913,
        breed: 'Nocturne',
        silhouette: 'Female',
        element: 'Lightning'
    },
    WayToTheDawn: {
        name: 'Way to the Dawn',
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 38743794,
        breed: 'Nocturne',
        silhouette: 'Male',
        element: 'Lightning'
    },
    DestinysEmbrace: {
        name: "Destiny's Embrace",
        gameIndex: 2,
        imageURL: '[URL]',
        dergID: 17724951,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Fire'
    },
    MissingAche: {
        name: 'Missing Ache',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 48377777,
        breed: 'Tundra',
        silhouette: 'Male',
        element: 'Light'
    },
    OminousBlight: {
        name: 'Ominous Blight',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 48401548,
        breed: 'Mirror',
        silhouette: 'Male',
        element: 'Ice'
    },
    AbaddonPlasma: {
        name: 'Abaddon Plasma',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 54270026,
        breed: 'Pearlcatcher',
        silhouette: 'Male',
        element: 'Light'
    },
    PainOfSolitude: {
        name: 'Pain Of Solitude',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 48392099,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Arcane'
    },
    SignOfInnocence: {
        name: 'Sign Of Innocence',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 40653260,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Earth'
    },
    CrownOfGuilt: {
        name: 'Crown of Guilt',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 14365734,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Fire'
    },
    AbyssalTide: {
        name: 'Abyssal Tide',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 12842754,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Fire'
    },
    Leviathan: {
        name: 'Leviathan',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 12330397,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Lightning'
    },
    TrueLightsFlight: {
        name: "True Light's Flight",
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 48389536,
        breed: 'Nocturne',
        silhouette: 'Female',
        element: 'Arcane'
    },
    RejectionOfFate: {
        name: 'Rejection of Fate',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 14447317,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Fire'
    },
    MidnightRoar: {
        name: 'Midnight Roar',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 57240355,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Nature'
    },
    GlimpseOfDark: {
        name: 'Glimpse of Darkness',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 18277680,
        breed: 'Imperial',
        silhouette: 'Female',
        element: 'Plague'
    },
    TotalEclipse: {
        name: 'Total Eclipse',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 11503095,
        breed: 'Imperial',
        silhouette: 'Male',
        element: 'Fire'
    },
    SilentDirge: {
        name: 'Silent Dirge',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 18277678,
        breed: 'Imperial',
        silhouette: 'Male',
        element: 'Plague'
    },
    LunarEclipse: {
        name: 'Lunar Eclipse',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 53610383,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Ice'
    },
    DarkerThanDark: {
        name: 'Darker than Darkness',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 12352765,
        breed: 'Nocturne',
        silhouette: 'Female',
        element: 'Plague'
    },
    AstralBlast: {
        name: 'Astral Blast',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 56865289,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Lightning'
    },
    MaverickFlare: {
        name: 'Maverick Flare',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 14447316,
        breed: 'Nocturne',
        silhouette: 'Male',
        element: 'Fire'
    },
    TwilightBlaze: {
        name: 'Twilight Blaze',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 14447313,
        breed: 'Pearlcatcher',
        silhouette: 'Female',
        element: 'Fire'
    },
    Omega: {
        name: 'Omega',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 54784963,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Light'
    },
    Umbrella: {
        name: 'Umbrella',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 52548728,
        breed: 'Pearlcatcher',
        silhouette: 'Female',
        element: 'Wind'
    },
    Abudae: {
        name: 'Abudae',
        gameIndex: 3,
        imageURL: '[URL]',
        dergID: 55367819,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Ice'
    },
    TreasureTrove: {
        name: 'Treasure Trove',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 47924330,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Shadow'
    },
    StrokeOfMidnight: {
        name: 'Stroke of Midnight',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 25089353,
        breed: 'Imperial',
        silhouette: 'Male',
        element: 'Fire'
    },
    FairyStars: {
        name: 'Fairy Stars',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 40804817,
        breed: 'Snapper',
        silhouette: 'Female',
        element: 'Earth'
    },
    VictoryLine: {
        name: 'Victory Line',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 60872881,
        breed: 'Nocturne',
        silhouette: 'Male',
        element: 'Nature'
    },
    MarkOfAHero: {
        name: 'Mark of a Hero',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 45648758,
        breed: 'Wildclaw',
        silhouette: 'Male',
        element: 'Ice'
    },
    HyperDrive: {
        name: 'Hyper Drive',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 13704566,
        breed: 'Imperial',
        silhouette: 'Male',
        element: 'Fire'
    },
    PixiePetal: {
        name: 'Pixie Petal',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 14988244,
        breed: 'Coatl',
        silhouette: 'Female',
        element: 'Fire'
    },
    Sweetstack: {
        name: 'Sweetstack',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 14512950,
        breed: 'Snapper',
        silhouette: 'Female',
        element: 'Earth'
    },
    NoName: {
        name: 'No Name',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 48396864,
        breed: 'Bogsneak',
        silhouette: 'Female',
        element: 'Lightning'
    },
    RoyalRadiance: {
        name: 'Royal Radiance',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 45957116,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Wind'
    },
    UltimaBbS: {
        name: 'Ultima',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 47722786,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Ice'
    },
    EndsOfTheEarth: {
        name: 'Ends of the Earth',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 12129239,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Earth'
    },
    Darkgnaw: {
        name: 'Darkgnaw',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 54271293,
        breed: 'Snapper',
        silhouette: 'Female',
        element: 'Plague'
    },
    ChaosRipper: {
        name: 'Chaos Ripper',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 54305679,
        breed: 'Bogsneak',
        silhouette: 'Female',
        element: 'Lightning'
    },
    Rainfell: {
        name: 'Rainfell',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 12570049,
        breed: 'Guardian',
        silhouette: 'Female',
        element: 'Ice'
    },
    Stormfall: {
        name: 'Stormfall',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 12129240,
        breed: 'Tundra',
        silhouette: 'Female',
        element: 'Earth'
    },
    Brightcrest: {
        name: 'Brightcrest',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 53173484,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Water'
    },
    MastersDefender: {
        name: "Master's Defender",
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 13759667,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Lightning'
    },
    WaywardWind: {
        name: 'Wayward Wind',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 17668006,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Wind'
    },
    FrolicFlame: {
        name: 'Frolic Flame',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 54211418,
        breed: 'Pearlcatcher',
        silhouette: 'Female',
        element: 'Fire'
    },
    LostMemory: {
        name: 'Lost Memory',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 47928896,
        breed: 'Pearlcatcher',
        silhouette: 'Female',
        element: 'Lightning'
    },
    Xehanort: {
        name: 'Xehanort',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 21146563,
        breed: 'Nocturne',
        silhouette: 'Male',
        element: 'Lightning'
    },
    VoidGear: {
        name: 'Void Gear',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 56257174,
        breed: 'Imperial',
        silhouette: 'Female',
        element: 'Lightning'
    },
    Wooden: {
        name: 'Wooden',
        gameIndex: 4,
        imageURL: '[URL]',
        dergID: 72302418,
        breed: 'Gaoler',
        silhouette: 'Male',
        element: 'Earth'
    },
    ZeroOne: {
        name: 'Zero/One',
        gameIndex: 5,
        imageURL: '[URL]',
        dergID: 57534118,
        breed: 'Mirror',
        silhouette: 'Male',
        element: 'Earth'
    },
    NightmaresEnd: {
        name: "Nightmare's End",
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 14928288,
        breed: 'Mirror',
        silhouette: 'Female',
        element: 'Light'
    },
    MirageSplit: {
        name: 'Mirage Split',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 57173289,
        breed: 'Nocturne',
        silhouette: 'Male',
        element: 'Shadow'
    },
    SkullNoise: {
        name: 'Skull Noise',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 52549542,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Shadow'
    },
    GuardianBell: {
        name: 'Guardian Bell',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 55266297,
        breed: 'Guardian',
        silhouette: 'Female',
        element: 'Light'
    },
    DualDisc: {
        name: 'Dual Disc',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 20197700,
        breed: 'Coatl',
        silhouette: 'Female',
        element: 'Lightning'
    },
    FerrisGear: {
        name: 'Ferris Gear',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 54606119,
        breed: 'Pearlcatcher',
        silhouette: 'Male',
        element: 'Shadow'
    },
    OceanRage: {
        name: 'Ocean Rage',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 52879436,
        breed: 'Skydancer',
        silhouette: 'Female',
        element: 'Fire'
    },
    KnockoutPunch: {
        name: 'Knockout Punch',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 53352904,
        breed: 'Tundra',
        silhouette: 'Female',
        element: 'Shadow'
    },
    AllForOne: {
        name: 'All for One',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 54645901,
        breed: 'Fae',
        silhouette: 'Female',
        element: 'Ice'
    },
    Counterpoint: {
        name: 'Counterpoint',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 47562982,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Arcane'
    },
    Divewing: {
        name: 'Divewing',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 51959886,
        breed: 'Ridgeback',
        silhouette: 'Female',
        element: 'Shadow'
    },
    SweetDreams: {
        name: 'Sweet Dreams',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 67549415,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Light'
    },
    Unbound: {
        name: 'Unbound',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 48688713,
        breed: 'Coatl',
        silhouette: 'Female',
        element: 'Light'
    },
    EndOfPain: {
        name: 'End of Pain',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 51007316,
        breed: 'Snapper',
        silhouette: 'Male',
        element: 'Nature'
    },
    UltimaDDD: {
        name: 'Ultima',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 54393943,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Nature'
    },
    FlameLiberator: {
        name: 'Flame Liberator',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 57429678,
        breed: 'Imperial',
        silhouette: 'Male',
        element: 'Fire'
    },
    YoungXehanort: {
        name: 'Young Xehanort',
        gameIndex: 6,
        imageURL: '[URL]',
        dergID: 72064670,
        breed: 'Bogsneak',
        silhouette: 'Male',
        element: 'Lightning'
    },
    HerosOrigin: {
        name: "Hero's Origin",
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 48632981,
        breed: 'Snapper',
        silhouette: 'Male',
        element: 'Lightning'
    },
    ShootingStar: {
        name: 'Shooting Star',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 56802860,
        breed: 'Fae',
        silhouette: 'Female',
        element: 'Ice'
    },
    FavoriteDeputy: {
        name: 'Favorite Deputy',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 47913889,
        breed: 'Bogsneak',
        silhouette: 'Female',
        element: 'Nature'
    },
    EverAfter: {
        name: 'Ever After',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 52238998,
        breed: 'Spiral',
        silhouette: 'Female',
        element: 'Light'
    },
    HappyGear: {
        name: 'Happy Gear',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 42575407,
        breed: 'Mirror',
        silhouette: 'Female',
        element: 'Plague'
    },
    CrystalSnow: {
        name: 'Crystal Snow',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 42083532,
        breed: 'Pearlcatcher',
        silhouette: 'Female',
        element: 'Ice'
    },
    HunnySpout: {
        name: 'Hunny Spout',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 55337950,
        breed: 'Guardian',
        silhouette: 'Male',
        element: 'Nature'
    },
    WheelOfFate: {
        name: 'Wheel of Fate',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 42750652,
        breed: 'Pearlcatcher',
        silhouette: 'Male',
        element: 'Arcane'
    },
    NanoGear: {
        name: 'Nano Gear',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 45466968,
        breed: 'Snapper',
        silhouette: 'Male',
        element: 'Arcane'
    },
    GrandChef: {
        name: 'Grand Chef',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 52877984,
        breed: 'Spiral',
        silhouette: 'Male',
        element: 'Ice'
    },
    ClassicTone: {
        name: 'Classic Tone',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 61168882,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Plague'
    },
    UltimaKH3: {
        name: 'Ultima',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 53935370,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Water'
    },
    StarCluster: {
        name: 'Star Cluster',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 54538619,
        breed: 'Skydancer',
        silhouette: 'Male',
        element: 'Wind'
    },
    Braveheart: {
        name: 'Braveheart',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 38642406,
        breed: 'Pearlcatcher',
        silhouette: 'Female',
        element: 'Shadow'
    },
    MidnightBlue: {
        name: 'Midnight Blue',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 67442536,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Water'
    },
    PhantomGreen: {
        name: 'Phantom Green',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 67608298,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Wind'
    },
    DawnTillDusk: {
        name: 'Dawn Till Dusk',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 68990709,
        breed: 'Skydancer',
        silhouette: 'Male',
        element: 'Ice'
    },
    ElementEncoder: {
        name: 'Element Encoder',
        gameIndex: 8,
        imageURL: '[URL]',
        dergID: 68369368,
        breed: 'Skydancer',
        silhouette: 'Male',
        element: 'Wind'
    },
    Starlight: {
        name: 'Starlight',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 37894616,
        breed: 'Coatl',
        silhouette: 'Female',
        element: 'Light'
    },
    MoogleOGlory: {
        name: "Moogle O' Glory",
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 54273226,
        breed: 'Pearlcatcher',
        silhouette: 'Male',
        element: 'Ice'
    },
    BadGuyBreaker: {
        name: 'Bad Guy Breaker',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 59047654,
        breed: 'Snapper',
        silhouette: 'Male',
        element: 'Fire'
    },
    Angius: {
        name: 'Angius',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 48657720,
        breed: 'Coatl',
        silhouette: 'Female',
        element: 'Shadow'
    },
    Leopardus: {
        name: 'Leopardus',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 51886167,
        breed: 'Fae',
        silhouette: 'Male',
        element: 'Earth'
    },
    Unicornis: {
        name: 'Unicornis',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 53728504,
        breed: 'Ridgeback',
        silhouette: 'Male',
        element: 'Plague'
    },
    Ursus: {
        name: 'Ursus',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 70984038,
        breed: 'Obelisk',
        silhouette: 'Male',
        element: 'Light'
    },
    Vulpus: {
        name: 'Vulpus',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 71712439,
        breed: 'Tundra',
        silhouette: 'Female',
        element: 'Arcane'
    },
    KEYBLADE: {
        name: 'Keyblade',
        gameIndex: 7,
        imageURL: '[URL]',
        dergID: 71731909,
        breed: 'Guardian',
        silhouette: 'Female',
        element: 'Lightning'
    }
};

// console.table(keybladesMap);
