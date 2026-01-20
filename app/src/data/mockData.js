export const mockRecipes = [
  {
    id: 1,
    title: "15-Min Creamy Miso Pasta",
    author: "@chef_jake",
    platform: "Instagram",
    duration: "15 mins",
    ingredientsCount: 8,
    difficulty: "Easy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVQsgJ1ZS3wvRH_819BiKSpfZvrXZKJOM7rmZEeQG4srwRE9hijUskGuafvVtwkwhgiIJlzVjLMem0st1ZE3IyGoDmED2VxwmciNRq0zTnfl3n0bYcj31TgTXTNpHSmsnaLY6EK8p3AZOu3yhkwskkh43vIZcIkrgQzMm531MWlIbNn41cSBYq7aMuMpqWLOM6NceRDyMOAgqVu_MDmMz4dEuW0FwFXKEWagTGsjqfYY8L1TJ0EF0HYP2FxIvcEttIeI7ORcavMpf4",
    ingredients: [
      { id: 101, name: "Spaghetti", amount: "250g", category: "Pantry", completed: true },
      { id: 102, name: "Miso Paste", amount: "2 tbsp", category: "Pantry", completed: false },
      { id: 103, name: "Heavy Cream", amount: "1/2 cup", category: "Dairy", completed: false },
      { id: 104, name: "Parmesan", amount: "1/4 cup", category: "Dairy", completed: false },
    ],
    steps: [
      { id: 1, title: "Boil Pasta", description: "Cook pasta in salted water until al dente." },
      { id: 2, title: "Make Sauce", description: "Mix miso, cream, and cheese in a pan." },
    ]
  },
  {
    id: 2,
    title: "Soufflé Pancakes Tutorial",
    author: "Baking With Maya",
    platform: "YouTube",
    duration: "45 mins",
    ingredientsCount: 6,
    difficulty: "Intermediate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2c-eT4_hKEMpiLcu1BSuOc5NRYJr1fyqv5rzJ2GdeNZbv0lUhatT7LBVOGuIQKWPEoU7mSRvoqUySyBHDM5WnmrLtaXZgdVGC8KiWgNlCNOQX6Lo-jRvhP1IB-iqxnN4po-z-Iz-t3vQ7ndLFAltYoMI6VC1WNXRRpHB2z0l89AneLdBYPp2BYpN_r3nj41_YE4MXpJxlDhJ5Iynbp3nkuRvBs2jLjNIzRrTKJVRQfseyUequzZpX3aETYQKBVoG0gpRphxA3NlZn",
    ingredients: [],
    steps: []
  }
];

export const mockGroups = [
  { id: 1, title: "Quick Weeknight", count: 12, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAni9VfguMJSwiCbYZwsvfHxOUnP2SkKdGx45dfR_F2MNYQE8r9zgwJ15xm-z1r_y2qsQKnFZy8mnC1fk649Ogy-WXhPfRuVtf6EFTYD3_hN2o1_caJgC9dT8Q92iAYC4x6ptA3KPL7dJo1wendJ7vri08oytm0oHDqcMAzZBMtAFOGkNL4ireZCZdjGxgSJ6Dgf-kLOlNO6LTxY6T1Tjy-uIX7UflWMFK7jeL4gNn2ENdSRALLWNcfPQmmVQkGJslO9xf9GlzGYuMa" },
  { id: 2, title: "Holiday Baking", count: 8, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSbLmWH0RutXAaXryv7iZqyIB9bO5rBqs-UTCGNAneO0l8rsqwYDJtOXTZtxFO3C-koE-HArKU7DExj_eiAF3LMt0yZoIKdu3L0ZYWt7bOqgZRbd5ri9aFUEVt39Yml3G0R9NUAeNo1ygnP0VD7QtCu6cr_kHwHcPTihwHCCQ9j8KGInI8rUofbzQljCBCUNx-phvGELtZVJ5jbwYXdFRCj9aqNViO2Pdgacs6o-FTppyl6wNzmahkDpYLi3ZUYRql2DUug7eBVBIq" },
];

export const mockShoppingList = [
  { category: "Produce", items: [{ id: 1, name: "Fresh Basil", amount: "1 bunch", checked: false }] },
  { category: "Dairy", items: [{ id: 2, name: "Heavy Cream", amount: "200ml", checked: true }] },
];
