function calculateTriangle(){
    const base = getFieldValue('triangle-base');
    const height = getFieldValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number!');
        return;
    }

    const area = 0.5 * base * height;
    setElementText('triangle-area', area);
}

function calculateRectangle(){
    const width = getFieldValue('rectangle-width');
    const length = getFieldValue('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number!');
        return;
    }

    const area = width * length;
    setElementText('rectangle-area', area);
}

function calculateParallelogram(){
    const base = getFieldValue('parallelogram-base')
    const height = getFieldValue('parallelogram-height')
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number!');
        return;
    }

    const area = base * height;
    setElementText('parallelogram-area', area);
}

function calculateEllipse(){
    const aAxis = getFieldValue('ellipse-a-axis');
    const bAxis = getFieldValue('ellipse-b-axis');
    if(isNaN(aAxis) || isNaN(bAxis)){
        alert('Please insert a number!');
        return;
    }

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