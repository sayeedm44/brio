// Function to display width and depth values in all the table cells
function displayMainDimensions() {
    // Get the width and depth values entered by the user
    const mainWidth = parseFloat(document.getElementById("mainWidth").value);
    const mainDepth = parseFloat(document.getElementById("mainDepth").value);

    // Loop through each display cell from 1 to 24
    for (let i = 1; i <= 24; i++) {
        const widthCell = document.getElementById(`displayWidth${i}`);
        const depthCell = document.getElementById(`displayDepth${i}`);
        
        // Check if the cells exist in the DOM
        if (widthCell && depthCell) {
            // Display values if valid numbers, otherwise clear the cells
            if (!isNaN(mainWidth) && !isNaN(mainDepth)) {
                widthCell.textContent = mainWidth;
                depthCell.textContent = mainDepth;
            } else {
                widthCell.textContent = "";
                depthCell.textContent = "";
            }
        }
    }
}

// Add event listeners to update display on input changes
document.getElementById("mainWidth").addEventListener("blur", displayMainDimensions);
document.getElementById("mainDepth").addEventListener("blur", displayMainDimensions);
