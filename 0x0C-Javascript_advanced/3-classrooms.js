/**
 *createClassRoom - Funtion that populate and return an array whith size by an number value
 *numbersOfStudents: size of array
 *Return: array
 *On Error: no control error
*/
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat){
    return function(){
        return seat
      }
    }
  let students = [];
  for (let i = 0; i <= numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
    }
  return students;
}
let classRoom = createClassRoom(10);
