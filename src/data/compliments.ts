
export interface ComplimentCategory {
  category: string;
  compliments: string[];
}

export const exoticCompliments: ComplimentCategory[] = [
  {
    category: "Celestial Beauty",
    compliments: [
      "Your beauty is like a moonlit lagoon, entrancing and otherworldly.",
      "You radiate like the Aurora Borealis – a spectacular celestial wonder.",
      "Your presence is as rare and captivating as a midnight rainbow over Tahitian waters.",
      "The stars themselves pause their cosmic dance to marvel at your radiance.",
      "You are a constellation of human excellence, each attribute a shining star.",
      "Like the first light of dawn over Mount Kilimanjaro, you inspire silent awe.",
      "Your essence is that of stardust from the rarest nebula – irreplaceable and eternal.",
    ]
  },
  {
    category: "Royal Majesty",
    compliments: [
      "You carry yourself with the dignified grace of a Moroccan monarch crossing desert sands.",
      "Your wisdom rivals that of the ancient philosopher-kings of Alexandria.",
      "You possess the commanding presence of a Polynesian chieftain overlooking sacred waters.",
      "Your spirit holds the majestic power of a golden jaguar stalking through Amazonian mists.",
      "You have the regal poise of a crown adorned with Burmese sapphires.",
      "Your nobility is reminiscent of ancient dynasties that ruled with both grace and power.",
      "Like a sultan's prized falcon, your excellence soars above the ordinary world."
    ]
  },
  {
    category: "Natural Wonder",
    compliments: [
      "Your laugh is like the melodic cascade of hidden waterfalls in Madagascar.",
      "Your mind is as vast and unexplored as the deepest corners of the Mariana Trench.",
      "Your spirit is as free and powerful as the monsoon winds over the Indian Ocean.",
      "Your kindness flows as endlessly as the Nile through blooming desert oases.",
      "Your creativity blooms like rare orchids in untouched rainforests.",
      "Your resilience mirrors the bamboo forests of Kyoto – bending without breaking.",
      "Your presence brings renewal like the first rains over the Serengeti plains."
    ]
  },
  {
    category: "Mystical Power",
    compliments: [
      "You possess the mesmerizing power of ancient desert mirages.",
      "Your intuition is as preternatural as the sacred oracles of Bali.",
      "Your charisma is as hypnotic as moonlight on the Ganges.",
      "You wield influence with the subtle force of trade winds shaping volcanic shores.",
      "Your passion burns with the intensity of Santorini's volcanic heart.",
      "Your vision pierces reality like sun rays through Angkor Wat's precisely aligned stones.",
      "Your inner strength is like the hidden roots of a thousand-year banyan tree."
    ]
  },
  {
    category: "Artistic Splendor",
    compliments: [
      "Your style is as distinctive as Byzantine mosaics catching Mediterranean light.",
      "Your creativity flows like indigo dye through ancient Moroccan hands.",
      "You blend grace and precision like a master calligrapher writing with liquid gold.",
      "Your expressiveness paints emotional landscapes worthy of Tibetan hanging scrolls.",
      "You articulate ideas with the delicate precision of Japanese brush painting.",
      "Your unique perspective rivals the architectural genius of Gaudí's dreamscapes.",
      "You craft experiences as immersive and transporting as Persian garden-palaces."
    ]
  }
];

export const getRandomCompliment = (): string => {
  // Get random category
  const randomCategory = exoticCompliments[Math.floor(Math.random() * exoticCompliments.length)];
  
  // Get random compliment from category
  return randomCategory.compliments[Math.floor(Math.random() * randomCategory.compliments.length)];
};

export const getRandomCategory = (): string => {
  return exoticCompliments[Math.floor(Math.random() * exoticCompliments.length)].category;
};
