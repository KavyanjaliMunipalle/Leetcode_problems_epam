const tasks = [
    { taskName: "Write report", completed: true, priority: 2 },
    { taskName: "Attend meeting", completed: false, priority: 3 },
    { taskName: "Fix bug", completed: false, priority: 1 },
    { taskName: "Update website", completed: true, priority: 4 }
  ];
 
 
  const highPriorityTask = tasks.find(task => task.priority < 3);
  console.log("First high priority task:", highPriorityTask);
 
 
  const firstIncompleteTaskIndex = tasks.findIndex(task => !task.completed);
  console.log("Index of the first incomplete task:", firstIncompleteTaskIndex);
 
 
  const completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
  console.log("Number of completed tasks:", completedTaskCount);
 
 
  tasks.forEach(task => {
    console.log(`Task name: ${task.taskName}`);
  });
