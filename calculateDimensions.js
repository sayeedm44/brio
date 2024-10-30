function calculateCabinDimensions() {
    // Existing table calculations (1 to 12)
    const width1 = parseFloat(document.getElementById('width1').value) || 0;
    const depth1 = parseFloat(document.getElementById('depth1').value) || 0;
    const mechanism1 = 300;
    const cabinThickness1 = 60;
    const bufferWidth1 = 60;
    const bufferDepth1 = 60;
    const totalSpaceDoorBuffer1 = 200;

    const cabinWidth1 = width1 - mechanism1 - cabinThickness1 - bufferWidth1;
    const cabinDepth1 = depth1 - bufferDepth1 - totalSpaceDoorBuffer1;

    document.getElementById('cabinWidth1').innerText = cabinWidth1 > 0 ? cabinWidth1 : "Invalid";
    document.getElementById('cabinDepth1').innerText = cabinDepth1 > 0 ? cabinDepth1 : "Invalid";

    const width2 = parseFloat(document.getElementById('width2').value) || 0;
    const depth2 = parseFloat(document.getElementById('depth2').value) || 0;
    const mechanism2 = 300;
    const cabinThickness2 = 60;
    const bufferWidth2 = 70;
    const bufferDepth2 = 70;
    const totalSpaceDoorBuffer2 = 200;

    const cabinWidth2 = width2 - cabinThickness2 - bufferWidth2 - bufferDepth2;
    const cabinDepth2 = depth2 - mechanism2 - totalSpaceDoorBuffer2;

    document.getElementById('cabinWidth2').innerText = cabinWidth2 > 0 ? cabinWidth2 : "Invalid";
    document.getElementById('cabinDepth2').innerText = cabinDepth2 > 0 ? cabinDepth2 : "Invalid";

    // Helper function for new tables
    const calculateDimensions = (widthId, depthId, cabinWidthId, cabinDepthId, mechanism, cabinThickness, bufferWidth, bufferDepth, totalSpaceDoorBuffer, guideRails = 0, isMechanismWidth) => {
        const width = parseFloat(document.getElementById(widthId).value) || 0;
        const depth = parseFloat(document.getElementById(depthId).value) || 0;

        const cabinWidth = width - (isMechanismWidth ? mechanism : 0) - cabinThickness - bufferWidth - guideRails;
        const cabinDepth = depth - (isMechanismWidth ? bufferDepth : mechanism) - totalSpaceDoorBuffer;

        document.getElementById(cabinWidthId).innerText = cabinWidth > 0 ? cabinWidth : "Invalid";
        document.getElementById(cabinDepthId).innerText = cabinDepth > 0 ? cabinDepth : "Invalid";
    };

    // Calculate dimensions for additional tables
    calculateDimensions('width3', 'depth3', 'cabinWidth3', 'cabinDepth3', 300, 60, 60, 60, 270, true);
    calculateDimensions('width4', 'depth4', 'cabinWidth4', 'cabinDepth4', 300, 60, 70, 70, 270, false);
    calculateDimensions('width5', 'depth5', 'cabinWidth5', 'cabinDepth5', 300, 60, 60, 60, 60, true);
    calculateDimensions('width6', 'depth6', 'cabinWidth6', 'cabinDepth6', 300, 60, 70, 70, 60, false);

    // New MRL tables (13 to 18)
    calculateDimensions('width13', 'depth13', 'cabinWidth13', 'cabinDepth13', 550, 60, 150, 90, 200, 0, true);
    calculateDimensions('width14', 'depth14', 'cabinWidth14', 'cabinDepth14', 250, 60, 0, 0, 200, 300, false);
    calculateDimensions('width15', 'depth15', 'cabinWidth15', 'cabinDepth15', 550, 60, 150, 90, 270, 0, true);
    calculateDimensions('width16', 'depth16', 'cabinWidth16', 'cabinDepth16', 250, 60, 0, 0, 270, 300, false);
    calculateDimensions('width17', 'depth17', 'cabinWidth17', 'cabinDepth17', 550, 60, 150, 90, 60, 0, true);
    calculateDimensions('width18', 'depth18', 'cabinWidth18', 'cabinDepth18', 250, 60, 0, 0, 60, 300, false);
}

// Event listeners for all inputs
[
    'width1', 'depth1', 'width2', 'depth2', 
    'width3', 'depth3', 'width4', 'depth4', 
    'width5', 'depth5', 'width6', 'depth6', 
    'width7', 'depth7', 'width8', 'depth8', 
    'width9', 'depth9', 'width10', 'depth10', 
    'width11', 'depth11', 'width12', 'depth12', 
    'width13', 'depth13', 'width14', 'depth14', 
    'width15', 'depth15', 'width16', 'depth16', 
    'width17', 'depth17', 'width18', 'depth18'
].forEach(id => {
    document.getElementById(id).addEventListener('input', calculateCabinDimensions);
});