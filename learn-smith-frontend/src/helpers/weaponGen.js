const ingridents = ["wood", "copper", "iron", "steel", "obsidian", "silver"];
const recipes = {
  longsword: {
    name: "Longsword",
    recipes: ["steel", "steel"]
  },
  shortsword: { name: "Shortsword", recipes: ["steel", "silver"] },
  battleaxe: { name: "Battle Axe", recipes: ["steel", "wood"] },
  mace: { name: "Mace", recipes: ["steel", "copper"] },
  maul: { name: "Maul", recipes: ["steel", "obsidian"] },
  morningstar: {
    name: "Morning Star",
    recipes: ["steel", "iron"]
  },
  flail: { name: "Flail", recipes: ["copper", "iron"] },
  dagger: { name: "Dagger", recipes: ["copper", "silver"] },
  warhammer: { name: "War Hammer", recipes: ["copper", "wood"] },
  lance: { name: "Lance", recipes: ["copper", "copper"] },
  spear: { name: "Spear", recipes: ["copper", "obsidian"] },
  mail: { name: "Mail", recipes: ["copper", "steel"] },
  longbow: { name: "Longbow", recipes: ["wood", "wood"] },
  crossbow: { name: "Crossbow", recipes: ["wood", "iron"] },
  staff: { name: "Staff", recipes: ["wood", "obsidian"] },
  club: { name: "Club", recipes: ["wood", "silver"] },
  nailbat: { name: "Nailbat", recipes: ["wood", "steel"] },
  boots: { name: "Boots", recipes: ["wood", "copper"] },
  chakram: { name: "Chakram", recipes: ["iron", "iron"] },
  ulfberht: { name: "Ulfberht", recipes: ["iron", "obsidian"] },
  halberd: { name: "Halberd", recipes: ["iron", "silver"] },
  katana: { name: "Katana", recipes: ["iron", "steel"] },
  platearmor: { name: "Plate Armor", recipes: ["iron", "copper"] },
  roundshield: { name: "Round Shield", recipes: ["iron", "wood"] },
  macuahuitl: { name: "Macuahuitl", recipes: ["obsidian", "obsidian"] },
  handaxe: { name: "Handaxe", recipes: ["obsidian", "steel"] },
  sickle: { name: "Sickle", recipes: ["obsidian", "wood"] },
  sling: { name: "Sling", recipes: ["obsidian", "copper"] },
  rapier: { name: "Rapier", recipes: ["obsidian", "iron"] },
  trident: { name: "Trident", recipes: ["obsidian", "silver"] },

  horsestring: { name: "Horseshoe on a String", recipes: ["silver", "wood"] },

  towershield: { name: "Tower Shield", recipes: ["silver", "steel"] },
  helmet: { name: "Helmet", recipes: ["silver", "iron"] },

  gauntlets: { name: "Gauntlets", recipes: ["silver", "copper"] },
  buckethelm: { name: "Bucket Helm", recipes: ["silver", "obsidian"] },
  flamberge: { name: "Flamberge", recipes: ["silver", "silver"] }
};

const randomProperty = function(obj) {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const weaponRecipe = () => {
  const weaponObj = randomProperty(recipes);
  const material = ingridents[Math.floor(Math.random() * ingridents.length)];
  weaponObj.recipes.unshift(material);
  weaponObj.name = `${jsUcfirst(material)} ${weaponObj.name}`;
  weaponObj.goldVal =
    Math.floor(Math.random() * 10 + 1) + ingridents.indexOf(material) + 1;
  return weaponObj;
};

const lookupWeapon = (oreOne, oreTwo, oreThree) => {
  const weaponObj = { name: "", recipe: [oreOne, oreTwo, oreThree] };
  for (const key in recipes) {
    if (
      recipes[key].recipes[0] === oreTwo &&
      recipes[key].recipes[0] === oreThree
    ) {
      weaponObj.name =`${jsUcfirst(oreOne)} ${recipes[key].name}`
    }
  }
  return weaponObj;
};

export { ingridents, weaponRecipe };
