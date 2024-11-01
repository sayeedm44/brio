// Function to calculate all cabinWidth and cabinDepth values
function calculateCabinDimensions() {
    const mainWidth = parseFloat(document.getElementById("mainWidth").value);
    const mainDepth = parseFloat(document.getElementById("mainDepth").value);

    // Skip validation until input is finished
    if (isNaN(mainWidth) || isNaN(mainDepth)) {
        return; // Just return without showing alert
    }

    // Define an array with cabin IDs and their corresponding offsets for width and depth
    const cabinConfigs = [
        { widthId: "cabinWidth1", widthOffset: 300 + 60 + 60, depthId: "cabinDepth1", depthOffset: 60 + 200 },
        { widthId: "cabinWidth2", widthOffset: 70 + 70 + 60, depthId: "cabinDepth2", depthOffset: 300 + 200 },
        { widthId: "cabinWidth3", widthOffset: 300 + 60 + 60, depthId: "cabinDepth3", depthOffset: 60 + 270 },
        { widthId: "cabinWidth4", widthOffset: 70 + 60 + 70, depthId: "cabinDepth4", depthOffset: 300 + 270 },
        { widthId: "cabinWidth5", widthOffset: 300 + 60 + 60, depthId: "cabinDepth5", depthOffset: 60 + 90 },
        { widthId: "cabinWidth6", widthOffset: 70 + 60 + 70, depthId: "cabinDepth6", depthOffset: 300 + 90 },
        { widthId: "cabinWidth7", widthOffset: 420 + 60 + 60, depthId: "cabinDepth7", depthOffset: 60 + 200 },
        { widthId: "cabinWidth8", widthOffset: 60 + 60 + 60, depthId: "cabinDepth8", depthOffset: 420 + 200 },
        { widthId: "cabinWidth9", widthOffset: 420 + 60 + 60, depthId: "cabinDepth9", depthOffset: 60 + 270 },
        { widthId: "cabinWidth10", widthOffset: 60 + 60 + 60, depthId: "cabinDepth10", depthOffset: 420 + 270 },
        { widthId: "cabinWidth11", widthOffset: 420 + 60 + 60, depthId: "cabinDepth11", depthOffset: 60 + 90 },
        { widthId: "cabinWidth12", widthOffset: 60 + 60 + 60, depthId: "cabinDepth12", depthOffset: 420 + 90 },
        { widthId: "cabinWidth13", widthOffset: 420 + 60 + 60, depthId: "cabinDepth13", depthOffset: 60 + 200 },
        { widthId: "cabinWidth14", widthOffset: 60 + 60 + 60, depthId: "cabinDepth14", depthOffset: 420 + 200 },
        { widthId: "cabinWidth15", widthOffset: 420 + 60 + 60, depthId: "cabinDepth15", depthOffset: 60 + 270 },
        { widthId: "cabinWidth16", widthOffset: 60 + 60 + 60, depthId: "cabinDepth16", depthOffset: 420 + 270 },
        { widthId: "cabinWidth17", widthOffset: 420 + 60 + 60, depthId: "cabinDepth17", depthOffset: 60 + 90 },
        { widthId: "cabinWidth18", widthOffset: 60 + 60 + 60, depthId: "cabinDepth18", depthOffset: 420 + 90 },
        { widthId: "cabinWidth19", widthOffset: 550 + 60, depthId: "cabinDepth19", depthOffset: 90 + 200 },
        { widthId: "cabinWidth20", widthOffset: 300 + 60, depthId: "cabinDepth20", depthOffset: 250 + 200 },
        { widthId: "cabinWidth21", widthOffset: 550 + 60, depthId: "cabinDepth21", depthOffset: 90 + 270 },
        { widthId: "cabinWidth22", widthOffset: 300 + 60, depthId: "cabinDepth22", depthOffset: 250 + 270 },
        { widthId: "cabinWidth23", widthOffset: 550 + 60, depthId: "cabinDepth23", depthOffset: 90 + 90 },
        { widthId: "cabinWidth24", widthOffset: 300 + 60, depthId: "cabinDepth24", depthOffset: 250 + 90 },
    ];

    // Calculate and assign each cabin width and depth value
    cabinConfigs.forEach(({ widthId, widthOffset, depthId, depthOffset }) => {
        const cabinWidthElement = document.getElementById(widthId);
        const cabinDepthElement = document.getElementById(depthId);

        if (cabinWidthElement && cabinDepthElement) {
            cabinWidthElement.value = Math.floor(mainWidth - widthOffset);
            cabinDepthElement.value = Math.floor(mainDepth - depthOffset);
        } else {
            console.warn(`Element with ID ${widthId} or ${depthId} not found in the document.`);
        }
    });
    console.log("All calculations completed.");
}

// Event listeners to trigger calculation on input blur
document.getElementById("mainWidth").addEventListener("blur", calculateCabinDimensions);
document.getElementById("mainDepth").addEventListener("blur", calculateCabinDimensions);
