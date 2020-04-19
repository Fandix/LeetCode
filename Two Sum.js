const twoSum = (nums,target) => {
    var map = new Object
    
    for(let i=0;i<nums.length;i++)
    {    
        const detect = target - nums[i];
        if(detect in map)
        {
            return[map[detect],i]
        }
        map[nums[i]] = i;
    }
    return map;
};

const Array = [2,3,4];

const result = twoSum(Array,6);
console.log(result);

