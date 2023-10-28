function calculateTriangle(){
    const base = getFieldValue('triangle-base');
    const height = getFieldValue('triangle-height');

    const area = 0.5 * base * height;
    setElementText('triangle-area', area);
}

function calculateRectangle(){
    const width = getFieldValue('rectangle-width');
    const length = getFieldValue('rectangle-length');

    const area = width * length;
    setElementText('rectangle-area', area);
}

function calculateParallelogram(){
    const base = getFieldValue('parallelogram-base')
    const height = getFieldValue('parallelogram-height')

    const area = base * height;
    setElementText('parallelogram-area', area);
}

function calculateEllipse(){
    const aAxis = getFieldValue('ellipse-a-axis');
    const bAxis = getFieldValue('ellipse-b-axis');

    const area = Math.PI * aAxis * bAxis;
    setElementText('ellipse-area', area.toFixed(2))
}


// Common Functions

function getFieldValue(fieldId){
    const field = document.getElementById(fieldId);
    const value = parseFloat(field.value);

    return value;
}

function setElementText(elementId, value){
    document.getElementById(elementId).innerText = value;
}