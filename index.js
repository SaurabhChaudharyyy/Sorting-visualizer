const generateButton = document.getElementById("generate");
const mergeSortButton = document.getElementById("mergeSort");
const resetButton = document.getElementById("reSet");
const bubbleSortButton = document.getElementById("bubbleSort");
const arrayContainer = document.getElementById("arrayContainer");
const insertionSortButton = document.getElementById("insertionSort");
const quickSortButton = document.getElementById("quickSort");

let randomIntegerArray = [];




generateButton.addEventListener("click",generateArray);
resetButton.addEventListener("click",resetArray);
mergeSortButton.addEventListener("click",async function() { 
    displayArray(randomIntegerArray);
    await mergeSort(randomIntegerArray);
    displayArray(randomIntegerArray);
});

bubbleSortButton.addEventListener("click",bubbleSort);

insertionSortButton.addEventListener("click",insertionSort);

quickSortButton.addEventListener("click",async function() {

    displayArray(randomIntegerArray);
    await quickSort(randomIntegerArray);
    displayArray(randomIntegerArray);
    
});




function generateArray(){
    resetArray();
    
    
    let length =50;
    let min = 1;
    let max = 100;

    

    for (let i=0; i<length;i++){
        let randomInteger = Math.floor(Math.random()*(max-min+1)) + min;
        
        randomIntegerArray.push(randomInteger);
        
        
    }
    displayArray(randomIntegerArray);
}

function resetArray() {
    randomIntegerArray = [];
    
    arrayContainer.innerHTML = "";

}


function display(num){
    
    const barHeight = num * 2;
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = barHeight + "px";
    bar.style.backgroundColor = color;
    arrayContainer.appendChild(bar);
    
} 




function displayBars(index,className){
    arrayContainer.innerHTML = "";
    //console.log("display Bar",randomIntegerArray);
    for(let i=0; i<randomIntegerArray.length;i++){
        const barHeight = randomIntegerArray[i]*2;
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = barHeight + "px";
        if(index && index == i){
            bar.style.backgroundColor = className == 'compare'? "red":"green";
        }
        arrayContainer.appendChild(bar);
    }
    
}


function displayArray(array,index,className){
    arrayContainer.innerHTML = "";
    
    for(let i=0; i<array.length;i++){
        const barHeight = array[i]*2;
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = barHeight + "px";
        if(index && index == i){
            bar.style.backgroundColor = className == 'compare'? "red":"green";
        }
        arrayContainer.appendChild(bar);
    }
    
}


function delay(ms){
    return new Promise(reslove => setTimeout(reslove, ms));
}








