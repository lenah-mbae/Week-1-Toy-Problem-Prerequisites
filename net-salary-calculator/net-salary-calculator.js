function netSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    function paye(taxableIncome) {
        if (taxableIncome <= 24000) {
            return taxableIncome * 0.1;
        } else if (taxableIncome <= 32333) {
            return 2400 + (taxableIncome - 24000) * 0.25;
        } else if (taxableIncome <= 500000) {
            return 4483.25 + (taxableIncome - 32333) * 0.30;
        } else if (taxableIncome <= 800000) {
            return 144783.35 + (taxableIncome - 500000) * 0.325;
        } else {
            return 249783.35 + (taxableIncome - 800000) * 0.35;
        }
    }

    function SHIF(grossSalary) {
        return grossSalary * 0.0275;
    }

    function NSSF(grossSalary) {
        const tierI = Math.min(grossSalary, 8000) * 0.06;
        const tierII = Math.min(Math.max(grossSalary - 8000, 0), 72000) * 0.06;
        return tierI + tierII;
    }

    function housingLevy(grossSalary) {
        return grossSalary * 0.015;
    }

    const personalRelief = 2400;
    const nssfDeduction = NSSF(grossSalary);
    const shifContribution = SHIF(grossSalary);
    const housingLevyDeduction = housingLevy(grossSalary);

    const taxableIncome = grossSalary - (nssfDeduction + shifContribution + housingLevyDeduction);
    const payeTax = paye(taxableIncome);

    const netSalary = grossSalary - (nssfDeduction + shifContribution + housingLevyDeduction + payeTax - personalRelief);

    return {
        basicSalary,
        benefits,
        grossSalary,
        nssfDeduction,
        shifContribution,
        housingLevyDeduction,
        taxableIncome,
        payeTax,
        personalRelief,
        netSalary
    };
}

// Getting user input
const basicSalary = parseFloat(prompt("Enter your basic salary"));
const benefits = parseFloat(prompt("Enter your benefits"));

const salaryDetails = netSalary(basicSalary, benefits);
console.log(salaryDetails);
