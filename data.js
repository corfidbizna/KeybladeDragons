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
    [
        "Clouded (Banescale)",
        "Leopard (Banescale)"
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
    "Sparkle",
    "Sparkle (Aberration)",
    "Sparkle (Banescale)",
    "Sparkle (Gaoler)",
    "Sparkle (Veilspun)",
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
        dergID: 15046924,
        bio: `The great Earthshaker pulled Kingdom Key from a deceivingly strong Keyblade. The blade in question holds a unique power and always manages to find itself in key places at the right times—a trait not lost in transition to dragon. 

Kingdom Key isn't one to talk much, but he's always willing to help you out in a pinch. He's a notoriously subtle teacher—some dragons only realizing the lesson has taken place long after it happened. If you see Kingdom Key within earshot when such realizations are exclaimed aloud, you'll catch hints of a smirk on his face.`,
    },
    {
        id: "LadyLuck",
        name: "Lady Luck",
        gameIndex: 0,
        dergID: 16394067,
        bio: `Time and space always seem to become more… odd with Lady Luck around. Something no doubt that carried over from her source blade. But if illogic is a constant, doesn't that actually make it logical?

Lady Luck is a highly laid-back individual. She's never been one for keeping to commitments and often shirks any responsibilities that she finds too large. However, she has a very sweet demeanor and a vivid imagination. With a calm, airy voice shell spin you as many fanciful tales as you wish to hear.`,
    },
    {
        id: "Olympia",
        name: "Olympia",
        gameIndex: 0,
        dergID: 56121178,
        bio: `There were several Keyblades that were forged by the concept of being the strongest and kindest. In Olympia's case, it never hurts to have a lot of brute strength as well. 

While he occasionally shows a streak of vanity, Olympia spends most of his time participating in local tournaments and giving his fanbase shows to cheer for. He always takes the hands-on approach when dealing with the challenges of both life and of the arena. There's no barrier he feels he can't overcome with raw power, effort, and a little showmanship for his admirers. `,
    },
    {
        id: "JungleKing",
        name: "Jungle King",
        gameIndex: 0,
        dergID: 13657285,
        bio: `Not all Keyblades can boast great length. The blade from which Jungle King was pulled not only had length, but was very nimble and straightforward. 

Jungle King is quite crafty, always making tools and contraptions and the like. His hands are calloused and covered in tiny scars. He also likes to climb up to tall places and fling himself from the peak, shouting at the tops of his lungs—only opening his wings at the last second. Though most of the time he's fairly quiet, only speaking if he really has to. `,
    },
    {
        id: "ThreeWishes",
        name: "Three Wishes",
        gameIndex: 0,
        dergID: 12563878,
        bio: `A Keyblade forged from gratitude provided Three Wishes with a humble base. Treasure and fortune can be many things, but not all that is priceless is loot. 

Almost no one in the clan is as nimble and spry as Three Wishes. He tends to live lighter than most, but he lives a comfortable life scavenging and exploring the areas around the clan's main lair. He can tell you about all the shortcuts, secret passages, or anything of the sort. While he never looks for anything specific, he particularly likes to go on treasure hunts and never says no to anyone who wants to tag along. `,
    },
    {
        id: "Pumpkinhead",
        name: "Pumpkinhead",
        gameIndex: 0,
        dergID: 13629389,
        bio: `Born from tricks and scares, both Keyblade and dragon are deft and lanky. However, the total lack of ill-will in the blade itself lends a distinct pleasantness to such phenomena.  

More than anything, Pumpkinhead likes to startle people for fun. Once a year in the fall, he arranges a festival of sorts where dragons come from all around to scare each other with costumes and scary stories. Of course, none are quite as skilled as the famed Pumpkin King himself, inspirer of many a story that travel the entire world. But when he's not seeking frights, he has a surprisingly innocent demeanor. `,
    },
    {
        id: "WishingStar",
        name: "Wishing Star",
        gameIndex: 0,
        dergID: 55174302,
        bio: `The chunky Keyblade from which Wishing Star was pulled was sturdily built despite appearances. In capable hands it also had a knack for getting out of tight spots. 

Wishing Star is quite small for his species but is very outgoing. He's very trusting, but that naïveté that has lead him into more than a few precarious situations. He still takes them in stride, always trying to maintain his positive outlook as he explores and learns more about the world. Sometimes, if you let him, he'll ask questions in the form of a non-stop string of inquiries. `,
    },
    {
        id: "Crabclaw",
        name: "Crabclaw",
        gameIndex: 0,
        dergID: 54114362,
        bio: `With an affinity to water, Crabclaw's source blade could deftly move with the ebb and flow of combat. While still adept and confident, Crabclaw has shifted away from combat and towards the study and practice of music. 

Crabclaw is small for a Spiral though is chock-full of energy. He takes this energy out by creating musical arrangements and organizing often massive performances of them. These events are quite a blast—singing and dancing all around. He is a coach to Mysterious Abyss, but she sometimes gives him a run for his money by skipping out on her vocal lessons. `,
    },
    {
        id: "FairyHarp",
        name: "Fairy Harp",
        gameIndex: 0,
        dergID: 56749586,
        bio: `A Keyblade of diminutive size such as this one would of course result in a fae. Yet the blade's power is barely kept contained in such a small dragon. 

Fairy Harp is hardly ever seen apart from Pixie Petal. Together, the two of them take advantage of their small sizes and light-footedness to pull all sorts of pranks and participate in wacky hi-jinks. Fairy Harp is not one to follow the rules anyone else sets, but he won't do anything that puts other people in too precarious a situation. Usually. `,
    },
    {
        id: "DivineRose",
        name: "Divine Rose",
        gameIndex: 0,
        dergID: 18227294,
        bio: `With patience lies wisdom; with persistence there follows strength. Divine Rose was pulled from a Keyblade which wielded both of these virtues in spades. 

To say Divine Rose loves books would be a severe understatement. She'll thoroughly consume any book you put in front of her and will be more than happy to discuss the finer nuances of the content. Besides encyclopedic comprehension, she also seeks to help others come to similar understanding. Divine Rose offers help to dragons of any age if there's something they want to learn about. `,
    },
    {
        id: "Spellbinder",
        name: "Spellbinder",
        gameIndex: 0,
        dergID: 12283922,
        bio: `The blade from which Spellbinder was pulled was forged from studious study of the art of magic. It's clear where Spellbinder's magical prowess originated. 

Most dragons can do magic, but Spellbinder is a true master. However, from first appearance he'd have more of the appearance of tinkerer than genius. But despite his messy laboratory and scatterbrained attention span Spellbinder knows his stuff. He's even developed magic that can manipulate time—he can sail the time stream itself! He uses it for exploration of the past and future, though he admittedly sometimes gets confused as to which time he's in. `,
    },
    {
        id: "MetalChocobo",
        name: "Metal Chocobo",
        gameIndex: 0,
        dergID: 53613854,
        bio: `Behind the simplistic styling of Metal Chocobo's source Keyblade is backed phenomenal strength and sturdiness. The essence of the blade finds itself quite at home in the form of a wildclaw.  

Metal Chocobo is one of the hardest workers in the clan. He's also one of the fastest sprinters and can out-speed almost anything. Unlike other wildclaws, Metal Chocobo loves to eat greens more than anything else. Despite his busy work schedule Metal Chocobo will always give young hatchlings rides. `,
    },
    {
        id: "Lionheart",
        name: "Lionheart",
        gameIndex: 0,
        dergID: 55539104,
        bio: `Most Keyblades that excel in magic are pulled into passionate dragons, Lionheart would be an exception. The skills translate, but when paired with such a resigned personality you'd hardly know it. 

I've never seen Lionheart loose his cool even once. Of course, he doesn't really show any emotion. Though his stoicism is not necessarily matched with intelligence, keeping collected in tough situations is almost just as good. If he gets stumped for too long Lionheart will sometimes get caught in a loop. `,
    },
    {
        id: "DiamondDust",
        name: "Diamond Dust",
        gameIndex: 0,
        dergID: 8978770,
        bio: `The blade from which Diamond Dust was pulled was forged from an encounter with a colossal incarnation of ice itself. The same could also be said for the resulting dragon. 

Diamond Dust is an ice-magic wielder who has sharpened her skills solely for combat. Her titanic size makes it difficult for her opponents—be they beastclan or coliseum challenger—to find any openings. Outside of combat she's actually quite chill so long as you don't provoke her much. Though if you push her buttons one too many times, you'll face her icy rage. `,
    },
    {
        id: "OneWingedAngel",
        name: "One-Winged Angel",
        gameIndex: 0,
        dergID: 52903216,
        bio: `The Keyblade that One-Winged Angel was pulled from was long and sharp. At its core, it has the desire to shatter the world and just about the power to as well. 

Everyone tends to keep their distance from One-Winged Angel. He’s not particularly strong or skilled with magic—he’s quite frail, to be honest—but he has the most unnerving stare. He never even seems to blink either. And his voice is always smooth and cold. His grin is positively cruel, and is armed with a wit that cuts to the core. One-Winged Angel and Fenrir often get entangled in fierce clashes that no one else dares draw near towards. `,
    },
    {
        id: "Oathkeeper",
        name: "Oathkeeper",
        gameIndex: 0,
        dergID: 12781581,
        bio: `The great Earthshaker pulled Oathkeeper from a Keyblade forged from a deep longing. The blade in question holds a great power over light and can amplify the strength of heart of its wielder. 

Oathkeeper is, unsurprisingly, true to her word. It doesn't take much to get an obligation out of her, though whomever does so had better be prepared to have her follow through. The one thing you can't expect from her is dishonesty. Like Destiny's Embrace, she has a fondness for the sea and is rumored to have a collection of seashells. (She won't tell you where she keeps them—they're in a secret place.)`,
    },
    {
        id: "Oblivion",
        name: "Oblivion",
        gameIndex: 0,
        dergID: 18246380,
        bio: `The great Earthshaker pulled Oblivion from a Keyblade forged from a deep bond of friendship. The blade in question holds a great power over darkness and can extract great strength from its wielder. 

Oblivion is one of the most cool, collected dragons in the lair. It's easy to think he's always looking down on you, but its mostly because he never lets anyone see his eyes or face. In truth, he isn't looking down on you, he's not giving you much thought in the first place. Though one may not expect it from him, he's never one to forget a promise, even if the person he's made the promise with has. Occasionally, Oathkeeper, Oblivion, and Kingdom Key spar 2-v-1.`,
    },
    {
        id: "UltimaKH1",
        name: "Ultima",
        gameIndex: 0,
        dergID: 54240400,
        bio: `Keyblades forged from as precious of materials as these house within them phenomenal strength and magnificent ability. The dragons that rise from such blades are no exception. 

Ultima's skin, fur, and scales glisten semi-transparently, almost like she was made of glass. But glass she is not; despite her wispy frame she's actually quite hardy. Her no-nonsense personality doesn't lend itself to small talk, yet is amazing for overall planning and quickly finding solutions to problems that would rack other dragon's brains for weeks. `,
    },
    {
        id: "PeoplesHearts",
        name: "People's Hearts",
        gameIndex: 0,
        dergID: 12611206,
        bio: `While incomplete and ephemeral, the Keyblade from which People's Hearts came was a combination of seven pure hearts of light. 

Bubbly and easily excited, People's Hearts won't hesitate to help out a fellow dragon in need. Still, she can sometimes be a little too 'helpful'—don't be afraid to tell her no. If you can't, you will find no end to the things she can 'help' you with. (Relatedly, People's Hearts has always had a yearning for something more, something outside the confines of the lair… but she can't seem to find the time.)`,
    },
    {
        id: "StarSeeker",
        name: "Star Seeker",
        gameIndex: 2,
        dergID: 51774403,
        bio: `The Keyblade from which Star Seeker was pulled has a curious nature: a need to understand the worlds and to relay that information to those who need it. 

Star Seeker is small, even for a fae. He works in Star Cluster's observatory for the most part, but his restless energy makes it hard for him to focus on his work. Oddly enough he was much more mellow in his youth but age has reduced his patience. Usually he spends his energy by being constantly in flight or climbing to tall places. It works in his favor when he needs to run errands or repair the observatory. `,
    },
    {
        id: "HiddenDragon",
        name: "Hidden Dragon",
        gameIndex: 2,
        dergID: 13643712,
        bio: `Hidden Dragon's blade made the transition to dragon quite nicely. There was almost no transition time between inanimate Keyblade and highly-animate spiral. 

Hidden Dragon will talk your ear off if you don't stop him. His self-confidence can come off as haughty, but it's mostly a front. It's true that he does think highly of himself, but hit wit can get him out of most of the unfavorable situations he manages to get himself into. Despite his light alignment, Hidden Dragon tends to dabble more in fire magic. `,
    },
    {
        id: "RumblingRose",
        name: "Rumbling Rose",
        gameIndex: 2,
        dergID: 51945891,
        bio: `A terror of a Keyblade lined up to become a beast of a dragon. Terror not in terms of intent or will, but in terms of capability. With Divine Rose himself I'm less sure. Despite his ominous visage, his heart is in the right place. 

Rumbling Rose is a true beast of a snapper. He is one of the largest dragons in the entire clan, and almost none of his intimidating silhouette comes from his battered wings. While Rumbling Rose himself is brusque, he mellows out in the presence of Divine Rose, who is his mentor for the finer things in life.`,
    },
    {
        id: "HerosCrest",
        name: "Hero's Crest",
        gameIndex: 2,
        dergID: 54940512,
        bio: `There were several Keyblades that were forged by the concept of being the strongest and kindest. And the blade from which Hero's Crest was drawn certainly proved itself worthy of such. 

Hero's Crest specializes in aerial combat and out-speeding her opponents. Out of all of Hero's Origin's trainees, Hero's Crest is truly the most conceited. Sure, she's skilled and all, but she embraces the celebrity aspect of being skilled in the arena. In her defense, Hero's Crest does act as inspiration for aspiring dragons young and old. She's quite affable and is always willing to set time aside for her fans. `,
    },
    {
        id: "Monochrome",
        name: "Monochrome",
        gameIndex: 2,
        dergID: 12669181,
        bio: `The blade from which Monochrome was pulled was old-fashioned not in terms of construction but in terms of mentality. It lends to some somewhat quirky behavior relative to modern sensibilities. 

Monochrome is incapable of vocalization. Yet she is far from inexpressive. She makes sure to dress for the day as sharp as possible, never stepping outside without her trusty hat. She usually hangs out with Classic Tone with whom she gets into various hijinks. Though on her own time she usually mixes drinks and sells them to those who ask. Most of what she makes end up being combat potions, but not all. `,
    },
    {
        id: "MysteriousAbyss",
        name: "Mysterious Abyss",
        gameIndex: 2,
        dergID: 55038058,
        bio: `Mysterious Abyss' source blade was forged from a longing as deep as the sea. While that longing was satisfied, such strong feelings were wholly passed down to this dragon. 

While the lair is in a desert, there are several underground lakes within the lair's confines. Mysterious Abyss resides in one of the larger of these. The cave itself has amazing acoustics and is quite effective lit soley by bioluminescence. Crab Claw acts as a vocal coach for Mysterious Abyss and she lets loose her beautiful voice in regular performances. `,
    },
    {
        id: "FollowTheWind",
        name: "Follow the Wind",
        gameIndex: 2,
        dergID: 14251391,
        bio: `It's not uncommon for a Keyblade to bear a strong affinity towards something. Follow the Wind may like you to believe the affinity he inherited from his blade was for the wind or sea, but it was probably actually theivery. 

Follow the Wind is a very suave in speech and light in touch. He can charm talk almost anyone and loot their pockets at the same time without them noticing. If he's not sailing the Sea of a Thousand Currents with his partner Wheel of Fate, he's bartering to obtain rare and exotic artifacts. …Or trying to sneak out of trouble he tends to get into with other clans. `,
    },
    {
        id: "WishingLamp",
        name: "Wishing Lamp",
        gameIndex: 2,
        dergID: 53683161,
        bio: `As a Keyblade, Wishing Lamp focused less on strength outright than offering aid to accomplish goals. This mentality transformed into a very caring, highly capable dragon. 

As far as dragons with a sense of humor go, Wishing Lamp is definitely one of the top. Besides having a quick wit, he has a caring heart that is always willing to give folks the benefit of the doubt. Wishing Lamp loves creating extravagent gifts for his friends or as thanks. I think they're usually supposed to be suprise gifts, but… Wishing Lamp isn't exactly subtle…. `,
    },
    {
        id: "DecisivePumpkin",
        name: "Descisive Pumpkin",
        gameIndex: 2,
        dergID: 54684749,
        bio: `The Keyblade from which Decisive Pumpkin was pulled was practically an embodiment of the spirit of giving. Or at least, something that [i]aspired[/i] to the spirit of giving. 

In the days leading up to the Night of the Nocturne celebration, Decisive Pumpkin disappears from the lair. In her place, dragons from all over find colorfully wrapped gifts of sweets or toys. Decisive Pumpkin spends most of the year making these gifts, then towards the end of the year she rewards dragons who she deems sufficiently nice. You can commission her specific gifts for specific dragons as well, though many who work with her find her overbearing and saccharine. `,
    },
    {
        id: "PhotonDebugger",
        name: "Photon Debugger",
        gameIndex: 2,
        dergID: 30274943,
        bio: `The nature of existence is much more variable than one may believe. One may think the Keyblade base for Photon Debugger had not existed in reality. Yet it proved real enough to take dragon form. 

When Photon Debugger isn't sparring with his friend Dual Disc, he's usually building lightning magic powered machinery. The equipment and devices he builds are primarily for shows hosted in the Mirage Arena. Often he performs himself—he primarily combines lasers (courtesy of his own devices), fancy dance moves, and electrically-generated music. `,
    },
    {
        id: "CircleOfLife",
        name: "Circle of Life",
        gameIndex: 2,
        dergID: 51923758,
        bio: `A Keyblade raw and strong became a dragon of comparable strength and endurance. As such, Circle of Life also knows when strength is necessary or when a nap is instead. 

Circle of Life is unreasonably fluffy, even for a tundra. During the summer, if he's not hunting, he's sprawled out in the shade somewhere. Though he may seem lazy, Circle of Life is quite a seasoned fighter and an effective hunter. Some of his scars are large enough to be visible through his fur and each have quite the story behind them. `,
    },
    {
        id: "SweetMemories",
        name: "Sweet Memories",
        gameIndex: 2,
        dergID: 54099682,
        bio: `The Keyblade from which Sweet Memories was pulled was never really intended for combat. It was a manifestation of the feeling one gets when reunited with dear friends and the memories that are brought forward as a result. 

Sweet Memories is exactly as her name implies: she is sweet and thoughtful. Large, rotund, and simple-minded, most people tend to leave her to her own devices. Sometimes dragons will ask her to help find lost items—she has an uncanny knack for it. Otherwise, Sweet Memories can usually be found spending her time with Hunny Spout or in one of his gardens. `,
    },
    {
        id: "GullWing",
        name: "Gull Wing",
        gameIndex: 2,
        dergID: 54637227,
        bio: `As a Keyblade, Gull Wing source blade contains determination more than any other trait. And determination in the blade lead to bull-headedness when it was pulled into a dragon. 

While Gull Wing is usually quite charming, her desire to hunt for treasure can sometimes bring out her more forceful aspects. She's a quick learner and can recall practically anything she's heard aloud. However she doesn't have the attention span for studying books. Gull Wing spends most of her time traveling and treasure hunting, though once she obtains the treasures she's not too averse to donating them. `,
    },
    {
        id: "GuardianSoul",
        name: "Guardian Soul",
        gameIndex: 2,
        dergID: 51419725,
        bio: `Reflexes of steel and an edge to match, Guardian Soul is quite a stalwart dragon. 

Guardian Soul is another of the clan's regular competetors in the arena. He is a dragon of few words, but his wit is sharp. Guardian Soul will occasionally go on solo training journeys into the surrounding wilderness. These trips aren't even hunting trips as most would suspect for a dragon of his demeanor—he simply likes to experience the world outside the clan's territory. Sometimes, Gull Wing will talk him into letting her accpmpany him on one of his journeys.`,
    },
    {
        id: "SleepingLion",
        name: "Sleeping Lion",
        gameIndex: 2,
        dergID: 12356399,
        bio: `Reliable as they come, the blade from which Sleeping Lion was pulled packed quite the balance of magical ability and persistence. 

Most days Sleeping Lion works as an instructor. He teaches a broad range of subjects from intelectual topics to basic fighting techniques of various styles. Sleeping Lion is close colleagues with Lionheart and they often keep each other company in their down time. Sleeping Lion is quick to be hard on himself, something his more obnoxious students like to take advantage of once they find out. `,
    },
    {
        id: "Fenrir",
        name: "Fenrir",
        gameIndex: 2,
        dergID: 54608573,
        bio: `Despite her source blade's ferocity and her intimidatingly lanky build, Fenrir is surprisingly popular amongst hatchlings—much to her dismay. 

Fenrir is exceedingly quiet and stone-faced, but she's quite adventuresome on the inside. She routinely goes for long runs across Dragonhome's sprawling desert at sunrise and sunset. It's not uncommon for her to take so long on one of these sprints that she's away for days. Sometimes Metal Chocobo talks her into racing him, and even though Metal Chocobo has longer legs and a bigger stride, her loss rate is only 50/50.`,
    },
    {
        id: "BondOfFlame",
        name: "Bond of Flame",
        gameIndex: 2,
        dergID: 13789514,
        bio: `The common elements for Keyblades to excell at are water and fire. There's no debate that Bond of Flame inherited his afinity for fire from his source blade—all blaze, no cool whatsoever.

Bond of Flame is practically a lankier, more show-off-ish version of Flame Liberator, were that even physically possible. Their circle of close friends even largely overlap. Bond of Flame and Two Become One are close enough effectively be siblings, and Bond of Flame is one of the few dragons who can coax Two Become One out of social bubble. No one knows what, but it seems that Bond of Flame and Kingdom Key share some sort of past incident. `,
    },
    {
        id: "TwoBecomeOne",
        name: "Two Become One",
        gameIndex: 2,
        dergID: 57291293,
        bio: `Light and Darkness mix with startlingly powerful results within this dragon. The source Keyblade is one of great strength, but also houses within it a great sadness. 

Often isolated, Two Become One is reluctant to get close to any of the other dragons in the clan. Exception to this, he's relatively close to Bond of Flame, Abudae, and more recently to Flame Liberator, whom Bond of Flame introduced him to. These two are the few dragons he'll ever open up to. If you catch Two Become One without his "best friends," however, he'll be cold and distant. `,
    },
    {
        id: "FatalCrest",
        name: "Fatal Crest",
        gameIndex: 2,
        dergID: 50918526,
        bio: `The Keyblade that was the source for Fatal Crest held great expertise in magic, allowing its weilder great focus and persistence. The persistence of the blade carried over into dragon form, but the same could not be said for focus. 

While normally a wit like the one Fatal Crest boasts would win lots of fans, between his tendency to chain-talk and the fact that he's actually kind of rude tends to outway it. If Fatal Crest gets riled up enough, his smoking hands will bellow out even more smoke with increasing intensity. These days people have figured out only to rile him up outdoors. `,
    },
    {
        id: "WinnersProof",
        name: "Winner's Proof",
        gameIndex: 2,
        dergID: 55549088,
        bio: `Winner's Proof was formed from a  blade that both served as a trophy and as a frighteningly powerful weapon. Yet in addition to these perks, wielders of this Keyblade would become inexplicably forgetful. 

Odd for her species, Winner's Proof is completely mute. She's really good at non-combat magic, skills which she generally uses to solve and present puzzles. Rather than vocalizations, Winner's Proof tends to communicate with body language or magically-conjured symbols rather than actually getting around to learning sign language. `,
    },
    {
        id: "UltimaKH2",
        name: "Ultima",
        gameIndex: 2,
        dergID: 54357913,
        bio: `Keyblades forged from as precious of materials as these house within them phenomenal strength and magnificent ability. The dragons that rise from such blades are no exception. 

Ultima is quite proficient and quick in physical and magical combat. Her specialty is to use the power of other dragons to heighten and flavor her own power. It doesn't work for just anyone though. It has to be a dragon dear to her. Incredibly, that closeness doesn't have to be physical as well. No matter how far apart, her friends powers are always accessible to her. And she makes a lot of friends. `,
    },
    {
        id: "WayToTheDawn",
        name: "Way to the Dawn",
        gameIndex: 2,
        dergID: 38743794,
        bio: `A late bloomer, the Keyblade from which Way to the Dawn was pulled only answered its wielder's call once it felt its wielder truly earned its power. Ever since then it was fiercely loyal, stoutly guiding its wielder along their chosen path. 

Beneath Way to the Dawn's cool and collected surface lies a passionate heart. Dedicated to his friends (though he won't admit it in person), Way to the Dawn can seem snooty at times to those who don't know him, but all he really intends is friendly banter. Always keeps to himself about personal matters, but is always willing to offer advice. `,
    },
    {
        id: "DestinysEmbrace",
        name: "Destiny's Embrace",
        gameIndex: 2,
        dergID: 17724951,
        bio: `The original blade from which Destiny's Embrace was formed always seemed to find its way towards strong sources of light. Perhaps this is what Destiny's Embrace's sunny disposition comes from. 

Has a love for flowers and an appreciation of the sea. The clan's locations is not conducive to an ocean view, but Kingdom Key has been known to take her on the occasional escapade to the beach, often accompanied by Oathkeeper. Destiny's Embrace will often give bunches of flowers in thanks or to other clan members she's noticed feeling down. No one's figured out where she [i]gets[/i] the flowers, though, considering the lair is located in a desert.`,
    },
    {
        id: "MissingAche",
        name: "Missing Ache",
        gameIndex: 3,
        dergID: 75913451,
        bio: `A Keyblade of skill and speed, the blade became a dragon of similar capability. But like most dragons pulled from blades, Missing Ache reveals a depth hidden beneath the Keyblade's edges. 

Missing Ache is a mellow sort. While he has good mental and physical stamina, he always seems too dazed or distracted to be very productive with anything. If he can manage to maintain focus he's quite skilled. Missing Ache tends to forget things readily; a sort of out-of-sight-out-of-mind recollection. `,
    },
    {
        id: "OminousBlight",
        name: "Ominous Blight",
        gameIndex: 3,
        dergID: 48401548,
        bio: `The blade from which Ominous Blight was pulled was very light, making it easy for the wielder to use for long periods of time before getting exhausted. 

While Ominous Blight tries his hand in combat on occasion, he speciaizes more in learning techniques than executing them. He doesn't really have the patience for teaching—or interacting much with other dragons for that matter. Though he [i]does[/i] have the mental resiliance to read for hours on end. Sometimes days. `,
    },
    {
        id: "AbaddonPlasma",
        name: "Abaddon Plasma",
        gameIndex: 3,
        dergID: 54270026,
        bio: `There are rarely Keyblades as deft as Abaddon Plasma's source. With such dexterity on call, fighting against one who wielded said blade would not be recommended. 

One of the coliseum's regulars, Abaddon Plasma is skilled in duels. Unfortunately, he tends to get in trouble on account of his destructive tendencies. There has hardly ever been a match he was involved in that didn't have a lot to be cleaned or tidied up by the end. Ultimately, Abbadon Plasma's matches are always a blast to watch. `,
    },
    {
        id: "PainOfSolitude",
        name: "Pain Of Solitude",
        gameIndex: 3,
        dergID: 48392099,
        bio: `As a gift from his source blade, Pain of Solitude bears great magical capability. Yet clearly this strength does nothing to ease the aching heart of this solemn dragon. 

Pain of Solitude is a specialist in magic. He trains alongside Sign of Innocence and Crown of Guilt to try and hone their magical abilities to their limits. Pain of Solitude subjects himself to intense physical training that puts enormous strain on his small body. But considering how brimming he is with magic power, clearly his training pays off. `,
    },
    {
        id: "SignOfInnocence",
        name: "Sign Of Innocence",
        gameIndex: 3,
        dergID: 40653260,
        bio: `The heat of battle has little affect on the cool head of Sign of Innocence. It is this calm that allows both herself and the blade from which she was pulled to weild such power in magic. 

Sign of Innocence trains in the art of magic alongside Pain of Solitude and Crown of Guilt. Her specialty is in time magic, which she uses to speed up or slow down the flow of time to facilitate training. At first, Sign of Innocence apprenticed herself to Spellbinder, local master of time magic. As it turned out, their personalities are… incompatible. `,
    },
    {
        id: "CrownOfGuilt",
        name: "Crown of Guilt",
        gameIndex: 3,
        dergID: 14365734,
        bio: `Along with his source blade's power, Crown of Guilt inherited a festering regret. Usually memories do not directly pass from blade to dragon, so he must bear this baggage unresolved. 

Crown of Guilt holds incredible magic power. She trains alongside Pain of Solitude and Sign of Innocence. Crown of Guilt's specialty is in magic that manipulates matter. The most common application of these abilities are to allow normally solid objects to pass through other objects. When Pumpkinhead holds his yearly fall festival, Crown of Guilt regularly helps out from behind the scenes. `,
    },
    {
        id: "AbyssalTide",
        name: "Abyssal Tide",
        gameIndex: 3,
        dergID: 75489880,
        bio: `The wielders of Keyblades are generally ground-walking creatures. Even before being pulled into Abyssal Tide, her blade form would always encourage and reward wielders who took to the air. 

Ridgebacks don't usually like water, but Abyssal Tide prefers combat training underwater. She claims it's like training with weights, but for your entire body. Apparently it pays off because Abyssal Tide and her frequent training partner Leviathan are practically unparalleled in the skies. `,
    },
    {
        id: "Leviathan",
        name: "Leviathan",
        gameIndex: 3,
        dergID: 12330397,
        bio: `Be it underwater or weaving through the air, the blade from which Leviathan was pulled finds itself quite at home with its wielders' feet decitedly un-planted. But snince ridgebacks hate water... well, at least she still takes to the air alright. 

In the arena, Leviathan proves herself to be very difficult to land a hit on. She nimbly flits about in the air, able to land quick precise strikes or dodge any attacks directed at her. Leviathan trains underwater with Abyssal Tide as a sparring partner—they're under the impression training in a place they hate facilitates the training. `,
    },
    {
        id: "TrueLightsFlight",
        name: "True Light's Flight",
        gameIndex: 3,
        dergID: 75702000,
        bio: `A Keyblade of devastating power, the blade endeavored to tear down any barriers between it and its wielder. As a dragon, True Light's Flight only remains with the clan out of momentum than any sense of obligation. 

True Light's Flight is almost always on edge, even more so if she has to interact with any other dragons. Nothing would make her happier than to be left alone out in the wilderness. When she gets too stressed, True Light's Flight will become fidgety and irritable. On occasion she's been so overwhelmed that she snapped completely, then disappeared from the lair for days at a time to cool off. `,
    },
    {
        id: "RejectionOfFate",
        name: "Rejection of Fate",
        gameIndex: 3,
        dergID: 48389536,
        bio: `With a long stalk and a steep edge Rejection of Fate's source blade would carve out the path for its wielder to walk. Like the blade he was pulled from, you do not want to get in his way. 

Rejection of Fate is profoundly quiet. When he does speak, he always says really cryptic or ominous things. Most of the time Rejection of Fate tries to be nonconfrontational, but when he holds an opinion strongly there will be no swaying him. It's only in times like these when one sees just how meanacing an air Rejection of Fate can inhabit. `,
    },
    {
        id: "MidnightRoar",
        name: "Midnight Roar",
        gameIndex: 3,
        dergID: 57240355,
        bio: `As a Keyblade, Midnight Roar has a long hook-like end that in the hands of a deft wielder could pry the armor off of any foe. This skill to overcome tough trials and the readiness to face them ended up being key aspects of Midnight Roar's personality. 

Midnight Roar may not be strongest dragon, but she is always brimming with courage. In tackling things that are beyond her capabilities, Midnight Roar has managed incredible growth. Regardless of if she is worse for wear afterwards, she always comes through more experienced and more capable than before. `,
    },
    {
        id: "GlimpseOfDark",
        name: "Glimpse of Darkness",
        gameIndex: 3,
        dergID: 74110180,
        bio: `The Keyblade from which Glimpse of Darkness was pulled had a crushing strength that would intimidate any self-respecting snapper. While the dragon pulled from this blade is less combat oriented, that indominable spirit is alive and well. 

There are few dragons who are willing to get into contests of strength with Glimpse of Darkness. While fighting is not in her nature, she does enjoy going on daring expeditions. To this day no challenge has yet intimidated her. That is not to say no challenge has beat her, though Midnight Roar will be the last to admit it. `,
    },
    {
        id: "TotalEclipse",
        name: "Total Eclipse",
        gameIndex: 3,
        dergID: 62304383,
        bio: `While not all Keyblades are weapons, there is no dispute with this one. Despite this, as a dragon Total Eclipse displayes more of a live and let live mindset. That just goes to show that you can never judge a dragon before it hatches. 

Total Eclipse is extremely strong and nearly completely blind. Unlike most of the burly dragons who live here, he doesn't spend any time physically training to maintain his bulk. Despite being unable to see well—or perhaps because of that—he has a very unique fighting style. He's a first-choice pick for night time or low visibility gathering trips. `,
    },
    {
        id: "SilentDirge",
        name: "Silent Dirge",
        gameIndex: 3,
        dergID: 75504843,
        bio: `Despite its power, only when the situation proved truly uncertain would the full strength of Silent Dirge's source blade surface. 

Silent Dirge is not one to startle easily. He has a very calm and softspoken attitude, making him an asset in a crisis. Outside of trouble, this temperment makes him irksome to those who try to rile him up or believe him to be noncommital. On account of Silent Dirge's soft speech, he has a remarkable singing voice. I've only heard him once or twice myself though…. `,
    },
    {
        id: "LunarEclipse",
        name: "Lunar Eclipse",
        gameIndex: 3,
        dergID: 53610383,
        bio: `Physical strength and magical prowess need not be exclusive, as proven by the utility of Lunar Eclipse. Wisely enough, she chooses not to display her full capabilities, finding contentment in control and restraint. 

Bright lights always bother Lunar Eclipse, so you won't see her out and about much during the day. Having adopted a completely nocturnal lifestyle, Lunar Eclipse polishes her combat and magic skills in a very meditative way and has a very graceful, efficient form as a result. `,
    },
    {
        id: "DarkerThanDark",
        name: "Darker than Darkness",
        gameIndex: 3,
        dergID: 44981642,
        bio: `As far as physical characteristics go, dragon and blade are long and lanky. To most, Darker than Darkness may appear to be malnourished, but I assure you to never underestimate the power of properly executed leverage. 

Darker Than Darkness doesn't like to fly very much. She instead prefers to climb and dive where relevant. She may even supplement her mobility with deft use of magic if the environment she wants to navigate proves sufficiently hazardous. But Darker Than Darkness will often refuse to take flight even in the most dire of circumstances. `,
    },
    {
        id: "AstralBlast",
        name: "Astral Blast",
        gameIndex: 3,
        dergID: 75196198,
        bio: `It is not uncommon for Keyblades to amplify the emotions of those who wield them. The source blade for Astral Blast would help release pent-up feelings in a way that could be argued as healthy for the wielder yet decidedly unhealthy for their enemies. 

Astral Blast is a prickly dragon. She's constantly irritable on account of never being able to wind down enough to get good quality sleep. Some consider her ability to work for a much longer portion of the day to be an asset, but I bet you those same dragons also know to never cross her path in the mornings. `,
    },
    {
        id: "MaverickFlare",
        name: "Maverick Flare",
        gameIndex: 3,
        dergID: 76378955,
        bio: `Even without being pulled into a dragon, Maverick Flare's source blade thrives in the heat of battle. If the blade could reach, its foes would fall beneath its wielder's strikes. 

Maverick Flare has proven himself quite a champion in competitions. No matter the contest, his sharp mind and dextrous ability allow him to take on opponents or challenges of nearly any size. Plus Maverick Flare is absolutely charming towards his fans with his roguish good looks and cordial personality. `,
    },
    {
        id: "TwilightBlaze",
        name: "Twilight Blaze",
        gameIndex: 3,
        dergID: 76638833,
        bio: `As the light of the setting sun shines briefly but brightly, the Keyblade from which Twilight Blaze was pulled could deal with any who stood before it in a flash. Both blade and dragon strive to become an ultimate fighting force. 

Twilight Blaze is a highly capable hunter whose specialty is ground combat. Both physically strong and quick, she'll get in close and roast his opponents from angles they can't quite defend from. In combat the only thing you'll see her use his wings for is to aid in leaping rather than attacking from above. She wouldn't want you to know this, but Twilight Blaze is actually extremely clumsy in the air. `,
    },
    {
        id: "Omega",
        name: "Omega",
        gameIndex: 3,
        dergID: 54784963,
        bio: `Like the Ultimas, Omega's source Keyblade posessed terrifying strength. It came about at the gathering of many souls and secrets. 

Omega is very skilled in many things. Cooking, fancy tricks, magic, trivia, combat—you name it, he can handle it. He doesn't like it when his scales get knicked or roughed up. In fact, he spends a lot of time polishing his scales. It helps him slough off magic, or so he says, though I know for a fact that Omega lost a duel with one of the Ultimas when his opponent splattered mud on him and he got too distracted trying to clean it off to fight properly. `,
    },
    {
        id: "Umbrella",
        name: "Umbrella",
        gameIndex: 3,
        dergID: 52548728,
        bio: `The great Earthshaker didn't quite know what to make of this… erm, "Keyblade" when he encountered it, but he pulled it into the form of a dragon nontheless. 

Umbrella loves to play in rain and storm. She's been seen folding her wings around her body in such a way that it makes a shield-shape, with her head and neck sticking straight out the center. She must like feeling the rain runing down the webbing of her wings? Though once I saw her doing that to shelter some small birds who would otherwise have been drenched in a particularly severe storm. She has a good heart, but is a little bit of an airhead. `,
    },
    {
        id: "Abudae",
        name: "Abudae",
        gameIndex: 3,
        dergID: 55367819,
        bio: `To the great Earthshaker, the source Keyblade of this dragon was distinctly mounful amongst its peers. 

Quietly cheerful, Abudae like observing sunsets from high places, particularly together with Two Become One. While she gets along with other dragons fine, she's super-close friends with Two Become One and his buddies Flame Liberator and Bond of Flame and is notably more reserved when they're not with her. She easily blames herself before anything or anyone else, even when it's unjustified for blame at all. `,
    },
    {
        id: "TreasureTrove",
        name: "Treasure Trove",
        gameIndex: 4,
        dergID: 47924330,
        bio: `The blade from which Treasure Trove was sprung was stout but strong, with a balanced heavy swing. 

Treasure Trove is quite a happy, jovial dragon. He marches to his own beat in life and gets quite grumpy if thrown off his rhythm. Treasure Trove becomes extremely bashful when complemented, his face blushing with a dopey grin. He likes to dig up shiny stones and precious gems, 'til he becomes too sleepy to go on. Sometimes he kicks up so much dust from digging that he becomes very sneezy. While not too bright on the whole, Treasure Trove is quite knowledgeable when it comes to stone and minerals. If you ever have any questions about such things, he likes it if you call him "Doc."`,
    },
    {
        id: "StrokeOfMidnight",
        name: "Stroke of Midnight",
        gameIndex: 4,
        dergID: 75110804,
        bio: `The source Keyblade of this dragon is full of hope and dreams. It was forged from a fulfilled wish for someone who was pure of heart. 

As dragons go, Stroke of Midnight is incredibly graceful. As she moves, her scales sparkle like glitteing glass. She sings and dances quite beautifully as well, and even does so while she helps out around the lair, which helps make the monotony of daily chores more pleasant for all involved. She's part of a circle of friends the other dragons in the lair call "the princesses," so-called because of there overall sophisticated taste and general personality type. `,
    },
    {
        id: "FairyStars",
        name: "Fairy Stars",
        gameIndex: 4,
        dergID: 40804817,
        bio: `As Keyblades go, the blade from which Fairy Stars was pulled was remarkably balanced. A twining together of three related, yet contrasting powers. 

Fairy Stars is very lively and animated. She always seems to be talking (or arguing) to herself, and has a particular old-fasioned way of speaking. The most common thing for her to argue with herself over is the colors of various things, and she'll use magic to try out different shades on just about anything she can get away with—most notably her scale coat, whose colors are different every time you look at her. She also uses magic to hover slightly off the ground, and does so almost always. `,
    },
    {
        id: "VictoryLine",
        name: "Victory Line",
        gameIndex: 4,
        dergID: 60872881,
        bio: `The great Earthshaker pulled this dragon from a blade forged by sweat, tears, and suspense. A Keyblade of competitive spirit and sportsmanship. 

Polite and petite, Victory Line has a very hopeful and optimistic personality. She spends a lot of her energy mediating races and other sporting events that the more hot-blooded dragons in the clan participate in on a regular basis. Since Victory Line also gets along great with young dragons, a demographic her friendly competitions are particularly well suited for, she is almost always at the forefront of making sure the young ones stay out of trouble. `,
    },
    {
        id: "MarkOfAHero",
        name: "Mark of a Hero",
        gameIndex: 4,
        dergID: 45648758,
        bio: `There were several Keyblades that were forged by the concept of being the strongest and kindest. This one is one that reflects a yearning to find one's true place to belong. 

Mark of a Hero aspires to be like his seniors in the hero business, but he's quite clumsy. Trips over his own dewclaw, bumbles into precarious walls, things like that. But he has a good nature and good intentions, and he's always willing to clean up after himself and lend a hand to any dragon he sees struggling. Olympia in particular acts like a big brother towards Mark of a Hero and helps him the most through Hero's Origin's tough training regimen. `,
    },
    {
        id: "HyperDrive",
        name: "Hyper Drive",
        gameIndex: 4,
        dergID: 13704566,
        bio: `Hyperdrive's source blade holds within it explosive energy while also boasting a long range. These two factors combined prove a fearcome force to contend with. 

As dragons go, Hyperdrive is remarkably strong, intelligent, and quick thinking. Yet for some reason, he chooses to spend all his time and seemingly endless energy on pulling pranks and messing around. Thanks to his destructive tendencies he's impossible to keep contained, so it's better to just have him loose and make sure he's managed properly rather than leaving him to his own devices. `,
    },
    {
        id: "PixiePetal",
        name: "Pixie Petal",
        gameIndex: 4,
        dergID: 14988244,
        bio: `The blade from which Pixie Petal was pulled is short but light. It acts fast, but hits shallowly. Pixie Petal tends to lean after her origins in similar ways. 

Pixie Petal is a quiet, dainty dragon. She hovers in place with the aid of magic, which causes the air around her to sparkle gently. She's fairly close to Fairy Harp, but will show her jealous streak if he spends too much time with other dragons, even though she almost always tags along anyway. She's quite fond of bell-based music, and has an every-growing collection of bells and chimes her own melodies with them. `,
    },
    {
        id: "Sweetstack",
        name: "Sweetstack",
        gameIndex: 4,
        dergID: 14512950,
        bio: `This dragon's source Keyblade was created by a pure, unadulterated love for not just ice cream, but also consideration for those who would eat it. And the first thing Sweetstack did once she came into existence was whip up a batch for the great Earthshaker. 

Sweetstack is the local purveyor of sweets and treats. Despite the lair's desert locale she manages to store her frozen goods, and her specialty ice cream is always cool and fresh. She's always experimenting with new flavors and is eager to have people test them out, which—with a few notable exceptions—is something no dragons find complaint about. `,
    },
    {
        id: "NoName",
        name: "No Name",
        gameIndex: 4,
        dergID: 48396864,
        bio: `The Keyblade itself like a ghost trapped in the strata between times, No Name is capable of calling forth mysterious magic one does not usually associate with dragonkind. You do not want to be on the receiving end of the ire of either blade or dragon. 

Cowled and mysterious, don't expect No Name to even give you the time of day. She spends most of her time sharpening her skills in combat under the schrutinizing watch of The Gazing Eye and leave little time for anything else. Many have challenged her to duels, mistaking her quiet demeanor for shyness. Few have walked away victorious. `,
    },
    {
        id: "RoyalRadiance",
        name: "Royal Radiance",
        gameIndex: 4,
        dergID: 45957116,
        bio: `Most Keyblades come from a world or being with a strong heart and will. The one from which Royal Radiance was pulled is not quite either, but instead from a constructed world that looked in on others to provide challenges for the brave and willing. 

Once a week, Royal Radiance will conjure an arena adjacent to the main lair. There, she hosts tournaments, contests, obstacle courses, what-have-you for dragons near and far to participate in. Not all these events are competitive, but the arena supports a large crowd for those who wish to cheer on the arena's contenders. Royal Radiance herself acts as both emcee and janitor. `,
    },
    {
        id: "UltimaBbS",
        name: "Ultima",
        gameIndex: 4,
        dergID: 47722786,
        bio: `Keyblades forged from as precious of materials as these house within them phenomenal strength and magnificent ability. The dragons that rise from such blades are no exception. 

Ultima specializes in hightening a specific school of magic to great extent for a short period of time. Even though they're an ice dragon, they can do this to most if not all styles. For instance, they could temporarily boost lightning and fire magic to create dazzling colored bursts of sparkling light—it looks really great against a starlit sky. Things like that. `,
    },
    {
        id: "EndsOfTheEarth",
        name: "Ends of the Earth",
        gameIndex: 4,
        dergID: 12129239,
        bio: `One of the first of the clan. When the great Earthshaker pulled him into existence, the newborn dragon was filled with only two things: unfettered rage, and a desire to protect those he cherished. 

Ends of the Earth often takes other clan members under his protective wing. He's quite spontaneous and has been known to wander off from time to time, though his mate Stormfall is always careful to keep him reigned in. If you cause trouble for any of his friends, expect this very large, overprotective guardian dragon to come a-knocking. `,
    },
    {
        id: "Darkgnaw",
        name: "Darkgnaw",
        gameIndex: 4,
        dergID: 54271293,
        bio: `Some Keyblades come forth after the wielder has proven themself through a trial or challenge. This blade is one of those, and thus the dragon born from it is one of great strength and tenacity. 

Darkgnaw's skill in close combat is almost terrifying. He never hesitates to use his massive jaw to crush anything no matter how tough it may seem. Despite his massive body strength and deep voice he's actually quite short from end to end. But he always holds himself so immensely that you'd never know from looking. `,
    },
    {
        id: "ChaosRipper",
        name: "Chaos Ripper",
        gameIndex: 4,
        dergID: 54305679,
        bio: `The great Earthshaker pulled this dragon into existence and was immediately met by a desperate, scrambling being—like it had just awoken from a nightmare. 

No other dragon in the lair is quite as lanky and gaunt as Chaos Ripper. He's always got this feeling like he's left something or forgotten to do something important, which makes him fairly distracted fairly constantly. Chaos Ripper never allows himself to get really close to anyone either. He does seem to have some kind of history with Ends of the Earth, but neither of them will really say anything about it. `,
    },
    {
        id: "Rainfell",
        name: "Rainfell",
        gameIndex: 4,
        dergID: 12570049,
        bio: `The Keyblade from which Rainfell was formed belongs to one who was skilled with magic. Consequently, Rainfell is herself skilled in both magic and—oddly—public relations. 

Considered by many of the clan to be a doppelgänger of Stormfall. She is very keen on learning and refining her skills with magic. Rainfell primarily finds herself looking after Wayward Wind, whose hijinks can sometimes cause trouble when left on his own. She is occasionally joined by Stormfall and Ends of the Earth. `,
    },
    {
        id: "Stormfall",
        name: "Stormfall",
        gameIndex: 4,
        dergID: 12129240,
        bio: `One of the first of the clan. The great Earthshaker saw the connection between the Keyblades she and Ends of the Earth came from and decided that Stormfall would best tame Ends of the Earth's rage. 

Stormfall is always sure to keep her mate Ends of the Earth company. You won't find the two of them apart very often and in the unlikely event you do, it won't be for long. Other dragons sometimes tease Stormfall for constantly babysitting Ends of the Earth (and by extension Wayward Wind), but such comments roll off like water off a duck's back. `,
    },
    {
        id: "Brightcrest",
        name: "Brightcrest",
        gameIndex: 4,
        dergID: 53173484,
        bio: `This Keyblade's affinity to water was clear even before the great Earthshaker pulled it into a dragon. Both dragon and blade exhibit unceacing perserverance like waves in the sea. 

No one in the clan makes quite as good an arbitrator as Brightcrest. Her demeanor is calm and considerate and comes like a ocean breeze to the desert environs of the lair. But her amiability doesn't mean she's above getting cross—she's a big promoter of justice and will go to great lengths to resolve wrongs she believes have taken place. She is one of the few in the clan to have the title of "master."`,
    },
    {
        id: "MastersDefender",
        name: "Master's Defender",
        gameIndex: 4,
        dergID: 13759667,
        bio: `Most Keyblades the great Earthshaker encountered are forged around significant objects or ideas. The one from which Master's Defender was pulled was instead built with definitive purpose and watched over the threshold between light and dark. 

Master's Defender is one of the few dragons in the clan with the title of "master." As such, he is the one in charge of educating and training up young dragons. Should you ask him for advice he has a wealth of experience he'll draw upon, though he will not shy away from admiting when he doesn't know something. Master's Defender and [Xehanort] sharpen their minds with regular (and often intense) games of chess. `,
    },
    {
        id: "WaywardWind",
        name: "Wayward Wind",
        gameIndex: 4,
        dergID: 17668006,
        bio: `Wayward Wind, as a Keyblade, is small and quick. It is also a loyal Keyblade—a trait which extends to the dragon. 

Spirited and friendly, Wayward Wind was adopted by Stormfall and Ends of the Earth. Wayward Wind can often be found flitting about, exploring the borders of the clan and all that lies beyond. If you want something done quickly, look no further. Or if you're looking for someone to impress. Wayward Wind has a tendency to find everything he encounters to be The Best Thing. `,
    },
    {
        id: "FrolicFlame",
        name: "Frolic Flame",
        gameIndex: 4,
        dergID: 54211418,
        bio: `The Keyblade from which Frolic Flame was pulled demonstrated to the great Earthshaker that it doesn't take much to form a lasting bond, as this blade was forged from a brief chance encounter. 

Frolic Flame is quite the cocksure, energetic type. He has a lot of physical energy that he seems to dedicate to getting into trouble sneaking around in places he shouldn't be. At least twice he's been caught sneaking into other lairs. Flame Liberator has taken Frolic Flame under his wing as a protégé in fire-related skills. `,
    },
    {
        id: "LostMemory",
        name: "Lost Memory",
        gameIndex: 4,
        dergID: 47928896,
        bio: `The weilder of this blade had been shattered and broken more than once. With help he had been pieced back together, but beneath the calm surface lies layers of forgotten feelings and disjointed memories. 

Lost Memory has never really opened up to anyone before, so there's not much to say about him. I do know he's very easily overwhelmed and sleeps for long periods of time. The clan leaders make sure he's taken care of though. He moves about so silently he might startle you when he passes you by, but he never means any harm. `,
    },
    {
        id: "Xehanort",
        name: "Xehanort",
        gameIndex: 4,
        dergID: 21146563,
        bio: `The great Earthshaker almost didn't give existence to this dragon, as the blade it was pulled from has a… peculiar nature. It is not uncommon for Keyblades to have inherited from others, but this one has no predecessors and has a ludicrous number of descendants. Not only that, but the blade itself gives almost no regard to those descendants, but merely stands aloof and watches from a distance. 

[Xehanort] is one of the few dragons in the clan with the title of "master." Yet he spends most of his time away from the lair, wandering the world of Sornieth. When he visits the lair, he usually takes the time to duel Master's Defender in games of chess. `,
    },
    {
        id: "VoidGear",
        name: "Void Gear",
        gameIndex: 4,
        dergID: 56257174,
        bio: `The source blade for Void Gear had been wrought at the shattering of something else. The blade and wielder are host to a bitter resentment of this that carries on to the dragon born from them. 

Sometimes it seems that Void Gear's general policy is to hate everything. For the most part, he just holds general disdain for everything and detests positive-minded dragons like Wayward Wind and Kingdom Key. At first, Void Gear caused immense distruction of property with his ability to create shadowy beasts, but these days he's mellowed out considerably and now usually resorts to cruel quips. `,
    },
    {
        id: "Wooden",
        name: "Wooden",
        gameIndex: 4,
        dergID: 72302418,
        bio: `Whether or not this dragon was born from a Keyblade or a stick is up for debate, but the important part is that the great Earthshaker pulled it into existence regardless, as the blade contained the strong emotional resonance typical of most Keyblades. 

Wooden is one of Master Defender's students, but he's trained under his master for so long that at this point he's more assistant that pupil. These days he acts as sparring buddy or study partner for his master's other students. `,
    },
    {
        id: "ZeroOne",
        name: "Zero/One",
        gameIndex: 5,
        dergID: 57534118,
        bio: `The great Earthshaker nearly couldn't parse the existence of the source Keyblade of this dragon. Once he did, he decided to pull it into a dragon anyway despite it's… peculiar structure. 

Zero/One is basically a personality duplicate of Kingdom Key. Nine out of ten dragons can't even tell their voices apart, though Kingdom Key's has gotten a bit deeper over the years. Sometimes when Zero/One is particularly sleepy, he'll walk into walls or objects. But not, like, normal bonking into them, he'll *literally* look like he's walking, but remain completely stationary in space. It's weird to watch. `,
    },
    {
        id: "NightmaresEnd",
        name: "Nightmare's End",
        gameIndex: 6,
        dergID: 14928288,
        bio: `While most Keyblades exist as a complete object, there were two that seemed to stand out to the great Earthshaker. These two keys would be called into existence, then come together to form something greater than themselves—even if only for an instant. This coming together could surpass barriers of both time and space. Yet, they were true opposites, like night and day. Or even land and sky. 

Nightmare's End and Mirage Split are never apart. Like, seriously—never. Whenever one seems to be by themselves, or even if the two are confirmed to be in separate locations, there's always a slight afterimage of the other. And while the two have opposite personalities, they'll work together with perfect synchronization should the situation call. `,
    },
    {
        id: "MirageSplit",
        name: "Mirage Split",
        gameIndex: 6,
        dergID: 57173289,
        bio: `While most Keyblades exist as a complete object, there were two that seemed to stand out to the great Earthshaker. These two keys would be called into existence, then come together to form something greater than themselves—even if only for an instant. This coming together could surpass barriers of both time and space. Yet, they were true opposites, like night and day. Or even land and sky. 

Mirage Split and Nightmare's End are never apart. Like, seriously—never. Whenever one seems to be by themselves, or even if the two are confirmed to be in separate locations, there's always a slight afterimage of the other. And while the two have opposite personalities, they'll work together with perfect synchronization should the situation call. `,
    },
    {
        id: "SkullNoise",
        name: "Skull Noise",
        gameIndex: 6,
        dergID: 52549542,
        bio: `Most Keyblades are less "blade" than one might think from the name. Yet this one is rife with edges, and you'll find that same "edge" is still quite intact in dragon form. 

You musn't let Skull Noise's off-beat personality deter you too much. They actually have a distinct style and quick wit that their close friends find endearing. Skull Noise will always let you know their honest opinion, but will bite their tongue should the situation call for a little more tact. They are also quite the artist! Many of their artistic creations possess a unique flair that draw in and inspire those who view it. Their sense of music is fine as well—they'll put out tunes that you won't hear anywhere else. `,
    },
    {
        id: "GuardianBell",
        name: "Guardian Bell",
        gameIndex: 6,
        dergID: 55266297,
        bio: `The bells that adorn the derivation of Guardian Bell ring out with a solemn tone that resonated with the great Earthshaker. 

Guardian Bell is perhaps one of the sweetest, gentlist dragons I've ever met. Large and withdrawn, he always tries to make himself as small as possible by huddling out of sight and always speaks very quietly. He's shy of his face as well and always hides it under a mask of his own construction. Guardian Bell is quite the sculptor and whittler, putting a lot of care and detail into his creations. If you ask him about them, he talks about them as though they were his dear friends. `,
    },
    {
        id: "DualDisc",
        name: "Dual Disc",
        gameIndex: 6,
        dergID: 20197700,
        bio: `Not all Keyblades share the same kind of existence, but to the great Earthshaker they merit taking dragon form not on the nature of their reality, but on the nature of the blade itself. 

Alongside his pal and rival Photon Debugger, Dual Disc is one of the most skilled with lightning magic in the entire clan. He's a regular participant in the local coliseum events and very frequently comes out on top in both duels and courses. His favorite sparring partner is Photon Debugger as he is the only one who can give Dual Disc a run for his money often enough to push him to broaden and strengthen his skills. `,
    },
    {
        id: "FerrisGear",
        name: "Ferris Gear",
        gameIndex: 6,
        dergID: 54606119,
        bio: `While it does not display much cunning in combat, the Keyblade source of Ferris Gear prioritized straightforwardness over flexibility. 

It's nearly impossible to get Ferris Gear to hold focus on anything for too long. Not only is he scatterbrained, he also isn't motivated for anything except how to maximize his own enjoyment. Be it pranks or hijinks, Ferris Gear knows how to have a good time. More often than not, he doesn't cause too many problems since he's carefully watched over by Ocean Rage. But it is easy to slip away from under his guardian's near-sighted gaze. `,
    },
    {
        id: "OceanRage",
        name: "Ocean Rage",
        gameIndex: 6,
        dergID: 52879436,
        bio: `As Keyblads go, the source blade for Ocean Rage is neither physically strong nor holds reach. But where strength lacks magic excells, particularly with water magic. 

Despite the name, Ocean Rage is a very mellow, frail individual. She is a master clockmaker, but since she works for passion and not for finance, she tends to have a lot of extra stock. Were it not for her skill at her craft, one would consider eccentric. Outside of clockmaking, Ocean Rage looks after Ferris Gear, trying to make sure he doesn't get into too much trouble. Despite her efforts, her rowdy charge still manages to get into trouble. `,
    },
    {
        id: "KnockoutPunch",
        name: "Knockout Punch",
        gameIndex: 6,
        dergID: 53352904,
        bio: `Strength is key for this blade and dragon alike. But the strength is an untempered, wild one. The creature that awoke before the great Earthshaker was wild as a beast and it took a long time for Knockout Punch to mellow out into her new existence. 

Who needs small talk when you have an intimidating stare? True to her name, Knockout Punch packs a wallop in her burly forearms. She's one of the clan's most skilled hunters and is usually one of the top picks for hunting trips or fending off the beastclans. Her fangs are always out, communicating to all to keep their distance. `,
    },
    {
        id: "AllForOne",
        name: "All for One",
        gameIndex: 6,
        dergID: 54645901,
        bio: `Deft and quick, All for One finds itself quite at home in the form of a fae. And yet even for a far, she is small in stature but not in spirit. 

In spite of her size, All for One holds a kind and noble heart. Her determination to offer aid to those who cannot help themselves is impressive and an inspiration to all who know her. All for One possesses endless enthusiasm that sometimes encoudages her to bite off more than she can chew. But no matter what situation she finds herself in, she won't back down. `,
    },
    {
        id: "Counterpoint",
        name: "Counterpoint",
        gameIndex: 6,
        dergID: 47562982,
        bio: `If there was any ever proof that Keyblades are weapons by consequence and not intent, it would be Counterpoint's source blade. It is, in fact, more baton than blade. Batons just make decent blunt-force objects. 

Counterpoint loves nothing more than music. She composes scores of sweeping musical compositions and conducts fantastic concerts four times a year to showcase them to all who attend. Each concert is generally themed after one of the four seasons, but contain many kinds of elementally themed pieces. When not composing or conduction, Counterpoint teaches the wonders and joys of music and art.`,
    },
    {
        id: "Divewing",
        name: "Divewing",
        gameIndex: 6,
        dergID: 51959886,
        bio: `More blade than key, the Keyblade from which Divewing was pulled specialized in riding the edges between perceptions and realities. 

Divewing is a thrill seeker. Before most dragons would be waking to face the morning, Divewing would already be hurling herself from atop one of the sheer peeks dotting the outskirts of the lair, speeding towards the ground as quick as she could and waiting a long as possible before pulling out of the dive. However not all her time is dedicated to high-speed maneuvers; she holds down an honest job as a courier. `,
    },
    {
        id: "SweetDreams",
        name: "Sweet Dreams",
        gameIndex: 6,
        dergID: 67549415,
        bio: `Was Sweet Dreams' source blade really a Keyblade? Either way, she's a dragon now. I think…?

Sweet Dreams has an odd sort of power. Though her base form is that of a spiral dragon, her body can shift and change depending on the nature of those around her. She has a playfull heart, and though she doesn't say as much, she seems to actually have complete control over her shape and simply chooses to reflect others. Like the Ultima of dreams, Sweet Dreams can see into the dreams of other dragons, though she mostly uses that power to keep dreamers company. `,
    },
    {
        id: "Unbound",
        name: "Unbound",
        gameIndex: 6,
        dergID: 48688713,
        bio: `In the raw form of a Keyblade, Unbound burst with energy. It took fantastic effort for the great Earthshaker to pull it into the form of dragon. Now contained, the immeasurable energy finds its way out through Unbound's magical practices. 

Unbound spent his life mastering magic that manipulates space. He particularly specializes in portals and bubble realities. He generally uses these powers for study or to generate controlled environments for research or training. His ultimate goal is to try and search for the reality that holds the blades the members of the clan were pulled from. `,
    },
    {
        id: "EndOfPain",
        name: "End of Pain",
        gameIndex: 6,
        dergID: 51007316,
        bio: `The blade from which End of Pain was pulled holds an intense wish born from its wielder to protect and ease the sorrows of those they cherished. 

End of Pain is a massive, powerful dragon. His presence terrifies even those towards whom he bears no hostility. Skillful in physical and magical attacks and with incredible speed, he has been undefeated in the times he's chosen to participate in tournaments. Yet he does not enjoy combat for combat's sake and only chooses to use his powers to defend the lair and those who live within it. To be honest, he's not really that scary once you get to know him. `,
    },
    {
        id: "UltimaDDD",
        name: "Ultima",
        gameIndex: 6,
        dergID: 54393943,
        bio: `Keyblades forged from as precious of materials as these house within them phenomenal strength and magnificent ability. The dragons that rise from such blades are no exception. 

Ultima holds an amazing power over the dreams of other dragons. His approachable temperament often lends to others seeking his advice. The tranquil tones of his voice are calming and soporific for most, facilitating both de-escalations and as a means to wind down for dragons who are suffering from insomnia. Ultima also has one of the kindest smiles I've ever seen. `,
    },
    {
        id: "FlameLiberator",
        name: "Flame Liberator",
        gameIndex: 6,
        dergID: 57429678,
        bio: `Some Keyblades are less cooperative than others. This one would usually need to be coerced more than convinced before acting. But perhaps like-wielder-like-Keyblade, Flame Liberator is a softie on the inside. 

In addition to being remarkably close to Bond of Flame, Flame Liberator also took to his friends like they'd known each other all their lives. Usually Flame Liberator is considered to be fairly lazy, but it turns out that laziness is quite selective. The key is to find the correct motivation. `,
    },
    {
        id: "YoungXehanort",
        name: "Young Xehanort",
        gameIndex: 6,
        dergID: 72064670,
        bio: `It is a common trait among Keyblades to have affinities to particular elements. For No Name's blade, it is an affinity for time. He consequently has a rather unique perspective on reality. And is also really standoffish. 

Having apprenticed to The Gazing Eye has reinforced No Name's already haughty attitude. But that's not to say No Name is completely unlikable. He always appreciates a good puzzle or game to sharpen the mind and sees defeat as an opportunity to grow instead of failure. No Name tends to use intellect to resolve disputes rather than shows of force. `,
    },
    {
        id: "HerosOrigin",
        name: "Hero's Origin",
        gameIndex: 8,
        dergID: 48632981,
        bio: `There were several Keyblades that were forged by the concept of being the strongest and kindest. Hero's Origin is perhaps one of the most enthusiastic, but whose strength tends to get carried away. 

Moreso than his associates, Hero's Orgin preffers to preside over contests than participating in them. He'll offer many contests and feats of strength to those willing to prove themselves. Hero's Origin is a massive, burly snapper with impressive long-range lightning magic. In his time, he demonstrated himself to be a formidable warrior. These days, he lays around so much that most of his mass is not as muscular as it once was. `,
    },
    {
        id: "ShootingStar",
        name: "Shooting Star",
        gameIndex: 8,
        dergID: 56802860,
        bio: `It was odd that such a large Keyblade would be pulled into such a small dragon, but with time we found that behind the Fae body and reserved attitude lies a breadth of knowledge and reverence for the world and what surrounds it. 

Shooting Star loves nothing more than galavanding about during the night. She doesn't disrupt anyone of course; she's a shy, quiet dragon. She feels most at home beneath a starry sky. Besides mingling with nocturnal animals, she scours the heavens for shooting stars. Usually, she's accompanied by Star Seeker, and the two will talk about all that glitters in the nightly firmament. `,
    },
    {
        id: "FavoriteDeputy",
        name: "Favorite Deputy",
        gameIndex: 8,
        dergID: 47913889,
        bio: `The Keyblade from which Favorite Deputy was pulled represented a coming together of separate ideologies for a common purpose. But that's not to say there were ever any incongruities. 

Favorite Deputy is a strict upholder of the rules in the clan. When I say "strict," what I mean is that she does her best to ensure no one is causing problems for anyone else. She is vehement in her pursuit of troublemakers, but is much more lenient to towards the more menial infractions. So long as everyone is playing by the same rules, she'll let a little rule-bending slide. `,
    },
    {
        id: "EverAfter",
        name: "Ever After",
        gameIndex: 8,
        dergID: 52238998,
        bio: `The blade from which Ever After was pulled is a prime example of what happens when you bottle up a free spirit for too long. Apparently, you get an energetic, boundlessly curious Spiral. 

Spirals are already high-energy creatures. Ever After is famously so. She tends to find otherwise mundane objects or phenomenae utterly fascinating. Professionally Ever After works diligently as a healer, able to heal the most severe wounds with brilliant magic. And her exuberant nature can also help to brighten anyone's day. Ever After is able to find a perspective on the world that encourages you to broaden your own outlook. `,
    },
    {
        id: "HappyGear",
        name: "Happy Gear",
        gameIndex: 8,
        dergID: 42575407,
        bio: `When the great Earthshaker pulled this being into existence, it came out more beast than dragon. But within this monstrous form lies a genuinely kind heart. 

Happy Gear is true to his name—he's all smiles in almost all interactions. He'll crack a good joke (or a bad pun, depending on how you look at it) given the slightest opening. His head and crest are oddly soft which makes his face look unnerving or scary to some, though his usual toothy grin and cheerful demeanor helps put them at ease. Instead of scales Happy Gear's skin is covered by fine, silky fur that makes him prone to static elecrticity zapping him and things he touches. `,
    },
    {
        id: "CrystalSnow",
        name: "Crystal Snow",
        gameIndex: 8,
        dergID: 42083532,
        bio: `A blade of ice, ice, and more ice. Maybe that's why Crystal Snow is so cool-headed? 

There is no better a wielder of ice magic in the clan—and possibly all of Sornieth—than Crystal Snow. The facets of her fantastic sculptures of fractal ice catch and reflect light to create dazzling displays. Her more animalistic constructs can walk around just like their living counterparts. Towards the end of the season, around the time of the Crystaline Gala, Crystal Snow hosts a large celebration of the season at the top of one of the tallest peaks in the Shattered Plain. `,
    },
    {
        id: "HunnySpout",
        name: "Hunny Spout",
        gameIndex: 8,
        dergID: 55337950,
        bio: `The dragons pulled from Keyblades take on the names of the blades as well. But Hunny Spout insists his name is spelled "hunny." We're pretty sure he means "honey," but then that leaves the question of if the misspelling is by the dragon or the blade. 

Hunny Spout is small for a Guardian dragon. He loves insects and flowers, tending to his own garden and small orchard in a field near the clan. Hunny Spout doesn't talk much, but will always provide light conversation should you come visit his field. He is particularly fond of gifts of sweets—especially honey. `,
    },
    {
        id: "WheelOfFate",
        name: "Wheel of Fate",
        gameIndex: 8,
        dergID: 42750652,
        bio: `When first pulled into existence, Wheel of Fate was quite fidgety within the walls of the desert-bound lair. Only on the day he first set eyes on the ocean had he felt truly at home. 

Wheel of Fate spends almost no time in the clan's lair. With a small ship, he and Follow the Wind cruise and explore the vast Sea of a Thousand Currents—with or without permission of the occupants. Wheel of Fate acts as captain searching for lost treasures not with the intention to get rich per sé, but out of a love of the sea and the discovery of the lost unknown in its depths. `,
    },
    {
        id: "NanoGear",
        name: "Nano Gear",
        gameIndex: 8,
        dergID: 45466968,
        bio: `A big, burly blade became a big, burly dragon. Nano Gear has sworn an oath to heal rather than harm, though having a good defense never hurt anyone. 

Nano Gear is the clan's resident doctor. He cures people with as little magic as the situation allows, always saving his full strength for truly desperate scenarios. While he may use the lowest tech possible, he is far from thorough. And his bedside manner is absolutely charming. Nano Gear is also willing to lend an ear to any dragon who requests it and is skillfully capable of emotional support. `,
    },
    {
        id: "GrandChef",
        name: "Grand Chef",
        gameIndex: 8,
        dergID: 52877984,
        bio: `The bedazzling lights displayed by Grand Chef's source blade sparkle and shimmer just beneath the surface of his skin. 

Dragons come from all around Sornieth just to try the meals prepared by the Grand Chef. With incredible speed, Grand Chef can make exquisite food out of practically anything. No ingredient gets left unused, and all end up contributing in a positive way. He is also an equisite drink mixer, though there are some who have been initially off-put once they discovered that he mixes everything himself—within his own belly! `,
    },
    {
        id: "ClassicTone",
        name: "Classic Tone",
        gameIndex: 8,
        dergID: 61168882,
        bio: `Born from more of a contraption than a weapon, Classic Tone very quickly discovered he had a knack for tinkering. It's a shame he never makes anything useful. 

Classic Tone doesn't speak much, but he is very musically inclined. He and Monochrome are always off somewhere shirking their responsibilities together. Classic Tone is definitely the more energetic of the two and if he can't find fun he'll make it himself. He's been found fasioning elaborate obstacle courses. Usually just for himself, but he's more than happy to share them with whomever other bored, energetic dragons he sets his eyes on. `,
    },
    {
        id: "UltimaKH3",
        name: "Ultima",
        gameIndex: 8,
        dergID: 53935370,
        bio: `Keyblades forged from as precious of materials as these house within them phenomenal strength and magnificent ability. The dragons that rise from such blades are no exception. 

This Ultima's specialty is in conjuring scores of blades that utterly destroy his opponents. These shimmering blades only harm those he wishes and leave anything else completely unscathed. Ultima's power over light is used not only to create these blades and to move about, but he can gather and focus the light to unleash a massive burst of it all at once—a dazzling display for all who watch. `,
    },
    {
        id: "StarCluster",
        name: "Star Cluster",
        gameIndex: 8,
        dergID: 54538619,
        bio: `The source blade for Star Cluster has a rare trait among Keyblades—it is the permanent merging of two separate blades. Yet both of their personalities still manage to come through. 

Star Cluster maintains a small observatory on one of the nearby peaks. Besides charting the stars, he keeps his eyes open for anything out of the ordinary. Usually Star Seeker works at the observatory as an assistant. When not observing the heavens, Star Cluster creates paintings inspired by constellations. `,
    },
    {
        id: "Braveheart",
        name: "Braveheart",
        gameIndex: 8,
        dergID: 38642406,
        bio: `The source Keyblade for Braveheart is an exception among exceptions. Blunt and streamlined, it was forged for a singular purpose. A purpose both it and its wielder resolutely uphold. 

Braveheart is a strapping young fellow. He takes after Way to the Dawn in personality but is somewhat more level-headed. Braveheart will do anything to keep his two best friends—Kingdom Key and Destiny's Embrace—safe. His strategy tends to be protect from a distance such that they'd never have known they were in danger if Braveheart can get away with it. But his poker face isn't the best should they confront him directly. `,
    },
    {
        id: "MidnightBlue",
        name: "Midnight Blue",
        gameIndex: 8,
        dergID: 67442536,
        bio: `The rivalry between blades persist between the brothers Midnight Blue and Phantom Green. Their rivalry can sometimes be very bitter, but it usually amounts to good-natured competition. 

Nicknamed the "Console Twins," Midnight Blue and his brother aggressively compete with each other in almost every aspect. When they were younger and their differences were more distinct, it was frequently very interesting to see which of them performed better in a particular field. These days their desperation to outcompete the other has lead to a skill convergence. `,
    },
    {
        id: "PhantomGreen",
        name: "Phantom Green",
        gameIndex: 8,
        dergID: 67608298,
        bio: `The rivalry between blades persist between the brothers Phantom Green and Midnight Blue. Their rivalry can sometimes be very bitter, but it usually amounts to good-natured competition. 

Nicknamed the "Console Twins," Phantom Green and his brother aggressively compete with each other in almost every aspect. When they were younger and their differences were more distinct, it was frequently very interesting to see which of them performed better in a particular field. These days their desperation to outcompete the other has lead to a skill convergence. `,
    },
    {
        id: "DawnTillDusk",
        name: "Dawn Till Dusk",
        gameIndex: 8,
        dergID: 68990709,
        bio: `Sturdy, balanced, and a good length, the blade from which Dawn Till Dusk was pulled focused more on accompaniment rather than being front-and-center. Unfortunately, that means no one takes him too seriously as a dragon either. 

For nearly all hours of the day, Dawn Till Dusk works as a courier dragon. His usual cargo mostly consists of the kinds of odds and ends that dragons request on impulse. If not that, then it's typically snack food. These deliveries don't earn him much prestige, they still earn him plenty of thanks. `,
    },
    {
        id: "ElementEncoder",
        name: "Element Encoder",
        gameIndex: 8,
        dergID: 68369368,
        bio: `A boastful blade, Element Encoder's source holds great pride in its abilities. However, like most tools, the full unleashing of its abilities boil down to how well the wielder can employ them rather than raw capability alone. 

Element Encoder has a gift to recount vivid stories about fantastical places and events. To supplement his tales, Element Encoder can conjure highly intricate and detailed dioramas or solid illusions. Professionally, folks outsource to him for work on architectural projects or event planning. He's made quite a name for himself aiding designers in visualizing and refining their ideas.  `,
    },
    {
        id: "AdventRed",
        name: "Advent Red",
        gameIndex: 8,
        dergID: 75174766,
        bio: `Born at the dawning of a new saga, the blade from which Advent Red was pulled is the culmination of the promise of potential. The realization of that which came before leading to that which is yet to unfold.

Advent Red is heterochromatic—one eye piercing blue and the other intense red. He is tall and limber with an intimidating gate and a quiet voice that would cause any dragon to hesitate before questioning him. Fortunately, he's actually quite a nice fellow. Not the fastest to make friends, but not everyone is a people person. `,
    },
    {
        id: "Starlight",
        name: "Starlight",
        gameIndex: 7,
        dergID: 37894616,
        bio: `Not many Keyblades see as much of the wide world as this one does. The dragon that results from such a well-traveled blade is mellow and wise with a quiet, helpful disposition. 

Starlight is one of the most adventuresome of the dragons of the clan. They're a frequent choice for investigating strange occurrences or managing scuffles with beastclans. But they always make sure to take time and enjoy watching the sun rise with their pet cat Chirithi before going out on any missions. Starlight doesn't say much, but is a great listener should you need an ear. `,
    },
    {
        id: "MoogleOGlory",
        name: "Moogle O' Glory",
        gameIndex: 7,
        dergID: 54273226,
        bio: `Moogle O' Glory's source blade was atypical in that it was commissioned. It didn't follow the voice of its commisioner once forged, but the dragon born from it still took on their shrewdness. 

Moogle O' Glory seeks nothing more than filling his own personal treasure hoard. He works to procure odds, ends, and essentials either from scavenging or bartering to re-sell. He claims he doesn't mark up any of his goods, but he's such a specialist seller it's hard to gauge. Regardless, he's one of the richest dragons in the entire clan, and that wealth doesn't come from the fairgrounds. `,
    },
    {
        id: "BadGuyBreaker",
        name: "Bad Guy Breaker",
        gameIndex: 7,
        dergID: 59047654,
        bio: `Having inherited an attitude of fixing and a penchant for destruction, Bad Guy Breaker manages to find a net-positive balance between the two. 

If anyone needs something fixed or broken down, look no further than Bad Guy Breaker! Armed with a magic wrench, he is capable of repairing lairs, mending machines, or fixing just about anything that can be broken. Of course, his burly build lends itself to demolishing anything that needs demolishing. Bad Guy Breaker, consequently, spends most of his time and energy in the construction business. `,
    },
    {
        id: "Angius",
        name: "Angius",
        gameIndex: 7,
        dergID: 74962088,
        bio: `Decended from the forebearer of all Keyblades, there were five who were given the role of foreteller and the responsibility to oversee the world to come. 

Angius, with the shape of a snake, is very shy but thoughtful. She will tend to keep her opinions and observations to herself though she keeps very good track of everything that goes on to and about the lair. It's very difficult to keep a secret when Angius is around. But don't worry—she's not the type to give up the secrets she learns without good reason. `,
    },
    {
        id: "Leopardus",
        name: "Leopardus",
        gameIndex: 7,
        dergID: 51886167,
        bio: `Decended from the forebearer of all Keyblades, there were five who were given the role of foreteller and the responsibility to oversee the world to come. 

Leopardus, with the shape of a cat, prefers working on his own to cooperating with a group. While far from lazy, his aloof attitude tends to give off the same vibe. Yet he tends to his duties with remarkable dedication. However, Leopardus is one of the last dragons you'll find asking someone else for help. If you do manage to catch him asking for a hand in something, you'll know he's truly stumped. `,
    },
    {
        id: "Unicornis",
        name: "Unicornis",
        gameIndex: 7,
        dergID: 53728504,
        bio: `Decended from the forebearer of all Keyblades, there were five who were given the role of foreteller and the responsibility to oversee the world to come. 

Unicornis, with the shape of a unicorn, has found himself in charge of the other dragons of his cohort whether he likes it or not. He's generally very affable, getting along with most other dragons he interacts with. The notable exception to this is Ursus, who likes Unicornis being in charge about as much as Unicornis himself does. But being a natural leader, Unicornis manages his tasks and his underlings well regardless of their attitudes. `,
    },
    {
        id: "Ursus",
        name: "Ursus",
        gameIndex: 7,
        dergID: 70984038,
        bio: `Decended from the forebearer of all Keyblades, there were five who were given the role of foreteller and the responsibility to oversee the world to come. 

Ursus, with the shape of a bear, holds very fast to his beliefs. It's very difficult to change his mind without overwhelming evidence. Usually Ursus operates as a trainer for dragons sharpening their teeth in the art of combat. His usual practice is to take dragons out in the field to fight the beastclans and leave them to their own devices. To Ursus, victory is proof of strength, and strength is proof of correctness. `,
    },
    {
        id: "Vulpus",
        name: "Vulpus",
        gameIndex: 7,
        dergID: 71712439,
        bio: `Decended from the forebearer of all Keyblades, there were five who were given the role of foreteller and the responsibility to oversee the world to come. 

Vulpus, with the shape of a fox, is very easy to talk to. She is a advocate for curiosity and questioning what most people would take for granted. The philosophical conversations with her I've observed have always gone in very interesting directions. Of her associates, she's particularly close to Leopardus and Starlight. The latter of whom she's careful to foster their optimistic attitude while also giving them proper training. `,
    },
    {
        id: "KEYBLADE",
        name: "Keyblade",
        gameIndex: 7,
        dergID: 71731909,
        bio: `The source blade for this dragon is no doubt the source of her erudite qualities. The blade accompanied many on their way to mastery of the Keyblade for the first—and often most harrowing—leg of their journeys. 

        A studious dragon, [Keyblade] spends her days studying to become a master on par with Master's Defender. You'll find she makes a great research partner and sparing companion. [Keyblade] is never shy to speak her opinion and though discussing her reasoning one will discover just how comprehensive her though process is. `,
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
        species: "Fae",
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
            "Sparkle"
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
        species: "Snapper",
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
            "Sparkle"
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
            "Sparkle"
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
            "Ground",
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
            "Sparkle"
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
            "Fissure",
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
    62304383: {
        name: "TotalEclipse",
        dragonID: 62304383,
        species: "Snapper",
        silhouette: "Female",
        element: "Ice",
        sceneID: 34837,
        familiarID: 34723,
        colors: [
            "Eldritch",
            "Tan",
            "Marigold"
        ],
        genes: [
            "Ripple",
            "Morph",
            "Runes"
        ]
    },
    67442536: {
        name: "MidnightBlue",
        dragonID: 67442536,
        species: "Fae",
        silhouette: "Male",
        element: "Water",
        sceneID: 38411,
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
        sceneID: 38411,
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
    74110180: {
        name: "GlimpseOfDark",
        dragonID: 74110180,
        species: "Obelisk",
        silhouette: "Female",
        element: "Fire",
        sceneID: 34837,
        familiarID: 8319,
        colors: [
            "Obsidian",
            "Cantaloupe",
            "White"
        ],
        genes: [
            "Basic",
            "Trail",
            "Underbelly"
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
    75504843: {
        name: "SilentDirge",
        dragonID: 75504843,
        species: "Obelisk",
        silhouette: "Female",
        element: "Water",
        sceneID: 38411,
        familiarID: 34798,
        colors: [
            "Royal",
            "Maize",
            "Pearl"
        ],
        genes: [
            "Fade",
            "Blend",
            "Contour"
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
    76378955: {
        name: "MaverickFlare",
        dragonID: 76378955,
        species: "Mirror",
        silhouette: "Male",
        element: "Fire",
        sceneID: 35702,
        familiarID: 31188,
        colors: [
            "Obsidian",
            "Carrot",
            "Black"
        ],
        genes: [
            "Ripple",
            "Shimmer",
            "Smoke"
        ]
    },
    76638833: {
        name: "TwilightBlaze",
        dragonID: 76638833,
        species: "Pearlcatcher",
        silhouette: "Male",
        element: "Plague",
        sceneID: 35702,
        familiarID: 34790,
        colors: [
            "Obsidian",
            "Strawberry",
            "Obsidian"
        ],
        genes: [
            "Lionfish",
            "Alloy",
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
