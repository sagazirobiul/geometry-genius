function calculateTriangle(){
    const baseFiled = document.getElementById('triangle-base');
    const base = parseFloat(baseFiled.value);

    const heightElement = document.getElementById('triangle-height');
    const height = parseFloat(heightElement.value);

    const area = 0.5 * base * height;
    document.getElementById('triangle-area').innerText = area;
}