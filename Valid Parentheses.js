isValid = (s) => {
    let items = [];
    for(let i=0; i<s.length;i++)
    {
        switch(s[i])
        {
            case "(" :
                items.push("(");
                break;

            case ")" :
                if(items.length === 0)
                    return false;
                if(items.pop() !== "(")
                    return false; 
                    break;

            case "[" :
                items.push("[");
                break;

            case "]" :
                if(items.length === 0)
                    return false;
                if(items.pop() !== "[")
                    return false; 
                break;

            case "{" :
                items.push("{");
                break;

            case "}" :
            if(items.length === 0)
                return false;
            if(items.pop() !== "{")
                return false; 
            break;

            default:
                return false;
        }
    }
    return(
        items.length === 0
    )
};

console.log(isValid("()[]{}"));