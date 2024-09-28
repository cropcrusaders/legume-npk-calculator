// data.js

// Data for default values
const cropData = {
    "Mung Beans": { harvestIndex: 0.35, rootShootRatio: 0.20, nContent: 0.022, pContent: 0.0025, kContent: 0.012 },
    "Chickpeas": { harvestIndex: 0.40, rootShootRatio: 0.20, nContent: 0.025, pContent: 0.0030, kContent: 0.015 },
    "Lentils": { harvestIndex: 0.35, rootShootRatio: 0.18, nContent: 0.024, pContent: 0.0028, kContent: 0.014 },
    "Peas": { harvestIndex: 0.45, rootShootRatio: 0.15, nContent: 0.023, pContent: 0.0027, kContent: 0.013 },
    "Soybeans": { harvestIndex: 0.42, rootShootRatio: 0.22, nContent: 0.030, pContent: 0.0035, kContent: 0.017 },
    // Add other crops as needed
};

// Nitrogen Fixation Efficiency
const nFixationEfficiency = {
    "Poor": 0.30,
    "Average": 0.50,
    "Good": 0.70
};
