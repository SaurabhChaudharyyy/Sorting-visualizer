async function bubbleSort(){
    let temp = 0;
    for(let i=0; i<randomIntegerArray.length; i++){
       
        for (let j=1; j<randomIntegerArray.length; j++){
            
            if (randomIntegerArray[j-1] > randomIntegerArray[j]){
                
                temp = randomIntegerArray[j-1];
                randomIntegerArray[j-1] = randomIntegerArray[j];
                randomIntegerArray[j] = temp;
                
                displayBars(j-1, 'compare');
                await delay(50);
                
            }
            displayBars(j-1,'sorted');
          await delay(50);
            
        }
          
          
    }
    displayBars();
}

{
    
}