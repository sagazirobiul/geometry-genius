function calculateTriangle(){
    const baseFiled = document.getElementById('triangle-base');
    const base = parseFloat(baseFiled.value);

    const heightElement = document.getElementById('triangle-height');
    const height = parseFloat(heightElement.value);

    const area = 0.5 * base * height;
    document.getElementById('triangle-area').innerText = area;
}


function calculateRectangle(){
    const widthField = document.getElementById('rectangle-width');
    const width = parseFloat(widthField.value);

    const lengthField = document.getElementById('rectangle-length');
    const length = parseFloat(lengthField.value);

    const area = width * length;
    document.getElementById('rectangle-area').innerText = area;
}


function calculateParallelogram(){
    const base = getFieldValue('parallelogram-base')
    const height = getFieldValue('parallelogram-height')

    const area = base * height
    document.getElementById('parallelogram-area').innerText = area;
}


function getFieldValue(fieldId){
    const field = document.getElementById(fieldId);
    const value = parseFloat(field.value);

    return value;
}