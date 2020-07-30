// const Task = function(name){
//     this.name = name;
//     this.completed = false;

//     this.complete = function(){
//         console.log('completing task: '+ this.name);
//         this.completed = true;
//     }

//     this.save = function(){
//         console.log('saving task: '+ this.name);
//     }
// }

//MAKING PROTOTYPES TO MAKE CONSTRUCTORS
//EFFECTIVE
const Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing task: '+ this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('saving task: '+ this.name);
}

module.exports = Task;
