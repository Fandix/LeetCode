
isPalindrome = (x) => {
    const str_input = x.toString();
    const length = Math.floor(str_input.length/2)
    const is_true = length;
    let count = 0;

    if(str_input[0] === "-")
    {
        return "false";
    }
    if(str_input.length%2 === 0)
    {
        return "false";
    }

    for(let i=0;i<length;i++)
    {
        const first = str_input[i];
        const second = str_input[str_input.length-(1+i)];
        if(first == second)
        {
            count++;
        }
    }

    if(count === is_true)
    {
        return true;
    }
};

console.log(isPalindrome(-121));