var bubbleSort = () =>{
    let myarray = [23,2,4,21,7,4,6,0,9,1,7,34,21,67,32,67,8,3,2,4,5];
    let len = myarray.length;
    let swapped = false;
    do{
        
        swapped = false;
        for(var i = 0; i<len -1; i++){

            if(myarray[i] > myarray[i + 1]){

                //Found Small Value
                var temp = myarray[i + 1];
                //Replae small value with previous value
                myarray[i + 1] = myarray[i];
                //Do the swaping
                myarray[i] = temp;
                //Continue looking
                swapped = true;
                
            }
        }

    }while(swapped);
    console.log ("Big Value ", myarray);
}
bubbleSort();