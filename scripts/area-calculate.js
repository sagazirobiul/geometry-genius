function calculateTriangle(){
    const base = getFieldValue('triangle-base');
    const height = getFieldValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number!');
        return;
    }

    const area = 0.5 * base * height;
    setElementText('triangle-area', area);
    addToCalculationEntry('Triangle', area);
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
    addToCalculationEntry('Rectangle', area);
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
    addToCalculationEntry('Parallelogram',area);
}

function calculateEllipse(){
    const aAxis = getFieldValue('ellipse-a-axis');
    const bAxis = getFieldValue('ellipse-b-axis');
    if(isNaN(aAxis) || isNaN(bAxis)){
        alert('Please insert a number!');
        return;
    }

    const area = Math.PI * aAxis * bAxis;
    setElementText('ellipse-area', area.toFixed(2));
    addToCalculationEntry('Ellipse', area.toFixed(2));
}

function calculatePentagon(){
    const perimeter = getFieldValue('pentagon-perimeter');
    const base = getFieldValue('pentagon-base');
    if(isNaN(perimeter) || isNaN(base)){
        alert('Please insert a number!');
        return;
    }

    const area = 0.5 * perimeter * base;
    setElementText('pentagon-area', area);
    addToCalculationEntry('Pentagon', area);
}

function calculateRhombus(){
    const diagonal1 = getFieldValue('rhombus-diagonal');
    const diagonal2 = getFieldValue('rhombus-2nd-diagonal');
    const base = getFieldValue('pentagon-base');
    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert('Please insert a number!');
        return;
    }

    const area = (diagonal1 * diagonal2) / 2;
    setElementText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
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

function addToCalculationEntry(areaType, areValue){
    const calculationEntry = document.getElementById('are-calculation-entry');
    const count = calculationEntry.childElementCount;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${count + 1}. ${areaType}</td>
        <td class="text-center">${areValue} cm<sup>2</sup></td>
        <td class="text-center"><button onclick="alert('This function is not developed yet!')" class="btn btn-success btn-sm">Convert<button></td> 
    `
    calculationEntry.appendChild(tr);
}