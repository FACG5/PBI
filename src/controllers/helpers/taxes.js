const taxes = (deductions, variables) => {
  const { taxValue } = variables;
  const employeeDeductions = deductions;
  employeeDeductions.sectionTaxes1 = 0;
  employeeDeductions.sectionTaxes2 = 0;
  employeeDeductions.sectionTaxes3 = 0;
  if (employeeDeductions.salaryTaxes <= taxValue) {
    employeeDeductions.sectionTaxes1 = employeeDeductions.salaryTaxes * 0.05;
  }
  if (
    employeeDeductions.salaryTaxes > taxValue
        && employeeDeductions.salaryTaxes <= taxValue * 2
  ) {
    employeeDeductions.sectionTaxes1 = taxValue * 0.05;
    employeeDeductions.sectionTaxes2 = (employeeDeductions.salaryTaxes - taxValue) * 0.1;
  }
  if (employeeDeductions.salaryTaxes > taxValue * 2) {
    employeeDeductions.sectionTaxes1 = taxValue * 0.05;
    employeeDeductions.sectionTaxes2 = taxValue * 0.1;
    employeeDeductions.sectionTaxes3 = (employeeDeductions.salaryTaxes - (taxValue * 2)) * 0.15;
  }
  employeeDeductions.sectionTaxesTotal = employeeDeductions.sectionTaxes1
        + employeeDeductions.sectionTaxes2
        + employeeDeductions.sectionTaxes3;
  return employeeDeductions;
};

module.exports = taxes;
