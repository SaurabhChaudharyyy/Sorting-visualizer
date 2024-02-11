

async function mergeSort(randomIntegerArray){
    

    if(randomIntegerArray.length <= 1){
        return randomIntegerArray;
    }
    
    let mid = Math.floor(randomIntegerArray.length/2);
    
    
    
    let leftArray =  await mergeSort(randomIntegerArray.slice(0,mid));
    
    
    let rightArray = await mergeSort(randomIntegerArray.slice(mid));
    
    
    return merge(randomIntegerArray,leftArray,rightArray);
}


async function merge(randomIntegerArray,leftArray,rightArray){
    let i = j = k = 0;
    displayArray(leftArray.concat(rightArray));
    

    while((i < leftArray.length) && (j < rightArray.length)) {
        displayArray(leftArray.concat(rightArray));
         
        
        
        if (leftArray[i] <= rightArray[j]){
                
                displayBars();
                await delay(20);
                randomIntegerArray[k] = leftArray[i];
                i++;
                displayBars(k,'compare');
                await delay(20);
                
        }
        
        else {
            
            displayBars();
            await delay(20);
            randomIntegerArray[k] = rightArray[j];
            j++; 
            displayBars(k,'compare');
            await delay(20);
            
                   
    }
    k++;
    displayBars(k,'sorted');
    await delay(20);
    
    
}



    while (i < leftArray.length){
        randomIntegerArray[k] = leftArray[i];
        i++;
        k++;
        
        
    }
    
    while (j < rightArray.length){
        randomIntegerArray[k] = rightArray[j];
        j++;
        k++;
        
    }
displayBars();
return randomIntegerArray;
    
}






