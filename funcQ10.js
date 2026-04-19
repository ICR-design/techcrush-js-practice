//this is an array function that returns a new array with the student's name, score, and grade.
function gradeScore(score){
    if (score >=90) return 'A';
    if (score >=80) return 'B';
    if (score >=70) return 'C';
    if (score >=60) return 'D';
    return 'F';
}

function summarizeStudent (students){
    return students.map(student =>
        `${student.name} scored ${student.score} - Grade: ${gradeScore(student.score)}`
    );
}

const students = [
    {name: "Amara", score: 88},
    {name: "John", score: 95},
    {name: "Jane", score: 67},
    {name: "Raph", score: 90}
];

console.log(summarizeStudent(students));