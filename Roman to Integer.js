romanToInt = (x) => {

    const symbol = ["I","V","X","L","C","D","M"];
    const value = [1,5,10,50,100,500,1000]
    const _Number = [];
    const output = [];

    //Step 1 : Roman to Number
    for(let i =0;i<x.length;i++)
    {
        _Number[i] = value[symbol.indexOf(x[i])];
    }

    //Step 2 : Number Calculate
    output[0] = _Number[0];
    for(let i=0;i<_Number.length;i++)
    {
        if(_Number[i+1] == _Number[i])
        {
            output[i] +=  _Number[i+1];
        }
    }



   console.log(output);

};

romanToInt("XXI")