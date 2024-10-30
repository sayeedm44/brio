function convertToMillimeters() {
    const feet = parseFloat(document.getElementById('feetInput').value);
    if (!isNaN(feet)) {
        const millimeters = feet * 304.8; // 1 foot = 304.8 mm
        document.getElementById('result').innerText = `${feet} feet is equal to ${millimeters.toFixed(2)} mm`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number';
    }
}