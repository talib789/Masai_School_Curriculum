const fs = require("fs")

class Todo {
  constructor() {
    this.path = "todos.json"

    const content = fs.readFileSync(this.path, {
      encoding: "utf-8",
    })

    this.data = JSON.parse(content)
  }

  saveTodo() {
    const content = JSON.stringify(this.data, null, 2)

    fs.writeFileSync(this.path, content, {
      encoding: "utf-8",
    })
  }

  addTodo(info){
    let id = 1

    const todos = this.data.todos

    todos.forEach((todo) => {
      if (id <= todo.id) {
        id = todo.id + 1
      }
    })

    info.id = id

    todos.push(info)

    this.saveTodo()
  }

  updateTodo(info,id) {
    const todos = this.data.todos

    let index = null

    todos.find((todo, idx) => {
      if (todo.id === id) {
        index = idx
      }

      return todo.id === id
    })

    if (index == -1) {
      return res.status(404).send({
        message: "Todo not found"
      })
    }

    todos[index] = info

    this.saveTodo( )
  }

  deleteTodo(id) {
    let index = null

    const todos = this.data.todos

    todos.find((item, idx) => {
      if (item.id === id) {
        index = idx
      }

      return item.id === id
    })

    if (index === null) {
      throw new Error("Employee does not exist")
    }

    todos.splice(index, 1)

    this.data.todos = todos

    this.saveTodo()
  }

  getAll() {
    const todos = this.data.todos

    return todos
  }

  getById(id) {
    const todos = this.data.todos

    const todo = todos.find((item) => item.id === id)

    return todo
  }
}

module.exports = Todo

// import fs from 'fs'

// class Todo {

//     constructor() {

//         this.path = "todos.json";

//         const content = fs.readFileSync(this.path, {
//             encoding: 'utf-8'
//         });

//         this.data = JSON.parse(content);
//     }

//     saveData() {

//         const content = JSON.stringify(this.data, null, 2);

//         fs.writeFileSync(this.path, content, {
//             encoding: 'utf-8'
//         });
//     }

//     addTodo(info) {
//         // info = { name: "Md Talib", age: 22, role: "Software Developer", email: "mdtalib@gmail.com" }
        
//         // Create an todo Id
//         let id = 1;
//         const todos = this.data.todos;

//         todos.forEach(todo => {
            
//             if (id <= todo.id) {
//                 id = todo.id + 1;
//             }
//         })

//         info.id = id;

//         todos.push(info);

//         this.saveData();
//     }

//     getAll() {
//         const todos = this.data.todos;

//         return todos;
//     }

//     getById(id) {
//         const todos = this.data.todos;

//         const todo = todos.find(item => item.id === id);

//         return todo;
//     }

//     updateInfo() {
//         // TODO:
//     }

//     deleteTodo(id) {
        
//         let index = null;
        
//         const todos = this.data.todos;

//         todos.find((item, idx) => {
//             if (item.id === id) {
//                 index = idx;
//             }

//             return item.id === id;
//         });

//         if (index === null) {
//             throw new Error('Todo does not exist');
//         }

//         todos.splice(index, 1);

//         this.data.todos = todos;
        
//         this.saveData();

//     }
// }

// export default Todo;