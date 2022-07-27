
    function subarraySum(arr, n, s)
    {
        var result = []
        var count = 0
       for(let i=0;i<n;i++){
           var first = arr[i]
        for(let j= i;j<n;j++){
            var second = arr[j]
            if((first + second == s)){
                count += arr.indexOf(first) -1
                result.push(count,arr.indexOf(second))
            }
        }
       }
       return result
    }
console.log(subarraySum([1,2,3,7,5],5,12))