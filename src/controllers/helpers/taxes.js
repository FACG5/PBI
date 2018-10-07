const taxes = (deductions) => {
  const employeeDeductions = deductions;
  employeeDeductions.sectionTaxes1 = 0;
  employeeDeductions.sectionTaxes2 = 0;
  employeeDeductions.sectionTaxes3 = 0;
  if (employeeDeductions.salaryTaxes <= 6250) {
    employeeDeductions.sectionTaxes1 = employeeDeductions.salaryTaxes * 0.05;
  }
  if (
    employeeDeductions.salaryTaxes > 6250
        && employeeDeductions.salaryTaxes <= 12500
  ) {
    employeeDeductions.sectionTaxes1 = 6250 * 0.05;
    employeeDeductions.sectionTaxes2 = (employeeDeductions.salaryTaxes - 6250) * 0.1;
  }
  if (employeeDeductions.salaryTaxes > 12500) {
    employeeDeductions.sectionTaxes1 = 6250 * 0.05;
    employeeDeductions.sectionTaxes2 = 6250 * 0.1;
    employeeDeductions.sectionTaxes3 = (employeeDeductions.salaryTaxes - 12500) * 0.15;
  }
  employeeDeductions.sectionTaxesTotal = employeeDeductions.sectionTaxes1
        + employeeDeductions.sectionTaxes2
        + employeeDeductions.sectionTaxes3;
  return employeeDeductions;
};

module.exports = taxes;
