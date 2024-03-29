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
//console.log(myFunction(nums))

//question3
//var record=[{id:457678, name:"Mwendwa Betty", salary:90000} ,{id:7896445, name:"Sandra Tubei", salary:789000}, {id:76504, name:"Kate Mabwai", salary:679843}]
//let record= salary