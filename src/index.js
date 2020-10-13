
// You should implement your task here.


module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)) {return []}
  mas = [];
  temp = [];
  otv = [];
  let i =1;
  matrix.forEach(e=>{
    i++
    e.forEach(a => {
      console.log(i)
      temp.push(a)
      if(i%2 === 0){
        temp.sort(function(a,b){
          return a-b
        })
      }
      else{
        temp.sort(function(a,b){
          return b-a
        })
      }
    })
    mas.push(temp)
    temp = []
})

mas.forEach(e =>{
 e.forEach(l =>{
   otv.push(l)
 })
})
return otv;
}
