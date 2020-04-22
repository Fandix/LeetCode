longestCommonPrefix = (strs) => {

    const inputAmount = strs.length;
    let count = 0;
    let output = "";
   
    //Step 1 : Check input unempty
    if (strs.length === 0) 
        return "";

    //Step 2 : Calculate
    for(let i=0;i<strs[0].length;i++)
    {
        count = 0;
        for(let j=1;j<inputAmount;j++)
        {
            if(strs[0][i] === strs[j][i])
            {
                count++;
            }
        }
        if(i === 0 && count !== (inputAmount-1))
            return "";

        if(count === (inputAmount-1))
            output += strs[0][i];
    }
    return output;
};
