/* ITERACIONES EN JSX CON MAP

  TEMAS:
    - map(callback(key)) >>> recorre el objeto o array y devuelve la operacion como un nuevo array

  SINTAXIS:
    - [object|array].map( (<any key>) => { operacion } ):array

*/

// EJEMPLO BASICO DE MAP
 let a = [1, 2, 3]
 const out = a.map( e => {a+3} )
 console.log(out) // out: [4, 5, 6]

// Ejemplo de uso de map en react
  import React from 'react';
  import Task from 'Task'

  class Tasks extends React.Component {
    render() {
      tasks = [1, 2, 3 ]
      return (
        <div>
          {tasks.map(e => <Task />)}
        </div>
      )
    }
  }
  export default Tasks;
  // esto seria lo mismo que:
    import React from 'react';
    import Task from 'Task'

    class Tasks extends React.Component {
      render() {
        return (
          <div>
            <Task />
            <Task />
            <Task />
          </div>
        )
      }
    }
    export default Tasks;

// Ejemplo de uso mas comun de map en react
  import React from 'react';

  class Tasks extends React.Component {
    render() {
      tasks = [
        {
            "id": 0,
            "title": "task one",
            "description": "lorem ipsum",
            "done": false
        },
        {
            "id": 1,
            "title": "task two",
            "description": "lorem ipsum",
            "done": true
        },
        {
            "id": 2,
            "title": "task three",
            "description": "lorem ipsum",
            "done": false
        }
      ]
      return (
        <div>
          {tasks.map(key => <div>{key.title}</div>)}
        </div>
      )
    }
  }




render() {
    return (
      <StyledBank>
        {this.props.tasks.map(e => {
          return( <Task key={e.id} data={e} delateTask={this.props.delateTask} updateTask={this.props.updateTask}/>)
        })}
      </StyledBank>
    )
  }