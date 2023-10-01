//REDUCE FUNCTION


// const alpha =[
//     "a","b","c","d"
// ]
// alpha.reduce(function(acc, curr){
//     console.log(curr," ==>>curr")
//     console.log(acc, " ==>>acc")
//     return curr;
// }, o)

                   //Assignment 1
// var students = [
//     { id: 1, name: 'rasool', score: 80, favouriteSubject: 'maths' },
//     { id: 2, name: 'ashir', score: 90, favouriteSubject: 'english' },
//     { id: 3, name: 'osama', score: 100, favouriteSubject: 'urdu' },
//     { id: 4, name: 'huzaifa', score: 50, favouriteSubject: 'chemistry' },
//     { id: 5, name: 'hamid', score: 40, favouriteSubject: 'physics' }
// ];

// var totalScore = students.reduce(function (acc, student) {
//     return acc + student.score;
// }, 0);

// console.log(totalScore,"===>>totalscore");
//  // Average score
// var averagescore = totalScore / students.length;
// console.log("averagescore:",averagescore);





                    //Assignment 2

                    // var students = [
                    //     { id: 1, name: 'rasool', score: 80, favouriteSubject: 'maths' },
                    //     { id: 2, name: 'ashir', score: 90, favouriteSubject: 'english' },
                    //     { id: 3, name: 'osama', score: 100, favouriteSubject: 'urdu' },
                    //     { id: 4, name: 'huzaifa', score: 50, favouriteSubject: 'chemistry' },
                    //     { id: 5, name: 'hamid', score: 40, favouriteSubject: 'physics' }
                    // ];
                    
                
                    // var favoriteSubjects = students.reduce(function(acc, student) {
                    //     acc.push(student.favouriteSubject);
                    //     return acc;
                    // }, []);
                    
                    // console.log(favoriteSubjects);

                    // [ 'maths', 'english', 'urdu', 'chemistry', 'physics' ]
                    // console.log(servey)

                    




                    var students = [
                        { id: 1, name: 'rasool', score: 80, favouriteSubject: 'maths' },
                        { id: 2, name: 'ashir', score: 90, favouriteSubject: 'english' },
                        { id: 3, name: 'osama', score: 100, favouriteSubject: 'urdu' },
                        { id: 4, name: 'huzaifa', score: 50, favouriteSubject: 'chemistry' },
                        { id: 5, name: 'hamid', score: 40, favouriteSubject: 'physics' }
                    ];
                    
                    const servey = students.reduce(function(prev,curr){
                        if (prev.hasOwnProperty(curr.favouriteSubject)){
                            prev[curr.favouriteSubject] = prev[curr.favouriteSubject] + 1
                            return prev
                        }else{
                            prev[curr.favouriteSubject] = 1
                        }
        
                     }, {})
                                        
                    console.log(servey, "===>servey"); // ['maths', 'english', 'urdu', 'chemistry', 'physics']
                    

















