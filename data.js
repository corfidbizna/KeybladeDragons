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
             // will get the Shade (black) frames.
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
    'Aberration',
];
var fRGenePairs = [
    [
        "Basic",
        "Basic"
    ],
    [
        "Iridescent",
        "Shimmer"
    ],
    [
        "Tiger",
        "Stripes"
    ],
    [
        "Clown",
        "Eye Spots"
    ],
    [
        "Speckle",
        "Freckle"
    ],
    [
        "Ripple",
        "Current"
    ],
    [
        "Bar",
        "Daub"
    ],
    [
        "Crystal",
        "Facet"
    ],
    [
        "Vipera",
        "Hypnotic"
    ],
    [
        "Piebald",
        "Paint"
    ],
    [
        "Cherub",
        "Seraph"
    ],
    [
        "Poison",
        "Toxin"
    ],
    [
        "Giraffe",
        "Hex"
    ],
    [
        "Petals",
        "Butterfly"
    ],
    [
        "Jupiter",
        "Saturn"
    ],
    [
        "Skink",
        "Spinner"
    ],
    [
        "Falcon",
        "Perigrine"
    ],
    [
        "Metallic",
        "Alloy"
    ],
    [
        "Savannah",
        "Safari"
    ],
    [
        "Jaguar",
        "Rosette"
    ],
    [
        "Wasp",
        "Bee"
    ],
    [
        "Tapir",
        "Striation"
    ],
    [
        "Pinstripe",
        "Trail"
    ],
    [
        "Python",
        "Morph"
    ],
    [
        "Starmap",
        "Constellation"
    ],
    [
        "Lionfish",
        "Noxtide"
    ],
    [
        "Laced",
        "Edged"
    ],
    [
        "Giraffe (Gaoler)",
        "Hex (Gaoler)"
    ],
    [
        "Wasp (Gaoler)",
        "Bee (Gaoler)"
    ],
    [
        "Shaggy (Gaoler)",
        "Streak (Gaoler)"
    ],
    [
        "Falcon (Gaoler)",
        "Peregrine (Gaoler)"
    ],
    [
        "Piebald (Gaoler)",
        "Paint (Gaoler)"
    ],
    [
        "Pinstripe (Gaoler)",
        "Trail (Gaoler)"
    ],
    [
        "Jaguar (Gaoler)",
        "Rosette (Gaoler)"
    ],
    [
        "Bar (Gaoler)",
        "Daub (Gaoler)"
    ],
    [
        "Tapir (Gaoler)",
        "Striation (Gaoler)"
    ],
    [
        "Tiger (Gaoler)",
        "Stripes (Gaoler)"
    ],
    [
        "Crystal (Gaoler)",
        "Facet (Gaoler)"
    ],
    [
        "Mosaic (Gaoler)",
        "Breakup (Gaoler)"
    ],
    [
        "Phantom (Gaoler)",
        "Spirit (Gaoler)"
    ],
    [
        "Leopard",
        "Clouded"
    ],
    [
        "Slime",
        "Sludge"
    ],
    [
        "Fade",
        "Blend"
    ],
    [
        "Cherub (Banescale)",
        "Seraph (Banescale)"
    ],
    [
        "Jaguar (Banescale)",
        "Rosette (Banescale)"
    ],
    [
        "Pinstripe (Banescale)",
        "Trail (Banescale)"
    ],
    [
        "Tiger (Banescale)",
        "Stripes (Banescale)"
    ],
    [
        "Marble (Banescale)",
        "Mottle (Banescale)"
    ],
    [
        "Laced (Banescale)",
        "Edged (Banescale)"
    ],
    [
        "Metallic (Banescale)",
        "Alloy (Banescale)"
    ],
    [
        "Savannah (Banescale)",
        "Safari (Banescale)"
    ],
    [
        "Petals (Banescale)",
        "Butterfly (Banescale)"
    ],
    [
        "Skink (Banescale)",
        "Spinner (Banescale)"
    ],
    [
        "Poison (Banescale)",
        "Toxin (Banescale)"
    ],
    [
        "Chevron (Banescale)",
        "Arrow (Banescale)"
    ],
    [
        "Candycane (Banescale)",
        "Sugarplum (Banescale)"
    ],
    [
        "Ragged (Banescale)",
        "Tear (Banescale)"
    ],
    [
        "Swirl",
        "Marbled"
    ],
    [
        "Mosaic",
        "Breakup"
    ],
    [
        "Stitched",
        "Patchwork"
    ],
    [
        "Fade (Veilspun)",
        "Bee (Veilspun)"
    ],
    [
        "Laced (Veilspun)",
        "Blend (Veilspun)"
    ],
    [
        "Tapir (Veilspun)",
        "Edged (Veilspun)"
    ],
    [
        "Vipera (Veilspun)",
        "Striation (Veilspun)"
    ],
    [
        "Jupiter (Veilspun)",
        "Hypnotic (Veilspun)"
    ],
    [
        "Starmap (Veilspun)",
        "Saturn (Veilspun)"
    ],
    [
        "Stitched (Veilspun)",
        "Constellation (Veilspun)"
    ],
    [
        "Skink (Veilspun)",
        "Patchwork (Veilspun)"
    ],
    [
        "Wasp (Veilspun)",
        "Spinner (Veilspun)"
    ],
    [
        "Bright (Veilspun)",
        "Vivid (Veilspun)"
    ],
    [
        "Arc (Veilspun)",
        "Loop (Veilspun)"
    ],
    [
        "Shell (Veilspun)",
        "Web (Veilspun)"
    ],
    [
        "Sphinxmoth (Veilspun)",
        "Hawkmoth (Veilspun)"
    ],
    [
        "Laced (Gaoler)",
        "Edged (Gaoler)"
    ],
    [
        "Tapir (Banescale)",
        "Striation (Banescale)"
    ],
    [
        "Clown (Banescale)",
        "Eye Spots (Banescale)"
    ],
    [
        "Clown (Veilspun)",
        "Eye Spots (Veilspun)"
    ],
    [
        "Clown (Gaoler)",
        "Eye Spots (Gaoler)"
    ],
    [
        "Ripple (Gaoler)",
        "Current (Gaoler)"
    ],
    [
        "Ripple (Banescale)",
        "Current (Banescale)"
    ],
    [
        "Falcon (Banescale)",
        "Peregrine (Banescale)"
    ],
    [
        "Giraffe (Banescale)",
        "Hex (Banescale)"
    ],
    [
        "Flaunt",
        "Flair"
    ],
    [
        "Giraffe (Veilspun)",
        "Hex (Veilspun)"
    ],
    [
        "Ribbon",
        "Eel"
    ],
    [
        "Fade (Banescale)",
        "Blend (Banescale)"
    ],
    [
        "Fade (Gaoler)",
        "Blend (Gaoler)"
    ],
    [
        "Pharaoh",
        "Sarcophagus"
    ],
    [
        "Ground",
        "Fissure"
    ],
    [
        "Orb (Aberration)",
        "Weaver (Aberration)"
    ],
    [
        "Diamond (Aberration)",
        "Spade (Aberration)"
    ],
    [
        "Fade (Aberration)",
        "Blend (Aberration)"
    ],
    [
        "Bar (Aberration)",
        "Daub (Aberration)"
    ],
    [
        "Crystal (Aberration)",
        "Facet (Aberration)"
    ],
    [
        "Falcon (Aberration)",
        "Peregrine (Aberration)"
    ],
    [
        "Giraffe (Aberration)",
        "Hex (Aberration)"
    ],
    [
        "Tapir (Aberration)",
        "Striation (Aberration)"
    ],
    [
        "Vipera (Aberration)",
        "Hypnotic (Aberration)"
    ],
    [
        "Ground (Aberration)",
        "Fissure (Aberration)"
    ],
    [
        "Jaguar (Aberration)",
        "Rosette (Aberration)"
    ],
    [
        "Lionfish (Aberration)",
        "Noxtide (Aberration)"
    ],
    [
        "Speckle (Aberration)",
        "Freckle (Aberration)"
    ],
    [
        "Pharaoh (Aberration)",
        "Sarcophagus (Aberration)"
    ],
    [
        "Savannah (Aberration)",
        "Safari (Aberration)"
    ],
    [
        "Swirl (Aberration)",
        "Marbled (Aberration)"
    ],
    [
        "Slime (Aberration)",
        "Sludge (Aberration)"
    ],
    [
        "Ribbon (Aberration)",
        "Eel (Aberration)"
    ],
    [
        "Stitched (Aberration)",
        "Patchwork (Aberration)"
    ],
    [
        "Wasp (Aberration)",
        "Bee (Aberration)"
    ],
];
var fRGenesTertiary = [
    "Basic",
    "Circuit",
    "Gembond",
    "Underbelly",
    "Crackle",
    "Smoke",
    "Spines",
    "Okapi",
    "Glimmer",
    "Thylacine",
    "Stained",
    "Contour",
    "Runes",
    "Scales",
    "Lace",
    "Opal",
    "Capsule",
    "Smirch",
    "Ghost",
    "Filigree",
    "Firefly",
    "Ringlets",
    "Peacock",
    "Ghost (Gaoler)",
    "Shardflank (Gaoler)",
    "Gnarlhorns (Gaoler)",
    "Smoke (Gaoler)",
    "Thylacine (Gaoler)",
    "Ringlets (Gaoler)",
    "Underbelly (Gaoler)",
    "Runes (Gaoler)",
    "Scorpion (Gaoler)",
    "Wintercoat (Gaoler)",
    "Weathered (Gaoler)",
    "Blossom (Gaoler)",
    "Opal (Gaoler)",
    "Veined",
    "Trimmings (Banescale)",
    "Ringlets (Banescale)",
    "Fans (Banescale)",
    "Squiggle (Banescale)",
    "Filigree (Banescale)",
    "Lace (Banescale)",
    "Skeletal (Banescale)",
    "Contour (Banescale)",
    "Ghost (Banescale)",
    "Porcupine (Banescale)",
    "Crackle (Banescale)",
    "Plumage (Banescale)",
    "Underbelly (Banescale)",
    "Veined (Gaoler)",
    "Fans (Gaoler)",
    "Keel",
    "Glowtail",
    "Braids (Gaoler)",
    "Capsule (Veilspun)",
    "Runes (Veilspun)",
    "Crackle (Veilspun)",
    "Okapi (Veilspun)",
    "Peacock (Veilspun)",
    "Firefly (Veilspun)",
    "Opal (Veilspun)",
    "Branches (Veilspun)",
    "Flecks (Veilspun)",
    "Beetle (Veilspun)",
    "Diaphanous (Veilspun)",
    "Mop (Veilspun)",
    "Thorns (Veilspun)",
    "Stained (Banescale)",
    "Underbelly (Veilspun)",
    "Stained (Gaoler)",
    "Stained (Veilspun)",
    "Koi",
    "Capsule (Banescale)",
    "Capsule (Gaoler)",
    "Gliders (Banescale)",
    "Pinions (Gaoler)",
    "Angler (Veilspun)",
    "Fangs (Aberration)",
    "Kumo (Aberration)",
    "Jewels (Aberration)",
    "Frills (Aberration)",
    "Mucous (Aberration)",
    "Polkadot (Aberration)",
    "Polypore (Aberration)",
    "Capsule (Aberration)",
    "Firefly (Aberration)",
    "Ghost (Aberration)",
    "Glowtail (Aberration)",
    "Peacock (Aberration)",
    "Scales (Aberration)",
    "Thylacine (Aberration)",
    "Veined (Aberration)",
  ];
var fRColors = [
    {
        name: "Maize",
        color: "rgb(255, 253, 234)"
    },
    {
        name: "Cream",
        color: "rgb(255, 239, 220)"
    },
    {
        name: "Antique",
        color: "rgb(216, 214, 205)"
    },
    {
        name: "White",
        color: "rgb(255, 255, 255)"
    },
    {
        name: "Moon",
        color: "rgb(216, 215, 216)"
    },
    {
        name: "Ice",
        color: "rgb(235, 239, 255)"
    },
    {
        name: "Orca",
        color: "rgb(224, 223, 255)"
    },
    {
        name: "Platinum",
        color: "rgb(200, 190, 206)"
    },
    {
        name: "Silver",
        color: "rgb(187, 186, 191)"
    },
    {
        name: "Dust",
        color: "rgb(156, 156, 158)"
    },
    {
        name: "Grey",
        color: "rgb(128, 128, 128)"
    },
    {
        name: "Smoke",
        color: "rgb(148, 148, 169)"
    },
    {
        name: "Gloom",
        color: "rgb(83, 82, 100)"
    },
    {
        name: "Lead",
        color: "rgb(65, 60, 63)"
    },
    {
        name: "Shale",
        color: "rgb(77, 72, 80)"
    },
    {
        name: "Flint",
        color: "rgb(98, 98, 104)"
    },
    {
        name: "Charcoal",
        color: "rgb(84, 84, 84)"
    },
    {
        name: "Coal",
        color: "rgb(75, 73, 70)"
    },
    {
        name: "Oilslick",
        color: "rgb(220, 220, 220)"
    },
    {
        name: "Black",
        color: "rgb(51, 51, 51)"
    },
    {
        name: "Obsidian",
        color: "rgb(29, 34, 36)"
    },
    {
        name: "Eldritch",
        color: "rgb(37, 42, 37)"
    },
    {
        name: "Midnight",
        color: "rgb(37, 39, 53)"
    },
    {
        name: "Shadow",
        color: "rgb(58, 46, 68)"
    },
    {
        name: "Blackberry",
        color: "rgb(75, 41, 79)"
    },
    {
        name: "Mulberry",
        color: "rgb(110, 35, 93)"
    },
    {
        name: "Plum",
        color: "rgb(133, 51, 144)"
    },
    {
        name: "Wisteria",
        color: "rgb(114, 78, 123)"
    },
    {
        name: "Thistle",
        color: "rgb(143, 124, 139)"
    },
    {
        name: "Fog",
        color: "rgb(165, 147, 176)"
    },
    {
        name: "Mist",
        color: "rgb(225, 206, 255)"
    },
    {
        name: "Lavender",
        color: "rgb(204, 164, 224)"
    },
    {
        name: "Heather",
        color: "rgb(151, 119, 189)"
    },
    {
        name: "Purple",
        color: "rgb(162, 97, 207)"
    },
    {
        name: "Orchid",
        color: "rgb(217, 80, 255)"
    },
    {
        name: "Amethyst",
        color: "rgb(153, 59, 208)"
    },
    {
        name: "Nightshade",
        color: "rgb(120, 46, 178)"
    },
    {
        name: "Violet",
        color: "rgb(100, 63, 156)"
    },
    {
        name: "Grape",
        color: "rgb(87, 15, 192)"
    },
    {
        name: "Royal",
        color: "rgb(77, 44, 137)"
    },
    {
        name: "Eggplant",
        color: "rgb(51, 43, 101)"
    },
    {
        name: "Iris",
        color: "rgb(83, 81, 149)"
    },
    {
        name: "Storm",
        color: "rgb(117, 122, 219)"
    },
    {
        name: "Twilight",
        color: "rgb(71, 74, 160)"
    },
    {
        name: "Indigo",
        color: "rgb(45, 35, 122)"
    },
    {
        name: "Sapphire",
        color: "rgb(13, 9, 91)"
    },
    {
        name: "Navy",
        color: "rgb(33, 43, 95)"
    },
    {
        name: "Cobalt",
        color: "rgb(0, 52, 132)"
    },
    {
        name: "Ultramarine",
        color: "rgb(28, 81, 231)"
    },
    {
        name: "Blue",
        color: "rgb(50, 75, 169)"
    },
    {
        name: "Periwinkle",
        color: "rgb(72, 102, 213)"
    },
    {
        name: "Lapis",
        color: "rgb(43, 132, 255)"
    },
    {
        name: "Splash",
        color: "rgb(99, 146, 223)"
    },
    {
        name: "Cornflower",
        color: "rgb(117, 168, 255)"
    },
    {
        name: "Sky",
        color: "rgb(174, 200, 255)"
    },
    {
        name: "Stonewash",
        color: "rgb(120, 149, 193)"
    },
    {
        name: "Overcast",
        color: "rgb(68, 79, 105)"
    },
    {
        name: "Steel",
        color: "rgb(85, 105, 121)"
    },
    {
        name: "Denim",
        color: "rgb(47, 69, 87)"
    },
    {
        name: "Abyss",
        color: "rgb(13, 30, 36)"
    },
    {
        name: "Phthalo",
        color: "rgb(11, 45, 70)"
    },
    {
        name: "Azure",
        color: "rgb(10, 61, 103)"
    },
    {
        name: "Caribbean",
        color: "rgb(0, 134, 206)"
    },
    {
        name: "Teal",
        color: "rgb(43, 118, 143)"
    },
    {
        name: "Cerulean",
        color: "rgb(0, 180, 214)"
    },
    {
        name: "Cyan",
        color: "rgb(0, 255, 240)"
    },
    {
        name: "Robin",
        color: "rgb(154, 234, 239)"
    },
    {
        name: "Aqua",
        color: "rgb(114, 196, 196)"
    },
    {
        name: "Turquoise",
        color: "rgb(58, 160, 161)"
    },
    {
        name: "Spruce",
        color: "rgb(139, 187, 178)"
    },
    {
        name: "Pistachio",
        color: "rgb(226, 255, 230)"
    },
    {
        name: "Seafoam",
        color: "rgb(178, 226, 189)"
    },
    {
        name: "Mint",
        color: "rgb(154, 255, 199)"
    },
    {
        name: "Jade",
        color: "rgb(97, 171, 137)"
    },
    {
        name: "Spearmint",
        color: "rgb(20, 142, 103)"
    },
    {
        name: "Thicket",
        color: "rgb(0, 94, 72)"
    },
    {
        name: "Peacock",
        color: "rgb(31, 71, 57)"
    },
    {
        name: "Emerald",
        color: "rgb(32, 96, 63)"
    },
    {
        name: "Shamrock",
        color: "rgb(35, 105, 37)"
    },
    {
        name: "Jungle",
        color: "rgb(30, 54, 26)"
    },
    {
        name: "Hunter",
        color: "rgb(29, 39, 21)"
    },
    {
        name: "Forest",
        color: "rgb(66, 80, 53)"
    },
    {
        name: "Camo",
        color: "rgb(81, 104, 76)"
    },
    {
        name: "Algae",
        color: "rgb(151, 175, 139)"
    },
    {
        name: "Swamp",
        color: "rgb(104, 127, 103)"
    },
    {
        name: "Avocado",
        color: "rgb(86, 124, 52)"
    },
    {
        name: "Green",
        color: "rgb(98, 156, 63)"
    },
    {
        name: "Fern",
        color: "rgb(126, 206, 115)"
    },
    {
        name: "Mantis",
        color: "rgb(153, 255, 156)"
    },
    {
        name: "Pear",
        color: "rgb(142, 205, 85)"
    },
    {
        name: "Leaf",
        color: "rgb(165, 227, 45)"
    },
    {
        name: "Radioactive",
        color: "rgb(198, 255, 0)"
    },
    {
        name: "Honeydew",
        color: "rgb(208, 230, 114)"
    },
    {
        name: "Peridot",
        color: "rgb(232, 255, 181)"
    },
    {
        name: "Chartreuse",
        color: "rgb(180, 205, 60)"
    },
    {
        name: "Spring",
        color: "rgb(169, 168, 50)"
    },
    {
        name: "Crocodile",
        color: "rgb(130, 131, 53)"
    },
    {
        name: "Olive",
        color: "rgb(105, 113, 53)"
    },
    {
        name: "Murk",
        color: "rgb(75, 68, 32)"
    },
    {
        name: "Moss",
        color: "rgb(126, 119, 69)"
    },
    {
        name: "Goldenrod",
        color: "rgb(190, 165, 93)"
    },
    {
        name: "Amber",
        color: "rgb(193, 142, 27)"
    },
    {
        name: "Honey",
        color: "rgb(209, 179, 0)"
    },
    {
        name: "Lemon",
        color: "rgb(255, 230, 59)"
    },
    {
        name: "Yellow",
        color: "rgb(249, 226, 85)"
    },
    {
        name: "Grapefruit",
        color: "rgb(247, 255, 111)"
    },
    {
        name: "Banana",
        color: "rgb(255, 236, 128)"
    },
    {
        name: "Sanddollar",
        color: "rgb(235, 231, 174)"
    },
    {
        name: "Flaxen",
        color: "rgb(253, 233, 174)"
    },
    {
        name: "Ivory",
        color: "rgb(255, 210, 151)"
    },
    {
        name: "Buttercup",
        color: "rgb(246, 191, 107)"
    },
    {
        name: "Gold",
        color: "rgb(232, 175, 73)"
    },
    {
        name: "Metals",
        color: "rgb(209, 176, 70)"
    },
    {
        name: "Marigold",
        color: "rgb(255, 180, 59)"
    },
    {
        name: "Sunshine",
        color: "rgb(250, 145, 43)"
    },
    {
        name: "Saffron",
        color: "rgb(255, 132, 0)"
    },
    {
        name: "Sunset",
        color: "rgb(255, 162, 72)"
    },
    {
        name: "Peach",
        color: "rgb(255, 181, 118)"
    },
    {
        name: "Cantaloupe",
        color: "rgb(255, 152, 79)"
    },
    {
        name: "Orange",
        color: "rgb(213, 96, 43)"
    },
    {
        name: "Bronze",
        color: "rgb(178, 86, 13)"
    },
    {
        name: "Terracotta",
        color: "rgb(178, 59, 7)"
    },
    {
        name: "Carrot",
        color: "rgb(255, 85, 0)"
    },
    {
        name: "Fire",
        color: "rgb(239, 92, 35)"
    },
    {
        name: "Pumpkin",
        color: "rgb(255, 104, 64)"
    },
    {
        name: "Tangerine",
        color: "rgb(255, 115, 96)"
    },
    {
        name: "Cinnamon",
        color: "rgb(192, 90, 57)"
    },
    {
        name: "Caramel",
        color: "rgb(198, 112, 71)"
    },
    {
        name: "Sand",
        color: "rgb(178, 119, 73)"
    },
    {
        name: "Tan",
        color: "rgb(196, 154, 112)"
    },
    {
        name: "Beige",
        color: "rgb(202, 187, 162)"
    },
    {
        name: "Stone",
        color: "rgb(130, 122, 100)"
    },
    {
        name: "Taupe",
        color: "rgb(109, 102, 90)"
    },
    {
        name: "Slate",
        color: "rgb(86, 77, 72)"
    },
    {
        name: "Driftwood",
        color: "rgb(118, 99, 89)"
    },
    {
        name: "Latte",
        color: "rgb(151, 123, 108)"
    },
    {
        name: "Dirt",
        color: "rgb(118, 72, 63)"
    },
    {
        name: "Clay",
        color: "rgb(96, 63, 61)"
    },
    {
        name: "Sable",
        color: "rgb(87, 55, 44)"
    },
    {
        name: "Umber",
        color: "rgb(47, 30, 26)"
    },
    {
        name: "Soil",
        color: "rgb(90, 69, 52)"
    },
    {
        name: "Hickory",
        color: "rgb(114, 86, 57)"
    },
    {
        name: "Tarnish",
        color: "rgb(133, 92, 50)"
    },
    {
        name: "Ginger",
        color: "rgb(144, 83, 43)"
    },
    {
        name: "Brown",
        color: "rgb(142, 91, 63)"
    },
    {
        name: "Chocolate",
        color: "rgb(86, 48, 18)"
    },
    {
        name: "Auburn",
        color: "rgb(123, 60, 29)"
    },
    {
        name: "Copper",
        color: "rgb(164, 75, 40)"
    },
    {
        name: "Rust",
        color: "rgb(139, 50, 32)"
    },
    {
        name: "Tomato",
        color: "rgb(186, 49, 28)"
    },
    {
        name: "Vermilion",
        color: "rgb(226, 45, 23)"
    },
    {
        name: "Ruby",
        color: "rgb(205, 0, 14)"
    },
    {
        name: "Cherry",
        color: "rgb(170, 0, 36)"
    },
    {
        name: "Crimson",
        color: "rgb(133, 0, 18)"
    },
    {
        name: "Garnet",
        color: "rgb(91, 15, 20)"
    },
    {
        name: "Sanguine",
        color: "rgb(46, 0, 2)"
    },
    {
        name: "Blood",
        color: "rgb(69, 23, 23)"
    },
    {
        name: "Maroon",
        color: "rgb(101, 33, 39)"
    },
    {
        name: "Berry",
        color: "rgb(139, 39, 44)"
    },
    {
        name: "Red",
        color: "rgb(193, 39, 45)"
    },
    {
        name: "Strawberry",
        color: "rgb(222, 50, 53)"
    },
    {
        name: "Cerise",
        color: "rgb(162, 41, 41)"
    },
    {
        name: "Carmine",
        color: "rgb(177, 58, 58)"
    },
    {
        name: "Brick",
        color: "rgb(154, 83, 77)"
    },
    {
        name: "Coral",
        color: "rgb(204, 111, 111)"
    },
    {
        name: "Blush",
        color: "rgb(255, 162, 162)"
    },
    {
        name: "Cottoncandy",
        color: "rgb(235, 121, 151)"
    },
    {
        name: "Watermelon",
        color: "rgb(219, 81, 141)"
    },
    {
        name: "Magenta",
        color: "rgb(233, 52, 170)"
    },
    {
        name: "Fuchsia",
        color: "rgb(236, 0, 137)"
    },
    {
        name: "Raspberry",
        color: "rgb(138, 2, 73)"
    },
    {
        name: "Wine",
        color: "rgb(77, 15, 40)"
    },
    {
        name: "Mauve",
        color: "rgb(156, 72, 117)"
    },
    {
        name: "Pink",
        color: "rgb(231, 127, 191)"
    },
    {
        name: "Bubblegum",
        color: "rgb(234, 169, 255)"
    },
    {
        name: "Rose",
        color: "rgb(255, 214, 246)"
    },
    {
        name: "Pearl",
        color: "rgb(251, 233, 248)"
    },
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
        dergID: 75913451
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
        dergID: 75489880
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
        dergID: 75702000
    },
    {
        id: "RejectionOfFate",
        name: "Rejection of Fate",
        gameIndex: 3,
        dergID: 48389536
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
        dergID: 44981642
    },
    {
        id: "AstralBlast",
        name: "Astral Blast",
        gameIndex: 3,
        dergID: 75196198
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
        dergID: 75110804
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
        sceneID: 34841,
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
        sceneID: 43382,
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
    44981642: {
        name: "DarkerThanDark",
        dragonID: 44981642,
        species: "Bogsneak",
        silhouette: "Male",
        element: "Fire",
        sceneID: 38411,
        familiarID: 16484,
        colors: [
            "Mist",
            "Purple",
            "Sky"
        ],
        genes: [
            "Cherub",
            "Current",
            "Basic"
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
    75110804: {
        name: "StrokeOfMidnight",
        dragonID: 75110804,
        species: "Imperial",
        silhouette: "Male",
        element: "Shadow",
        sceneID: 1,
        familiarID: 33306,
        colors: [
            "Ice",
            "Ice",
            "Indigo"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Opal"
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
    75196198: {
        name: "AstralBlast",
        dragonID: 75196198,
        species: "Spiral",
        silhouette: "Female",
        element: "Ice",
        sceneID: 39745,
        familiarID: 34750,
        colors: [
            "Orca",
            "Cornflower",
            "Pthalo"
        ],
        genes: [
            "Ribbon",
            "Eel",
            "Runes"
        ]
    },
    75489880: {
        name: "AbyssalTide",
        dragonID: 75489880,
        species: "Spiral",
        silhouette: "Female",
        element: "Wind",
        sceneID: 39215,
        familiarID: 20156,
        colors: [
            "Periwinkle",
            "Sky",
            "Periwinkle"
        ],
        genes: [
            "Wasp",
            "Alloy",
            "Spines"
        ]
    },
    75702000: {
        name: "TrueLightsFlight",
        dragonID: 75702000,
        species: "Bogsneak",
        silhouette: "Male",
        element: "Fire",
        sceneID: 37882,
        familiarID: 42756,
        colors: [
            "Dust",
            "Ice",
            "White"
        ],
        genes: [
            "Metallic",
            "Alloy",
            "Opal"
        ]
    },
    75913451: {
        name: "MissingAche",
        dragonID: 75913451,
        species: "Fae",
        silhouette: "Male",
        element: "Earth",
        sceneID: 37361,
        familiarID: 18982,
        colors: [
            "Honeydew",
            "Peridot",
            "Chartreuce"
        ],
        genes: [
            "Iridescent",
            "Shimmer",
            "Gembond"
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
