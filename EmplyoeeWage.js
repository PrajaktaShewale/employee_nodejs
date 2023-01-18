//UC1
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10)% 2;// Returns a random integer from 0 to 9
if (empCheck == IS_ABSENT){
    console.log("Emplyoee is Absent");
    return ;
}else{
    console.log("Employee is Present");
}