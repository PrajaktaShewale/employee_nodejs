//UC4
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS =20;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS = 8;
let empHrs =0;
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;            
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
for(let day =0; day<NUM_OF_WORKING_DAYS; day++){
    var empCheck = Math.floor(Math.random()*10)%3;
    empHrs +=getWorkingHours(empCheck);
}
console.log(empCheck);
let empWage = empHrs *WAGE_PER_HOURS;
console.log("Total Hrs : "+ empHrs + "  EmpWage For MOnth : " + empWage);