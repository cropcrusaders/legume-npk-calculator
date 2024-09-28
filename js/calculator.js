// calculator.js

// Ensure that data.js is loaded before this script

function calculateNPK(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const cropType = document.getElementById('cropType').value;
    const grainYieldInput = document.getElementById('grainYield').value;
    const grainYield = parseFloat(grainYieldInput) * 1000; // Convert t/ha to kg/ha
    const residueManagement = document.getElementById('residueManagement').value;
    const nodulation = document.getElementById('nodulationEfficiency').value;

    // Input validation
    if (isNaN(grainYield) || grainYield <= 0) {
        alert("Please enter a valid Grain Yield.");
        return;
    }

    // Get default values for the selected crop
    const crop = cropData[cropType];
    if (!crop) {
        alert("Selected crop data is not available.");
        return;
    }

    console.log("Selected Crop:", cropType);
    console.log("Grain Yield (kg/ha):", grainYield);
    console.log("Residue Management:", residueManagement);
    console.log("Nodulation Efficiency:", nodulation);

    // Calculations
    const AGB = grainYield * (1 / crop.harvestIndex); // Above-Ground Biomass
    const RB = AGB * crop.rootShootRatio;             // Root Biomass
    const totalBiomass = AGB + RB;                    // Total Biomass
    const nUptake = totalBiomass * crop.nContent;     // Total Nitrogen Uptake

    let nFixed = 0; // Initialize Nitrogen Fixed

    // Check if the crop is nitrogen-fixing
    if (crop.isNitrogenFixing) {
        // Ensure that nodulation efficiency is provided
        if (!nFixationEfficiency[nodulation]) {
            alert("Please select a valid Nodulation Efficiency.");
            return;
        }
        nFixed = nUptake * nFixationEfficiency[nodulation];
    } else {
        nFixed = 0; // Non-nitrogen-fixing crops do not fix nitrogen
    }

    console.log("AGB (kg/ha):", AGB);
    console.log("RB (kg/ha):", RB);
    console.log("Total Biomass (kg/ha):", totalBiomass);
    console.log("Nitrogen Uptake (kg N/ha):", nUptake);
    console.log("Nitrogen Fixed (kg N/ha):", nFixed);

    let residueBiomass = 0;
    if (residueManagement === 'Residues Removed') {
        residueBiomass = RB;
    } else {
        residueBiomass = AGB + RB;
    }

    const nFromResidues = residueBiomass * crop.nContent;
    const pReturned = residueBiomass * crop.pContent * 2.29; // Convert P to P₂O₅
    const kReturned = residueBiomass * crop.kContent * 1.2;  // Convert K to K₂O

    console.log("Residue Biomass (kg/ha):", residueBiomass);
    console.log("Nitrogen from Residues (kg N/ha):", nFromResidues);
    console.log("Phosphorus Returned (kg P₂O₅/ha):", pReturned);
    console.log("Potassium Returned (kg K₂O/ha):", kReturned);

    // Total Nitrogen Contribution = Nitrogen Fixed + Nitrogen from Residues
    const nReturned = nFixed + nFromResidues;

    console.log("Total Nitrogen Returned (kg N/ha):", nReturned);

    // Display results with validation
    document.getElementById('nFixed').innerText = crop.isNitrogenFixing && nFixed > 0 ? nFixed.toFixed(2) + ' kg N/ha' : "N/A";
    document.getElementById('nFromResidues').innerText = isNaN(nFromResidues) ? "N/A" : nFromResidues.toFixed(2) + ' kg N/ha';
    document.getElementById('nContribution').innerText = nReturned > 0 ? nReturned.toFixed(2) + ' kg N/ha' : "N/A";
    document.getElementById('pContribution').innerText = isNaN(pReturned) ? "N/A" : pReturned.toFixed(2) + ' kg P₂O₅/ha';
    document.getElementById('kContribution').innerText = isNaN(kReturned) ? "N/A" : kReturned.toFixed(2) + ' kg K₂O/ha';

    // Optional: Disable nodulation efficiency input for non-nitrogen-fixing crops
    toggleNodulationInput(crop.isNitrogenFixing);
}

// Function to enable or disable the nodulation efficiency input
function toggleNodulationInput(isEnabled) {
    const nodulationInput = document.getElementById('nodulationEfficiency');
    nodulationInput.disabled = !isEnabled;
}

 // Attach event listener to the form
document.getElementById('npkForm').addEventListener('submit', calculateNPK);

// Attach event listener to the crop type dropdown to update nodulation input
document.getElementById('cropType').addEventListener('change', function() {
    const selectedCrop = cropData[this.value];
    if (selectedCrop) {
        toggleNodulationInput(selectedCrop.isNitrogenFixing);
    }
});
