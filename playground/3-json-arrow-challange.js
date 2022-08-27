const tasks = { 
    tasks:  [{
        text: 'grocery shoppinng',
        completed: true
    }, {
        text: 'clean yard',
        completed: false
    }, {
        text: 'fitin course',
        completed: false
    }],
    getTaskToDO () {
        const taskToDO = this.tasks.filter((task) => task.completed === false)
        return taskToDO;
    }
}
 

console.log(tasks.getTaskToDO());
