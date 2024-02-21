

async function mergeSort(arr){
    

    if(arr.length <= 1){
        return arr;
    }

    
    
    let mid = Math.floor(arr.length/2);
    
    
    
    let leftArray =  await mergeSort(arr.slice(0,mid));
    
    
    let rightArray = await mergeSort(arr.slice(mid));
    
    displayArray(randomIntegerArray);
    return await merge(arr,leftArray,rightArray);
}


async function merge(arr,leftArray,rightArray){
    let i = j = k = 0;
    const result = [];
    

    while((i < leftArray.length) && (j < rightArray.length)) {
        
        if (leftArray[i] <= rightArray[j]){
                result.push(leftArray[i]);
                arr[k] = leftArray[i];
                i++;
                
        }
        
        else {
            
            result.push(rightArray[j]);
            arr[k] = rightArray[j];
            j++; 
                   
    }
    
    k++;
    //displayArray(result);
    displayArray(arr,k,'sorted');
    await delay(100);
}



    while (i < leftArray.length){
        result.push(leftArray[i]);
        arr[k] = leftArray[i];
        i++;
        k++;
        //displayArray(result);
        displayArray(arr,k,'compare');
        await delay(100);
        
        
    }
    
    while (j < rightArray.length){
        result.push(rightArray[j]);
        arr[k] = rightArray[j];
        j++;
        k++;
        //displayArray(result);
        displayArray(arr,k,'compare');
        await delay(100);
        
    }
//displayArray(result);
displayArray(arr,k,'sorted');
await delay(100);


displayArray(arr);
return arr;
    
}






