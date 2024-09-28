// data.js

// Data for default values
const cropData = {
    "Mung Beans": { harvestIndex: 0.35, rootShootRatio: 0.20, nContent: 0.022, pContent: 0.0025, kContent: 0.012 },
    "Chickpeas": { harvestIndex: 0.40, rootShootRatio: 0.20, nContent: 0.025, pContent: 0.0030, kContent: 0.015 },
    "Lentils": { harvestIndex: 0.35, rootShootRatio: 0.18, nContent: 0.024, pContent: 0.0028, kContent: 0.014 },
    "Peas": { harvestIndex: 0.45, rootShootRatio: 0.15, nContent: 0.023, pContent: 0.0027, kContent: 0.013 },
    "Soybeans": { harvestIndex: 0.42, rootShootRatio: 0.22, nContent: 0.030, pContent: 0.0035, kContent: 0.017 },
    // Cereals
    "Wheat": { harvestIndex: 0.45, rootShootRatio: 0.20, nContent: 0.018, pContent: 0.0025, kContent: 0.012 },
    "Barley": { harvestIndex: 0.42, rootShootRatio: 0.18, nContent: 0.019, pContent: 0.0024, kContent: 0.013 },
    "Corn": { harvestIndex: 0.50, rootShootRatio: 0.14, nContent: 0.016, pContent: 0.0020, kContent: 0.010 },
    "Rice": { harvestIndex: 0.50, rootShootRatio: 0.15, nContent: 0.017, pContent: 0.0022, kContent: 0.011 },
    "Oats": { harvestIndex: 0.40, rootShootRatio: 0.19, nContent: 0.020, pContent: 0.0021, kContent: 0.012 },
    "Sorghum": { harvestIndex: 0.45, rootShootRatio: 0.16, nContent: 0.017, pContent: 0.0020, kContent: 0.012 },
    // Oilseeds
    "Canola": { harvestIndex: 0.40, rootShootRatio: 0.18, nContent: 0.026, pContent: 0.0030, kContent: 0.015 },
    "Sunflower": { harvestIndex: 0.35, rootShootRatio: 0.20, nContent: 0.022, pContent: 0.0025, kContent: 0.014 },
    "Peanuts": { harvestIndex: 0.30, rootShootRatio: 0.25, nContent: 0.028, pContent: 0.0032, kContent: 0.016 },
    "Sesame": { harvestIndex: 0.35, rootShootRatio: 0.20, nContent: 0.022, pContent: 0.0025, kContent: 0.013 },
    // Fiber Crops
    "Cotton": { harvestIndex: 0.35, rootShootRatio: 0.25, nContent: 0.025, pContent: 0.0030, kContent: 0.015 },
    "Flax": { harvestIndex: 0.32, rootShootRatio: 0.19, nContent: 0.020, pContent: 0.0024, kContent: 0.012 },
    // Legumes
    "Common Beans": { harvestIndex: 0.35, rootShootRatio: 0.22, nContent: 0.028, pContent: 0.0030, kContent: 0.016 },
    // Root and Tuber Crops
    "Potatoes": { harvestIndex: 0.75, rootShootRatio: 0.10, nContent: 0.025, pContent: 0.0030, kContent: 0.015 },
    "Cassava": { harvestIndex: 0.55, rootShootRatio: 0.18, nContent: 0.010, pContent: 0.0015, kContent: 0.007 },
    "Sugar Beet": { harvestIndex: 0.65, rootShootRatio: 0.14, nContent: 0.011, pContent: 0.0016, kContent: 0.008 },
    // Others
    "Sugarcane": { harvestIndex: 0.60, rootShootRatio: 0.12, nContent: 0.009, pContent: 0.0012, kContent: 0.005 },
    "Safflower": { harvestIndex: 0.30, rootShootRatio: 0.20, nContent: 0.023, pContent: 0.0027, kContent: 0.014 },
    // Add other crops as needed
};

// Nitrogen Fixation Efficiency
const nFixationEfficiency = {
    "Poor": 0.30,
    "Average": 0.50,
    "Good": 0.70
}; 

