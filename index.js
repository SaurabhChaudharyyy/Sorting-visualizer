const generateButton = document.getElementById("generate");
const mergeSortButton = document.getElementById("mergeSort");
const resetButton = document.getElementById("reSet");
const bubbleSortButton = document.getElementById("bubbleSort");
const arrayContainer = document.getElementById("arrayContainer");
const insertionSortButton = document.getElementById("insertionSort");

let randomIntegerArray = [];




generateButton.addEventListener("click",generateArray);
resetButton.addEventListener("click",resetArray);
mergeSortButton.addEventListener("click",function() { 
    
    if(randomIntegerArray.length > 0){
        mergeSort(randomIntegerArray);
        

    } else {
        console.log("please genearate an array first");
    }
});

bubbleSortButton.addEventListener("click",bubbleSort);
insertionSortButton.addEventListener("click",insertionSort);




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


function display(num, className){
    
    const barHeight = num * 2;
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = barHeight + "px";
    bar.style.backgroundColor = color;
    arrayContainer.appendChild(bar);
    arrayContainer.childNodes[num].className = className;
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


function displayArray(array){
    arrayContainer.innerHTML = "";
    //console.log("display Bar",array);
    for(let i=0; i<array.length;i++){
        const barHeight = array[i]*2;
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = barHeight + "px";
        arrayContainer.appendChild(bar);
    }
    
}


function delay(ms){
    return new Promise(reslove => setTimeout(reslove, ms));
}








