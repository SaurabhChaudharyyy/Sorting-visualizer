async function insertionSort(){
    
    for (let i=1; i<randomIntegerArray.length;i++){
        let key = randomIntegerArray[i];
        let j = i - 1;
         while (j>=0 && randomIntegerArray[j]>key){
                randomIntegerArray[j+1] = randomIntegerArray[j];
                j--;
                
                displayBars(j+1,'compare');
                await delay(100);
            }
            randomIntegerArray[j+1] = key;
            displayBars(j+1,'sorted');
            await delay(100);
    }
    displayBars();
}