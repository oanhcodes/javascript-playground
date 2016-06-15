function SalesTeam(employeeArray) {
  this.employees = employeeArray;
};

SalesTeam.prototype.find = function(firstName){
    return this.employees.find(function(employee){
      return employee.firstName === firstName;
    })
  };

SalesTeam.prototype.topPerformer = function() {
    var salesArray = []
    for(i=0; i < this.employees.length; i++) {
      salesArray.push(this.employees[i].averageSales());
    }
    salesArray.sort(function(a,b) {
      return b-a;
    });
      return this.employees.find(function(employee) {
      return employee.averageSales() === salesArray[0];
    })
};
