function Employee(details) {
  this.firstName = details.firstName;
  this.sales = details.sales;
};

Employee.prototype.totalSales = function() {
  var total = this.sales.reduce(function(a,b) {
    return a+b;
  });
    return total;
};

Employee.prototype.averageSales = function() {
    var length = this.sales.length;
    return this.totalSales()/length;
};
