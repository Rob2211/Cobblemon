ServerEvents.recipes(e => {

e.remove({ output: "metalbundles:copper_bundle" })
e.shaped(
  Item.of('metalbundles:copper_bundle', 1),
  [
    'ABA',
    'ACA',
    'ADA'
  ],
  {
    A: 'minecraft:copper_ingot',
    B: '#c:chests',
    C: 'metalbundles:leather_bundle',
    D: '#c:copper_blocks'
  }
)

e.remove({ output: "metalbundles:iron_bundle" })
e.shaped(
  Item.of('metalbundles:iron_bundle', 1),
  [
    'ABA',
    'ACA',
    'ADA'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: '#c:chests',
    C: 'metalbundles:copper_bundle',
    D: '#c:iron_blocks'
  }
)

e.remove({ output: "metalbundles:golden_bundle" })
e.shaped(
  Item.of('metalbundles:golden_bundle', 1),
  [
    'ABA',
    'ACA',
    'ADA'
  ],
  {
    A: '#c:gold_ingots',
    B: '#c:chests',
    C: 'metalbundles:iron_bundle',
    D: '#c:gold_blocks'
  }
)

e.remove({ output: "metalbundles:diamond_bundle" })
e.shaped(
  Item.of('metalbundles:diamond_bundle', 1),
  [
    'ABA',
    'ACA',
    'ADA'
  ],
  {
    A: '#c:diamonds',
    B: '#c:chests',
    C: 'metalbundles:golden_bundle',
    D: '#c:diamond_blocks'
  }
)

e.remove({ output: "metalbundles:netherite_bundle" })
e.smithing(
  'metalbundles:netherite_bundle',                     // arg 1: output
  'minecraft:netherite_upgrade_smithing_template', // arg 2: the smithing template
  'metalbundles:diamond_bundle',                          // arg 3: the item to be upgraded
  'minecraft:netherite_ingot'                            // arg 4: the upgrade item
)

e.shaped(
  Item.of('cobblemon:galarica_cuff', 1),
  [
    'BAB',
    'A A',
    'BAB'
  ],
  {
    A: 'kubejs:galarica_nuts',
    B: 'minecraft:stick'
  }
)

e.shaped(
  Item.of('cobblemon:galarica_wreath', 1),
  [
    'AAA',
    'A A',
    'AAA'
  ],
  {
    A: 'kubejs:galarica_nuts'
  }
)

e.remove({ id: 'cobblemon:poke_ball'})
e.remove({ id: 'cobblemon:citrine_ball'})
e.remove({ id: 'cobblemon:verdant_ball'})
e.remove({ id: 'cobblemon:azure_ball'})
e.remove({ id: 'cobblemon:roseate_ball'})
e.remove({ id: 'cobblemon:slate_ball'})
e.remove({ id: 'cobblemon:premier_ball'})
e.remove({ id: 'cobblemon:great_ball'})
e.remove({ id: 'cobblemon:ultra_ball'})
e.remove({ id: 'cobblemon:safari_ball'})
e.remove({ id: 'cobblemon:fast_ball'})
e.remove({ id: 'cobblemon:level_ball'})
e.remove({ id: 'cobblemon:lure_ball'})
e.remove({ id: 'cobblemon:heavy_ball'})
e.remove({ id: 'cobblemon:love_ball'})
e.remove({ id: 'cobblemon:friend_ball'})
e.remove({ id: 'cobblemon:moon_ball'})
e.remove({ id: 'cobblemon:sport_ball'})
e.remove({ id: 'cobblemon:park_ball'})
e.remove({ id: 'cobblemon:net_ball'})
e.remove({ id: 'cobblemon:dive_ball'})
e.remove({ id: 'cobblemon:nest_ball'})
e.remove({ id: 'cobblemon:repeat_ball'})
e.remove({ id: 'cobblemon:timer_ball'})
e.remove({ id: 'cobblemon:luxury_ball'})
e.remove({ id: 'cobblemon:dusk_ball'})
e.remove({ id: 'cobblemon:heal_ball'})
e.remove({ id: 'cobblemon:quick_ball'})
e.remove({ id: 'cobblemon:dream_ball'})
e.remove({ id: 'cobblemon:beast_ball'})
e.remove({ id: 'cobblemon:cherish_ball'})
e.remove({ id: 'cobblemon:ancient_poke_ball'})
e.remove({ id: 'cobblemon:ancient_citrine_ball'})
e.remove({ id: 'cobblemon:ancient_verdant_ball'})
e.remove({ id: 'cobblemon:ancient_azure_ball'})
e.remove({ id: 'cobblemon:ancient_roseate_ball'})
e.remove({ id: 'cobblemon:ancient_slate_ball'})
e.remove({ id: 'cobblemon:ancient_ivory_ball'})
e.remove({ id: 'cobblemon:ancient_great_ball'})
e.remove({ id: 'cobblemon:ancient_ultra_ball'})
e.remove({ id: 'cobblemon:ancient_feather_ball'})
e.remove({ id: 'cobblemon:ancient_wing_ball'})
e.remove({ id: 'cobblemon:ancient_jet_ball'})
e.remove({ id: 'cobblemon:ancient_heavy_ball'})
e.remove({ id: 'cobblemon:ancient_leaden_ball'})
e.remove({ id: 'cobblemon:ancient_gigaton_ball'})






})