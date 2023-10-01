// const arr =[
//     {name:"ashir",age:15,position:"front end developer"},
//     {name:"ali",age:17,position:"backend developer"},
//     {name:"osama",age:19,position:"full stack developer"}
// ]
// For(let i= 0; i < arr.length ; i++){
//     console.log(arr[i])
// }
// console.log("arr",arr[0].name)
// const foodMenue=["biryani","qurmah","dal chawal"]
// foodMenue.forEach(function(food){
//     document.write(food + ",")
// });

// var students=[
//     {id:1,name:'rasool',score:80,favouriteSubject:'maths'},
//     {id:2,name:'ashir',score:90,favouriteSubject:'english'},
//     {id:3,name:'osama',score:100,favouriteSubject:'urdu'},
//     {id:4,name:'huzaifa',score:50,favouriteSubject:'chemistry'},
//     {id:5,name:'hamid',score:40,favouriteSubject:'physics'},
// ]
// var names = students.map(function(students){
//     return {name: students.name, id: students.id, favouriteSubject:students.favouriteSubject, score: students.score, role: 'student'};
// });
// console.log(names) 



var students = [
    { id: 1, name: 'rasool', score: 80, favouriteSubject: 'maths' },
    { id: 2, name: 'ashir', score: 90, favouriteSubject: 'english' },
    { id: 3, name: 'osama', score: 100, favouriteSubject: 'urdu' },
    { id: 4, name: 'huzaifa', score: 50, favouriteSubject: 'chemistry' },
    { id: 5, name: 'hamid', score: 40, favouriteSubject: 'physics' }
];
var highLevelScores = students.filter(function(student) {
    return student.score;
}).map(function(selectedstudent)
{
    return selectedstudent.score
})


console.log(highLevelScores);


// var highScoringStudents = students.filter(function(student) {
//     return student.score >= 80;
// });

// console.log(highScoringStudents);




