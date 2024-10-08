// data.js

// Data for default values
const cropData = {
    // Legumes (Nitrogen-fixing crops)
    "Mung Beans": {
        harvestIndex: 0.35,
        rootShootRatio: 0.20,
        nContent: 0.022,
        pContent: 0.0025,
        kContent: 0.012,
        isNitrogenFixing: true,
        yieldUnit: "t/ha" // Yield in tonnes per hectare
    },
    "Chickpeas": {
        harvestIndex: 0.40,
        rootShootRatio: 0.20,
        nContent: 0.025,
        pContent: 0.0030,
        kContent: 0.015,
        isNitrogenFixing: true,
        yieldUnit: "t/ha"
    },
    "Lentils": {
        harvestIndex: 0.35,
        rootShootRatio: 0.18,
        nContent: 0.024,
        pContent: 0.0028,
        kContent: 0.014,
        isNitrogenFixing: true,
        yieldUnit: "t/ha"
    },
    "Peas": {
        harvestIndex: 0.45,
        rootShootRatio: 0.15,
        nContent: 0.023,
        pContent: 0.0027,
        kContent: 0.013,
        isNitrogenFixing: true,
        yieldUnit: "t/ha"
    },
    "Soybeans": {
        harvestIndex: 0.42,
        rootShootRatio: 0.22,
        nContent: 0.030,
        pContent: 0.0035,
        kContent: 0.017,
        isNitrogenFixing: true,
        yieldUnit: "t/ha"
    },
    "Common Beans": {
        harvestIndex: 0.35,
        rootShootRatio: 0.22,
        nContent: 0.028,
        pContent: 0.0030,
        kContent: 0.016,
        isNitrogenFixing: true,
        yieldUnit: "t/ha"
    },
    "Peanuts": {
        harvestIndex: 0.30,
        rootShootRatio: 0.25,
        nContent: 0.028,
        pContent: 0.0032,
        kContent: 0.016,
        isNitrogenFixing: true,
        yieldUnit: "t/ha"
    },
    "Lucerne (Alfalfa)": {
        harvestIndex: 0.85, // Since most of the biomass is harvested
        rootShootRatio: 0.40,
        nContent: 0.030,
        pContent: 0.0035,
        kContent: 0.020,
        isNitrogenFixing: true,
        yieldUnit: "t/ha dry matter"
    },
    "Clover": {
        harvestIndex: 0.85,
        rootShootRatio: 0.35,
        nContent: 0.028,
        pContent: 0.0032,
        kContent: 0.019,
        isNitrogenFixing: true,
        yieldUnit: "t/ha dry matter"
    },
    // Cereals (Non-nitrogen-fixing crops)
    "Wheat": {
        harvestIndex: 0.45,
        rootShootRatio: 0.20,
        nContent: 0.018,
        pContent: 0.0025,
        kContent: 0.012,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Barley": {
        harvestIndex: 0.42,
        rootShootRatio: 0.18,
        nContent: 0.019,
        pContent: 0.0024,
        kContent: 0.013,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Corn": {
        harvestIndex: 0.50,
        rootShootRatio: 0.14,
        nContent: 0.016,
        pContent: 0.0020,
        kContent: 0.010,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Rice": {
        harvestIndex: 0.50,
        rootShootRatio: 0.15,
        nContent: 0.017,
        pContent: 0.0022,
        kContent: 0.011,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Oats": {
        harvestIndex: 0.40,
        rootShootRatio: 0.19,
        nContent: 0.020,
        pContent: 0.0021,
        kContent: 0.012,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Sorghum": {
        harvestIndex: 0.45,
        rootShootRatio: 0.16,
        nContent: 0.017,
        pContent: 0.0020,
        kContent: 0.012,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Barley (Forage)": {
        harvestIndex: 0.85,
        rootShootRatio: 0.25,
        nContent: 0.020,
        pContent: 0.0025,
        kContent: 0.015,
        isNitrogenFixing: false,
        yieldUnit: "t/ha dry matter"
    },
    "Oat Hay": {
        harvestIndex: 0.85,
        rootShootRatio: 0.25,
        nContent: 0.018,
        pContent: 0.0022,
        kContent: 0.014,
        isNitrogenFixing: false,
        yieldUnit: "t/ha dry matter"
    },
    // Forage Crops (Non-Legumes)
    "Ryegrass": {
        harvestIndex: 0.85, // Most biomass is harvested
        rootShootRatio: 0.30,
        nContent: 0.025,
        pContent: 0.0030,
        kContent: 0.018,
        isNitrogenFixing: false,
        yieldUnit: "t/ha dry matter"
    },
    "Sorghum (Forage)": {
        harvestIndex: 0.85,
        rootShootRatio: 0.30,
        nContent: 0.017,
        pContent: 0.0020,
        kContent: 0.012,
        isNitrogenFixing: false,
        yieldUnit: "t/ha dry matter"
    },
    // Oilseeds
    "Canola": {
        harvestIndex: 0.40,
        rootShootRatio: 0.18,
        nContent: 0.026,
        pContent: 0.0030,
        kContent: 0.015,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Sunflower": {
        harvestIndex: 0.35,
        rootShootRatio: 0.20,
        nContent: 0.022,
        pContent: 0.0025,
        kContent: 0.014,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Sesame": {
        harvestIndex: 0.35,
        rootShootRatio: 0.20,
        nContent: 0.022,
        pContent: 0.0025,
        kContent: 0.013,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Safflower": {
        harvestIndex: 0.30,
        rootShootRatio: 0.20,
        nContent: 0.023,
        pContent: 0.0027,
        kContent: 0.014,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    // Fiber Crops
    "Cotton": {
        harvestIndex: 0.35,
        rootShootRatio: 0.25,
        nContent: 0.025,
        pContent: 0.0030,
        kContent: 0.015,
        isNitrogenFixing: false,
        yieldUnit: "lint bales/ha",
        conversionFactor: 227 // 1 bale = 227 kg lint
    },
    "Flax": {
        harvestIndex: 0.32,
        rootShootRatio: 0.19,
        nContent: 0.020,
        pContent: 0.0024,
        kContent: 0.012,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    // Root and Tuber Crops
    "Potatoes": {
        harvestIndex: 0.75,
        rootShootRatio: 0.10,
        nContent: 0.025,
        pContent: 0.0030,
        kContent: 0.015,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Cassava": {
        harvestIndex: 0.55,
        rootShootRatio: 0.18,
        nContent: 0.010,
        pContent: 0.0015,
        kContent: 0.007,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    "Sugar Beet": {
        harvestIndex: 0.65,
        rootShootRatio: 0.14,
        nContent: 0.011,
        pContent: 0.0016,
        kContent: 0.008,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    },
    // Others
    "Sugarcane": {
        harvestIndex: 0.60,
        rootShootRatio: 0.12,
        nContent: 0.009,
        pContent: 0.0012,
        kContent: 0.005,
        isNitrogenFixing: false,
        yieldUnit: "t/ha"
    }
};

// Nitrogen Fixation Efficiency
const nFixationEfficiency = {
    "Poor": 0.30,
    "Average": 0.50,
    "Good": 0.70
};
