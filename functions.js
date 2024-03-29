//question one
function sortedArray(people){
    console.log(people.sort());
    console.log(people.reverse())

}
sortedArray(["Kate", "Maury","Andrew","Zack"]);


//question2
var nums=[2,6,-8,1,-3,0,5,-4];
function myFunction(nums){
    let negative=nums.filter((element)=>element <0)
    let positive = nums.filter((element)=>element >0 )
    let zero = nums.filter((element)=>element ==0)
    return{
        negative:negative,
        positive:positive,
        zero:zero
    }
}
//question4
function product(numbers){
    numbers.forEach(g=>{
        console.log(`product`,g*2)

    })
}
    product([5,7,9,2,4,]);

    //question 5
    function operator(numbs){
        let firstNums= numbs.slice(0,4).map(x=> y*8);
        let lastNums = numbs.slice(-2).map(y+5)
       let newArray = firstNums.concat(lastNums)

       console.log({newArray})
    }