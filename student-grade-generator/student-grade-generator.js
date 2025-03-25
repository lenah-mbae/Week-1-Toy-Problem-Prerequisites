function gradeGenerator (){
    const marks = parseFloat(prompt("Enter your marks (0-100): "));
    if (marks <=0 || marks >100) {
        console.log("Invalid marks entered");
    }
    if (marks >= 79) {
        return ("A");
    }
    else if (marks >= 60) {
        return ("B");
    }
    else if (marks >= 49) {
        return ("C");
    }
    else if (marks >= 40) {
        return ("D");
    }
    else {
        return ("E");
    }
}
console.log(gradeGenerator());