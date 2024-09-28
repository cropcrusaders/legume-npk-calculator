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

    // Calculations
    const AGB = grainYield * (1 / crop.harvestIndex);
    const RB = AGB * crop.rootShootRatio;
    const totalBiomass = AGB + RB;
    const nUptake = totalBiomass * crop.nContent;
    const nFixed = nUptake * nFixationEfficiency[nodulation];

    let residueBiomass = 0;
    if (residueManagement === 'Residues Removed') {
        residueBiomass = RB;
    } else {
        residueBiomass = AGB + RB;
    }

    const nFromResidues = residueBiomass * crop.nContent;
    const pReturned = residueBiomass * crop.pContent * 2.29; // Convert P to P₂O₅
    const kReturned = residueBiomass * crop.kContent * 1.2;  // Convert K to K₂O

    // Total Nitrogen Contribution = Nitrogen Fixed + Nitrogen from Residues
    const nReturned = nFixed + nFromResidues;

    // Display results with validation
    document.getElementById('nContribution').innerText = isNaN(nReturned) ? "N/A" : nReturned.toFixed(2) + ' kg N/ha';
    document.getElementById('pContribution').innerText = isNaN(pReturned) ? "N/A" : pReturned.toFixed(2) + ' kg P₂O₅/ha';
    document.getElementById('kContribution').innerText = isNaN(kReturned) ? "N/A" : kReturned.toFixed(2) + ' kg K₂O/ha';
}

// Attach event listener to the form
document.getElementById('npkForm').addEventListener('submit', calculateNPK);

