function calculateGrade() {
            
    let score = document.getElementById('score').value;
    let grade;

    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else if (score >= 0 && score < 60) {
        grade = 'F';
    } else {
        grade = 'Invalid score. Please enter a number between 0 and 100.';
    }

    document.getElementById('grade').textContent = `Your grade is: ${grade}`;
}