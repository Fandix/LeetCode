romanToInt = (x) => {

    const symbol = ["I","V","X","L","C","D","M"];
    const value = [1,5,10,50,100,500,1000]
    const _Number = [];
   
    //Step 1 : Check inout unempty
    if(x.length === 0)
    {
        return 0;
    }

    //Step 2 : Roman to Number
    for(let i =0;i<x.length;i++)
    {
        _Number[i] = value[symbol.indexOf(x[i])];
    }

    
    //Step 3 : Number Calculate
    let Count = _Number.length - 1;
    let output = _Number[Count]; //Set the Last
       
    while(Count > 0)
    {
        _Number[Count-1] >= _Number[Count] ? output += _Number[Count-1] : output -= _Number[Count-1];          
        Count--;
    }
   return output;

    //PullTest
    
};

console.log(romanToInt("LXXIV"));
