var months = ["january","march","april","june","july"]

var newmonths = months.splice(months.length,0,"dec")
console.log(months)
console.log(newmonths)

var months = ["january","march","april","june","july"]
var indexofmonth = months.indexOf("june")
if(indexofmonth !== -1){
  const updatemonth = months.splice(indexofmonth,1,"june")
  console.log(months)
}else{
  console.log("month not found")
}
const monthupdate = months.splice(1,1,"March")
console.log(months)
var indexofmonth = months.indexOf("june")
if(indexofmonth !== -1){
    const updatemonth = months .splice(indexofmonth,1)
    console.log(months)
    console.log(updatemonth)
}else{    console.log("month not found")
}
