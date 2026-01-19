const posts = [
  {
    title: "회 Hoe (Raw Fish)",
    img: "images/hoe.jpg",
    desc: `Fresh Live Fish, the Essence of Chewy Texture
"Hwal-eo-hoe", "Chogochujang", "Ssam Culture", "Chewy vs Melting"
Unlike Japanese 'Sashimi' which often focuses on aged, melting textures, Korean 'Hoe' celebrates 'Hwal-eo' (live fish) for its firm and chewy bite. Enjoy it the Korean way: dipped in spicy chogochujang and wrapped in perilla leaves with garlic!`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "최강록 Choi Kang-rok",
    img: "images/choi.png",
    desc: `The Master of Braising, a Viral Star Chef
"MasterChef Korea", "Culinary Philosophy", "Humorous Quotes", "Braising King"
A renowned chef famous for his deep expertise in Japanese-style braising. Recently viral for his unique, humble personality and 'memorable' quotes on cooking shows. His meticulous approach to ingredients makes him one of the most respected chefs in Korea.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "파전 Pa-jeon",
    img: "images/pajeon.jpg",
    desc: `Korean Savory Pancake, the Best Rainy Day Treat
"Scallions", "Seafood Mix", "Crispy & Savory", "Rainy Day Tradition"
A crispy, savory pancake loaded with fresh green onions (Pa). The most popular version is 'Haemul Pajeon,' packed with various seafood. In Korea, it's a tradition to enjoy hot Pajeon with Makgeolli whenever it rains!`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "막걸리 Mak-geol-li",
    img: "images/makgeolli.jpg",
    desc: `Cloudy Rice Wine, the Oldest Spirit in Korea
"Sparkling & Creamy", "Pajeon Buddy", "Traditional Bowl", "Low Alcohol"
A refreshing, milky rice wine with a hint of sweetness and carbonation. Traditionally enjoyed in brass bowls on rainy days with savory pancakes (Pajeon), it's now trending with modern fruit flavors like peach and chestnut!`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "눈오리 Nun-o-ri",
    img: "images/snowduck.jpg",
    desc: `Cute Snow Shapes, a Winter Trend
"Duck, Heart, Star, Penguin", "Snow Maker", "K-Pop Trend", "Social Media Fun"
More than just ducks! These popular Korean snow makers now come in various adorable shapes like hearts, stars, and penguins. Join the K-Pop idols and locals in making your own cute snow army for fun social media photos!`,
    category: "culture",
    date: "1/19/2026"
  },
  {
    title: "존댓말 Jon-daet-mal",
    img: "images/honorifics.jpg",
    desc: `Korean Honorifics, A Core of Respect
"Age Hierarchy", "Formal/Informal", "Polite Speech", "Cultural Nuance"
Beyond simple politeness, 'Jondaetmal' is a complex system of honorifics embedded in Korean language. It reflects social hierarchy based on age and status, showing respect to elders and superiors through specific verb endings and vocabulary.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "태극기 Tae-geuk-gi",
    img: "images/flag.jpg",
    desc: `The National Flag of Korea, Symbol of Harmony
"White Background", "Taegeuk Circle", "Four Trigrams", "Peace"
The Korean flag symbolizes the harmony of the universe. The white background represents peace, the red and blue circle signifies balance(Yin and Yang), and the four black trigrams represent sky, earth, water, and fire.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "이재명 Lee Jae-myung",
    img: "images/president.jpeg",
    desc: `The 21st President of the Republic of Korea
"Administration", "Public Service", "Economic Policy", "Leadership"
Serving as the current President of South Korea, he is known for his extensive background in local administration. His presidency focuses on practical policies, public welfare, and strengthening Korea's global standing in technology and culture.`,
    category: "culture",
    date: "1/18/2026"
  },
  {
    title: "소주 So-ju",
    img: "images/soju.png",
    desc: `The Spirit of Korea, Global Best-selling Liquor
"Iconic Green Bottle", "Somaek (Soju+Beer)", "Fruit Soju", "K-Drama Essential"
Meet the world's most popular spirit! Often called 'Korean Vodka,' this clear liquor in an iconic green bottle is best enjoyed chilled with friends. Experience the 'Somaek' culture or try sweet fruit flavors like peach and grape.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "감자탕 Gamja-tang",
    img: "images/gamjatang.jpg",
    desc: `Spicy Pork Backbone Stew, a Feast for the Senses
"Hearty Pork Spine", "Spicy Broth", "Fried Rice Course", "Soul Food"
Don't let the name fool you—while 'Gamja' means potato, the star of this dish is the tender pork backbones! Enjoy the deep, spicy broth with perilla seeds, and don't forget the mandatory 'Bokkeumbap' (fried rice) at the end.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "국밥 Guk-bap",
    img: "images/gukbab.jpg",
    desc: `Hearty Hot Soup with Rice, Korea's Soul Food
"Busan Pork Rice Soup", "Sundae-guk", "Regional Specialties"
A warm bowl of soup that reflects regional pride! From Busan's famous 'Dwaeji-gukbap' (Pork Rice Soup) to the savory 'Sundae-gukbap' (Blood Sausage Soup) found nationwide, each city offers a unique broth and experience.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "올리브영 Ol-live-young",
    img: "images/oliveyoung.png",
    desc: `The "Sephora" of Korea, K-Beauty Paradise
"Skincare", "Mask Packs", "Viral Items", "Global Best-sellers"
The ultimate destination for K-beauty lovers! From viral sunscreens to soothing mask packs, you can test and buy all the trending skincare and makeup products that Korean celebrities actually use.`,
    category: "shopping",
    date: "1/18/2026"
  },
  {
    title: "다이소 Dai-so",
    img: "images/daiso.png",
    desc: `Household items, "Everything is there!"
"Affordable", "K-Beauty", "Stationery", "Home Deco"
A paradise of high-quality items at incredibly low prices (usually $1~$5). From trendy K-beauty products to unique Korean stationery, it's the best place to find practical souvenirs for your friends!`,
    category: "shopping",
    date: "1/18/2026"
  },
  {
    title: "편의점 Pyeon-ui-jeom",
    img: "images/cvs.png",
    desc: `Convenience store, 24/7
"CU", "GS25", "Seven eleven", "emart24"
It's a life-saver! Beyond food, you can find emergency medicines, send parcels, charge your phone, and buy daily essentials like umbrellas or shirts anytime, anywhere in Korea.`,
    category: "shopping",
    date: "1/18/2026"
  },
  {
    title: "붕어빵 Bungeo-ppang",
    img: "images/bungeoppang.jpg",
    desc: `Fish-shaped Pastry, the King of Winter Snacks
"Sweet Red Bean", "Creamy Custard", "Winter Street Food", "Bungeo-se-kwon"
A nostalgic winter treat! These fish-shaped waffles are crispy on the outside and filled with warm sweetness. In Korea, we even have a term 'Bungeo-se-kwon' for areas lucky enough to have a street stall nearby.`,
    category: "food",
    date: "1/18/2026"
  },
  {
    title: "두바이 쫀득 쿠키 Du-jjon-ku",
    img: "images/dubai_cookie.png",
    desc: `Crunchy & Chewy, the Viral Dessert Trend
"Pistachio Kadayif", "Rich Chocolate", "Crunchy Texture", "K-Dessert Spin-off"
The hottest dessert trend in Korea! This unique cookie combines the nutty flavor of pistachio and the signature crunch of 'Kadayif' noodles from Dubai chocolate, reimagined into a soft, chewy Korean-style cookie.`,
    category: "food",
    date: "1/19/2026"
  }
];
