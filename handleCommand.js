const handleData = require("./handleData");

const handleCommand = ({ add, remove, list }) => {
  // console.log(add, remove, list);
  if (add) {
    if (typeof add !== "string") {
      return console.log("Enter the name of the task to be added (text)".red);
    } else if (add.length < 7) {
      return console.log("Task name must be more than 6 characters".red);
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log(
        "Enter the name of the task to be deleted. It must be text and must be more than 6 characters"
          .red
      );
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log(
      'I do not understand the commandation. Use --add = "task name" to add a task, --remove = "task name" to delete a task, or --list to view a task'
        .red
    );
  }
};

module.exports = handleCommand;
