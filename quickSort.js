
async function quickSort(arr,start=0,end=arr.length-1){
if(start < end){
    let pivot = await partition(arr,start,end);
    
    await quickSort(arr,start,pivot-1);
    await quickSort(arr,pivot+1,end);
}
return (arr);
}

async function partition(arr,start,end){
    let pivot = arr[end];
    let i = start - 1;

    for(let j=start; j < end; j++){
        if (arr[j] <= pivot){
            i++;
            
            displayArray(arr,j,'compare');
            await delay(100);
            await swap(arr,i,j);
            
        }

    }
     
    displayArray(arr,end,'compare');
    await delay(100);
    await swap(arr,i+1,end);
    return i+1;
}

async function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    displayArray(arr,i,'sorted');
    await delay(100);
}

