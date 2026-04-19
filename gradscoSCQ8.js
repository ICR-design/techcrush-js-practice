//a function that returns the letter grade of students
function gradeScores(score){
    if (score >= 70 && score <= 100){
        return 'A';
    } else if(score >= 60){
        return 'B';
    } else if(score >= 50){
        return 'C';
    } else if(score >=40){
        return 'D';
    } else{
        return 'F';
    }
}

console.log(gradeScores(85));
console.log(gradeScores(62));
console.log(gradeScores(45));
console.log(gradeScores(30));