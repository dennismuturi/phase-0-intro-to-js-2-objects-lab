// Write your solution in this file!
const employee ={
    name:"John",
    address:"11th Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key] : value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;

}


function deleteFromEmployeeByKey(employee, key){
   const employeeClone ={...employee};
   delete employeeClone[key];
   return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
