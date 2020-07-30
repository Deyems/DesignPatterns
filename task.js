// const task = {};

// const task = Object.create(Object.prototype);

// task.title = 'My task';
// task.description = 'A task Manager';

// task.toString = function(){ return task.description;}

// console.log(task.toString());

//TO CONVERT OUR OBJECT TO AN ES5 FORMAT
//USING THE DEFINE PROPERTY GIVEN

const task = {
    title: 'My title',
    description: 'My description'
}

Object.defineProperty(task,'toString', {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

//Practising HOw to redefine Property
// Object.defineProperty(task, 'toString', {
//     enumerable: true,
// });

// Reassigning the method
// task.toString = 'hi';

//We can do inheritance with the Object.create
//Method
const urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function(){
        return this.title + ' ' + 'is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});


// console.log(Object.keys(task));
console.log(urgentTask.toString());
