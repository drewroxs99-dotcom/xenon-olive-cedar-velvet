import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, n as VolumeX, o as Pause, r as Volume2, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Di0ofPOf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PIGMENTS = [
	{
		id: "ai",
		name: "Indigo",
		hex: "#243e66"
	},
	{
		id: "ai-deep",
		name: "Deep indigo",
		hex: "#1a2c48"
	},
	{
		id: "shu",
		name: "Vermilion",
		hex: "#8f3a32"
	},
	{
		id: "beni",
		name: "Safflower",
		hex: "#a34b55"
	},
	{
		id: "ochre",
		name: "Yellow ochre",
		hex: "#a68448"
	},
	{
		id: "moss",
		name: "Malachite",
		hex: "#3e5c45"
	},
	{
		id: "sumi",
		name: "Sumi",
		hex: "#2a2420"
	},
	{
		id: "gofun",
		name: "Shell white",
		hex: "#e4d8c4"
	},
	{
		id: "murasaki",
		name: "Murasaki",
		hex: "#5c3d55"
	},
	{
		id: "persimmon",
		name: "Persimmon",
		hex: "#7a4634"
	}
];
var PATTERNS = [
	{
		id: "solid",
		name: "Plain"
	},
	{
		id: "seigaiha",
		name: "Seigaiha"
	},
	{
		id: "asanoha",
		name: "Asanoha"
	},
	{
		id: "shima",
		name: "Stripes"
	},
	{
		id: "kikko",
		name: "Kikkō"
	},
	{
		id: "shippo",
		name: "Shippō"
	},
	{
		id: "kanoko",
		name: "Kanoko"
	},
	{
		id: "yagasuri",
		name: "Yagasuri"
	}
];
function pigmentHex(id) {
	return PIGMENTS.find((p) => p.id === id)?.hex ?? "#243e66";
}
var THEMES = [
	{
		id: "night",
		name: "Indigo night",
		wall: "#dccdb4",
		tatami: "#c6b27a",
		wood: "#6a4630",
		woodDeep: "#3e2a1e",
		exterior: "#1a2744",
		moon: "#efe6d2",
		lantern: "#e6b15a",
		paper: "#e7dcc6",
		gold: "#c4a15a"
	},
	{
		id: "vermilion",
		name: "Vermilion hour",
		wall: "#e4d0c0",
		tatami: "#cbb48a",
		wood: "#7a4634",
		woodDeep: "#4a2c22",
		exterior: "#3a2438",
		moon: "#f3e0d2",
		lantern: "#f0c07a",
		paper: "#ead8c8",
		gold: "#c88848"
	},
	{
		id: "moss",
		name: "Moss rain",
		wall: "#d5d0bc",
		tatami: "#b7b48a",
		wood: "#5c5340",
		woodDeep: "#2e3328",
		exterior: "#1e3330",
		moon: "#e4e6d4",
		lantern: "#d7b56a",
		paper: "#e3e0d0",
		gold: "#a89858"
	},
	{
		id: "dawn",
		name: "Charcoal dawn",
		wall: "#eadfce",
		tatami: "#d0c096",
		wood: "#8a6244",
		woodDeep: "#4e3828",
		exterior: "#c4846a",
		moon: "#f7efe4",
		lantern: "#f2d2a4",
		paper: "#f0e6d4",
		gold: "#d0a868"
	}
];
function themeById(id) {
	return THEMES.find((t) => t.id === id) ?? THEMES[0];
}
var TRAIT_KEYS = [
	"sociability",
	"solitude",
	"calm",
	"playfulness",
	"melancholy",
	"restlessness",
	"curiosity",
	"affection",
	"drink",
	"smoke"
];
function traits(partial) {
	const base = {
		sociability: .4,
		solitude: .4,
		calm: .5,
		playfulness: .3,
		melancholy: .3,
		restlessness: .3,
		curiosity: .4,
		affection: .3,
		drink: .3,
		smoke: .1
	};
	for (const k of TRAIT_KEYS) if (typeof partial[k] === "number") base[k] = clamp01(partial[k]);
	return base;
}
function clamp01(n) {
	return Math.min(1, Math.max(0, n));
}
var TRAIT_LABELS = [
	{
		key: "sociability",
		label: "Sociability",
		hint: "Seeks company"
	},
	{
		key: "solitude",
		label: "Solitude",
		hint: "Keeps to a cushion"
	},
	{
		key: "calm",
		label: "Calm",
		hint: "Longer quiet"
	},
	{
		key: "playfulness",
		label: "Play",
		hint: "Changes robes, gestures"
	},
	{
		key: "melancholy",
		label: "Melancholy",
		hint: "Watches the scroll"
	},
	{
		key: "restlessness",
		label: "Restlessness",
		hint: "Crosses the room"
	},
	{
		key: "curiosity",
		label: "Curiosity",
		hint: "Studies objects"
	},
	{
		key: "affection",
		label: "Warmth",
		hint: "Sits nearer, offers the cup"
	},
	{
		key: "drink",
		label: "Drink",
		hint: "Returns to the tokkuri"
	},
	{
		key: "smoke",
		label: "Smoke",
		hint: "Takes up the kiseru"
	}
];
function woman(partial) {
	return {
		present: true,
		...partial,
		gender: "woman",
		traits: traits(partial.traits)
	};
}
function defaultChars() {
	return [
		woman({
			id: "komachi",
			name: "Komachi",
			role: "senior",
			pigment: "ai",
			pattern: "seigaiha",
			lining: "shu",
			obi: "ochre",
			hasOuter: true,
			wearingOuter: true,
			outerPigment: "ai-deep",
			outerPattern: "shippo",
			hair: "shimada",
			ornament: "pin",
			brow: "hikimayu",
			lip: .72,
			blush: .18,
			beautyMark: false,
			stature: 1.02,
			frontObi: true,
			fan: false,
			drinkStyle: "sentimental",
			traits: {
				sociability: .28,
				solitude: .78,
				calm: .84,
				playfulness: .22,
				melancholy: .62,
				restlessness: .18,
				curiosity: .7,
				affection: .34,
				drink: .32,
				smoke: .05
			}
		}),
		woman({
			id: "hanae",
			name: "Hanae",
			role: "oiran",
			pigment: "shu",
			pattern: "asanoha",
			lining: "beni",
			obi: "ochre",
			hasOuter: true,
			wearingOuter: false,
			outerPigment: "murasaki",
			outerPattern: "seigaiha",
			hair: "shimada",
			ornament: "flower",
			brow: "hikimayu",
			lip: .86,
			blush: .28,
			beautyMark: true,
			stature: 1,
			frontObi: true,
			fan: true,
			drinkStyle: "talkative",
			traits: {
				sociability: .86,
				solitude: .16,
				calm: .34,
				playfulness: .78,
				melancholy: .12,
				restlessness: .64,
				curiosity: .48,
				affection: .8,
				drink: .55,
				smoke: .08
			}
		}),
		woman({
			id: "ofuku",
			name: "Ofuku",
			role: "attendant",
			pigment: "moss",
			pattern: "shima",
			lining: "gofun",
			obi: "sumi",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "moss",
			outerPattern: "solid",
			hair: "marumage",
			ornament: "comb",
			brow: "natural",
			lip: .42,
			blush: .1,
			beautyMark: false,
			stature: .94,
			frontObi: false,
			fan: false,
			drinkStyle: "sleepy",
			traits: {
				sociability: .48,
				solitude: .3,
				calm: .72,
				playfulness: .2,
				melancholy: .22,
				restlessness: .4,
				curiosity: .36,
				affection: .4,
				drink: .12,
				smoke: .02
			}
		}),
		{
			id: "arai",
			name: "Arai",
			role: "guest",
			gender: "man",
			pigment: "persimmon",
			pattern: "yagasuri",
			lining: "gofun",
			obi: "ochre",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "sumi",
			outerPattern: "solid",
			hair: "mage",
			ornament: "none",
			brow: "natural",
			lip: .22,
			blush: .06,
			beautyMark: false,
			stature: 1.06,
			frontObi: false,
			fan: false,
			drinkStyle: "talkative",
			present: true,
			traits: traits({
				sociability: .42,
				solitude: .55,
				calm: .4,
				playfulness: .18,
				melancholy: .7,
				restlessness: .28,
				curiosity: .34,
				affection: .36,
				drink: .74,
				smoke: .62
			})
		},
		woman({
			id: "ume",
			name: "Ume",
			role: "guest",
			pigment: "ochre",
			pattern: "asanoha",
			lining: "shu",
			obi: "persimmon",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "ochre",
			outerPattern: "solid",
			hair: "tsubushi",
			ornament: "comb",
			brow: "natural",
			lip: .45,
			blush: .12,
			beautyMark: true,
			stature: .96,
			frontObi: true,
			fan: false,
			drinkStyle: "talkative",
			traits: {
				sociability: .72,
				solitude: .22,
				calm: .48,
				playfulness: .55,
				melancholy: .18,
				restlessness: .46,
				curiosity: .64,
				affection: .4,
				drink: .58,
				smoke: .08
			}
		}),
		{
			id: "kichi",
			name: "Kichi",
			role: "guest",
			gender: "man",
			pigment: "sumi",
			pattern: "solid",
			lining: "persimmon",
			obi: "persimmon",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "persimmon",
			outerPattern: "solid",
			hair: "mage",
			ornament: "none",
			brow: "natural",
			lip: .16,
			blush: .04,
			beautyMark: false,
			stature: 1.04,
			frontObi: false,
			fan: false,
			drinkStyle: "sleepy",
			present: true,
			traits: traits({
				sociability: .36,
				solitude: .6,
				calm: .74,
				playfulness: .16,
				melancholy: .4,
				restlessness: .22,
				curiosity: .3,
				affection: .28,
				drink: .4,
				smoke: .7
			})
		},
		woman({
			id: "otsu",
			name: "Otsu",
			role: "attendant",
			pigment: "moss",
			pattern: "shima",
			lining: "gofun",
			obi: "sumi",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "moss",
			outerPattern: "solid",
			hair: "marumage",
			ornament: "none",
			brow: "natural",
			lip: .28,
			blush: .08,
			beautyMark: false,
			stature: .94,
			frontObi: true,
			fan: false,
			drinkStyle: "sleepy",
			traits: {
				sociability: .4,
				solitude: .5,
				calm: .8,
				playfulness: .12,
				melancholy: .3,
				restlessness: .2,
				curiosity: .35,
				affection: .45,
				drink: .22,
				smoke: .04
			}
		}),
		{
			id: "jiro",
			name: "Jiro",
			role: "guest",
			gender: "man",
			pigment: "ai",
			pattern: "solid",
			lining: "gofun",
			obi: "sumi",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "ai",
			outerPattern: "solid",
			hair: "mage",
			ornament: "none",
			brow: "natural",
			lip: .12,
			blush: .04,
			beautyMark: false,
			stature: 1,
			frontObi: false,
			fan: false,
			drinkStyle: "talkative",
			present: true,
			traits: traits({
				sociability: .7,
				solitude: .2,
				calm: .35,
				playfulness: .48,
				melancholy: .12,
				restlessness: .62,
				curiosity: .7,
				affection: .3,
				drink: .5,
				smoke: .2
			})
		},
		woman({
			id: "saku",
			name: "Saku",
			role: "guest",
			pigment: "murasaki",
			pattern: "shippo",
			lining: "beni",
			obi: "ochre",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "murasaki",
			outerPattern: "solid",
			hair: "shimada",
			ornament: "pin",
			brow: "hikimayu",
			lip: .6,
			blush: .2,
			beautyMark: false,
			stature: .98,
			frontObi: true,
			fan: true,
			drinkStyle: "sentimental",
			traits: {
				sociability: .66,
				solitude: .24,
				calm: .4,
				playfulness: .58,
				melancholy: .2,
				restlessness: .44,
				curiosity: .5,
				affection: .52,
				drink: .36,
				smoke: .1
			}
		}),
		{
			id: "hei",
			name: "Hei",
			role: "guest",
			gender: "man",
			pigment: "ochre",
			pattern: "solid",
			lining: "sumi",
			obi: "sumi",
			hasOuter: false,
			wearingOuter: false,
			outerPigment: "sumi",
			outerPattern: "solid",
			hair: "mage",
			ornament: "none",
			brow: "natural",
			lip: .1,
			blush: .02,
			beautyMark: false,
			stature: 1.05,
			frontObi: false,
			fan: false,
			drinkStyle: "cross",
			present: true,
			traits: traits({
				sociability: .3,
				solitude: .66,
				calm: .5,
				playfulness: .1,
				melancholy: .48,
				restlessness: .24,
				curiosity: .28,
				affection: .2,
				drink: .55,
				smoke: .48
			})
		}
	];
}
function defaultEnv() {
	return {
		hour: .62,
		paperAge: .42,
		inkWeight: .7,
		misregister: .45,
		lantern: .72,
		activity: .58,
		speed: 1,
		smoke: true,
		petals: true,
		theme: "night",
		screen: "solid",
		wood: "persimmon",
		glaze: "ai",
		lanternPaper: "ochre",
		animals: true,
		zoom: 1
	};
}
function defaultSettings() {
	return {
		env: defaultEnv(),
		chars: defaultChars(),
		seed: 7
	};
}
var PATTERN_IDS = new Set(PATTERNS.map((p) => p.id));
var THEME_IDS = new Set(THEMES.map((t) => t.id));
function normalizeSettings(raw) {
	const base = defaultSettings();
	if (!raw || typeof raw !== "object") return base;
	const r = raw;
	if (r.env && typeof r.env === "object") {
		const e = r.env;
		base.env = {
			...base.env,
			...e,
			hour: clamp01(num(e.hour, base.env.hour)),
			paperAge: clamp01(num(e.paperAge, base.env.paperAge)),
			inkWeight: clamp01(num(e.inkWeight, base.env.inkWeight)),
			misregister: clamp01(num(e.misregister, base.env.misregister)),
			lantern: clamp01(num(e.lantern, base.env.lantern)),
			activity: clamp01(num(e.activity, base.env.activity)),
			speed: Math.min(4, Math.max(.25, num(e.speed, base.env.speed))),
			smoke: bool(e.smoke, base.env.smoke),
			petals: bool(e.petals, base.env.petals),
			theme: THEME_IDS.has(e.theme) ? e.theme : base.env.theme,
			screen: PATTERN_IDS.has(e.screen) ? e.screen : base.env.screen,
			wood: pigmentId(e.wood, base.env.wood),
			glaze: pigmentId(e.glaze, base.env.glaze),
			lanternPaper: pigmentId(e.lanternPaper, base.env.lanternPaper),
			animals: bool(e.animals, base.env.animals),
			zoom: Math.min(2.4, Math.max(.65, num(e.zoom, base.env.zoom)))
		};
	}
	if (Array.isArray(r.chars)) base.chars = base.chars.map((def) => {
		const found = r.chars?.find((c) => c && typeof c === "object" && c.id === def.id);
		if (!found) return def;
		return {
			...def,
			...found,
			id: def.id,
			name: def.name,
			role: def.role,
			gender: def.gender,
			hasOuter: def.hasOuter,
			fan: def.fan,
			frontObi: def.frontObi,
			pigment: typeof found.pigment === "string" ? found.pigment : def.pigment,
			pattern: PATTERN_IDS.has(found.pattern) ? found.pattern : def.pattern,
			outerPattern: PATTERN_IDS.has(found.outerPattern) ? found.outerPattern : def.outerPattern,
			hair: found.hair ?? def.hair,
			traits: traits({
				...def.traits,
				...found.traits ?? {}
			}),
			lip: clamp01(num(found.lip, def.lip)),
			blush: clamp01(num(found.blush, def.blush)),
			stature: Math.min(1.12, Math.max(.88, num(found.stature, def.stature))),
			present: bool(found.present, def.present)
		};
	});
	if (typeof r.seed === "number" && Number.isFinite(r.seed)) base.seed = r.seed >>> 0;
	return base;
}
function pigmentId(v, fallback) {
	return typeof v === "string" && PIGMENTS.some((p) => p.id === v) ? v : fallback;
}
function num(v, fallback) {
	return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}
function bool(v, fallback) {
	return typeof v === "boolean" ? v : fallback;
}
function hourName(hour) {
	if (hour < .25) return "Dusk";
	if (hour < .5) return "Lamp-lighting";
	if (hour < .75) return "The quiet hour";
	return "Deep night";
}
function roleLabel(role) {
	switch (role) {
		case "senior": return "Senior of the house";
		case "oiran": return "Oiran";
		case "attendant": return "Attendant";
		case "guest": return "Guest";
	}
}
/** Feet on the front lip of each painted cushion. */
var SEATS = [
	{
		id: "left",
		x: 516,
		y: 814
	},
	{
		id: "right",
		x: 1090,
		y: 814
	},
	{
		id: "center",
		x: 800,
		y: 846
	},
	{
		id: "alcove",
		x: 365,
		y: 748
	},
	{
		id: "front",
		x: 1246,
		y: 746
	},
	{
		id: "screen",
		x: 1468,
		y: 824
	}
];
/** Measured from the vermilion weave on the hall print. */
var CUSHIONS = [
	{
		id: "sideLeft",
		x: 365,
		y: 728,
		rx: 52,
		ry: 20
	},
	{
		id: "frontLeft",
		x: 516,
		y: 792,
		rx: 78,
		ry: 24
	},
	{
		id: "frontRight",
		x: 1090,
		y: 792,
		rx: 74,
		ry: 24
	},
	{
		id: "sideRight",
		x: 1246,
		y: 726,
		rx: 36,
		ry: 16
	}
];
/**
* y is the lacquer contact: the foot of the pot or cup.
* The black tabletops sit near y=700. y=760 is the tatami in front of the legs.
*/
var TEA_TABLES = [{
	id: "left",
	pot: {
		x: 538,
		y: 708
	},
	cups: [{
		id: "l1",
		x: 466,
		y: 714
	}, {
		id: "l2",
		x: 612,
		y: 712
	}],
	sweet: {
		x: 574,
		y: 716
	},
	approach: {
		x: 292,
		y: 828,
		face: 1
	},
	seat: "left"
}, {
	id: "right",
	pot: {
		x: 1082,
		y: 700
	},
	cups: [{
		id: "r1",
		x: 1e3,
		y: 706
	}, {
		id: "r2",
		x: 1168,
		y: 704
	}],
	sweet: {
		x: 1132,
		y: 708
	},
	approach: {
		x: 1364,
		y: 828,
		face: -1
	},
	seat: "right"
}];
/** Tatami beside the screen, clear of both tables. */
var PIPE_TRAY = {
	x: 1388,
	y: 816,
	face: -1
};
var LOOKS = [
	{
		id: "pine",
		x: 200,
		y: 824,
		face: -1,
		label: "the pine"
	},
	{
		id: "scroll",
		x: 824,
		y: 840,
		face: 1,
		label: "the scroll"
	},
	{
		id: "hearth",
		x: 804,
		y: 842,
		face: 1,
		label: "the brazier"
	},
	{
		id: "screen",
		x: 1436,
		y: 836,
		face: -1,
		label: "the screen"
	},
	{
		id: "lantern",
		x: 292,
		y: 808,
		face: 1,
		label: "the floor lantern"
	},
	{
		id: "flowers",
		x: 756,
		y: 846,
		face: -1,
		label: "the flowers"
	}
];
var TABLE = TEA_TABLES[0].approach;
var STAND = {
	x: 214,
	y: 736
};
var TRAY = PIPE_TRAY;
LOOKS[0];
LOOKS[1];
var BRAZIER = {
	x: 828,
	y: 636
};
LOOKS[2];
var BOUNDS = {
	x0: 160,
	y0: 640,
	x1: 1500,
	y1: 858
};
/** Lacquer tops. Feet stay on the tatami in front or beside, never on the top. */
var SOLIDS = [{
	x0: 390,
	y0: 648,
	x1: 710,
	y1: 804
}, {
	x0: 940,
	y0: 636,
	x1: 1224,
	y1: 802
}];
var LINES = [
	"The paper drinks the lamplight.",
	"The corridor is holding its breath.",
	"Sit. The mat is still warm.",
	"One cup, and the room grows larger.",
	"The pine has not moved all evening.",
	"I will not ask what you are thinking.",
	"Even the smoke is trying to be polite.",
	"Stay until the lantern decides.",
	"Vermilion suits the hour.",
	"That scroll has been patient."
];
var SENTIMENTAL = [
	"I dreamed the scroll blinked.",
	"Leave the outer robe. The room is kind.",
	"The rain is practicing on the roof."
];
var CROSS = [
	"Not another toast.",
	"The mat is crowded.",
	"I would rather watch the pine."
];
function mulberry32(seed) {
	let a = seed >>> 0;
	return function rand() {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function makeChar(id, x, y, facing, extra) {
	return {
		id,
		x,
		y,
		facing,
		sit: 0,
		raise: 0,
		pose: "stand",
		walkPhase: 0,
		queue: [],
		taskTime: 0,
		stuck: 0,
		tox: 0,
		hold: "none",
		say: null,
		seat: null,
		reserved: null,
		last: "",
		cool: {},
		sipped: false,
		...extra
	};
}
function createWorld(settings) {
	const rng = mulberry32(settings.seed || 1);
	const left = TEA_TABLES[0];
	const komachi = makeChar("komachi", SEATS[0].x, SEATS[0].y, 1, {
		sit: 1,
		pose: "sit",
		seat: "left",
		reserved: "left",
		queue: [{
			kind: "wait",
			seconds: 2.4
		}]
	});
	const hanae = makeChar("hanae", 900, 840, 1, {
		hold: "fan",
		pose: "walk",
		walkPhase: .35,
		queue: [
			{
				kind: "goto",
				x: LOOKS[2].x,
				y: LOOKS[2].y
			},
			{
				kind: "face",
				dir: LOOKS[2].face
			},
			{
				kind: "pose",
				pose: "gesture",
				seconds: 2.8
			}
		]
	});
	const ofuku = makeChar("ofuku", 220, 800, 1, {
		pose: "walk",
		walkPhase: .1,
		reserved: "center",
		queue: [
			{
				kind: "goto",
				x: left.approach.x,
				y: left.approach.y
			},
			{
				kind: "face",
				dir: left.approach.face
			},
			{
				kind: "pose",
				pose: "reach",
				seconds: .7
			},
			{ kind: "takeCup" },
			{
				kind: "goto",
				x: SEATS[2].x,
				y: SEATS[2].y
			},
			{
				kind: "face",
				dir: -1
			},
			{
				kind: "sit",
				seat: "center"
			},
			{ kind: "drink" },
			{
				kind: "wait",
				seconds: 2.2
			}
		]
	});
	const arai = makeChar("arai", SEATS[1].x, SEATS[1].y, -1, {
		sit: 1,
		pose: "sit",
		seat: "right",
		reserved: "right",
		hold: "cup",
		tox: .18,
		queue: [
			{
				kind: "wait",
				seconds: .6
			},
			{ kind: "drink" },
			{
				kind: "wait",
				seconds: 1.8
			}
		]
	});
	const kichi = makeChar("kichi", 240, 820, 1, {
		pose: "walk",
		walkPhase: .55,
		queue: [
			{
				kind: "goto",
				x: LOOKS[4].x,
				y: LOOKS[4].y
			},
			{
				kind: "face",
				dir: LOOKS[4].face
			},
			{
				kind: "pose",
				pose: "reach",
				seconds: 1.6
			},
			{
				kind: "wait",
				seconds: 1.8
			}
		]
	});
	return {
		time: 0,
		rng,
		chars: [
			komachi,
			hanae,
			ofuku,
			arai,
			makeChar("ume", 760, 848, 1, {
				pose: "walk",
				walkPhase: .2,
				queue: [
					{
						kind: "goto",
						x: LOOKS[1].x,
						y: LOOKS[1].y
					},
					{
						kind: "face",
						dir: LOOKS[1].face
					},
					{
						kind: "pose",
						pose: "gesture",
						seconds: 2.4
					}
				]
			}),
			kichi,
			makeChar("otsu", 188, 830, 1, {
				pose: "walk",
				queue: [
					{
						kind: "goto",
						x: SEATS[3].x,
						y: SEATS[3].y
					},
					{
						kind: "face",
						dir: 1
					},
					{
						kind: "sit",
						seat: "alcove"
					},
					{
						kind: "wait",
						seconds: 3
					}
				]
			}),
			makeChar("jiro", 980, 848, -1, {
				pose: "walk",
				queue: [
					{
						kind: "goto",
						x: LOOKS[5].x,
						y: LOOKS[5].y
					},
					{
						kind: "face",
						dir: LOOKS[5].face
					},
					{
						kind: "pose",
						pose: "gesture",
						seconds: 2.2
					}
				]
			}),
			makeChar("saku", 1500, 836, -1, {
				hold: "fan",
				pose: "walk",
				queue: [
					{
						kind: "goto",
						x: LOOKS[3].x,
						y: LOOKS[3].y
					},
					{
						kind: "face",
						dir: LOOKS[3].face
					},
					{
						kind: "pose",
						pose: "gesture",
						seconds: 2.6
					}
				]
			}),
			makeChar("hei", 1180, 846, 1, {
				pose: "walk",
				reserved: "screen",
				queue: [
					{
						kind: "goto",
						x: PIPE_TRAY.x - 46,
						y: PIPE_TRAY.y
					},
					{
						kind: "face",
						dir: PIPE_TRAY.face
					},
					{
						kind: "pose",
						pose: "reach",
						seconds: .6
					},
					{ kind: "takePipe" },
					{
						kind: "goto",
						x: SEATS[5].x,
						y: SEATS[5].y
					},
					{
						kind: "face",
						dir: -1
					},
					{
						kind: "sit",
						seat: "screen"
					},
					{ kind: "smoke" }
				]
			})
		],
		pets: [makePet("mikan", "cat", 700, 850, 1), makePet("shiro", "dog", 210, 846, -1)],
		cups: TEA_TABLES.flatMap((table) => table.cups.map((cup) => ({
			id: cup.id,
			x: cup.x,
			y: cup.y,
			holder: cup.id === "r1" ? "arai" : null
		}))),
		pipeHolder: null,
		log: [{
			text: "The lantern was already lit.",
			time: 0
		}],
		inject: [],
		motes: [],
		look: {}
	};
}
function makePet(id, kind, x, y, facing) {
	return {
		id,
		kind,
		x,
		y,
		facing,
		pose: "stand",
		phase: 0,
		wait: 1.2,
		tx: x,
		ty: y
	};
}
function here(settings, id) {
	return settings.chars.find((c) => c.id === id)?.present ?? false;
}
function cfgOf(settings, id) {
	const found = settings.chars.find((c) => c.id === id);
	if (!found) throw new Error(id);
	return found;
}
function nameOf(settings, id) {
	return cfgOf(settings, id).name;
}
function dist(a, b) {
	return Math.hypot(a.x - b.x, (a.y - b.y) * 1.15);
}
function pushLog(world, text) {
	world.log.unshift({
		text,
		time: world.time
	});
	if (world.log.length > 16) world.log.pop();
}
function finish(ch) {
	ch.queue.shift();
	ch.taskTime = 0;
	ch.sipped = false;
}
function releaseReserve(ch) {
	ch.reserved = ch.seat;
}
function seatTaken(world, id, self, settings) {
	return world.chars.some((o) => o.id !== self && here(settings, o.id) && (o.seat === id || o.reserved === id));
}
function freeSeat(world, settings, self, prefer) {
	const ids = SEATS.map((s) => s.id);
	const order = prefer ? [prefer, ...ids.filter((id) => id !== prefer)] : ids;
	for (const id of order) if (!seatTaken(world, id, self, settings)) return SEATS.find((s) => s.id === id) ?? null;
	return null;
}
function stepPets(world, settings, dt) {
	if (!settings.env.animals) return;
	const present = world.chars.filter((c) => here(settings, c.id));
	for (const pet of world.pets) {
		pet.phase += dt;
		if (pet.wait > 0) {
			pet.wait -= dt;
			pet.pose = pet.kind === "cat" && pet.wait > .4 ? "sit" : "stand";
			continue;
		}
		const dx = pet.tx - pet.x;
		const dy = pet.ty - pet.y;
		const d = Math.hypot(dx, dy);
		const speed = pet.kind === "cat" ? 46 : 70;
		if (d < 8) {
			pet.x = pet.tx;
			pet.y = pet.ty;
			pet.wait = 1.4 + world.rng() * (pet.kind === "cat" ? 4.5 : 2.2);
			const follow = present.length ? present[Math.floor(world.rng() * present.length)] : null;
			if (follow && world.rng() < (pet.kind === "dog" ? .75 : .4)) {
				pet.tx = Math.min(BOUNDS.x1, Math.max(BOUNDS.x0, follow.x + (world.rng() - .5) * 90));
				pet.ty = Math.min(BOUNDS.y1, Math.max(BOUNDS.y0 + 20, follow.y + 18 + world.rng() * 24));
			} else {
				pet.tx = BOUNDS.x0 + world.rng() * (BOUNDS.x1 - BOUNDS.x0);
				pet.ty = BOUNDS.y0 + 40 + world.rng() * (BOUNDS.y1 - BOUNDS.y0 - 40);
			}
			if (blocked(pet.tx, pet.ty)) {
				const open = openPoint(world);
				pet.tx = open.x;
				pet.ty = open.y;
			}
			continue;
		}
		pet.pose = "walk";
		pet.facing = dx >= 0 ? 1 : -1;
		const step = Math.min(d, speed * dt);
		const nx = pet.x + dx / d * step;
		const ny = pet.y + dy / d * step;
		if (!blocked(nx, ny)) {
			pet.x = nx;
			pet.y = ny;
		} else if (!blocked(nx, pet.y)) pet.x = nx;
		else if (!blocked(pet.x, ny)) pet.y = ny;
		pet.x = Math.min(BOUNDS.x1, Math.max(BOUNDS.x0, pet.x));
		pet.y = Math.min(BOUNDS.y1, Math.max(BOUNDS.y0, pet.y));
	}
}
function nearestOther(world, settings, ch) {
	let best = null;
	let bestD = Infinity;
	for (const o of world.chars) {
		if (o.id === ch.id || !here(settings, o.id)) continue;
		const d = dist(ch, o);
		if (d < bestD) {
			bestD = d;
			best = o;
		}
	}
	return best;
}
function clampWalk(ch) {
	ch.x = Math.min(BOUNDS.x1, Math.max(BOUNDS.x0, ch.x));
	ch.y = Math.min(BOUNDS.y1, Math.max(BOUNDS.y0, ch.y));
	pushOut(ch);
}
function blocked(x, y) {
	return SOLIDS.some((s) => x > s.x0 && x < s.x1 && y > s.y0 && y < s.y1);
}
function pushOut(ch) {
	for (const s of SOLIDS) {
		if (ch.x <= s.x0 || ch.x >= s.x1 || ch.y <= s.y0 || ch.y >= s.y1) continue;
		const left = ch.x - s.x0;
		const right = s.x1 - ch.x;
		const side = Math.min(left, right);
		const front = s.y1 - ch.y;
		if (side + 8 < front) ch.x = left < right ? s.x0 - 10 : s.x1 + 10;
		else ch.y = s.y1 + 10;
	}
}
function stepAvoid(ch, tx, ty, step) {
	const dx = tx - ch.x;
	const dy = ty - ch.y;
	const d = Math.hypot(dx, dy) || 1;
	const nx = ch.x + dx / d * step;
	const ny = ch.y + dy / d * step;
	if (!blocked(nx, ny)) {
		ch.x = nx;
		ch.y = ny;
		return;
	}
	const side = ch.x + Math.sign(tx - ch.x || 1) * step;
	if (!blocked(side, ch.y)) {
		ch.x = side;
		return;
	}
	const front = ch.y + Math.abs(step);
	if (!blocked(ch.x, front)) {
		ch.y = front;
		return;
	}
	if (!blocked(nx, ch.y)) ch.x = nx;
}
function openPoint(world) {
	for (let i = 0; i < 12; i++) {
		const x = BOUNDS.x0 + 30 + world.rng() * (BOUNDS.x1 - BOUNDS.x0 - 60);
		const y = BOUNDS.y0 + 16 + world.rng() * (BOUNDS.y1 - BOUNDS.y0 - 28);
		if (!blocked(x, y)) return {
			x,
			y
		};
	}
	return {
		x: 800,
		y: 840
	};
}
function seatFace(seat) {
	if (seat.id === "screen") return -1;
	if (seat.id === "alcove") return 1;
	if (seat.x < 700) return 1;
	if (seat.x > 1e3) return -1;
	return -1;
}
function nearestFreeCup(world, ch) {
	let best = null;
	let bestD = Infinity;
	for (const cup of world.cups) {
		if (cup.holder) continue;
		const d = Math.hypot(cup.x - ch.x, cup.y - ch.y);
		if (d < bestD) {
			bestD = d;
			best = cup;
		}
	}
	return best;
}
function tableForCup(id) {
	return TEA_TABLES.find((table) => table.cups.some((cup) => cup.id === id)) ?? TEA_TABLES[0];
}
function pickLine(world, style, tox) {
	const pool = style === "cross" && tox > .35 ? CROSS : style === "sentimental" && tox > .2 ? SENTIMENTAL : LINES;
	return pool[Math.floor(world.rng() * pool.length)] ?? LINES[0];
}
function cooling(ch, key, now) {
	return (ch.cool[key] ?? 0) > now;
}
function enqueue(ch, tasks) {
	ch.queue.push(...tasks);
}
function ensureStand(ch, tasks) {
	if (ch.sit > .35 || ch.seat) tasks.push({ kind: "stand" });
}
function faceToward(fromX, toX) {
	return toX >= fromX ? 1 : -1;
}
function buildPlan(world, ch, settings, plan) {
	const c = cfgOf(settings, ch.id);
	const tasks = [];
	const waitMul = .85 + (1 - settings.env.activity) * .9;
	if (plan === "wait") tasks.push({
		kind: "wait",
		seconds: (1.2 + world.rng() * 2.6) * waitMul
	});
	else if (plan === "wander") {
		ensureStand(ch, tasks);
		const spot = openPoint(world);
		tasks.push({
			kind: "goto",
			x: spot.x,
			y: spot.y
		});
		tasks.push({
			kind: "wait",
			seconds: 1 + world.rng() * 2.2
		});
	} else if (plan === "sit") {
		if (ch.seat && ch.sit > .8) tasks.push({
			kind: "wait",
			seconds: (2.2 + world.rng() * 3.4) * waitMul
		});
		else {
			const seat = freeSeat(world, settings, ch.id, c.traits.melancholy > .6 ? "alcove" : void 0);
			if (!seat) tasks.push({
				kind: "wait",
				seconds: 2
			});
			else {
				ensureStand(ch, tasks);
				ch.reserved = seat.id;
				tasks.push({
					kind: "goto",
					x: seat.x,
					y: seat.y
				});
				tasks.push({
					kind: "face",
					dir: seatFace(seat)
				});
				tasks.push({
					kind: "sit",
					seat: seat.id
				});
				tasks.push({
					kind: "wait",
					seconds: (2.4 + world.rng() * 4) * waitMul
				});
			}
		}
	} else if (plan === "drink") {
		const holding = ch.hold === "cup";
		const freeCup = world.cups.some((cup) => cup.holder === null);
		if (!holding && !freeCup) tasks.push({
			kind: "wait",
			seconds: 2
		});
		else {
			ensureStand(ch, tasks);
			const cup = world.cups.find((cup) => cup.holder === ch.id) ?? nearestFreeCup(world, ch);
			const table = cup ? tableForCup(cup.id) : TEA_TABLES[0];
			if (!holding) {
				tasks.push({
					kind: "goto",
					x: table.approach.x,
					y: table.approach.y
				});
				tasks.push({
					kind: "face",
					dir: table.approach.face
				});
				tasks.push({
					kind: "pose",
					pose: "reach",
					seconds: .65
				});
				tasks.push({ kind: "takeCup" });
			}
			const seat = SEATS.find((s) => s.id === table.seat && !seatTaken(world, s.id, ch.id, settings)) ?? (ch.seat ? SEATS.find((s) => s.id === ch.seat) : freeSeat(world, settings, ch.id));
			if (seat && !ch.seat) ch.reserved = seat.id;
			if (seat) {
				tasks.push({
					kind: "goto",
					x: seat.x,
					y: seat.y
				});
				tasks.push({
					kind: "face",
					dir: seatFace(seat)
				});
				tasks.push({
					kind: "sit",
					seat: seat.id
				});
			}
			tasks.push({ kind: "drink" });
			tasks.push({
				kind: "wait",
				seconds: 1.6 + world.rng() * 2.4
			});
			tasks.push({ kind: "stand" });
			tasks.push({
				kind: "goto",
				x: table.approach.x,
				y: table.approach.y
			});
			tasks.push({
				kind: "face",
				dir: table.approach.face
			});
			tasks.push({ kind: "placeCup" });
			ch.cool.drink = world.time + 18;
		}
	} else if (plan === "converse") {
		const other = nearestOther(world, settings, ch);
		if (!other) tasks.push({
			kind: "wait",
			seconds: 2
		});
		else {
			ensureStand(ch, tasks);
			const side = ch.x <= other.x ? -78 : 78;
			const tx = Math.min(BOUNDS.x1, Math.max(BOUNDS.x0, other.x + side));
			const ty = Math.min(BOUNDS.y1, Math.max(BOUNDS.y0, other.y + 8));
			tasks.push({
				kind: "goto",
				x: tx,
				y: ty
			});
			tasks.push({
				kind: "face",
				dir: faceToward(tx, other.x)
			});
			tasks.push({
				kind: "say",
				text: pickLine(world, c.drinkStyle, ch.tox)
			});
			tasks.push({
				kind: "pose",
				pose: "gesture",
				seconds: 4.2 + world.rng() * 2
			});
			world.look[other.id] = {
				id: ch.id,
				until: world.time + 7
			};
			ch.cool.converse = world.time + 10;
			ch.last = "converse";
		}
	} else if (plan === "adjust") tasks.push({
		kind: "pose",
		pose: "adjust",
		seconds: 2.6 + world.rng() * 1.4
	});
	else if (plan === "watch") {
		ensureStand(ch, tasks);
		const spot = LOOKS[Math.floor(world.rng() * LOOKS.length)] ?? LOOKS[0];
		tasks.push({
			kind: "goto",
			x: spot.x,
			y: spot.y
		});
		tasks.push({
			kind: "face",
			dir: spot.face
		});
		tasks.push({
			kind: "pose",
			pose: "gesture",
			seconds: 1.6 + world.rng()
		});
		tasks.push({
			kind: "wait",
			seconds: (2.2 + world.rng() * 3.2) * waitMul
		});
	} else if (plan === "smoke") {
		if (!settings.env.smoke) tasks.push({
			kind: "wait",
			seconds: 2
		});
		else if (world.pipeHolder && world.pipeHolder !== ch.id) tasks.push({
			kind: "wait",
			seconds: 2.5
		});
		else {
			ensureStand(ch, tasks);
			if (ch.hold !== "pipe") {
				tasks.push({
					kind: "goto",
					x: PIPE_TRAY.x - 46,
					y: PIPE_TRAY.y
				});
				tasks.push({
					kind: "face",
					dir: PIPE_TRAY.face
				});
				tasks.push({
					kind: "pose",
					pose: "reach",
					seconds: .55
				});
				tasks.push({ kind: "takePipe" });
			}
			const seat = freeSeat(world, settings, ch.id, "screen");
			if (seat) {
				ch.reserved = seat.id;
				tasks.push({
					kind: "goto",
					x: seat.x,
					y: seat.y
				});
				tasks.push({
					kind: "face",
					dir: seatFace(seat)
				});
				tasks.push({
					kind: "sit",
					seat: seat.id
				});
			}
			tasks.push({ kind: "smoke" });
			tasks.push({ kind: "stand" });
			tasks.push({
				kind: "goto",
				x: PIPE_TRAY.x - 46,
				y: PIPE_TRAY.y
			});
			tasks.push({
				kind: "face",
				dir: PIPE_TRAY.face
			});
			tasks.push({ kind: "placePipe" });
			ch.cool.smoke = world.time + 24;
		}
	} else if (plan === "robe") tasks.push({
		kind: "wait",
		seconds: 1
	});
	else if (plan === "attend") {
		ensureStand(ch, tasks);
		const table = TEA_TABLES[world.rng() < .5 ? 0 : 1];
		tasks.push({
			kind: "goto",
			x: table.approach.x,
			y: table.approach.y
		});
		tasks.push({
			kind: "face",
			dir: table.approach.face
		});
		tasks.push({
			kind: "pose",
			pose: "reach",
			seconds: 1.3
		});
		const guest = world.chars.find((o) => o.id !== ch.id && (o.hold === "cup" || o.seat));
		if (guest) {
			const tx = guest.x + (guest.x > ch.x ? -70 : 70);
			tasks.push({
				kind: "goto",
				x: Math.min(BOUNDS.x1, Math.max(BOUNDS.x0, tx)),
				y: guest.y + 6
			});
			tasks.push({
				kind: "face",
				dir: faceToward(tx, guest.x)
			});
			tasks.push({
				kind: "pose",
				pose: "gesture",
				seconds: 2.2
			});
			world.look[guest.id] = {
				id: ch.id,
				until: world.time + 4
			};
		}
		ch.cool.attend = world.time + 12;
	}
	if (tasks.length === 0) tasks.push({
		kind: "wait",
		seconds: 2
	});
	ch.last = plan;
	enqueue(ch, tasks);
}
function choosePlan(world, ch, settings) {
	const c = cfgOf(settings, ch.id);
	const t = c.traits;
	const lively = settings.env.activity;
	const toxTalk = c.drinkStyle === "talkative" ? ch.tox * .9 : 0;
	const toxSleep = c.drinkStyle === "sleepy" ? ch.tox : 0;
	const toxCross = c.drinkStyle === "cross" ? ch.tox * .7 : 0;
	const other = nearestOther(world, settings, ch);
	const socialOk = !!other && dist(ch, other) < 640;
	const weights = [
		{
			k: "sit",
			w: (t.solitude * .95 + t.melancholy * .65 + t.calm * .3 + toxSleep * .8) * (ch.seat ? .35 : 1)
		},
		{
			k: "wander",
			w: (.28 + t.restlessness * 1.15 + lively * .65) * (.55 + lively * .7)
		},
		{
			k: "drink",
			w: cooling(ch, "drink", world.time) ? 0 : (t.drink * 1.1 + .05) * (ch.tox > .82 ? .25 : 1)
		},
		{
			k: "converse",
			w: (cooling(ch, "converse", world.time) ? 0 : 1) * (t.sociability * .95 + t.affection * .6 + toxTalk + lively * .2) * (socialOk ? 1 : 0) * (1 - toxCross)
		},
		{
			k: "adjust",
			w: .16 + (1 - t.calm) * .12
		},
		{
			k: "watch",
			w: t.curiosity * .7 + t.solitude * .28 + t.melancholy * .2
		},
		{
			k: "smoke",
			w: !settings.env.smoke || cooling(ch, "smoke", world.time) ? 0 : t.smoke * .85
		},
		{
			k: "robe",
			w: 0
		},
		{
			k: "attend",
			w: c.role === "attendant" && !cooling(ch, "attend", world.time) ? .9 : 0
		},
		{
			k: "wait",
			w: .32 + t.calm * .45 + (1 - lively) * .55 + toxSleep * .3
		}
	];
	if (ch.last) {
		const prev = weights.find((w) => w.k === ch.last);
		if (prev) prev.w *= .28;
	}
	let sum = 0;
	for (const w of weights) sum += Math.max(0, w.w);
	if (sum <= 0) return "wait";
	let r = world.rng() * sum;
	for (const w of weights) {
		r -= Math.max(0, w.w);
		if (r <= 0) return w.k;
	}
	return "wait";
}
function avoidOthers(world, settings, ch, dt) {
	if (ch.sit > .6) return;
	for (const o of world.chars) {
		if (o.id === ch.id || o.sit > .6 || !here(settings, o.id)) continue;
		const dx = ch.x - o.x;
		const dy = ch.y - o.y;
		const d = Math.hypot(dx, dy * 1.4);
		if (d > .1 && d < 96) {
			ch.x += dx / d * 70 * dt;
			ch.y += dy / d * 42 * dt;
		}
	}
}
function stepChar(world, ch, settings, dt, mutate) {
	const look = world.look[ch.id];
	if (look && world.time > look.until) delete world.look[ch.id];
	if (ch.queue.length === 0) buildPlan(world, ch, settings, choosePlan(world, ch, settings));
	const task = ch.queue[0];
	if (!task) return;
	ch.taskTime += dt;
	if (task.kind === "wait") {
		ch.pose = ch.sit > .5 ? "sit" : "stand";
		ch.raise = 0;
		if (look && ch.sit < .5) {
			const other = world.chars.find((o) => o.id === look.id);
			if (other) ch.facing = faceToward(ch.x, other.x);
		}
		if (ch.taskTime >= task.seconds) finish(ch);
		return;
	}
	if (task.kind === "goto") {
		const dx = task.x - ch.x;
		const dy = task.y - ch.y;
		const d = Math.hypot(dx, dy);
		const speed = (108 + settings.env.activity * 36) * (1 - Math.min(.4, ch.tox * .3));
		if (d < 7) {
			ch.x = task.x;
			ch.y = task.y;
			ch.pose = ch.sit > .4 ? "sit" : "stand";
			finish(ch);
			return;
		}
		const step = Math.min(d, speed * dt);
		const before = ch.x;
		const intend = task.x >= ch.x ? 1 : -1;
		stepAvoid(ch, task.x, task.y, step);
		ch.pose = "walk";
		ch.walkPhase += dt * 2.35;
		avoidOthers(world, settings, ch, dt);
		clampWalk(ch);
		const moved = ch.x - before;
		if (Math.abs(moved) > .4) ch.facing = moved > 0 ? 1 : -1;
		else if (Math.abs(task.x - ch.x) > 12 && Math.abs(dx) > Math.abs(dy)) ch.facing = intend;
		if (Math.abs(ch.x - before) < 4 * dt) ch.stuck += dt;
		else ch.stuck = 0;
		if (ch.stuck > 2.8) {
			ch.stuck = 0;
			finish(ch);
		}
		return;
	}
	if (task.kind === "face") {
		ch.facing = task.dir;
		finish(ch);
		return;
	}
	if (task.kind === "sit") {
		ch.pose = "sit";
		ch.sit = Math.min(1, ch.sit + dt * 1.35);
		ch.seat = task.seat;
		ch.reserved = task.seat;
		if (ch.sit >= .98) {
			pushLog(world, `${nameOf(settings, ch.id)} sat.`);
			finish(ch);
		}
		return;
	}
	if (task.kind === "stand") {
		ch.pose = "stand";
		ch.sit = Math.max(0, ch.sit - dt * 1.55);
		if (ch.sit <= .02) {
			ch.sit = 0;
			ch.seat = null;
			releaseReserve(ch);
			finish(ch);
		}
		return;
	}
	if (task.kind === "takeCup") {
		if (ch.hold === "pipe") {
			world.pipeHolder = null;
			ch.hold = "none";
		}
		const free = world.cups.filter((c) => c.holder === null);
		free.sort((a, b) => Math.hypot(a.x - ch.x, a.y - ch.y) - Math.hypot(b.x - ch.x, b.y - ch.y));
		const cup = free[0];
		if (cup) {
			cup.holder = ch.id;
			ch.hold = "cup";
			pushLog(world, `${nameOf(settings, ch.id)} lifted a cup.`);
		}
		finish(ch);
		return;
	}
	if (task.kind === "placeCup") {
		const cup = world.cups.find((c) => c.holder === ch.id);
		if (cup) cup.holder = null;
		if (ch.hold === "cup") {
			ch.hold = cfgOf(settings, ch.id).fan ? "fan" : "none";
			pushLog(world, `${nameOf(settings, ch.id)} set the cup down.`);
		}
		ch.raise = 0;
		finish(ch);
		return;
	}
	if (task.kind === "drink") {
		ch.pose = "drink";
		const e = ch.taskTime;
		if (e < .7) ch.raise = e / .7;
		else if (e < 2) ch.raise = 1;
		else ch.raise = Math.max(0, 1 - (e - 2) / .7);
		if (e > 1.15 && !ch.sipped) {
			ch.sipped = true;
			const person = cfgOf(settings, ch.id);
			const sens = .7 + (1 - person.traits.calm) * .4;
			ch.tox = Math.min(1, ch.tox + .18 * sens);
			pushLog(world, `${person.name} drank.`);
		}
		if (e >= 2.75) {
			ch.raise = 0;
			finish(ch);
		}
		return;
	}
	if (task.kind === "takePipe") {
		if (!world.pipeHolder || world.pipeHolder === ch.id) {
			if (ch.hold === "cup") {
				const cup = world.cups.find((c) => c.holder === ch.id);
				if (cup) cup.holder = null;
			}
			world.pipeHolder = ch.id;
			ch.hold = "pipe";
			pushLog(world, `${nameOf(settings, ch.id)} took the kiseru.`);
		}
		finish(ch);
		return;
	}
	if (task.kind === "placePipe") {
		if (world.pipeHolder === ch.id) world.pipeHolder = null;
		if (ch.hold === "pipe") ch.hold = cfgOf(settings, ch.id).fan ? "fan" : "none";
		pushLog(world, `${nameOf(settings, ch.id)} put the pipe away.`);
		finish(ch);
		return;
	}
	if (task.kind === "smoke") {
		ch.pose = "smoke";
		ch.raise = .35 + Math.sin(ch.taskTime * 1.4) * .08;
		if (world.rng() < dt * 7) world.motes.push({
			x: ch.x + ch.facing * 18,
			y: ch.y - 150,
			life: 2.4 + world.rng(),
			max: 2.8,
			vy: 18 + world.rng() * 14,
			w: 1.2 + world.rng(),
			ph: world.rng() * 6,
			kind: "smoke"
		});
		if (ch.taskTime > 6.5) {
			ch.raise = 0;
			finish(ch);
		}
		return;
	}
	if (task.kind === "robe") {
		const next = !cfgOf(settings, ch.id).wearingOuter;
		mutate.setWearing(ch.id, next);
		finish(ch);
		return;
	}
	if (task.kind === "say") {
		ch.say = {
			text: task.text,
			life: 4.6
		};
		pushLog(world, `${nameOf(settings, ch.id)} spoke.`);
		finish(ch);
		return;
	}
	if (task.kind === "pose") {
		ch.pose = task.pose;
		if (task.pose === "reach") ch.raise = Math.min(1, ch.taskTime / .4);
		if (task.pose === "gesture") ch.raise = .25 + Math.sin(world.time * 2.2) * .15;
		if (task.pose === "adjust") ch.raise = .45 + Math.sin(world.time * 1.6) * .08;
		if (ch.taskTime >= task.seconds) {
			if (task.pose !== "drink") ch.raise = 0;
			finish(ch);
		}
	}
}
function stepWorld(world, dt, settings, mutate) {
	const dts = dt * settings.env.speed;
	world.time += dts;
	stepPets(world, settings, dts);
	if (world.inject.length) {
		const job = world.inject.shift();
		if (job) {
			const ch = world.chars.find((c) => c.id === job.id);
			if (ch) {
				ch.queue = [];
				ch.taskTime = 0;
				if (ch.reserved && ch.seat !== ch.reserved) ch.reserved = ch.seat;
				buildPlan(world, ch, settings, job.plan);
				if (ch.sit > .35 && ch.queue[0]?.kind !== "stand" && job.plan !== "sit" && job.plan !== "wait") ch.queue.unshift({ kind: "stand" });
			}
		}
	}
	for (const ch of world.chars) {
		const c = cfgOf(settings, ch.id);
		if (!c.present) {
			if (ch.hold === "cup") {
				const cup = world.cups.find((cup) => cup.holder === ch.id);
				if (cup) cup.holder = null;
			}
			if (world.pipeHolder === ch.id) world.pipeHolder = null;
			ch.hold = "none";
			ch.seat = null;
			ch.reserved = null;
			ch.queue = [];
			ch.say = null;
			ch.sit = 0;
			ch.pose = "stand";
			continue;
		}
		stepChar(world, ch, settings, dts, mutate);
		const decay = .012 * (.8 + c.traits.calm * .4);
		ch.tox = Math.max(0, ch.tox - dts * decay);
		if (ch.say) {
			ch.say.life -= dts;
			if (ch.say.life <= 0) ch.say = null;
		}
	}
	for (const m of world.motes) {
		m.life -= dts;
		m.y -= m.vy * dts;
		m.x += Math.sin(world.time * m.w + m.ph) * dts * (m.kind === "petal" ? 22 : 10);
		if (m.kind === "petal") m.y += dts * 16;
	}
	world.motes = world.motes.filter((m) => m.life > 0);
	if (settings.env.petals && world.rng() < dts * .35 && world.motes.length < 28) world.motes.push({
		x: 160 + world.rng() * 1280,
		y: 300 + world.rng() * 80,
		life: 7 + world.rng() * 4,
		max: 8,
		vy: -6,
		w: .6 + world.rng(),
		ph: world.rng() * 6,
		kind: "petal"
	});
}
function nearestLook(ch) {
	let best = null;
	let bestD = 78;
	const spots = [
		...LOOKS.map((spot) => ({
			x: spot.x,
			y: spot.y,
			label: spot.label
		})),
		...TEA_TABLES.map((table) => ({
			x: table.approach.x,
			y: table.approach.y,
			label: "the tea table"
		})),
		{
			x: PIPE_TRAY.x,
			y: PIPE_TRAY.y,
			label: "the pipe tray"
		},
		{
			x: BRAZIER.x,
			y: BRAZIER.y + 80,
			label: "the brazier"
		}
	];
	for (const spot of spots) {
		const d = Math.hypot(ch.x - spot.x, (ch.y - spot.y) * 1.2);
		if (d < bestD) {
			bestD = d;
			best = spot.label;
		}
	}
	return best;
}
function activityLine(world, settings, id) {
	const ch = world.chars.find((c) => c.id === id);
	if (!ch) return "";
	const name = nameOf(settings, id);
	if (!cfgOf(settings, id).present) return `${name} is out of the room.`;
	const task = ch.queue[0];
	if (!task) return `${name} is still.`;
	switch (task.kind) {
		case "goto": {
			const look = nearestLook({
				...ch,
				x: task.x,
				y: task.y
			});
			return look ? `${name} is going to ${look}.` : `${name} is crossing the mats.`;
		}
		case "sit": return `${name} is sitting down.`;
		case "stand": return `${name} is rising.`;
		case "drink": return `${name} is drinking.`;
		case "smoke": return `${name} is smoking.`;
		case "takeCup": return `${name} lifts a cup from the table.`;
		case "placeCup": return `${name} sets the cup on the table.`;
		case "takePipe": return `${name} takes the kiseru from the tray.`;
		case "placePipe": return `${name} returns the kiseru.`;
		case "robe": return `${name} is changing an outer robe.`;
		case "pose":
			if (task.pose === "adjust") return `${name} is arranging a collar.`;
			if (task.pose === "reach") {
				const look = nearestLook(ch);
				return look ? `${name} reaches toward ${look}.` : `${name} reaches.`;
			}
			if (task.pose === "gesture") {
				const look = nearestLook(ch);
				return look ? `${name} is at ${look}.` : `${name} watches the room.`;
			}
			return `${name} pauses.`;
		case "say": return `${name} is with company.`;
		case "wait": {
			const look = nearestLook(ch);
			if (ch.hold === "cup") return `${name} holds a cup.`;
			if (ch.hold === "pipe") return `${name} holds the pipe.`;
			if (look) return `${name} is at ${look}.`;
			if (ch.sit > .6) return `${name} sits with the room.`;
			return `${name} is quiet.`;
		}
		default: return `${name} attends to the room.`;
	}
}
var world = createWorld(defaultSettings());
function getWorld() {
	return world;
}
function resetWorld(settings) {
	world = createWorld(settings);
	return world;
}
function injectPlan(id, plan) {
	world.inject.push({
		id,
		plan
	});
}
var KEY = "kurokagami-settings-v1";
function persist(settings) {
	try {
		localStorage.setItem(KEY, JSON.stringify(settings));
	} catch {}
}
function releaseLongWait() {
	const world = getWorld();
	for (const ch of world.chars) {
		const task = ch.queue[0];
		if (task?.kind === "wait" && task.seconds - ch.taskTime > .8) {
			ch.queue.shift();
			ch.taskTime = 0;
		}
	}
}
var useHouse = create((set, get) => ({
	settings: defaultSettings(),
	panel: false,
	tab: "room",
	selected: "komachi",
	paused: false,
	sound: false,
	hydrated: false,
	hydrate: () => {
		if (get().hydrated) return;
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) set({
				settings: normalizeSettings(JSON.parse(raw)),
				hydrated: true
			});
			else set({ hydrated: true });
		} catch {
			set({ hydrated: true });
		}
	},
	setEnv: (patch) => {
		const settings = {
			...get().settings,
			env: {
				...get().settings.env,
				...patch
			}
		};
		persist(settings);
		if ("activity" in patch || "speed" in patch || "smoke" in patch) releaseLongWait();
		set({ settings });
	},
	patchChar: (id, patch) => {
		const settings = {
			...get().settings,
			chars: get().settings.chars.map((c) => c.id === id ? {
				...c,
				...patch
			} : c)
		};
		persist(settings);
		set({ settings });
	},
	setTrait: (id, key, value) => {
		const settings = {
			...get().settings,
			chars: get().settings.chars.map((c) => c.id === id ? {
				...c,
				traits: {
					...c.traits,
					[key]: value
				}
			} : c)
		};
		persist(settings);
		releaseLongWait();
		set({ settings });
	},
	setPanel: (panel) => set({ panel }),
	setTab: (tab) => set({ tab }),
	setSelected: (selected) => set({ selected }),
	setPaused: (paused) => set({ paused }),
	setSound: (sound) => set({ sound }),
	restore: () => {
		const settings = defaultSettings();
		persist(settings);
		resetWorld(settings);
		set({
			settings,
			selected: "komachi",
			paused: false
		});
	}
}));
var tiles = /* @__PURE__ */ new Map();
function patternTile(id) {
	if (id === "solid") return null;
	const hit = tiles.get(id);
	if (hit) return hit;
	if (typeof document === "undefined") return null;
	const c = document.createElement("canvas");
	c.width = 96;
	c.height = 96;
	const g = c.getContext("2d");
	if (!g) return null;
	g.clearRect(0, 0, 96, 96);
	g.strokeStyle = "rgba(16,8,6,0.95)";
	g.fillStyle = "rgba(16,8,6,0.95)";
	g.lineWidth = 1.7;
	g.lineJoin = "round";
	g.lineCap = "round";
	if (id === "seigaiha") drawSeigaiha(g);
	else if (id === "asanoha") drawAsanoha(g);
	else if (id === "shima") drawShima(g);
	else if (id === "kikko") drawKikko(g);
	else if (id === "shippo") drawShippo(g);
	else if (id === "kanoko") drawKanoko(g);
	else if (id === "yagasuri") drawYagasuri(g);
	tiles.set(id, c);
	return c;
}
function drawSeigaiha(g) {
	const r = 16;
	for (let row = -1; row < 5; row++) for (let col = -1; col < 5; col++) {
		const x = col * r * 2 + (row % 2 ? r : 0);
		const y = row * r;
		g.beginPath();
		g.arc(x, y, r * .92, Math.PI, 0);
		g.stroke();
		g.beginPath();
		g.arc(x, y, r * .62, Math.PI, 0);
		g.stroke();
		g.beginPath();
		g.arc(x, y, r * .32, Math.PI, 0);
		g.stroke();
	}
}
function drawAsanoha(g) {
	const s = 32;
	g.lineWidth = 1.7;
	for (let y = 0; y <= 96; y += s) for (let x = 0; x <= 96; x += s) {
		const cx = x + (Math.floor(y / s) % 2 ? s / 2 : 0);
		const cy = y;
		for (let i = 0; i < 6; i++) {
			const a = Math.PI / 3 * i - Math.PI / 2;
			g.beginPath();
			g.moveTo(cx, cy);
			g.lineTo(cx + Math.cos(a) * s * .5, cy + Math.sin(a) * s * .5);
			g.stroke();
		}
	}
}
function drawShima(g) {
	g.lineWidth = 3.2;
	for (let x = 4; x < 96; x += 16) {
		g.beginPath();
		g.moveTo(x, 0);
		g.lineTo(x, 96);
		g.stroke();
	}
}
function drawKikko(g) {
	const w = 28;
	const h = 24;
	g.lineWidth = 1.5;
	for (let row = -1; row < 6; row++) for (let col = -1; col < 5; col++) {
		const x = col * w + (row % 2 ? w / 2 : 0);
		const y = row * h * .75;
		hex(g, x + w / 2, y + h / 2, 13);
		g.stroke();
	}
}
function hex(g, x, y, r) {
	g.beginPath();
	for (let i = 0; i < 6; i++) {
		const a = Math.PI / 3 * i + Math.PI / 6;
		const px = x + Math.cos(a) * r;
		const py = y + Math.sin(a) * r;
		if (i === 0) g.moveTo(px, py);
		else g.lineTo(px, py);
	}
	g.closePath();
}
function drawShippo(g) {
	g.lineWidth = 1.5;
	const s = 32;
	for (let y = 0; y <= 96; y += s) for (let x = 0; x <= 96; x += s) {
		g.beginPath();
		g.arc(x, y, s * .48, 0, Math.PI * 2);
		g.stroke();
	}
}
function drawKanoko(g) {
	for (let y = 8; y < 96; y += 16) for (let x = 8; x < 96; x += 16) {
		g.beginPath();
		g.arc(x, y, 2.4, 0, Math.PI * 2);
		g.fill();
	}
}
function drawYagasuri(g) {
	g.lineWidth = 1.6;
	const s = 24;
	for (let y = 0; y < 96; y += s) for (let x = 0; x < 96; x += s) {
		g.beginPath();
		g.moveTo(x + 4, y + s - 4);
		g.lineTo(x + s / 2, y + 4);
		g.lineTo(x + s - 4, y + s - 4);
		g.stroke();
		g.beginPath();
		g.moveTo(x + s / 2 - 3, y + 10);
		g.lineTo(x + s / 2 + 3, y + 10);
		g.stroke();
	}
}
var INK$1 = "#1c140f";
var FACE = "#f4eadc";
var FACE_MAN = "#efd3bc";
var HAND = "#f0d2ba";
var TABI = "#f7f1e6";
/** Depth on the painted floor. Back of the tatami is small; the near mats are larger. */
function figureScale(feetY) {
	return .46 + Math.min(1, Math.max(0, (feetY - 540) / 320)) * .58;
}
/** The hall painting already has perspective, so feet stay on the canvas point. */
function screenFootX(x, _feetY) {
	return x;
}
function hexRgb$2(hex) {
	const h = hex.replace("#", "");
	return {
		r: parseInt(h.slice(0, 2), 16),
		g: parseInt(h.slice(2, 4), 16),
		b: parseInt(h.slice(4, 6), 16)
	};
}
function mix$1(a, b, t) {
	const A = hexRgb$2(a);
	const B = hexRgb$2(b);
	const f = (x, y) => Math.round(x + (y - x) * t);
	const n = (v) => v.toString(16).padStart(2, "0");
	return `#${n(f(A.r, B.r))}${n(f(A.g, B.g))}${n(f(A.b, B.b))}`;
}
function strokeInk$1(ctx, ink, px = 1.4) {
	ctx.strokeStyle = INK$1;
	ctx.lineWidth = ink.lw(px * (.7 + ink.weight * .55));
	ctx.lineJoin = "round";
	ctx.lineCap = "round";
	ctx.stroke();
}
function fillCloth$1(ctx, color, pattern, mis, tileScale = .5) {
	if (mis > .04) {
		ctx.save();
		ctx.translate(1.7 * mis, -.35 * mis);
		ctx.globalAlpha *= .18 + mis * .1;
		ctx.fillStyle = "#6e2438";
		ctx.fill();
		ctx.restore();
	}
	ctx.fillStyle = color;
	ctx.fill();
	const tile = patternTile(pattern);
	if (!tile) return;
	const pat = ctx.createPattern(tile, "repeat");
	if (!pat) return;
	pat.setTransform(new DOMMatrix().scale(tileScale, tileScale));
	ctx.save();
	ctx.clip();
	ctx.globalAlpha = .62;
	ctx.fillStyle = pat;
	ctx.fill();
	ctx.restore();
}
function poseOf(ch, config, time) {
	const man = config.gender === "man";
	const sit = ch.sit;
	const walking = ch.pose === "walk" && sit < .2;
	const step = walking ? Math.sin(ch.walkPhase * Math.PI * 2) : 0;
	const idle = Math.sin(time * .85 + ch.x * .01);
	const sway = walking ? step * 14 : idle * 4.5;
	const bob = walking ? -Math.abs(Math.sin(ch.walkPhase * Math.PI * 2)) * 9 : idle * -1.8;
	const sleeve = walking ? Math.sin(ch.walkPhase * Math.PI * 2 - .5) * 26 : Math.sin(time * 1.15 + ch.y * .02) * 11;
	const drop = sit * 102;
	return {
		man,
		sit,
		walking,
		step,
		sway,
		bob,
		sleeve,
		raise: ch.raise,
		shoulderY: -232 + drop,
		waistY: -156 + drop * .82,
		hemY: -2,
		neckY: -256 + drop * .94,
		headY: -312 + drop * .9,
		flare: (man ? 36 : 56) + sit * (man ? 8 : 34),
		sleeveLen: (man ? 50 : 76) * (1 - sit * .42)
	};
}
function drawFigure(ctx, ch, config, world, ink, selected) {
	const s = figureScale(ch.y) * config.stature;
	const x = screenFootX(ch.x, ch.y);
	const y = ch.y;
	const p = poseOf(ch, config, world.time);
	const lean = (p.walking ? p.step * .035 : Math.sin(world.time * .55 + ch.y) * .012) + (ch.pose === "drink" ? -.04 * ch.raise : 0);
	ctx.save();
	ctx.translate(x, y);
	ctx.fillStyle = "rgba(28,20,15,0.14)";
	ctx.beginPath();
	ctx.ellipse(0, 6, (p.sit > .5 ? 54 : 34) * s, 8 * s, 0, 0, Math.PI * 2);
	ctx.fill();
	if (selected) {
		ctx.strokeStyle = "#8e3a30";
		ctx.lineWidth = ink.lw(1.5);
		ctx.beginPath();
		ctx.ellipse(0, 8, 46 * s, 11 * s, 0, 0, Math.PI * 2);
		ctx.stroke();
	}
	ctx.scale(s * ch.facing, s);
	ctx.rotate(lean);
	if (p.sit < .45) drawFeet(ctx, p, ink);
	ctx.save();
	ctx.translate(p.sway * .08, p.bob);
	const wearing = config.hasOuter && config.wearingOuter;
	if (wearing) drawTrain(ctx, p, config, ink);
	const cloth = wearing ? {
		color: pigmentHex(config.outerPigment),
		pattern: config.outerPattern
	} : {
		color: pigmentHex(config.pigment),
		pattern: config.pattern
	};
	const far = drawSode(ctx, -28, p.shoulderY + 4, sodeAngle(p, -1), p.sleeveLen, p.man ? 26 : 34, cloth, ink);
	cuffLining(ctx, far.x, far.y, config, ink);
	if (p.man) drawHakamaBody(ctx, p, config, ink);
	else drawKosode(ctx, p, config, ink);
	const nearAngle = sodeAngle(p, 1) + liftAngle(p, ch.pose);
	const near = drawSode(ctx, 28, p.shoulderY + 2, nearAngle, p.sleeveLen, p.man ? 24 : 32, cloth, ink);
	cuffLining(ctx, near.x, near.y, config, ink);
	const hand = handPoint(p, ch.pose, near);
	if (p.raise > .08 || ch.pose === "gesture" || ch.pose === "reach" || ch.pose === "adjust") drawForearm(ctx, near, hand, ink);
	drawHand(ctx, hand.x, hand.y, ink);
	if (!p.man) drawObi(ctx, p, config, ink);
	else drawManObi(ctx, p, ink);
	if (p.man) drawHaori(ctx, p, ink);
	drawCollar(ctx, p, config, ink);
	drawNeck(ctx, p, ink);
	const headBob = p.walking ? -p.bob * .4 : 0;
	ctx.save();
	ctx.translate(p.sway * .12, headBob);
	drawHead(ctx, p, config, ch, world, ink);
	ctx.restore();
	drawProp(ctx, ch, config, world, hand, p, ink);
	ctx.restore();
	ctx.restore();
	if (ch.say) {
		const headScreen = y + (p.headY - 48 + p.bob) * s;
		cartouche(ctx, x + ch.facing * 20 * s, headScreen, ch.say.text, ch.say.life, ink);
	}
}
function sodeAngle(p, side) {
	const swing = p.sleeve * .011 * side;
	return (side > 0 ? .22 : -.18) + swing;
}
function liftAngle(p, pose) {
	let target = -.55;
	if (pose === "reach") target = .85;
	else if (pose === "adjust") target = -.95;
	else if (pose === "gesture") target = -.4;
	else if (pose === "smoke" || pose === "drink") target = -.7;
	const k = pose === "gesture" ? .65 + Math.sin(p.raise * 6) * .2 : Math.min(1, Math.max(0, p.raise));
	if (pose === "stand" || pose === "walk" || pose === "sit") return 0;
	return target * k;
}
function pointOn(x, y, angle, length) {
	return {
		x: x + Math.sin(angle) * length,
		y: y + Math.cos(angle) * length
	};
}
function handPoint(p, pose, opening) {
	let aim = {
		x: 10,
		y: p.headY + 34
	};
	if (pose === "adjust") aim = {
		x: 2,
		y: p.neckY + 18
	};
	else if (pose === "reach") aim = {
		x: 88,
		y: p.shoulderY + 8
	};
	else if (pose === "gesture") aim = {
		x: 54,
		y: p.waistY - 6
	};
	else if (pose === "smoke") aim = {
		x: 16,
		y: p.headY + 30
	};
	const k = pose === "stand" || pose === "walk" || pose === "sit" ? 0 : pose === "gesture" ? .7 : Math.min(1, Math.max(0, p.raise));
	return {
		x: opening.x + (aim.x - opening.x) * k,
		y: opening.y + (aim.y - opening.y) * k
	};
}
function drawSode(ctx, pivotX, pivotY, angle, length, width, cloth, ink) {
	ctx.save();
	ctx.translate(pivotX, pivotY);
	ctx.rotate(angle);
	ctx.beginPath();
	ctx.moveTo(-width * .22, 2);
	ctx.lineTo(-width * .5, length * .22);
	ctx.lineTo(-width * .55, length);
	ctx.quadraticCurveTo(0, length + 7, width * .55, length);
	ctx.lineTo(width * .42, length * .16);
	ctx.closePath();
	fillCloth$1(ctx, cloth.color, cloth.pattern, ink.mis, .11);
	strokeInk$1(ctx, ink, 1.35);
	ctx.beginPath();
	ctx.moveTo(0, 8);
	ctx.lineTo(-width * .08, length * .92);
	ctx.strokeStyle = "rgba(28,20,15,0.35)";
	ctx.lineWidth = ink.lw(.8);
	ctx.stroke();
	ctx.restore();
	return pointOn(pivotX, pivotY, angle, length * .92);
}
function drawForearm(ctx, from, to, ink) {
	const ang = Math.atan2(to.y - from.y, to.x - from.x);
	const nx = Math.cos(ang + Math.PI / 2) * 3.2;
	const ny = Math.sin(ang + Math.PI / 2) * 3.2;
	ctx.beginPath();
	ctx.moveTo(from.x + nx, from.y + ny);
	ctx.lineTo(to.x + nx, to.y + ny);
	ctx.lineTo(to.x - nx, to.y - ny);
	ctx.lineTo(from.x - nx, from.y - ny);
	ctx.closePath();
	ctx.fillStyle = HAND;
	ctx.fill();
	strokeInk$1(ctx, ink, .85);
}
function cuffLining(ctx, x, y, config, ink) {
	ctx.fillStyle = pigmentHex(config.lining);
	ctx.beginPath();
	ctx.ellipse(x, y + 2, 9, 5.5, .5, 0, Math.PI * 2);
	ctx.fill();
	strokeInk$1(ctx, ink, .9);
}
function drawTrain(ctx, p, config, ink) {
	const hem = p.hemY + 18 - p.sit * 10;
	const inner = p.hemY + 4;
	ctx.beginPath();
	ctx.moveTo(-p.flare - 4, p.waistY + 6);
	ctx.lineTo(-p.flare - 22, hem);
	ctx.quadraticCurveTo(0, hem + 14, p.flare + 26, hem - 2);
	ctx.lineTo(p.flare + 2, p.waistY + 8);
	ctx.lineTo(p.flare * .55, inner);
	ctx.quadraticCurveTo(0, inner + 10, -p.flare * .55, inner);
	ctx.closePath();
	fillCloth$1(ctx, pigmentHex(config.outerPigment), config.outerPattern, ink.mis, .11);
	strokeInk$1(ctx, ink, 1.25);
}
function drawKosode(ctx, p, config, ink) {
	const l = -p.flare - p.sway;
	const r = p.flare + 8 - p.sway * .35;
	const hem = p.hemY;
	ctx.beginPath();
	ctx.moveTo(-16, p.neckY + 8);
	ctx.lineTo(-32, p.shoulderY + 8);
	ctx.quadraticCurveTo(-38, p.waistY, l, hem);
	ctx.quadraticCurveTo(-10, hem + 16 + p.sit * 8, r, hem + 3);
	ctx.quadraticCurveTo(40, p.waistY, 30, p.shoulderY + 6);
	ctx.lineTo(12, p.neckY + 10);
	ctx.closePath();
	fillCloth$1(ctx, pigmentHex(config.pigment), config.pattern, ink.mis, .11);
	strokeInk$1(ctx, ink, 1.55);
	ctx.beginPath();
	ctx.moveTo(0, p.neckY + 16);
	ctx.quadraticCurveTo(12 + p.sway * .15, p.waistY, 8 + p.sway * .2, hem + 2);
	ctx.strokeStyle = INK$1;
	ctx.lineWidth = ink.lw(1.15);
	ctx.stroke();
	ctx.globalAlpha = .45;
	ctx.beginPath();
	ctx.moveTo(-10, p.waistY + 8);
	ctx.quadraticCurveTo(-18, (p.waistY + hem) / 2, l * .45, hem - 2);
	ctx.moveTo(16, p.waistY + 6);
	ctx.quadraticCurveTo(22, (p.waistY + hem) / 2, r * .55, hem);
	ctx.stroke();
	ctx.globalAlpha = 1;
	if (p.sit < .65) {
		ctx.fillStyle = "#f7f1e6";
		ctx.beginPath();
		ctx.moveTo(-8, hem - 2);
		ctx.lineTo(0, hem + 12);
		ctx.lineTo(10, hem - 1);
		ctx.closePath();
		ctx.fill();
		strokeInk$1(ctx, ink, .8);
	}
}
function drawHakamaBody(ctx, p, config, ink) {
	ctx.beginPath();
	ctx.moveTo(-18, p.neckY + 6);
	ctx.lineTo(-34, p.shoulderY + 10);
	ctx.lineTo(-32, p.waistY + 8);
	ctx.lineTo(30, p.waistY + 6);
	ctx.lineTo(32, p.shoulderY + 8);
	ctx.lineTo(14, p.neckY + 8);
	ctx.closePath();
	fillCloth$1(ctx, pigmentHex(config.pigment), config.pattern, ink.mis, .11);
	strokeInk$1(ctx, ink, 1.45);
	const top = p.waistY + 4;
	const bot = p.hemY + 2;
	const spread = 8 + p.step * 6;
	ctx.beginPath();
	ctx.moveTo(-36, top);
	ctx.lineTo(-44 - spread, bot);
	ctx.lineTo(-4, bot + 4);
	ctx.lineTo(-6, top + 6);
	ctx.closePath();
	ctx.moveTo(6, top + 4);
	ctx.lineTo(6, bot + 4);
	ctx.lineTo(46 + p.step * 4, bot);
	ctx.lineTo(34, top);
	ctx.closePath();
	ctx.fillStyle = mix$1(pigmentHex(config.pigment), "#1a120e", .28);
	ctx.fill();
	strokeInk$1(ctx, ink, 1.25);
	ctx.strokeStyle = "rgba(243,232,214,0.4)";
	ctx.lineWidth = ink.lw(.8);
	ctx.beginPath();
	for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
		const x = side * (10 + i * 10);
		ctx.moveTo(x, top + 8);
		ctx.lineTo(x + side * p.step * 2, bot);
	}
	ctx.stroke();
}
function drawObi(ctx, p, config, ink) {
	const y = p.waistY - 2;
	ctx.beginPath();
	ctx.moveTo(-38, y);
	ctx.quadraticCurveTo(0, y + 8, 40, y - 2);
	ctx.lineTo(38, y + 26);
	ctx.quadraticCurveTo(0, y + 36, -36, y + 24);
	ctx.closePath();
	ctx.fillStyle = pigmentHex(config.obi);
	ctx.fill();
	strokeInk$1(ctx, ink, 1.15);
	const bow = config.frontObi ? 34 : -46;
	ctx.beginPath();
	ctx.moveTo(bow - 6, y + 4);
	ctx.lineTo(bow + 14, y - 12);
	ctx.lineTo(bow + 18, y + 16);
	ctx.lineTo(bow - 4, y + 18);
	ctx.closePath();
	ctx.fill();
	strokeInk$1(ctx, ink, 1);
	ctx.beginPath();
	ctx.moveTo(bow + 2, y - 2);
	ctx.lineTo(bow + 22, y - 16 - p.sit * 2);
	ctx.lineTo(bow + 16, y + 8);
	ctx.closePath();
	ctx.fill();
	strokeInk$1(ctx, ink, .95);
}
function drawManObi(ctx, p, ink) {
	ctx.fillStyle = "#2a211c";
	ctx.fillRect(-32, p.waistY - 2, 64, 12);
	strokeInk$1(ctx, ink, .9);
}
function drawHaori(ctx, p, ink) {
	const drawPanel = (sign) => {
		ctx.beginPath();
		ctx.moveTo(sign * 4, p.shoulderY + 2);
		ctx.lineTo(sign * 36, p.shoulderY + 16);
		ctx.lineTo(sign * 30, p.waistY + 4);
		ctx.lineTo(sign * 8, p.waistY);
		ctx.closePath();
		ctx.fillStyle = "#241c18";
		ctx.fill();
		strokeInk$1(ctx, ink, 1.15);
	};
	drawPanel(-1);
	drawPanel(1);
	const my = (p.shoulderY + p.waistY) / 2;
	ctx.strokeStyle = "#e7dcc6";
	ctx.lineWidth = ink.lw(1.1);
	ctx.beginPath();
	ctx.arc(-22, my, 6, 0, Math.PI * 2);
	ctx.moveTo(-22, my - 3.5);
	ctx.lineTo(-22, my + 3.5);
	ctx.moveTo(-25.5, my);
	ctx.lineTo(-18.5, my);
	ctx.stroke();
}
function drawCollar(ctx, p, config, ink) {
	ctx.beginPath();
	ctx.moveTo(-2, p.neckY + 2);
	ctx.lineTo(-18, p.shoulderY + 36);
	ctx.lineTo(-8, p.shoulderY + 44);
	ctx.lineTo(1, p.neckY + 20);
	ctx.lineTo(14, p.shoulderY + 46);
	ctx.lineTo(22, p.shoulderY + 34);
	ctx.closePath();
	ctx.fillStyle = "#f7f3ea";
	ctx.fill();
	strokeInk$1(ctx, ink, 1.05);
	ctx.strokeStyle = pigmentHex(config.lining);
	ctx.lineWidth = ink.lw(1.3);
	ctx.beginPath();
	ctx.moveTo(-1, p.neckY + 8);
	ctx.lineTo(-13, p.shoulderY + 34);
	ctx.moveTo(3, p.neckY + 8);
	ctx.lineTo(16, p.shoulderY + 36);
	ctx.stroke();
	ctx.strokeStyle = INK$1;
	ctx.lineWidth = ink.lw(1);
	ctx.beginPath();
	ctx.moveTo(-2, p.neckY + 6);
	ctx.lineTo(-15, p.shoulderY + 36);
	ctx.moveTo(4, p.neckY + 6);
	ctx.lineTo(18, p.shoulderY + 36);
	ctx.stroke();
}
function drawNeck(ctx, p, ink) {
	ctx.fillStyle = p.man ? "#e7cbb6" : "#f3e0d0";
	ctx.beginPath();
	ctx.moveTo(-7, p.neckY + 4);
	ctx.quadraticCurveTo(0, p.neckY + 28, 9, p.shoulderY + 6);
	ctx.lineTo(3, p.shoulderY + 2);
	ctx.quadraticCurveTo(-2, p.neckY + 22, -2, p.neckY + 6);
	ctx.closePath();
	ctx.fill();
	strokeInk$1(ctx, ink, .85);
}
function drawFeet(ctx, p, ink) {
	const stride = p.walking ? 20 : 5;
	const liftL = p.walking ? Math.max(0, p.step) * 11 : 0;
	const liftR = p.walking ? Math.max(0, -p.step) * 11 : 0;
	const feet = [{
		x: -10 - p.step * stride,
		lift: liftL
	}, {
		x: 14 + p.step * stride,
		lift: liftR
	}];
	for (const foot of feet) {
		const fy = -foot.lift;
		ctx.fillStyle = TABI;
		ctx.beginPath();
		ctx.ellipse(foot.x, fy - 2, 8, 4.2, 0, 0, Math.PI * 2);
		ctx.fill();
		strokeInk$1(ctx, ink, .85);
		ctx.strokeStyle = INK$1;
		ctx.lineWidth = ink.lw(.7);
		ctx.beginPath();
		ctx.moveTo(foot.x - 1, fy - 5);
		ctx.lineTo(foot.x - 1, fy + 1);
		ctx.stroke();
		if (p.man) {
			ctx.fillStyle = "#2a211c";
			ctx.fillRect(foot.x - 7, fy + 1, 14, 3.2);
		}
	}
}
function drawHead(ctx, p, config, ch, world, ink) {
	const y = p.headY;
	const hairSway = Math.sin(world.time * 1.2 + ch.x * .01) * (p.walking ? 3.5 : 1.4);
	if (p.man) drawChonmage(ctx, y, hairSway, ink);
	else drawWomanHairBack(ctx, config, y, hairSway, ink);
	ctx.fillStyle = p.man ? FACE_MAN : FACE;
	ctx.beginPath();
	ctx.ellipse(6, y + 10, p.man ? 26 : 29, p.man ? 36 : 40, .01, 0, Math.PI * 2);
	ctx.fill();
	if (ink.mis > .08) {
		ctx.save();
		ctx.translate(1.1 * ink.mis, 0);
		ctx.globalAlpha = .12;
		ctx.fillStyle = "#f0c8c4";
		ctx.beginPath();
		ctx.ellipse(6, y + 10, p.man ? 26 : 29, p.man ? 36 : 40, .01, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	strokeInk$1(ctx, ink, 1.35);
	if (p.man) drawPate(ctx, y, ink);
	else drawBangs(ctx, config, y, hairSway, ink);
	if (!p.man) ornament(ctx, config, y, hairSway, ink);
	let open = (world.time * (config.drinkStyle === "sleepy" ? .7 : 1) + ch.x * .01) % 5.2 < .14 ? .12 : 1;
	if (ch.tox > .2) open *= config.drinkStyle === "sleepy" ? 1 - ch.tox * .65 : 1 - ch.tox * .2;
	const talk = ch.say ? Math.abs(Math.sin(world.time * 7)) : 0;
	drawBrows(ctx, config, y, ink);
	bijinEye(ctx, 1, y - 4, open, ink, false);
	bijinEye(ctx, 17, y - 3, open, ink, false);
	ctx.strokeStyle = INK$1;
	ctx.lineWidth = ink.lw(.9);
	ctx.beginPath();
	ctx.moveTo(11, y + 10);
	ctx.quadraticCurveTo(15, y + 16, 11, y + 18);
	ctx.stroke();
	ctx.fillStyle = `rgba(142, 42, 48, ${.4 + (.3 + config.lip * .7) * .55})`;
	ctx.beginPath();
	ctx.ellipse(11, y + 26, 3.6 + config.lip * .8, 1.4 + talk * 1.2 + config.lip * .6, 0, 0, Math.PI * 2);
	ctx.fill();
	if (!p.man) {
		ctx.strokeStyle = "#8e3038";
		ctx.lineWidth = ink.lw(.7);
		ctx.beginPath();
		ctx.moveTo(8, y + 21);
		ctx.quadraticCurveTo(12, y + 19.2, 16, y + 21);
		ctx.stroke();
	}
	const flush = config.blush + ch.tox * .8;
	if (flush > .04) {
		ctx.fillStyle = `rgba(176, 72, 78, ${.12 + flush * .28})`;
		ctx.beginPath();
		ctx.ellipse(-2, y + 14, 8, 4.5, -.2, 0, Math.PI * 2);
		ctx.ellipse(24, y + 15, 7, 4, .2, 0, Math.PI * 2);
		ctx.fill();
	}
	if (config.beautyMark) {
		ctx.fillStyle = INK$1;
		ctx.beginPath();
		ctx.arc(22, y + 18, 1.15, 0, Math.PI * 2);
		ctx.fill();
	}
}
function drawWomanHairBack(ctx, config, y, sway, ink) {
	ctx.fillStyle = "#14110f";
	if (config.hair === "marumage") {
		ctx.beginPath();
		ctx.ellipse(-6 + sway, y - 32, 24, 14, -.15, 0, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();
		ctx.ellipse(-10 + sway, y - 22, 16, 10, .1, 0, Math.PI * 2);
		ctx.fill();
		strokeInk$1(ctx, ink, 1);
		return;
	}
	const crush = config.hair === "tsubushi" ? 12 : 0;
	ctx.beginPath();
	ctx.ellipse(-2 + sway * .3, y - 40 + crush, 18, 20 - crush * .15, .05, 0, Math.PI * 2);
	ctx.fill();
	ctx.beginPath();
	ctx.ellipse(10 + sway, y - 34 + crush, 14, 13, .35, 0, Math.PI * 2);
	ctx.fill();
	ctx.beginPath();
	ctx.ellipse(4 + sway * .5, y - 48 + crush, 12, 10, -.2, 0, Math.PI * 2);
	ctx.fill();
	ctx.strokeStyle = "#0c0a09";
	ctx.lineWidth = ink.lw(1.8);
	ctx.beginPath();
	ctx.moveTo(-4 + sway * .2, y - 50 + crush);
	ctx.quadraticCurveTo(2, y - 38 + crush, 12 + sway, y - 44 + crush);
	ctx.stroke();
}
function drawBangs(ctx, config, y, sway, ink) {
	ctx.fillStyle = "#14110f";
	const crown = config.hair === "marumage" ? 28 : config.hair === "tsubushi" ? 30 : 38;
	ctx.beginPath();
	ctx.moveTo(-20, y - 2);
	ctx.quadraticCurveTo(-8, y - crown, 10, y - crown - 4);
	ctx.quadraticCurveTo(32, y - crown + 8, 32, y + 2);
	ctx.quadraticCurveTo(22, y - 12, 12, y - 8);
	ctx.quadraticCurveTo(2, y - 22, -8, y - 10);
	ctx.quadraticCurveTo(-16, y - 12, -20, y - 2);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(22, y - 2);
	ctx.quadraticCurveTo(36 + sway, y + 16, 28 + sway * .5, y + 40);
	ctx.quadraticCurveTo(20, y + 18, 16, y);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(-12, y);
	ctx.quadraticCurveTo(-24 - sway * .4, y + 18, -14, y + 36);
	ctx.quadraticCurveTo(-6, y + 16, -4, y + 2);
	ctx.closePath();
	ctx.fill();
	strokeInk$1(ctx, ink, 1.05);
}
function drawChonmage(ctx, y, sway, ink) {
	ctx.fillStyle = "#16120f";
	ctx.beginPath();
	ctx.ellipse(-2, y - 8, 26, 28, 0, Math.PI * .05, Math.PI * .95);
	ctx.fill();
	ctx.beginPath();
	ctx.ellipse(2 + sway, y - 34, 8, 11, .5, 0, Math.PI * 2);
	ctx.fill();
	strokeInk$1(ctx, ink, 1);
}
function drawPate(ctx, y, ink) {
	ctx.fillStyle = FACE_MAN;
	ctx.beginPath();
	ctx.ellipse(4, y - 16, 14, 11, 0, Math.PI, 0, true);
	ctx.fill();
	ctx.fillStyle = "#16120f";
	ctx.beginPath();
	ctx.moveTo(-16, y - 4);
	ctx.quadraticCurveTo(-6, y - 26, 8, y - 24);
	ctx.quadraticCurveTo(22, y - 20, 28, y);
	ctx.quadraticCurveTo(8, y - 14, -16, y - 4);
	ctx.fill();
	strokeInk$1(ctx, ink, 1);
}
function drawBrows(ctx, config, y, ink) {
	const high = config.brow === "hikimayu";
	const by = y - (high ? 18 : 12);
	ctx.strokeStyle = high ? "#3a2a28" : INK$1;
	ctx.lineWidth = ink.lw(high ? 1.15 : 1.7);
	ctx.beginPath();
	if (high) {
		ctx.moveTo(-6, by);
		ctx.quadraticCurveTo(2, by - 3, 10, by + 1);
		ctx.moveTo(14, by + 1);
		ctx.quadraticCurveTo(22, by - 3, 30, by + 2);
	} else {
		ctx.moveTo(-4, by + 2);
		ctx.quadraticCurveTo(4, by - 3, 12, by + 1);
		ctx.moveTo(16, by + 1);
		ctx.quadraticCurveTo(24, by - 2, 30, by + 3);
	}
	ctx.stroke();
}
function bijinEye(ctx, x, y, open, ink, flip) {
	const s = flip ? -1 : 1;
	ctx.strokeStyle = INK$1;
	ctx.lineWidth = ink.lw(2.15);
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(x - 9 * s, y + 1.5);
	ctx.quadraticCurveTo(x - 1 * s, y - 6.5 * open, x + 10 * s, y + 1);
	ctx.stroke();
	if (open > .35) {
		ctx.fillStyle = INK$1;
		ctx.beginPath();
		ctx.ellipse(x + 1.5 * s, y - .4 * open, 1.6, 2.1 * open, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#fffaf4";
		ctx.fillRect(x + .4 * s, y - 1.6 * open, 1.3, 1.3);
		ctx.strokeStyle = "#9a3040";
		ctx.lineWidth = ink.lw(1.25);
		ctx.beginPath();
		ctx.moveTo(x + 8 * s, y + .5);
		ctx.lineTo(x + 13 * s, y + 3);
		ctx.stroke();
	}
}
function ornament(ctx, config, y, sway, ink) {
	if (config.ornament === "none") return;
	const x = (config.hair === "marumage" ? -16 : 2) + sway;
	const oy = y - (config.hair === "marumage" ? 36 : 48);
	if (config.ornament === "flower") {
		ctx.fillStyle = "#8e3a30";
		for (let i = 0; i < 5; i++) {
			const a = i / 5 * Math.PI * 2;
			ctx.beginPath();
			ctx.ellipse(x + Math.cos(a) * 5, oy + Math.sin(a) * 5, 3.2, 2, a, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.fillStyle = "#c4a15a";
		ctx.beginPath();
		ctx.arc(x, oy, 2, 0, Math.PI * 2);
		ctx.fill();
	} else if (config.ornament === "comb") {
		ctx.strokeStyle = "#c4a15a";
		ctx.lineWidth = ink.lw(1.5);
		ctx.beginPath();
		ctx.arc(x - 4, oy + 6, 11, Math.PI, 0);
		ctx.stroke();
	} else {
		ctx.strokeStyle = "#c4a15a";
		ctx.lineWidth = ink.lw(1.4);
		ctx.beginPath();
		ctx.moveTo(x - 18, oy + 8);
		ctx.lineTo(x + 16, oy - 2);
		ctx.stroke();
		ctx.fillStyle = "#8e3a30";
		ctx.beginPath();
		ctx.arc(x + 16, oy - 2, 2.5, 0, Math.PI * 2);
		ctx.fill();
	}
}
function drawHand(ctx, x, y, ink) {
	ctx.fillStyle = HAND;
	ctx.beginPath();
	ctx.ellipse(x, y, 6.2, 7.4, .35, 0, Math.PI * 2);
	ctx.fill();
	strokeInk$1(ctx, ink, .9);
	ctx.strokeStyle = "rgba(28,20,15,0.45)";
	ctx.lineWidth = ink.lw(.55);
	ctx.beginPath();
	ctx.moveTo(x - 2, y - 2);
	ctx.lineTo(x - 2, y + 4);
	ctx.moveTo(x + 1.4, y - 3);
	ctx.lineTo(x + 1.4, y + 4);
	ctx.stroke();
}
function drawProp(ctx, ch, config, world, hand, p, ink) {
	if (ch.hold === "cup") {
		const atMouth = p.raise > .72;
		drawSakeCup(ctx, atMouth ? 16 : hand.x + 8, atMouth ? p.headY + 26 : hand.y + 2, ink);
	}
	if (ch.hold === "pipe") {
		const atMouth = ch.pose === "smoke";
		drawKiseru(ctx, atMouth ? 20 : hand.x + 6, atMouth ? p.headY + 24 : hand.y, atMouth ? -.9 : -.35, ink);
		if (atMouth) smokeWisps(ctx, 30, p.headY + 10, world.time, ink);
	}
	if (ch.hold === "fan" && ch.pose !== "drink" && ch.pose !== "smoke" && p.raise < .45) drawSensu(ctx, hand.x + 4, hand.y - 2, world.time, p.walking, ink);
}
function drawSakeCup(ctx, x, y, ink) {
	ctx.save();
	ctx.translate(x, y);
	ctx.fillStyle = "#f4efe4";
	ctx.beginPath();
	ctx.moveTo(-9, 2);
	ctx.lineTo(-7, -6);
	ctx.lineTo(7, -6);
	ctx.lineTo(9, 2);
	ctx.closePath();
	ctx.fill();
	strokeInk$1(ctx, ink, .95);
	ctx.fillStyle = "#8e3a30";
	ctx.fillRect(-6, -5, 12, 2.4);
	ctx.restore();
}
function drawKiseru(ctx, x, y, rot, ink) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(rot);
	ctx.strokeStyle = "#3a2e24";
	ctx.lineWidth = ink.lw(1.5);
	ctx.beginPath();
	ctx.moveTo(-18, 2);
	ctx.quadraticCurveTo(0, -2, 20, -6);
	ctx.stroke();
	ctx.fillStyle = "#c4a15a";
	ctx.beginPath();
	ctx.ellipse(22, -7, 4, 3, .4, 0, Math.PI * 2);
	ctx.fill();
	strokeInk$1(ctx, ink, .7);
	ctx.restore();
}
function smokeWisps(ctx, x, y, time, ink) {
	ctx.save();
	ctx.strokeStyle = "rgba(50,44,38,0.4)";
	ctx.lineWidth = ink.lw(1);
	for (let i = 0; i < 3; i++) {
		const o = (time * .85 + i * .65) % 2;
		ctx.globalAlpha = 1 - o / 2;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.quadraticCurveTo(x + 8 + i * 3, y - 14 - o * 16, x + Math.sin(time + i) * 8, y - 28 - o * 18);
		ctx.stroke();
	}
	ctx.restore();
}
function drawSensu(ctx, x, y, time, walking, ink) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(-.7 + Math.sin(time * (walking ? 2.4 : 1.3)) * (walking ? .16 : .1));
	ctx.fillStyle = "#f6f0e4";
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.arc(0, 0, 30, -1.15, .45);
	ctx.closePath();
	ctx.fill();
	strokeInk$1(ctx, ink, 1);
	ctx.strokeStyle = "#8e3a30";
	ctx.lineWidth = ink.lw(.7);
	ctx.beginPath();
	for (let i = 0; i < 6; i++) {
		const a = -1.15 + i / 5 * 1.6;
		ctx.moveTo(0, 0);
		ctx.lineTo(Math.cos(a) * 30, Math.sin(a) * 30);
	}
	ctx.stroke();
	ctx.restore();
}
function cartouche(ctx, x, y, text, life, ink) {
	ctx.save();
	ctx.globalAlpha = Math.min(1, life * 1.4) * (life > 4.2 ? Math.max(0, 5 - life) : 1);
	ctx.font = `${Math.max(12, ink.lw(13))}px "Shippori Mincho", Palatino, serif`;
	const width = Math.min(300, ctx.measureText(text).width + 28);
	const h = 34;
	let left = x - width / 2;
	if (left < 48) left = 48;
	if (left + width > 1552) left = 1552 - width;
	const top = Math.max(36, y - h);
	ctx.fillStyle = "rgba(243, 234, 216, 0.94)";
	ctx.fillRect(left, top, width, h);
	ctx.strokeStyle = INK$1;
	ctx.lineWidth = ink.lw(1);
	ctx.strokeRect(left, top, width, h);
	ctx.fillStyle = INK$1;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(text, left + width / 2, top + h / 2 + 1);
	ctx.restore();
}
var CANON = {
	komachi: "ai",
	hanae: "shu",
	ofuku: "moss",
	arai: "persimmon",
	ume: "ochre",
	kichi: "sumi",
	otsu: "moss",
	jiro: "ai",
	saku: "murasaki",
	hei: "ochre"
};
var CANON_OBI = {
	komachi: "ochre",
	hanae: "ochre",
	ofuku: "sumi",
	arai: "ochre",
	ume: "persimmon",
	kichi: "persimmon",
	otsu: "sumi",
	jiro: "sumi",
	saku: "ochre",
	hei: "sumi"
};
var CANON_LINING = {
	komachi: "shu",
	hanae: "beni",
	ofuku: "gofun",
	arai: "gofun",
	ume: "shu",
	kichi: "persimmon",
	otsu: "gofun",
	jiro: "gofun",
	saku: "beni",
	hei: "sumi"
};
var CANON_PATTERN = {
	komachi: "seigaiha",
	hanae: "asanoha",
	ofuku: "shima",
	arai: "yagasuri",
	ume: "asanoha",
	kichi: "solid",
	otsu: "shima",
	jiro: "solid",
	saku: "shippo",
	hei: "solid"
};
/**
* Direction the unflipped plate is looking.
* Almost every print faces left. Jiro faces right.
* Sit plates for Hanae, Ume, and Hei face the other way.
* Draw scale is facing * native, so the nose points the way they walk.
*/
var PLATE_FACE = {
	komachi: {
		stand: -1,
		walk: -1,
		sit: -1
	},
	hanae: {
		stand: -1,
		walk: -1,
		sit: 1
	},
	ofuku: {
		stand: -1,
		walk: -1,
		sit: -1
	},
	arai: {
		stand: -1,
		walk: -1,
		sit: -1
	},
	ume: {
		stand: -1,
		walk: -1,
		sit: 1
	},
	kichi: {
		stand: -1,
		walk: -1,
		sit: -1
	},
	otsu: {
		stand: -1,
		walk: -1,
		sit: -1
	},
	jiro: {
		stand: 1,
		walk: 1,
		sit: 1
	},
	saku: {
		stand: -1,
		walk: -1,
		sit: -1
	},
	hei: {
		stand: -1,
		walk: -1,
		sit: 1
	}
};
var images = /* @__PURE__ */ new Map();
function load(src) {
	if (typeof Image === "undefined") return null;
	let img = images.get(src);
	if (!img) {
		img = new Image();
		img.decoding = "async";
		img.src = src;
		images.set(src, img);
	}
	return img.complete && img.naturalWidth > 0 ? img : null;
}
function roomPlate() {
	return load("/prints/hall.jpg");
}
function platePose(ch) {
	if (ch.sit > .45 || ch.pose === "sit") return "sit";
	if (ch.pose === "walk" && ch.sit < .2) {
		const step = Math.sin(ch.walkPhase * Math.PI * 2);
		return Math.abs(step) > .35 ? "walk" : "stand";
	}
	return "stand";
}
function srcFor(id, pose) {
	return `/prints/${id}-${pose}.webp`;
}
var styledCache = /* @__PURE__ */ new Map();
function hexRgb$1(hex) {
	const h = hex.replace("#", "");
	return {
		r: parseInt(h.slice(0, 2), 16),
		g: parseInt(h.slice(2, 4), 16),
		b: parseInt(h.slice(4, 6), 16)
	};
}
function dye(d, i, hex) {
	const tgt = hexRgb$1(hex);
	const r = d[i];
	const g0 = d[i + 1];
	const b = d[i + 2];
	const shade = .32 + (.3 * r + .59 * g0 + .11 * b) / 255 * .95;
	d[i] = Math.min(255, tgt.r * shade);
	d[i + 1] = Math.min(255, tgt.g * shade);
	d[i + 2] = Math.min(255, tgt.b * shade);
}
function isSkin(r, g0, b) {
	if (r < 145 || g0 < 105 || b < 80) return false;
	if (r < g0 || g0 + 6 < b) return false;
	if (r - b > 95) return false;
	if (r - g0 > 55) return false;
	return true;
}
/** 0 kimono, 1 obi, 2 lining, -1 leave alone (head, skin, ink). */
function garmentAt(x, y, w, h, r, g0, b) {
	const max = Math.max(r, g0, b);
	const min = Math.min(r, g0, b);
	const l = (max + min) / 2;
	const sat = max === 0 ? 0 : (max - min) / max;
	if (l < 42) return -1;
	if (isSkin(r, g0, b)) return -1;
	if (l > 188 && sat < .28 && r + 8 >= b) return -1;
	const ny = y / h;
	if (ny < .32) return -1;
	const nx = x / w;
	if (ny > .4 && ny < .54 && nx > .28 && nx < .72 && l < 150) return 1;
	if (ny > .3 && ny < .5 && (nx < .2 || nx > .8)) return 2;
	return 0;
}
function dyePlate(img, kimono, obi, lining, pattern) {
	if (!kimono && !obi && !lining && !pattern) return img;
	const key = `${img.src}|${kimono ?? ""}|${obi ?? ""}|${lining ?? ""}|${pattern ?? ""}`;
	const hit = styledCache.get(key);
	if (hit) return hit;
	const c = document.createElement("canvas");
	c.width = img.naturalWidth;
	c.height = img.naturalHeight;
	const g = c.getContext("2d", { willReadFrequently: true });
	if (!g) return img;
	g.drawImage(img, 0, 0);
	const image = g.getImageData(0, 0, c.width, c.height);
	const d = image.data;
	const mask = new Uint8Array(c.width * c.height);
	const w = c.width;
	const h = c.height;
	for (let y = 0, p = 0; y < h; y++) for (let x = 0; x < w; x++, p++) {
		const i = p * 4;
		if (d[i + 3] < 16) continue;
		const part = garmentAt(x, y, w, h, d[i], d[i + 1], d[i + 2]);
		if (part < 0) continue;
		const color = part === 1 ? obi : part === 2 ? lining : kimono;
		if (color) dye(d, i, color);
		if (part === 0) mask[p] = 1;
	}
	g.putImageData(image, 0, 0);
	if (pattern && pattern !== "solid") {
		const tile = patternTile(pattern);
		if (tile) {
			const pc = document.createElement("canvas");
			pc.width = w;
			pc.height = h;
			const pg = pc.getContext("2d");
			if (pg) {
				const pat = pg.createPattern(tile, "repeat");
				if (pat) {
					pat.setTransform(new DOMMatrix().scale(3.2, 3.2));
					pg.fillStyle = pat;
					pg.fillRect(0, 0, w, h);
					const pd = pg.getImageData(0, 0, w, h).data;
					const out = g.getImageData(0, 0, w, h);
					for (let i = 0, p = 0; i < out.data.length; i += 4, p++) {
						if (!mask[p]) continue;
						const a = pd[i + 3] / 255;
						if (a < .15) continue;
						const k = 1 - a * (1 - (.3 * pd[i] + .59 * pd[i + 1] + .11 * pd[i + 2]) / 255) * .48;
						out.data[i] *= k;
						out.data[i + 1] *= k;
						out.data[i + 2] *= k;
					}
					g.putImageData(out, 0, 0);
				}
			}
		}
	}
	styledCache.set(key, c);
	return c;
}
var masks = null;
var tintCache = /* @__PURE__ */ new Map();
function paintMask(img) {
	const c = document.createElement("canvas");
	c.width = img.width;
	c.height = img.height;
	const g = c.getContext("2d");
	if (!g) return null;
	g.putImageData(img, 0, 0);
	return c;
}
/** Paper, cushion weave, and byobu gold, sampled from the hall print. */
function ensureMasks(room) {
	if (masks) return masks;
	const w = 1600;
	const h = 900;
	const scratch = document.createElement("canvas");
	scratch.width = w;
	scratch.height = h;
	const sg = scratch.getContext("2d", { willReadFrequently: true });
	if (!sg) return null;
	sg.drawImage(room, 0, 0, w, h);
	const src = sg.getImageData(0, 0, w, h).data;
	const lantern = sg.createImageData(w, h);
	const cloth = sg.createImageData(w, h);
	const screen = sg.createImageData(w, h);
	const inCushion = (x, y) => {
		for (const cush of CUSHIONS) {
			const dx = (x - cush.x) / (cush.rx + 10);
			const dy = (y - cush.y) / (cush.ry + 8);
			if (dx * dx + dy * dy <= 1) return true;
		}
		return false;
	};
	for (let y = 0, p = 0; y < h; y++) for (let x = 0; x < w; x++, p++) {
		const i = p * 4;
		const r = src[i];
		const g0 = src[i + 1];
		const b = src[i + 2];
		if ((x > 748 && x < 912 && y > 122 && y < 234 || x > 440 && x < 530 && y > 426 && y < 534) && r > 158 && g0 > 108 && b > 48 && b < 205 && r - b > 38 && g0 - b > 12) lantern.data[i] = lantern.data[i + 1] = lantern.data[i + 2] = lantern.data[i + 3] = 255;
		if (inCushion(x, y) && r > 68 && r < 185 && g0 < 118 && b < 98 && r - g0 > 26 && r - b > 30) cloth.data[i] = cloth.data[i + 1] = cloth.data[i + 2] = cloth.data[i + 3] = 255;
		if (x > 1252 && x < 1538 && y > 250 && y < 642 && r > 88 && r < 205 && g0 > 52 && g0 < 168 && b < 92 && r - b > 46 && g0 - b > 16 && r + g0 + b > 190) screen.data[i] = screen.data[i + 1] = screen.data[i + 2] = screen.data[i + 3] = 255;
	}
	const lanternC = paintMask(lantern);
	const clothC = paintMask(cloth);
	const screenC = paintMask(screen);
	if (!lanternC || !clothC || !screenC) return null;
	masks = {
		lantern: lanternC,
		cloth: clothC,
		screen: screenC
	};
	return masks;
}
function coloredMask(mask, color, name) {
	const key = `${name}|${color}`;
	const hit = tintCache.get(key);
	if (hit) return hit;
	const c = document.createElement("canvas");
	c.width = 1600;
	c.height = 900;
	const g = c.getContext("2d");
	if (!g) return mask;
	g.fillStyle = color;
	g.fillRect(0, 0, 1600, 900);
	g.globalCompositeOperation = "destination-in";
	g.drawImage(mask, 0, 0);
	tintCache.set(key, c);
	return c;
}
function patternOnMask(mask, id, name) {
	const key = `pat|${name}|${id}`;
	const hit = tintCache.get(key);
	if (hit) return hit;
	const c = document.createElement("canvas");
	c.width = 1600;
	c.height = 900;
	const g = c.getContext("2d");
	const tile = patternTile(id);
	if (!g || !tile) return c;
	const pat = g.createPattern(tile, "repeat");
	if (!pat) return c;
	pat.setTransform(new DOMMatrix().scale(1.35, 1.35));
	g.fillStyle = pat;
	g.fillRect(0, 0, 1600, 900);
	g.globalCompositeOperation = "destination-in";
	g.drawImage(mask, 0, 0);
	tintCache.set(key, c);
	return c;
}
function wisps(ctx, x, y, time, inkish) {
	ctx.save();
	ctx.strokeStyle = inkish;
	ctx.lineWidth = 1.2;
	for (let i = 0; i < 3; i++) {
		const o = (time * .7 + i * .7) % 2.2;
		ctx.globalAlpha = .5 * (1 - o / 2.2);
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.quadraticCurveTo(x + 10 + i * 4, y - 16 - o * 14, x + Math.sin(time + i) * 10, y - 34 - o * 16);
		ctx.stroke();
	}
	ctx.restore();
}
function kiseru(ctx, x, y, s) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(-.7);
	ctx.strokeStyle = "#2a2420";
	ctx.lineWidth = Math.max(1.1, 1.6 * s);
	ctx.beginPath();
	ctx.moveTo(-16 * s, 0);
	ctx.quadraticCurveTo(0, -2 * s, 22 * s, -4 * s);
	ctx.stroke();
	ctx.fillStyle = "#a68448";
	ctx.beginPath();
	ctx.ellipse(24 * s, -5 * s, 4 * s, 2.6 * s, .3, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
}
function drawPlateCast(ctx, world, settings, selected, ink) {
	const items = [];
	items.push({
		y: 120,
		draw: () => drawRoomTints(ctx, settings)
	});
	items.push({
		y: BRAZIER.y,
		draw: () => {
			drawHibachi(ctx, BRAZIER.x, BRAZIER.y, ink);
			wisps(ctx, BRAZIER.x, BRAZIER.y - 10, world.time, "rgba(70,60,50,0.55)");
		}
	});
	for (const table of TEA_TABLES) {
		items.push({
			y: table.pot.y,
			draw: () => drawPot(ctx, table.pot.x, table.pot.y, settings, ink)
		});
		items.push({
			y: table.sweet.y,
			draw: () => drawSweet(ctx, table.sweet.x, table.sweet.y, ink)
		});
		for (const cup of table.cups) {
			if (world.cups.find((c) => c.id === cup.id)?.holder) continue;
			items.push({
				y: cup.y,
				draw: () => drawCup$1(ctx, cup.x, cup.y - 6, 1.2, settings, ink)
			});
		}
	}
	items.push({
		y: PIPE_TRAY.y - 4,
		draw: () => drawPipeTray(ctx, world, settings, ink)
	});
	for (const ch of world.chars) {
		const config = settings.chars.find((c) => c.id === ch.id);
		if (!config || !config.present) continue;
		items.push({
			y: ch.y,
			draw: () => drawOne(ctx, ch, config, world, settings, selected === ch.id, ink)
		});
	}
	if (settings.env.animals) for (const pet of world.pets) items.push({
		y: pet.y,
		draw: () => drawPet(ctx, pet, world)
	});
	items.sort((a, b) => a.y - b.y);
	for (const item of items) item.draw();
}
function drawRoomTints(ctx, settings) {
	const room = roomPlate();
	if (!room) return;
	const m = ensureMasks(room);
	if (!m) return;
	if (settings.env.wood !== "persimmon") {
		ctx.save();
		ctx.globalAlpha = .38;
		ctx.globalCompositeOperation = "multiply";
		ctx.drawImage(coloredMask(m.cloth, pigmentHex(settings.env.wood), "cloth"), 0, 0);
		ctx.restore();
	}
	if (settings.env.lanternPaper !== "ochre") {
		ctx.save();
		ctx.globalAlpha = .42;
		ctx.globalCompositeOperation = "multiply";
		ctx.drawImage(coloredMask(m.lantern, pigmentHex(settings.env.lanternPaper), "lamp"), 0, 0);
		ctx.restore();
	}
	if (settings.env.screen !== "solid") {
		ctx.save();
		ctx.globalAlpha = .42;
		ctx.drawImage(patternOnMask(m.screen, settings.env.screen, "screen"), 0, 0);
		ctx.drawImage(patternOnMask(m.cloth, settings.env.screen, "cushpat"), 0, 0);
		ctx.restore();
	}
}
function drawPot(ctx, x, base, settings, ink) {
	const glaze = pigmentHex(settings.env.glaze);
	ctx.save();
	ctx.translate(x, base);
	ctx.fillStyle = glaze;
	ctx.strokeStyle = "#1c140f";
	ctx.lineWidth = Math.max(1.2, ink.lw(1.1));
	ctx.beginPath();
	ctx.ellipse(0, -4, 16, 5, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.ellipse(0, -16, 24, 13, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.ellipse(0, -28, 13, 5, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.ellipse(0, -32, 14, 3.6, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "#1c140f";
	ctx.fillRect(-1.5, -40, 3, 8);
	ctx.strokeStyle = "#1c140f";
	ctx.beginPath();
	ctx.moveTo(20, -18);
	ctx.quadraticCurveTo(36, -20, 38, -32);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(-22, -16, 10, Math.PI * .55, Math.PI * 1.5);
	ctx.stroke();
	ctx.restore();
}
function drawCup$1(ctx, x, y, s, settings, ink) {
	const glaze = pigmentHex(settings.env.glaze);
	ctx.save();
	ctx.translate(x, y);
	ctx.fillStyle = glaze;
	ctx.strokeStyle = "#1c140f";
	ctx.lineWidth = ink.lw(.9);
	ctx.beginPath();
	ctx.moveTo(-8 * s, -2 * s);
	ctx.lineTo(-9 * s, 6 * s);
	ctx.lineTo(9 * s, 6 * s);
	ctx.lineTo(8 * s, -2 * s);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.ellipse(0, -2 * s, 8.4 * s, 3.2 * s, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "rgba(28,20,14,0.4)";
	ctx.beginPath();
	ctx.ellipse(0, -2 * s, 3.6 * s, 1.5 * s, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
}
function drawSweet(ctx, x, base, ink) {
	ctx.save();
	ctx.translate(x, base);
	ctx.fillStyle = "#6e2e28";
	ctx.strokeStyle = "#1c140f";
	ctx.lineWidth = ink.lw(.8);
	ctx.beginPath();
	ctx.ellipse(0, -2, 14, 5, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "#f3e2c4";
	ctx.beginPath();
	ctx.ellipse(-3, -5, 4, 2.2, -.3, 0, Math.PI * 2);
	ctx.ellipse(4, -4, 3.2, 1.8, .4, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
}
function drawHibachi(ctx, x, base, ink) {
	ctx.save();
	ctx.translate(x, base);
	ctx.fillStyle = "#241814";
	ctx.strokeStyle = "#120c0a";
	ctx.lineWidth = ink.lw(1.2);
	ctx.beginPath();
	ctx.ellipse(0, 0, 34, 12, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "#3a241c";
	ctx.beginPath();
	ctx.ellipse(0, -4, 22, 7, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "#9a3418";
	ctx.beginPath();
	ctx.ellipse(-6, -5, 5, 2.4, 0, 0, Math.PI * 2);
	ctx.ellipse(7, -4, 4, 2, .2, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "#e8c56a";
	ctx.beginPath();
	ctx.ellipse(-5, -6, 1.6, .8, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
}
function drawPipeTray(ctx, world, settings, ink) {
	ctx.save();
	ctx.translate(PIPE_TRAY.x, PIPE_TRAY.y);
	ctx.fillStyle = pigmentHex(settings.env.wood);
	ctx.strokeStyle = "#1c140f";
	ctx.lineWidth = ink.lw(1);
	ctx.beginPath();
	ctx.ellipse(0, 0, 34, 12, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	if (!world.pipeHolder) {
		ctx.save();
		ctx.translate(-2, -3);
		ctx.rotate(-.35);
		ctx.lineWidth = ink.lw(1.4);
		ctx.beginPath();
		ctx.moveTo(-18, 0);
		ctx.quadraticCurveTo(0, -2, 22, -3);
		ctx.stroke();
		ctx.fillStyle = "#c4a15a";
		ctx.beginPath();
		ctx.ellipse(24, -4, 4.5, 2.6, .2, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	ctx.restore();
}
function drawPet(ctx, pet, world) {
	const pose = pet.pose === "sit" && pet.kind === "dog" ? "stand" : pet.pose === "walk" && pet.kind === "cat" ? "stand" : pet.pose;
	const img = load(`/prints/${pet.kind}-${pose}.webp`) ?? load(`/prints/${pet.kind}-stand.webp`);
	if (!img) return;
	const s = figureScale(pet.y);
	const x = screenFootX(pet.x, pet.y);
	const h = (pet.kind === "cat" ? 58 : 86) * s * (pose === "sit" ? .92 : 1);
	const w = h * (img.naturalWidth / img.naturalHeight);
	const bob = pet.pose === "walk" ? -Math.abs(Math.sin(pet.phase * 8)) * 3.2 * s : Math.sin(world.time * 1.4 + pet.x) * -1.2 * s;
	const native = pet.kind === "cat" ? 1 : -1;
	ctx.save();
	ctx.translate(x, pet.y + bob);
	ctx.fillStyle = "rgba(28,18,12,0.18)";
	ctx.beginPath();
	ctx.ellipse(0, 3, (pet.kind === "dog" ? 28 : 18) * s, 5 * s, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.scale(pet.facing * native, 1);
	ctx.drawImage(img, -w / 2, -h, w, h);
	ctx.restore();
}
function drawOne(ctx, ch, config, world, settings, selected, ink) {
	const pose = platePose(ch);
	const img = load(srcFor(ch.id, pose)) ?? load(srcFor(ch.id, "stand"));
	if (!img) return;
	const s = figureScale(ch.y) * config.stature;
	const x = screenFootX(ch.x, ch.y);
	const y = ch.y;
	const h = (pose === "sit" ? 156 : 200) * s;
	const w = h * (img.naturalWidth / img.naturalHeight);
	const idle = Math.sin(world.time * .9 + ch.x * .01);
	const walking = ch.pose === "walk" && ch.sit < .2;
	const bob = walking ? -Math.abs(Math.sin(ch.walkPhase * Math.PI * 2)) * 5 * s : idle * -2.2 * s;
	const breath = 1 + Math.sin(world.time * 1.35 + ch.y) * .012;
	const native = PLATE_FACE[ch.id]?.[pose] ?? -1;
	const drawSign = ch.facing * native;
	const source = dyePlate(img, CANON[ch.id] && config.pigment !== CANON[ch.id] ? pigmentHex(config.pigment) : null, CANON_OBI[ch.id] && config.obi !== CANON_OBI[ch.id] ? pigmentHex(config.obi) : null, CANON_LINING[ch.id] && config.lining !== CANON_LINING[ch.id] ? pigmentHex(config.lining) : null, CANON_PATTERN[ch.id] && config.pattern !== CANON_PATTERN[ch.id] && config.pattern !== "solid" ? config.pattern : null);
	ctx.save();
	ctx.translate(x, y + bob);
	const stride = walking ? Math.sin(ch.walkPhase * Math.PI * 2) : idle * .15;
	ctx.rotate(ch.facing * stride * .045);
	ctx.fillStyle = "rgba(28,18,12,0.22)";
	ctx.beginPath();
	ctx.ellipse(0, 4, (pose === "sit" ? 62 : 40) * s, 8 * s, 0, 0, Math.PI * 2);
	ctx.fill();
	if (selected) {
		ctx.strokeStyle = "#8e3a30";
		ctx.lineWidth = ink.lw(1.6);
		ctx.beginPath();
		ctx.ellipse(0, 6, 52 * s, 11 * s, 0, 0, Math.PI * 2);
		ctx.stroke();
	}
	ctx.save();
	ctx.scale(drawSign, breath);
	if (settings.env.misregister > .05) {
		ctx.save();
		ctx.globalAlpha = .32 * settings.env.misregister;
		ctx.drawImage(source, -w / 2 + 5, -h - 1, w, h);
		ctx.restore();
	}
	ctx.drawImage(source, -w / 2, -h, w, h);
	ctx.restore();
	if (ch.hold === "pipe" || ch.pose === "smoke") {
		const px = ch.facing * 18 * s;
		const py = -h * (pose === "sit" ? .58 : .68);
		kiseru(ctx, px, py, s);
		wisps(ctx, px + ch.facing * 12 * s, py - 8 * s, world.time, "rgba(40,34,28,0.5)");
	} else if (ch.hold === "cup" || ch.pose === "drink") {
		const px = ch.facing * 16 * s;
		const py = -h * (ch.pose === "drink" ? .52 + ch.raise * .12 : .5);
		drawCup$1(ctx, px, py, Math.max(.7, s), settings, ink);
		wisps(ctx, px, py - 10 * s, world.time * .8, "rgba(90,80,70,0.4)");
	}
	ctx.restore();
}
/** Where the sheet is looking, in world pixels. Zoom lives on the house settings. */
var sheet = {
	x: 800,
	y: 450
};
function layoutFor(vw, vh) {
	const m = vw < 700 ? 8 : 26;
	const maxW = vw - m * 2;
	const maxH = vh - m * 2;
	let w = maxW;
	let h = w / (16 / 9);
	if (h > maxH) {
		h = maxH;
		w = h * (16 / 9);
	}
	return {
		x: (vw - w) / 2,
		y: (vh - h) / 2,
		w,
		h,
		scale: w / 1600
	};
}
function clientToWorld(vw, vh, px, py, zoom) {
	const lay = layoutFor(vw, vh);
	const s = lay.scale * zoom;
	const cx = lay.x + lay.w / 2;
	const cy = lay.y + lay.h / 2;
	return {
		x: (px - cx) / s + sheet.x,
		y: (py - cy) / s + sheet.y
	};
}
var INK = "#1c140f";
var grain = null;
function grainTile() {
	if (grain) return grain;
	const c = document.createElement("canvas");
	c.width = 256;
	c.height = 256;
	const g = c.getContext("2d");
	if (!g) return c;
	const img = g.createImageData(256, 256);
	let s = 99;
	const rnd = () => {
		s = s * 16807 % 2147483647;
		return (s & 2147483646) / 2147483647;
	};
	for (let i = 0; i < img.data.length; i += 4) {
		const n = rnd();
		const v = 150 + n * 90;
		img.data[i] = v;
		img.data[i + 1] = v - 8;
		img.data[i + 2] = v - 20;
		img.data[i + 3] = n > .82 ? 70 : n > .55 ? 28 : 10;
	}
	g.putImageData(img, 0, 0);
	grain = c;
	return c;
}
function hexRgb(hex) {
	const h = hex.replace("#", "");
	return {
		r: parseInt(h.slice(0, 2), 16),
		g: parseInt(h.slice(2, 4), 16),
		b: parseInt(h.slice(4, 6), 16)
	};
}
function mix(a, b, t) {
	const A = hexRgb(a);
	const B = hexRgb(b);
	const f = (x, y) => Math.round(x + (y - x) * t);
	const n = (v) => v.toString(16).padStart(2, "0");
	return `#${n(f(A.r, B.r))}${n(f(A.g, B.g))}${n(f(A.b, B.b))}`;
}
function exteriorColor(theme, hour) {
	return mix(mix(theme.exterior, "#c4846a", .55), theme.exterior, Math.min(1, hour * 1.15));
}
function strokeInk(ctx, ink, px = 1.45) {
	ctx.strokeStyle = INK;
	ctx.lineWidth = ink.lw(px * (.75 + ink.weight));
	ctx.stroke();
}
function fillBlock(ctx, color, mis) {
	if (mis > .05) {
		ctx.save();
		ctx.translate(inkShift(mis), -.4 * mis);
		ctx.globalAlpha *= .22 + mis * .12;
		ctx.fillStyle = "#6e2438";
		ctx.fill();
		ctx.restore();
	}
	ctx.fillStyle = color;
	ctx.fill();
}
function inkShift(mis) {
	return 1.8 * mis;
}
function fillCloth(ctx, color, pattern, mis, tileScale = .22) {
	fillBlock(ctx, color, mis);
	const tile = patternTile(pattern);
	if (!tile) return;
	const pat = ctx.createPattern(tile, "repeat");
	if (!pat) return;
	pat.setTransform(new DOMMatrix().scale(tileScale, tileScale));
	ctx.save();
	ctx.clip();
	ctx.globalAlpha = .58;
	ctx.fillStyle = pat;
	ctx.fill();
	ctx.restore();
}
function renderFrame(ctx, vw, vh, world, settings, selected) {
	const lay = layoutFor(vw, vh);
	const theme = themeById(settings.env.theme);
	ctx.clearRect(0, 0, vw, vh);
	ctx.fillStyle = "#100e0c";
	ctx.fillRect(0, 0, vw, vh);
	const sheen = ctx.createLinearGradient(0, 0, 0, vh);
	sheen.addColorStop(0, "rgba(255,244,220,0.04)");
	sheen.addColorStop(.45, "rgba(255,244,220,0)");
	sheen.addColorStop(1, "rgba(0,0,0,0.35)");
	ctx.fillStyle = sheen;
	ctx.fillRect(0, 0, vw, vh);
	ctx.save();
	const zoom = settings.env.zoom;
	ctx.translate(lay.x + lay.w / 2, lay.y + lay.h / 2);
	ctx.scale(lay.scale * zoom, lay.scale * zoom);
	ctx.translate(-sheet.x, -sheet.y);
	drawPrint(ctx, world, settings, theme, {
		lw: (px) => px / (lay.scale * zoom),
		mis: settings.env.misregister,
		weight: settings.env.inkWeight
	}, selected);
	ctx.restore();
	ctx.save();
	ctx.strokeStyle = "rgba(232, 214, 180, 0.18)";
	ctx.lineWidth = 1;
	ctx.strokeRect(lay.x - 6, lay.y - 6, lay.w + 12, lay.h + 12);
	ctx.restore();
}
function drawPrint(ctx, world, settings, theme, ink, selected) {
	roundedClip(ctx);
	const room = roomPlate();
	if (room) {
		ctx.drawImage(room, 0, 0, 1600, 900);
		drawPlateCast(ctx, world, settings, selected, ink);
		drawMotes(ctx, world);
		drawHour(ctx, settings.env.hour, theme);
		drawLanternLight(ctx, settings.env.lantern, world.time);
		drawInkWeight(ctx, settings.env.inkWeight);
		drawVignette(ctx, settings.env.paperAge, theme);
		drawMargin(ctx, ink);
		ctx.restore();
		return;
	}
	ctx.fillStyle = theme.paper;
	ctx.fillRect(0, 0, 1600, 900);
	drawArchitecture(ctx, theme, exteriorColor(theme, settings.env.hour), settings, ink, world.time);
	drawTatami(ctx, theme, ink);
	const items = [];
	items.push({
		y: 548,
		draw: () => drawByobu(ctx, theme, settings, ink)
	});
	items.push({
		y: TABLE.y + 36,
		draw: () => drawTable(ctx, world, theme, ink)
	});
	items.push({
		y: STAND.y,
		draw: () => drawStand(ctx, settings, ink)
	});
	items.push({
		y: TRAY.y - 4,
		draw: () => drawTray(ctx, world, theme, ink)
	});
	items.push({
		y: 736,
		draw: () => drawLantern(ctx, theme, settings.env.lantern, world.time, ink)
	});
	for (const seat of SEATS) items.push({
		y: seat.y - 8,
		draw: () => drawCushion(ctx, seat.x, seat.y, seat.id === "right" ? "#8f3a32" : "#243e66", ink)
	});
	for (const ch of world.chars) {
		const config = settings.chars.find((c) => c.id === ch.id);
		if (!config) continue;
		items.push({
			y: ch.y,
			draw: () => drawFigure(ctx, ch, config, world, ink, selected === ch.id)
		});
	}
	items.push({
		y: 830,
		draw: () => drawCat(ctx, world.time, ink)
	});
	items.sort((a, b) => a.y - b.y);
	for (const item of items) item.draw();
	drawMotes(ctx, world);
	drawForeground(ctx, theme, ink);
	drawVignette(ctx, settings.env.paperAge, theme);
	drawMargin(ctx, ink);
	ctx.restore();
}
function roundedClip(ctx) {
	ctx.save();
	ctx.beginPath();
	const wob = (i, amp) => Math.sin(i * 1.7) * amp + Math.sin(i * .37 + 2) * amp * .6;
	const steps = 28;
	for (let i = 0; i <= steps; i++) {
		const x = 1600 * i / steps;
		const y = 8 + wob(i, 1.4);
		if (i === 0) ctx.moveTo(x, y);
		else ctx.lineTo(x, y);
	}
	for (let i = 0; i <= steps; i++) {
		const y = 900 * i / steps;
		ctx.lineTo(1592 + wob(i + 3, 1.6), y);
	}
	for (let i = steps; i >= 0; i--) {
		const x = 1600 * i / steps;
		ctx.lineTo(x, 892 + wob(i + 5, 1.5));
	}
	for (let i = steps; i >= 0; i--) {
		const y = 900 * i / steps;
		ctx.lineTo(8 + wob(i + 1, 1.4), y);
	}
	ctx.closePath();
	ctx.clip();
}
function drawArchitecture(ctx, theme, ext, settings, ink, time) {
	ctx.fillStyle = theme.wall;
	ctx.fillRect(0, 0, 1600, 430);
	ctx.fillStyle = theme.woodDeep;
	ctx.fillRect(0, 36, 1600, 28);
	ctx.fillStyle = theme.wood;
	ctx.fillRect(0, 40, 1600, 16);
	grainLines(ctx, 40, 44, 1520, 8, theme.woodDeep);
	drawShoji(ctx, 78, 78, 390, 230, ext, theme, ink, time);
	drawTokonoma(ctx, 500, 70, 470, 330, theme, ink, time);
	drawFusuma(ctx, 1e3, 78, 520, 310, theme, settings, ink);
	post(ctx, 70, 64, 390, theme);
	post(ctx, 488, 64, 390, theme);
	post(ctx, 990, 64, 390, theme);
	post(ctx, 1528, 64, 390, theme);
	ctx.fillStyle = theme.woodDeep;
	ctx.fillRect(40, 408, 1520, 16);
	ctx.fillStyle = theme.wood;
	ctx.fillRect(40, 408, 1520, 8);
}
function post(ctx, x, y, h, theme) {
	ctx.fillStyle = theme.wood;
	ctx.fillRect(x, y, 18, h);
	ctx.fillStyle = theme.woodDeep;
	ctx.fillRect(x, y, 3, h);
	grainLines(ctx, x + 4, y + 8, 10, h - 16, theme.woodDeep);
}
function grainLines(ctx, x, y, w, h, color) {
	ctx.save();
	ctx.strokeStyle = color;
	ctx.globalAlpha = .35;
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.bezierCurveTo(x + w * .3, y + h * .2, x + w * .2, y + h * .6, x + w * .8, y + h);
	ctx.stroke();
	ctx.restore();
}
function drawShoji(ctx, x, y, w, h, ext, theme, ink, time) {
	ctx.save();
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.clip();
	ctx.fillStyle = ext;
	ctx.fillRect(x, y, w, h);
	ctx.fillStyle = theme.moon;
	ctx.beginPath();
	ctx.arc(x + w * .72, y + h * .38, 28, 0, Math.PI * 2);
	ctx.fill();
	drawPine(ctx, x + 30, y + h - 10, theme);
	ctx.restore();
	ctx.fillStyle = "#efe6d4";
	ctx.globalAlpha = .78;
	const cols = 7;
	const rows = 5;
	const cw = w / cols;
	const rh = h / rows;
	for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) ctx.fillRect(x + c * cw + 3, y + r * rh + 3, cw - 6, rh - 6);
	ctx.globalAlpha = 1;
	ctx.strokeStyle = theme.woodDeep;
	ctx.lineWidth = ink.lw(1.4);
	ctx.strokeRect(x, y, w, h);
	ctx.beginPath();
	for (let c = 1; c < cols; c++) {
		ctx.moveTo(x + c * cw, y);
		ctx.lineTo(x + c * cw, y + h);
	}
	for (let r = 1; r < rows; r++) {
		ctx.moveTo(x, y + r * rh);
		ctx.lineTo(x + w, y + r * rh);
	}
	ctx.stroke();
	drawMoth(ctx, x + w * .72 + Math.sin(time * .7) * 36, y + 48 + Math.cos(time * .9) * 16, time);
}
function drawPine(ctx, x, y, theme) {
	ctx.strokeStyle = "#0e1410";
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.moveTo(x + 40, y);
	ctx.quadraticCurveTo(x + 10, y - 80, x + 70, y - 150);
	ctx.stroke();
	ctx.fillStyle = "#14241c";
	for (const [dx, dy, r] of [
		[
			70,
			-150,
			28
		],
		[
			48,
			-132,
			22
		],
		[
			96,
			-128,
			20
		],
		[
			30,
			-100,
			18
		],
		[
			78,
			-108,
			16
		]
	]) {
		ctx.beginPath();
		ctx.ellipse(x + dx, y + dy, r, r * .62, -.4, 0, Math.PI * 2);
		ctx.fill();
	}
}
function drawMoth(ctx, x, y, time) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(Math.sin(time * 3) * .4);
	ctx.fillStyle = "rgba(243,228,210,0.85)";
	ctx.beginPath();
	ctx.ellipse(-6, 0, 7, 3.2, -.5, 0, Math.PI * 2);
	ctx.ellipse(6, 0, 7, 3.2, .5, 0, Math.PI * 2);
	ctx.fill();
	ctx.strokeStyle = INK;
	ctx.lineWidth = .8;
	ctx.beginPath();
	ctx.moveTo(0, -3);
	ctx.lineTo(0, 3);
	ctx.stroke();
	ctx.restore();
}
function drawTokonoma(ctx, x, y, w, h, theme, ink, time) {
	ctx.fillStyle = mix(theme.wall, "#000000", .08);
	ctx.fillRect(x, y, w, h);
	ctx.strokeStyle = theme.woodDeep;
	ctx.lineWidth = ink.lw(1.6);
	ctx.strokeRect(x, y, w, h);
	ctx.fillStyle = theme.wood;
	ctx.beginPath();
	ctx.moveTo(x + 18, y);
	ctx.quadraticCurveTo(x + 28, y + h * .4, x + 14, y + h);
	ctx.lineTo(x + 30, y + h);
	ctx.quadraticCurveTo(x + 42, y + h * .5, x + 34, y);
	ctx.closePath();
	ctx.fill();
	ctx.strokeStyle = theme.woodDeep;
	ctx.stroke();
	const sx = x + 150;
	const sy = y + 18;
	ctx.fillStyle = "#d8c7a4";
	ctx.fillRect(sx, sy, 170, 250);
	ctx.strokeStyle = INK;
	ctx.lineWidth = ink.lw(1.1);
	ctx.strokeRect(sx, sy, 170, 250);
	ctx.fillStyle = theme.woodDeep;
	ctx.fillRect(sx - 8, sy - 8, 186, 10);
	ctx.fillRect(sx - 8, sy + 248, 186, 10);
	drawMask(ctx, sx + 85, sy + 118, time, ink);
	ctx.fillStyle = "#2a2420";
	ctx.beginPath();
	ctx.moveTo(x + 80, y + h - 18);
	ctx.lineTo(x + 98, y + h - 70);
	ctx.lineTo(x + 122, y + h - 70);
	ctx.lineTo(x + 140, y + h - 18);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.strokeStyle = "#3e5c45";
	ctx.lineWidth = ink.lw(1.3);
	ctx.beginPath();
	ctx.moveTo(x + 110, y + h - 70);
	ctx.quadraticCurveTo(x + 160, y + h - 120, x + 150, y + h - 150);
	ctx.stroke();
	ctx.fillStyle = "#3e5c45";
	ctx.beginPath();
	ctx.ellipse(x + 154, y + h - 154, 16, 7, .4, 0, Math.PI * 2);
	ctx.fill();
}
function drawMask(ctx, x, y, time, ink) {
	const cycle = time % 26 / 26;
	const open = cycle > .02 && cycle < .045 ? 1 : 0;
	ctx.save();
	ctx.translate(x, y);
	ctx.strokeStyle = "#8c7044";
	ctx.lineWidth = ink.lw(1.15);
	ctx.beginPath();
	ctx.arc(-34, 8, 22, .2, 1.4);
	ctx.arc(34, 8, 22, Math.PI - 1.4, Math.PI - .2);
	ctx.stroke();
	for (const s of [-1, 1]) {
		ctx.beginPath();
		ctx.ellipse(s * 40, -20, 8, 14, s * .6, 0, Math.PI * 2);
		ctx.stroke();
	}
	ctx.fillStyle = "#f4ead8";
	ctx.beginPath();
	ctx.ellipse(0, 0, 28, 40, 0, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, 1.2);
	ctx.strokeStyle = INK;
	ctx.lineWidth = ink.lw(1.3);
	ctx.beginPath();
	if (open) {
		ctx.ellipse(-10, -6, 6, 2.2, 0, 0, Math.PI * 2);
		ctx.stroke();
		ctx.beginPath();
		ctx.ellipse(10, -6, 6, 2.2, 0, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fillStyle = INK;
		ctx.beginPath();
		ctx.arc(-10, -6, 1.3, 0, Math.PI * 2);
		ctx.arc(10, -6, 1.3, 0, Math.PI * 2);
		ctx.fill();
	} else {
		ctx.moveTo(-16, -6);
		ctx.quadraticCurveTo(-10, -9, -4, -5);
		ctx.moveTo(4, -5);
		ctx.quadraticCurveTo(10, -9, 16, -6);
		ctx.stroke();
	}
	ctx.beginPath();
	ctx.moveTo(0, 2);
	ctx.quadraticCurveTo(4, 8, 0, 12);
	ctx.stroke();
	ctx.fillStyle = "#8e3a30";
	ctx.beginPath();
	ctx.ellipse(0, 20, 5, 2.4, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
}
function drawFusuma(ctx, x, y, w, h, theme, settings, ink) {
	const openW = 120;
	ctx.fillStyle = mix(exteriorColor(theme, settings.env.hour), "#000", .25);
	ctx.fillRect(x + w - openW, y, openW, h);
	ctx.fillStyle = theme.lantern;
	ctx.globalAlpha = .85;
	ctx.fillRect(x + w - 70, y + 70, 28, 46);
	ctx.globalAlpha = 1;
	ctx.strokeStyle = theme.woodDeep;
	ctx.strokeRect(x + w - 70, y + 70, 28, 46);
	drawPine(ctx, x + w - 150, y + h - 20, theme);
	const panels = 3;
	const pw = (w - openW) / panels;
	for (let i = 0; i < panels; i++) {
		const px = x + i * pw;
		ctx.fillStyle = "#e7dcc4";
		ctx.fillRect(px, y, pw - 6, h);
		drawPanelMotif(ctx, px, y, pw - 6, h, theme, settings.env.screen, i);
		ctx.strokeStyle = theme.woodDeep;
		ctx.lineWidth = ink.lw(1.5);
		ctx.strokeRect(px, y, pw - 6, h);
		ctx.fillStyle = theme.wood;
		ctx.fillRect(px, y, pw - 6, 8);
		ctx.fillRect(px, y + h - 8, pw - 6, 8);
	}
}
function drawPanelMotif(ctx, x, y, w, h, theme, pattern, i) {
	ctx.save();
	ctx.beginPath();
	ctx.rect(x + 6, y + 12, w - 12, h - 24);
	ctx.clip();
	if (pattern === "seigaiha" || pattern === "solid") {
		ctx.fillStyle = theme.gold;
		ctx.globalAlpha = .85;
		cloud(ctx, x + w * .4, y + 50 + i * 10, 70);
		cloud(ctx, x + w * .7, y + h * .55, 54);
		ctx.globalAlpha = 1;
		ctx.fillStyle = "#1a2420";
		ctx.beginPath();
		ctx.moveTo(x + 16, y + h - 20);
		ctx.quadraticCurveTo(x + w * .4, y + h * .45, x + w - 20, y + h * .62);
		ctx.lineTo(x + w - 10, y + h - 16);
		ctx.closePath();
		ctx.globalAlpha = .75;
		ctx.fill();
		ctx.globalAlpha = 1;
	} else {
		const tile = patternTile(pattern);
		if (tile) {
			const pat = ctx.createPattern(tile, "repeat");
			if (pat) {
				ctx.globalAlpha = .35;
				ctx.fillStyle = pat;
				ctx.fillRect(x, y, w, h);
				ctx.globalAlpha = 1;
			}
		}
	}
	ctx.restore();
}
function cloud(ctx, x, y, r) {
	ctx.beginPath();
	ctx.ellipse(x, y, r, r * .42, 0, 0, Math.PI * 2);
	ctx.ellipse(x - r * .45, y + 4, r * .55, r * .28, 0, 0, Math.PI * 2);
	ctx.ellipse(x + r * .4, y + 6, r * .5, r * .26, 0, 0, Math.PI * 2);
	ctx.fill();
}
function drawTatami(ctx, theme, ink) {
	for (const row of [
		{
			y: 430,
			h: 150,
			skew: 18
		},
		{
			y: 580,
			h: 175,
			skew: 28
		},
		{
			y: 755,
			h: 120,
			skew: 10
		}
	]) {
		const mats = 4;
		const mw = 1480 / mats;
		for (let i = 0; i < mats; i++) mat(ctx, 60 + i * mw, row.y, 362, row.h, row.skew, theme, ink, (i + (row.y > 500 ? 1 : 0)) % 2 === 0);
	}
}
function mat(ctx, x, y, w, h, skew, theme, ink, flip) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + w, y);
	ctx.lineTo(x + w + skew, y + h);
	ctx.lineTo(x + skew, y + h);
	ctx.closePath();
	ctx.fillStyle = theme.tatami;
	ctx.fill();
	ctx.save();
	ctx.clip();
	ctx.globalAlpha = .18;
	ctx.strokeStyle = "#6a5830";
	ctx.lineWidth = 1;
	ctx.beginPath();
	if (flip) for (let i = 8; i < w; i += 7) {
		ctx.moveTo(x + i, y);
		ctx.lineTo(x + i + skew, y + h);
	}
	else for (let i = 6; i < h; i += 6) {
		ctx.moveTo(x, y + i);
		ctx.lineTo(x + w + skew, y + i);
	}
	ctx.stroke();
	ctx.restore();
	ctx.strokeStyle = "#2a3144";
	ctx.lineWidth = ink.lw(3);
	ctx.stroke();
	ctx.strokeStyle = "#6e2a32";
	ctx.lineWidth = ink.lw(1.2);
	ctx.stroke();
}
function drawByobu(ctx, theme, settings, ink) {
	const x = 168;
	const y = 470;
	const pw = 52;
	const ph = 150;
	for (let i = 0; i < 4; i++) {
		const px = x + i * 55;
		const lift = Math.abs(i - 1.5) * 6;
		ctx.fillStyle = "#efe6d4";
		ctx.fillRect(px, y + lift, pw, ph - lift);
		ctx.save();
		ctx.beginPath();
		ctx.rect(px + 3, y + lift + 4, 46, ph - lift - 8);
		ctx.clip();
		const tile = patternTile(settings.env.screen === "solid" ? "seigaiha" : settings.env.screen);
		if (tile) {
			ctx.globalAlpha = .45;
			const pat = ctx.createPattern(tile, "repeat");
			if (pat) {
				ctx.fillStyle = pat;
				ctx.fillRect(px, y, pw, ph);
			}
			ctx.globalAlpha = 1;
		}
		ctx.fillStyle = theme.gold;
		ctx.globalAlpha = .8;
		cloud(ctx, px + pw / 2, 510 + lift, 18);
		ctx.globalAlpha = 1;
		ctx.restore();
		ctx.strokeStyle = theme.woodDeep;
		ctx.lineWidth = ink.lw(1.3);
		ctx.strokeRect(px, y + lift, pw, ph - lift);
	}
}
function drawCushion(ctx, x, y, color, ink) {
	ctx.save();
	ctx.translate(x, y);
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.ellipse(0, 0, 46, 16, 0, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, 1.15);
	ctx.strokeStyle = "rgba(255,244,230,0.35)";
	ctx.lineWidth = ink.lw(.8);
	ctx.beginPath();
	ctx.ellipse(0, 0, 34, 10, 0, 0, Math.PI * 2);
	ctx.stroke();
	ctx.restore();
}
function drawTable(ctx, world, theme, ink) {
	const x = TABLE.x;
	const y = TABLE.y;
	ctx.beginPath();
	ctx.moveTo(x - 120, y - 24);
	ctx.lineTo(x + 130, y - 18);
	ctx.lineTo(x + 150, y + 28);
	ctx.lineTo(x - 100, y + 34);
	ctx.closePath();
	ctx.fillStyle = "#1a1614";
	ctx.fill();
	strokeInk(ctx, ink, 1.2);
	ctx.strokeStyle = theme.gold;
	ctx.globalAlpha = .8;
	ctx.lineWidth = ink.lw(1);
	ctx.stroke();
	ctx.globalAlpha = 1;
	ctx.fillStyle = "#f3ead8";
	ctx.beginPath();
	ctx.moveTo(x - 10, y + 8);
	ctx.quadraticCurveTo(x - 18, y - 8, x - 8, y - 36);
	ctx.lineTo(x + 10, y - 36);
	ctx.quadraticCurveTo(x + 20, y - 8, x + 14, y + 8);
	ctx.closePath();
	ctx.fill();
	strokeInk(ctx, ink, 1.1);
	ctx.fillStyle = "#8e3a30";
	ctx.fillRect(x - 6, y - 28, 14, 8);
	world.cups.filter((c) => !c.holder).forEach((c, i) => {
		drawCup(ctx, x + 36 + i * 28, y + 2, ink, false);
	});
}
function drawCup(ctx, x, y, ink, held) {
	ctx.save();
	ctx.translate(x, y);
	if (held) ctx.rotate(-.4);
	ctx.fillStyle = "#8e3a30";
	ctx.beginPath();
	ctx.ellipse(0, 0, 11, 4.5, 0, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, 1);
	ctx.fillStyle = "rgba(243,228,210,0.35)";
	ctx.beginPath();
	ctx.ellipse(0, -1, 7, 2.4, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.restore();
}
function drawStand(ctx, settings, ink) {
	const x = STAND.x;
	const y = STAND.y;
	ctx.strokeStyle = "#5c4030";
	ctx.lineWidth = ink.lw(2.2);
	ctx.beginPath();
	ctx.moveTo(x - 34, y);
	ctx.lineTo(x - 34, y - 150);
	ctx.moveTo(x + 34, y);
	ctx.lineTo(x + 34, y - 150);
	ctx.moveTo(x - 40, y - 128);
	ctx.lineTo(x + 40, y - 128);
	ctx.stroke();
	settings.chars.filter((c) => c.hasOuter && !c.wearingOuter).forEach((c, i) => {
		const ox = x - 8 + i * 14;
		ctx.beginPath();
		ctx.moveTo(ox - 28, y - 126);
		ctx.quadraticCurveTo(ox - 36, y - 40, ox - 22, y - 8);
		ctx.lineTo(ox + 26, y - 8);
		ctx.quadraticCurveTo(ox + 34, y - 50, ox + 24, y - 126);
		ctx.closePath();
		fillCloth(ctx, pigmentHex(c.outerPigment), c.outerPattern, .2);
		strokeInk(ctx, ink, 1.15);
	});
}
function drawTray(ctx, world, theme, ink) {
	const x = TRAY.x;
	const y = TRAY.y;
	ctx.fillStyle = "#2a211c";
	ctx.beginPath();
	ctx.ellipse(x, y, 36, 12, 0, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, 1);
	if (!world.pipeHolder) drawPipe(ctx, x, y - 8, .2, ink);
}
function drawPipe(ctx, x, y, rot, ink) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(rot);
	ctx.strokeStyle = "#3a2e24";
	ctx.lineWidth = ink.lw(1.6);
	ctx.beginPath();
	ctx.moveTo(-16, 0);
	ctx.lineTo(16, -2);
	ctx.stroke();
	ctx.fillStyle = "#c4a15a";
	ctx.beginPath();
	ctx.arc(18, -3, 3.2, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, .8);
	ctx.restore();
}
function drawLantern(ctx, theme, level, time, ink) {
	const x = 1410;
	const flicker = .85 + Math.sin(time * 5.1) * .05 + Math.sin(time * 2.2) * .04;
	ctx.fillStyle = theme.woodDeep;
	ctx.fillRect(1404, 532, 12, 168);
	ctx.fillStyle = theme.wood;
	ctx.fillRect(1382, 550, 56, 8);
	ctx.fillRect(1382, 652, 56, 8);
	const glow = mix(theme.lantern, "#fff3d2", .25 * level);
	ctx.globalAlpha = .55 + level * .45 * flicker;
	ctx.fillStyle = glow;
	ctx.fillRect(1386, 558, 48, 94);
	ctx.globalAlpha = 1;
	ctx.strokeStyle = theme.woodDeep;
	ctx.lineWidth = ink.lw(1.2);
	ctx.strokeRect(1386, 558, 48, 94);
	ctx.beginPath();
	ctx.moveTo(x, 558);
	ctx.lineTo(x, 652);
	ctx.moveTo(1386, 605);
	ctx.lineTo(1434, 605);
	ctx.stroke();
	if (level > .05) {
		ctx.save();
		ctx.globalAlpha = .08 * level * flicker;
		const g = ctx.createRadialGradient(x, 610, 10, x, 620, 180);
		g.addColorStop(0, theme.lantern);
		g.addColorStop(1, "rgba(0,0,0,0)");
		ctx.fillStyle = g;
		ctx.beginPath();
		ctx.arc(x, 610, 180, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	drawMoth(ctx, x + Math.sin(time * .8) * 40, 530 + Math.cos(time * 1.1) * 18, time);
}
function drawCat(ctx, time, ink) {
	ctx.save();
	ctx.translate(1240, 812);
	ctx.fillStyle = "#2a2420";
	ctx.beginPath();
	ctx.ellipse(0, 0, 28, 14, 0, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, 1.1);
	ctx.beginPath();
	ctx.ellipse(22, -6, 12, 10, .2, 0, Math.PI * 2);
	ctx.fill();
	strokeInk(ctx, ink, 1.1);
	ctx.beginPath();
	ctx.moveTo(16, -14);
	ctx.lineTo(14, -20);
	ctx.lineTo(20, -14);
	ctx.moveTo(24, -15);
	ctx.lineTo(26, -22);
	ctx.lineTo(28, -13);
	ctx.stroke();
	const flick = Math.sin(time * .5) > .97 ? -4 : 0;
	ctx.beginPath();
	ctx.moveTo(26, -18 + flick);
	ctx.lineTo(30, -24 + flick);
	ctx.stroke();
	ctx.strokeStyle = "#e7dcc6";
	ctx.lineWidth = ink.lw(.7);
	ctx.beginPath();
	ctx.moveTo(18, -6);
	ctx.quadraticCurveTo(22, -4, 26, -6);
	ctx.stroke();
	ctx.strokeStyle = INK;
	ctx.lineWidth = ink.lw(1.4);
	ctx.beginPath();
	ctx.moveTo(-24, 2);
	ctx.quadraticCurveTo(-36, -18 + Math.sin(time * 1.4) * 4, -18, -16);
	ctx.stroke();
	ctx.restore();
}
function drawMotes(ctx, world) {
	for (const m of world.motes) {
		const a = Math.max(0, m.life / m.max);
		if (m.kind === "smoke") {
			ctx.fillStyle = `rgba(50, 44, 38, ${.18 * a})`;
			ctx.beginPath();
			ctx.ellipse(m.x, m.y, 8 + (1 - a) * 10, 6 + (1 - a) * 6, 0, 0, Math.PI * 2);
			ctx.fill();
		} else {
			ctx.save();
			ctx.translate(m.x, m.y);
			ctx.rotate(m.ph + world.time);
			ctx.fillStyle = `rgba(196, 120, 130, ${.75 * a})`;
			ctx.beginPath();
			ctx.ellipse(0, 0, 4, 2.2, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}
}
function drawForeground(ctx, theme, ink) {
	ctx.fillStyle = theme.woodDeep;
	ctx.fillRect(0, 868, 1600, 32);
	ctx.fillStyle = theme.wood;
	ctx.fillRect(0, 868, 1600, 10);
	grainLines(ctx, 40, 874, 400, 8, theme.woodDeep);
}
function drawHour(ctx, hour, theme) {
	ctx.save();
	ctx.globalAlpha = .2;
	ctx.fillStyle = theme.exterior;
	ctx.fillRect(0, 0, 1600, 900);
	ctx.globalAlpha = 1;
	if (hour < .48) {
		ctx.fillStyle = `rgba(8, 12, 24, ${(.48 - hour) * .95})`;
		ctx.fillRect(0, 0, 1600, 900);
	} else if (hour > .64) {
		ctx.fillStyle = `rgba(186, 96, 48, ${(hour - .64) * .7})`;
		ctx.fillRect(0, 0, 1600, 900);
	}
	ctx.restore();
}
function drawLanternLight(ctx, level, time) {
	ctx.save();
	const dim = Math.max(0, .62 - level);
	if (dim > .02) {
		ctx.fillStyle = `rgba(6, 8, 16, ${dim * .82})`;
		ctx.fillRect(0, 0, 1600, 900);
	}
	const glow = Math.max(0, level - .18) * .62;
	if (glow > .02) {
		ctx.globalCompositeOperation = "screen";
		const flick = .9 + Math.sin(time * 2.6) * .1;
		for (const lamp of [{
			x: 816,
			y: 176,
			r: 280
		}, {
			x: 486,
			y: 486,
			r: 190
		}]) {
			const g = ctx.createRadialGradient(lamp.x, lamp.y, 8, lamp.x, lamp.y, lamp.r);
			g.addColorStop(0, `rgba(255, 214, 150, ${glow * flick})`);
			g.addColorStop(.42, `rgba(255, 168, 84, ${glow * .3})`);
			g.addColorStop(1, "rgba(255, 150, 60, 0)");
			ctx.fillStyle = g;
			ctx.fillRect(0, 0, 1600, 900);
		}
	}
	ctx.restore();
}
function drawInkWeight(ctx, weight) {
	if (weight < .04) return;
	ctx.save();
	ctx.globalCompositeOperation = "multiply";
	const k = Math.round(255 - weight * 48);
	ctx.fillStyle = `rgb(${k},${Math.max(0, k - 6)},${Math.max(0, k - 14)})`;
	ctx.fillRect(0, 0, 1600, 900);
	ctx.restore();
}
function drawVignette(ctx, age, theme) {
	ctx.save();
	ctx.globalCompositeOperation = "multiply";
	const g = ctx.createRadialGradient(800, 450, 200, 800, 480, 860);
	g.addColorStop(0, "rgba(255,255,255,0.15)");
	g.addColorStop(1, `rgba(90, 60, 40, ${.18 + age * .35})`);
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, 1600, 900);
	ctx.restore();
	const tile = grainTile();
	ctx.save();
	ctx.globalAlpha = .16 + age * .22;
	ctx.globalCompositeOperation = "multiply";
	const pat = ctx.createPattern(tile, "repeat");
	if (pat) {
		ctx.fillStyle = pat;
		ctx.fillRect(0, 0, 1600, 900);
	}
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = .05 + age * .12;
	ctx.fillStyle = "#8a5a32";
	for (const [sx, sy, r] of [
		[
			120,
			80,
			18
		],
		[
			1480,
			140,
			12
		],
		[
			200,
			820,
			16
		],
		[
			900,
			60,
			10
		],
		[
			1300,
			800,
			20
		]
	]) {
		ctx.beginPath();
		ctx.ellipse(sx, sy, r, r * .7, .2, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.restore();
}
function drawMargin(ctx, ink) {
	ctx.strokeStyle = INK;
	ctx.globalAlpha = .8;
	ctx.lineWidth = ink.lw(1.3);
	ctx.strokeRect(28, 22, 1544, 856);
	ctx.lineWidth = ink.lw(.6);
	ctx.strokeRect(34, 28, 1532, 844);
	ctx.globalAlpha = 1;
	ctx.fillStyle = "#8e3a30";
	ctx.fillRect(64, 800, 34, 34);
	ctx.fillStyle = "#f3ead8";
	ctx.font = `600 ${ink.lw(16)}px "Shippori Mincho", Palatino, serif`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("鏡", 81, 818);
	ctx.save();
	ctx.fillStyle = INK;
	ctx.globalAlpha = .75;
	ctx.font = `500 ${ink.lw(18)}px "Zen Old Mincho", Palatino, serif`;
	ctx.textAlign = "center";
	const label = "黒鏡";
	for (let i = 0; i < 2; i++) ctx.fillText(label[i] ?? "", 52, 160 + i * 28);
	ctx.restore();
}
function hitCharacter(world, settings, sx, sy) {
	let found = null;
	for (const ch of [...world.chars].sort((a, b) => a.y - b.y)) {
		const config = settings.chars.find((c) => c.id === ch.id);
		if (!config?.present) continue;
		const s = figureScale(ch.y) * config.stature;
		const x = screenFootX(ch.x, ch.y);
		const top = ch.y - 430 * s;
		const half = 90 * s;
		if (sx > x - half && sx < x + half && sy > top && sy < ch.y + 12) found = ch.id;
	}
	return found;
}
function Chrome() {
	const panel = useHouse((s) => s.panel);
	const paused = useHouse((s) => s.paused);
	const sound = useHouse((s) => s.sound);
	const setPanel = useHouse((s) => s.setPanel);
	const setPaused = useHouse((s) => s.setPaused);
	const setSound = useHouse((s) => s.setSound);
	const [, tick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => tick((n) => n + 1), 500);
		return () => window.clearInterval(id);
	}, []);
	const selected = useHouse((s) => s.selected);
	const settings = useHouse((s) => s.settings);
	const focus = settings.chars.find((c) => c.id === selected) ?? settings.chars[0];
	const world = getWorld();
	const line = focus ? activityLine(world, settings, focus.id) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pointer-events-none absolute inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ink-scroll flex items-center gap-3 pr-1 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "shrink-0 font-display text-lg tracking-widest text-ink sm:text-xl",
						children: "虚ろな家"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-4 w-px shrink-0 bg-ink/35",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 flex-1 truncate font-body text-sm tracking-wide text-ink",
						children: line
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex shrink-0 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: sound ? "Silence the room" : "Room tone",
								onClick: () => setSound(!sound),
								children: sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: paused ? "Continue" : "Hold still",
								onClick: () => setPaused(!paused),
								children: paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex size-11 items-center justify-center bg-vermilion text-sm text-paper",
								onClick: () => setPanel(!panel),
								"aria-label": panel ? "Close the house" : "Open the house",
								children: panel ? "閉" : "家"
							})
						]
					})
				]
			})
		}),
		paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute bottom-4 left-4 z-30 bg-paper px-3 py-2 font-display text-sm text-ink",
			children: "Still"
		}) : null,
		panel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {}) : null
	] });
}
function IconButton({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		title: label,
		onClick,
		className: "flex size-11 items-center justify-center text-ink",
		children
	});
}
function Panel() {
	const tab = useHouse((s) => s.tab);
	const setTab = useHouse((s) => s.setTab);
	const setPanel = useHouse((s) => s.setPanel);
	const settings = useHouse((s) => s.settings);
	const setEnv = useHouse((s) => s.setEnv);
	const restore = useHouse((s) => s.restore);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "paper-scroll absolute inset-x-0 bottom-0 z-40 flex h-3/4 flex-col border-t border-line sm:inset-y-0 sm:left-auto sm:right-0 sm:h-auto sm:w-96 sm:border-t-0 sm:border-l",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 px-4 pt-4 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl leading-none tracking-widest text-ink",
					children: "虚ろな家"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: "It keeps its own hours, whether or not you watch."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close the house",
					onClick: () => setPanel(false),
					className: "flex size-11 items-center justify-center text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
					active: tab === "room",
					onClick: () => setTab("room"),
					children: "Room"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
					active: tab === "people",
					onClick: () => setTab("people"),
					children: "Household"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex-1 overflow-y-auto px-4 pb-6",
				children: tab === "room" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-2 text-xs tracking-wide text-muted",
							children: "Pigment of the hour"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: THEMES.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEnv({ theme: theme.id }),
								className: "min-h-11 border px-2 text-left text-sm " + (settings.env.theme === theme.id ? "border-vermilion bg-paper-2 text-ink" : "border-line text-ink-soft"),
								children: theme.name
							}, theme.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Zoom",
							hint: "Scroll the sheet, or drag the mats",
							min: .65,
							max: 2.2,
							step: .05,
							value: settings.env.zoom,
							onChange: (zoom) => {
								sheet.x = 800;
								sheet.y = 450;
								setEnv({ zoom });
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Hour",
							hint: hourName(settings.env.hour),
							value: settings.env.hour,
							onChange: (hour) => setEnv({ hour })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Lantern",
							hint: settings.env.lantern > .66 ? "Bright" : settings.env.lantern > .33 ? "Warm" : "Low",
							value: settings.env.lantern,
							onChange: (lantern) => setEnv({ lantern })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
							label: "Lantern paper",
							value: settings.env.lanternPaper,
							onChange: (lanternPaper) => setEnv({ lanternPaper })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
							label: "Cushion dye",
							value: settings.env.wood,
							onChange: (wood) => setEnv({ wood })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
							label: "Tea glaze",
							value: settings.env.glaze,
							onChange: (glaze) => setEnv({ glaze })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "How inhabited",
							hint: settings.env.activity > .66 ? "Lively" : settings.env.activity > .33 ? "Ordinary" : "Quiet",
							value: settings.env.activity,
							onChange: (activity) => setEnv({ activity })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs tracking-wide text-muted",
							children: "Time’s pace"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: [
								.5,
								1,
								2,
								4
							].map((speed) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEnv({ speed }),
								className: "min-h-11 border text-sm " + (settings.env.speed === speed ? "border-vermilion bg-paper-2 text-ink" : "border-line text-ink-soft"),
								children: speed === .5 ? "½" : `${speed}×`
							}, speed))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Paper age",
							value: settings.env.paperAge,
							onChange: (paperAge) => setEnv({ paperAge })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Ink weight",
							value: settings.env.inkWeight,
							onChange: (inkWeight) => setEnv({ inkWeight })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Misregistration",
							hint: "The blocks drift",
							value: settings.env.misregister,
							onChange: (misregister) => setEnv({ misregister })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-wide text-muted",
								children: "Screen and cushion pattern"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "min-h-11 border border-line bg-paper-2 px-2 text-sm text-ink",
								value: settings.env.screen,
								onChange: (e) => setEnv({ screen: e.target.value }),
								children: PATTERNS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.id,
									children: p.name
								}, p.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Kiseru smoke",
							on: settings.env.smoke,
							onClick: () => setEnv({ smoke: !settings.env.smoke })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Drifting petals",
							on: settings.env.petals,
							onClick: () => setEnv({ petals: !settings.env.petals })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Cat and dog",
							on: settings.env.animals,
							onClick: () => setEnv({ animals: !settings.env.animals })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-2 text-xs tracking-wide text-muted",
							children: "Who is in the room"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: settings.chars.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: c.name,
								on: c.present,
								onClick: () => useHouse.getState().patchChar(c.id, { present: !c.present })
							}, c.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 border border-ink text-sm text-ink",
							onClick: restore,
							children: "Restore the first hour"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(People, {})
			})
		]
	});
}
function People() {
	const settings = useHouse((s) => s.settings);
	const selected = useHouse((s) => s.selected);
	const setSelected = useHouse((s) => s.setSelected);
	const person = settings.chars.find((c) => c.id === selected) ?? settings.chars[0];
	if (!person) return null;
	const world = getWorld();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: settings.chars.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(c.id),
					className: "flex min-h-11 items-center gap-2 border px-2 text-left text-sm " + (c.id === person.id ? "border-vermilion bg-paper-2 text-ink" : "border-line text-ink-soft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block size-3",
						style: { backgroundColor: pigmentHex(c.pigment) }
					}), c.name]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-ink",
					children: person.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: roleLabel(person.role)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink",
					children: activityLine(world, settings, person.id)
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
				label: "Kimono pigment",
				value: person.pigment,
				onChange: (pigment) => useHouse.getState().patchChar(person.id, { pigment })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternSelect, {
				label: "Kimono pattern",
				value: person.pattern,
				onChange: (pattern) => useHouse.getState().patchChar(person.id, { pattern })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
				label: "Lining",
				value: person.lining,
				onChange: (lining) => useHouse.getState().patchChar(person.id, { lining })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatches, {
				label: "Obi",
				value: person.obi,
				onChange: (obi) => useHouse.getState().patchChar(person.id, { obi })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs tracking-wide text-muted",
				children: "Temperament"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: TRAIT_LABELS.map((trait) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: trait.label,
					hint: trait.hint,
					value: person.traits[trait.key],
					onChange: (value) => useHouse.getState().setTrait(person.id, trait.key, value)
				}, trait.key))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-muted",
					children: "When the cup takes hold"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "min-h-11 border border-line bg-paper-2 px-2 text-sm text-ink",
					value: person.drinkStyle,
					onChange: (e) => useHouse.getState().patchChar(person.id, { drinkStyle: e.target.value }),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "talkative",
							children: "Talkative"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "sleepy",
							children: "Sleepy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "sentimental",
							children: "Sentimental"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "cross",
							children: "Cross"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: person.present ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink",
						onClick: () => injectPlan(person.id, "drink"),
						children: "Offer a cup"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink",
						onClick: () => injectPlan(person.id, "smoke"),
						children: "Pass the pipe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink",
						onClick: () => injectPlan(person.id, "sit"),
						children: "Let them sit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink",
						onClick: () => injectPlan(person.id, "wander"),
						children: "Send walking"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink",
						onClick: () => injectPlan(person.id, "converse"),
						children: "Seek company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink",
						onClick: () => injectPlan(person.id, "watch"),
						children: "Watch the room"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 border border-ink text-sm text-ink col-span-2",
						onClick: () => useHouse.getState().patchChar(person.id, { present: false }),
						children: "Ask them to step out"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "col-span-2 min-h-11 border border-ink text-sm text-ink",
					onClick: () => {
						useHouse.getState().patchChar(person.id, { present: true });
						injectPlan(person.id, "wander");
					},
					children: [
						"Call ",
						person.name,
						" in"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Ten adults, each a different print. Cloth pigment and pattern stay on the garment. Scroll to come closer."
			})
		]
	});
}
function TabButton({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "min-h-11 border-b-2 px-1 text-sm " + (active ? "border-vermilion text-ink" : "border-transparent text-muted"),
		children
	});
}
function Slider({ label, hint, value, onChange, min = 0, max = 1, step = .01 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex min-h-11 flex-col justify-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-ink",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: hint
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "ink-range",
			type: "range",
			min,
			max,
			step,
			value,
			"aria-label": label,
			onChange: (e) => onChange(Number(e.target.value))
		})]
	});
}
function Swatches({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
		className: "mb-2 text-xs tracking-wide text-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: PIGMENTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			title: p.name,
			"aria-label": p.name,
			onClick: () => onChange(p.id),
			className: "size-11 border " + (value === p.id ? "border-vermilion" : "border-line"),
			style: { backgroundColor: p.hex }
		}, p.id))
	})] });
}
function PatternSelect({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "min-h-11 border border-line bg-paper-2 px-2 text-sm text-ink",
			value,
			onChange: (e) => onChange(e.target.value),
			children: PATTERNS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: p.id,
				children: p.name
			}, p.id))
		})]
	});
}
function Toggle({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex min-h-11 items-center justify-between gap-3 border border-line px-3 text-left",
		"aria-pressed": on,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs " + (on ? "text-vermilion" : "text-muted"),
			children: on ? "On" : "Off"
		})]
	});
}
var ctx = null;
var stopCurrent = null;
function setAmbience(on) {
	if (!on) {
		stopCurrent?.();
		stopCurrent = null;
		return;
	}
	if (typeof window === "undefined") return;
	if (!ctx) {
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return;
		ctx = new AC();
	}
	ctx.resume();
	if (stopCurrent) return;
	const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	let last = 0;
	for (let i = 0; i < data.length; i++) {
		const white = Math.random() * 2 - 1;
		last = (last + .02 * white) / 1.02;
		data[i] = last * 3.5;
	}
	const src = ctx.createBufferSource();
	src.buffer = buffer;
	src.loop = true;
	const filter = ctx.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.value = 240;
	const gain = ctx.createGain();
	gain.gain.value = .03;
	src.connect(filter);
	filter.connect(gain);
	gain.connect(ctx.destination);
	src.start();
	stopCurrent = () => {
		try {
			src.stop();
		} catch {}
		gain.disconnect();
	};
}
function Stage() {
	const canvasRef = (0, import_react.useRef)(null);
	const hydrate = useHouse((s) => s.hydrate);
	const sound = useHouse((s) => s.sound);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		setAmbience(sound);
		return () => setAmbience(false);
	}, [sound]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		let raf = 0;
		let last = performance.now();
		const frame = (now) => {
			const dt = Math.min(.05, (now - last) / 1e3);
			last = now;
			const state = useHouse.getState();
			const world = getWorld();
			if (!state.paused) stepWorld(world, dt, state.settings, { setWearing: (id, wearing) => {
				useHouse.getState().patchChar(id, { wearingOuter: wearing });
			} });
			const ctx = canvas.getContext("2d");
			if (ctx) {
				const dpr = Math.min(window.devicePixelRatio || 1, 2);
				const w = canvas.clientWidth;
				const h = canvas.clientHeight;
				const bw = Math.max(1, Math.floor(w * dpr));
				const bh = Math.max(1, Math.floor(h * dpr));
				if (canvas.width !== bw || canvas.height !== bh) {
					canvas.width = bw;
					canvas.height = bh;
				}
				ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
				renderFrame(ctx, w, h, world, state.settings, state.selected);
			}
			raf = requestAnimationFrame(frame);
		};
		raf = requestAnimationFrame(frame);
		window.__kurokagami = {
			getWorld,
			getSettings: () => useHouse.getState().settings
		};
		const onKey = (e) => {
			if (e.key === " " && e.target === document.body) {
				e.preventDefault();
				useHouse.getState().setPaused(!useHouse.getState().paused);
			} else if (e.key === "Escape") useHouse.getState().setPanel(false);
			else if (e.key === "h" || e.key === "H") {
				const open = useHouse.getState().panel;
				useHouse.getState().setPanel(!open);
			}
		};
		window.addEventListener("keydown", onKey);
		const onWheel = (e) => {
			e.preventDefault();
			const rect = canvas.getBoundingClientRect();
			const state = useHouse.getState();
			const px = e.clientX - rect.left;
			const py = e.clientY - rect.top;
			const before = clientToWorld(rect.width, rect.height, px, py, state.settings.env.zoom);
			const zoom = Math.min(2.2, Math.max(.65, state.settings.env.zoom * (e.deltaY > 0 ? .92 : 1.08)));
			state.setEnv({ zoom });
			const after = clientToWorld(rect.width, rect.height, px, py, zoom);
			sheet.x += before.x - after.x;
			sheet.y += before.y - after.y;
			sheet.x = Math.min(1500, Math.max(100, sheet.x));
			sheet.y = Math.min(820, Math.max(80, sheet.y));
		};
		let drag = null;
		const onDown = (e) => {
			const rect = canvas.getBoundingClientRect();
			const state = useHouse.getState();
			const px = e.clientX - rect.left;
			const py = e.clientY - rect.top;
			const world = clientToWorld(rect.width, rect.height, px, py, state.settings.env.zoom);
			if (hitCharacter(getWorld(), state.settings, world.x, world.y)) return;
			drag = {
				x: e.clientX,
				y: e.clientY,
				ox: sheet.x,
				oy: sheet.y
			};
		};
		const onMove = (e) => {
			if (!drag) return;
			const rect = canvas.getBoundingClientRect();
			const s = layoutFor(rect.width, rect.height).scale * useHouse.getState().settings.env.zoom;
			sheet.x = drag.ox - (e.clientX - drag.x) / s;
			sheet.y = drag.oy - (e.clientY - drag.y) / s;
		};
		const onUp = () => {
			drag = null;
		};
		canvas?.addEventListener("wheel", onWheel, { passive: false });
		canvas?.addEventListener("pointerdown", onDown);
		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerup", onUp);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("keydown", onKey);
			canvas?.removeEventListener("wheel", onWheel);
			canvas?.removeEventListener("pointerdown", onDown);
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
		};
	}, []);
	const pick = (clientX, clientY) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		const zoom = useHouse.getState().settings.env.zoom;
		const world = clientToWorld(rect.width, rect.height, clientX - rect.left, clientY - rect.top, zoom);
		const id = hitCharacter(getWorld(), useHouse.getState().settings, world.x, world.y);
		if (id) {
			useHouse.getState().setSelected(id);
			useHouse.getState().setTab("people");
			useHouse.getState().setPanel(true);
			canvas.style.cursor = "pointer";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "absolute inset-0 h-full w-full touch-none",
		onClick: (e) => pick(e.clientX, e.clientY),
		onMouseMove: (e) => {
			const canvas = canvasRef.current;
			if (!canvas) return;
			const rect = canvas.getBoundingClientRect();
			const zoom = useHouse.getState().settings.env.zoom;
			const world = clientToWorld(rect.width, rect.height, e.clientX - rect.left, e.clientY - rect.top, zoom);
			const id = hitCharacter(getWorld(), useHouse.getState().settings, world.x, world.y);
			canvas.style.cursor = id ? "pointer" : "default";
		},
		"aria-label": "Kurokagami, a living woodblock interior"
	});
}
function HouseApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh w-full overflow-hidden bg-lacquer text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chrome, {})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseApp, {});
}
//#endregion
export { Home as component };
