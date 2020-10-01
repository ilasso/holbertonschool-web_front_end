/**
 *studentHogwarts - Funtion  by:
 It contains two variables privateScore set to 0, and name set to null
 It contains one private method changeScoreBy, it takes points in argument and add it to privateScore
 The module gives access to four public methods (return an object):
     setName, it takes into argument newName, and set the private variable name
     rewardStudent, it calls the method changeScoreBy with 1
     penalizeStudent, it calls the method changeScoreBy with -1
     getScore, it returns name: score (ex: Harry: 14)
 *Return: none
 *On Error: no control error
*/
function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    /**
     *setName - public method (Funtion) that set public var name
     *@newName: new name to set
     *Return: none, only set
     *On Error: no control error
    */
    this.setName = function (newName) {
                          name = newName;
                        }
    /**
     *rewardStudent - public method increment score by 1
     *Return: none, only increment score
     *On Error: no control error
    */
    this.rewardStudent = function () {
                          changeScoreBy(1);
                        }
    /**
     *penalizeStudent - public method decrement score by 1
     *Return: none, only decrement score
     *On Error: no control error
    */
    this.penalizeStudent = function () {
                          changeScoreBy(-1);
                        }
    /**
     *getScore - public method display name and score
     *Return: none, only display "<studentName> : score"
     *On Error: no control error
    */
    this.getScore = function () {
                          return name + ': ' + privateScore;
                        }
  /**
   *changeScoreBy - private method to increment score
   *Return: none, only increment
   *On Error: no control error
  */
  function changeScoreBy(points) {
      privateScore += points;
    }
}

harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
