/*
 width class syntax */

class studentHogwarts{
  constructor() {
    this.privateScore = 0;
    this.name = null;
  }
    changeScoreBy = function(points) {
        this.privateScore += points;
    }

    setName = function (newName) {
                          this.name = newName;
                        }
    rewardStudent = function () {
                          this.changeScoreBy(1);
                        }
    penalizeStudent = function () {
                          this.changeScoreBy(-1);
                        }
    getScore = function () {
                          return this.name + ': ' + this.privateScore;
                        }
}
