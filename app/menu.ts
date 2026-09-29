export type Lang = "pl" | "en";
export type MenuItem = { name: string; en?: string; description: [string, string]; price: string; vegan?: boolean };
export const categories = [
  { id: "bowls", label: ["Miski i makarony", "Bowls & noodles"] },
  { id: "bites", label: ["Mały głód", "Little bites"] },
  { id: "coffee", label: ["Kawa i matcha", "Coffee & matcha"] },
  { id: "sweet", label: ["Coś słodkiego", "Sweet things"] },
  { id: "cold", label: ["Na orzeźwienie", "Something refreshing"] },
] as const;
export type Category = typeof categories[number]["id"];
export const menu: Record<Category, MenuItem[]> = {
  bowls: [
    { name: "Mały Bibimbap", en: "Small Bibimbap", description: ["Koreańska miska ryżu, warzywa i gochujang. Tofu inari 39 / z jajkiem 42 / kurczak 44 / wołowina 45 / tatar z łososia 46 / pieczony łosoś 47.", "Korean rice bowl, vegetables and gochujang. Inari tofu 39 / with egg 42 / chicken 44 / beef 45 / salmon tartare 46 / baked salmon 47."], price: "39–47" },
    { name: "Tornado Bibimbap", description: ["Duża miska z wyjątkowym omletem. Wegańska bez jajka 49 / tofu 51 / kurczak 55 / wołowina 56 / tatar z łososia 58 / pieczony łosoś 59.", "A big bowl with a special omelette. Vegan, no egg 49 / tofu 51 / chicken 55 / beef 56 / salmon tartare 58 / baked salmon 59."], price: "49–59" },
    { name: "Shoyu Purramen", description: ["Bulion sojowy, dashi, grzyby i olej truflowy z chili. Tofu inari 48 / duszona wieprzowina z jajkiem 49.", "Soy broth, dashi, mushrooms and chilli truffle oil. Inari tofu 48 / slow-braised pork with egg 49."], price: "48–49" },
    { name: "Stir-fry Soba", description: ["Makaron soba, sezonowe warzywa i sos sobayaki. Wegański 42 / kurczak 45 / wołowina 48 / krewetki 49.", "Soba noodles, seasonal vegetables and sobayaki sauce. Vegan 42 / chicken 45 / beef 48 / prawns 49."], price: "42–49" },
    { name: "Jjajangmyeon", description: ["Makaron pszenny w sosie z czarnej fasoli, z kimchi. Wegański 46 / kurczak 48 / wołowina 52 / krewetki 53.", "Wheat noodles in black bean sauce, with kimchi. Vegan 46 / chicken 48 / beef 52 / prawns 53."], price: "46–53" },
    { name: "Eggdrop Sandwich", description: ["Puszysta jajecznica, warzywa i sosy. Kimchi 44 / kurczak teriyaki 47 / wołowina bulgogi 49 / krewetki 50.", "Fluffy scrambled eggs, vegetables and sauces. Kimchi 44 / teriyaki chicken 47 / bulgogi beef 49 / prawns 50."], price: "44–50" },
  ],
  bites: [
    { name: "Onigiri", description: ["Ryżowa kanapka w nori. Wege 19 / kurczak lub tuńczyk 20 / krewetki, łosoś, wołowina lub tatar 21.", "A rice sandwich in nori. Veggie 19 / chicken or tuna 20 / prawns, salmon, beef or tartare 21."], price: "19–21" },
    { name: "Onigiri double + miso", description: ["Dwie ryżowe kanapki i miso. Wege 45 / mieszany 46 / mięsny 48.", "Two rice sandwiches and miso. Veggie 45 / mixed 46 / meat 48."], price: "45–48" },
    { name: "Kimbap roll", description: ["Koreański hand roll. Shiitake lub tofu 33 / kurczak 34 / krewetki lub tatar 36 / wołowina lub łosoś 37.", "Korean hand roll. Shiitake or tofu 33 / chicken 34 / prawns or tartare 36 / beef or salmon 37."], price: "33–37" },
    { name: "Mandu", description: ["Koreańskie pierożki z sosem sezamowo-czosnkowym. Wege 32 / mięsne 36.", "Korean dumplings with sesame and garlic sauce. Veggie 32 / meat 36."], price: "32–36" },
    { name: "Inarizushi", description: ["Sushi w kieszonce z tofu. Tamago 30 / tuna-corn 32 / tatar 38 (2 szt.). Zestaw trzech 48.", "Sushi in a tofu pocket. Tamago 30 / tuna-corn 32 / tartare 38 (2 pcs). Trio set 48."], price: "30–48" },
    { name: "Miso · 400 ml", description: ["Wege 26 / z łososiem 31. Do tego? Kimchi lub wakame po 15 zł.", "Veggie 26 / salmon 31. Something on the side? Kimchi or wakame, 15 zł each."], price: "26–31" },
  ],
  coffee: [
    { name: "Espresso doppio", description: ["Podwójne espresso z ziaren warszawskiej palarni HAYB.", "Double espresso with beans from Warsaw roastery HAYB."], price: "12" },
    { name: "Cappuccino / Flat White", description: ["Twoja codzienna chwila z kawą. Każda po 20 zł.", "Your everyday coffee moment. 20 zł each."], price: "20" },
    { name: "Latte", description: ["Ciepłe 24 / mrożone 25.", "Hot 24 / iced 25."], price: "24–25" },
    { name: "Kwiatowe Latte", en: "Flower Latte", description: ["Róża, lawenda, jaśmin lub poziomka. S 24 / L 28.", "Rose, lavender, jasmine or wild strawberry. S 24 / L 28."], price: "24–28" },
    { name: "Matcha Latte", description: ["Moya Matcha. S 24 / L 27. Z owocową nutą: S 27 / L 29.", "Moya Matcha. S 24 / L 27. With a fruity twist: S 27 / L 29."], price: "24–29" },
    { name: "Hojicha Latte", description: ["Prażona herbata z syropem klonowym. S 24 / L 28.", "Roasted tea with maple syrup. S 24 / L 28."], price: "24–28" },
  ],
  sweet: [
    { name: "Taiyaki milk choco", description: ["Dwie japońskie rybki z mleczną czekoladą.", "Two Japanese fish-shaped treats with milk chocolate."], price: "27" },
    { name: "Taiyaki mochi azuki", description: ["Dwie rybki z mochi i słodką fasolą azuki.", "Two fish-shaped treats with mochi and sweet azuki beans."], price: "29" },
    { name: "Cloud Float Special", description: ["Latte lub matcha, lody włoskie i owocowe purée. Jagodzianka, mango, poziomka lub wiśnia.", "Latte or matcha, soft ice cream and fruit purée. Blueberry, mango, wild strawberry or cherry."], price: "34" },
    { name: "Affogato Special", description: ["180 g lodów śmietankowych z espresso lub matchą.", "180 g of creamy ice cream topped with espresso or matcha."], price: "26" },
    { name: "Lody włoskie", en: "Soft ice cream", description: ["Śmietankowe, 180 g. Kruszonka lub wybrany sos +3 zł.", "Creamy soft ice cream, 180 g. Crumble or a sauce +3 zł."], price: "18" },
  ],
  cold: [
    { name: "Sour Cherry / Mango Tango Latte Cloud", description: ["Espresso lub matcha z puszystym kremem mascarpone.", "Espresso or matcha with fluffy mascarpone cream."], price: "33" },
    { name: "Sakura Blossom Soda", description: ["Tonik, butterfly pea tea i wiśniowa nuta.", "Tonic, butterfly pea tea and a cherry note."], price: "28" },
    { name: "Lemoniada", en: "Lemonade", description: ["Klasyczna 24 / z sezonowymi owocami 26 / z matchą 26.", "Classic 24 / seasonal fruit 26 / matcha 26."], price: "24–26" },
    { name: "Ice Tea", description: ["Z cukrem trzcinowym i cytryną 26 / z truskawkowym purée 27.", "With cane sugar and lemon 26 / strawberry purée 27."], price: "26–27" },
    { name: "Kohiniada", en: "Kohinade", description: ["Orzeźwiająca lemoniada z espresso.", "Refreshing lemonade with espresso."], price: "26" },
    { name: "Świeży sok pomarańczowy", en: "Fresh orange juice", description: ["Świeżo wyciskany, 250 ml.", "Freshly squeezed, 250 ml."], price: "24" },
  ],
};
