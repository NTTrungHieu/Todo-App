import Form from '../Form'
import TodoList from '../TodoList'

function Add({todoApp,dispatch}) {

  return ( 
    <div className="add">
      <Form todoApp={todoApp} dispatch={dispatch} />
      <TodoList todoApp={todoApp} dispatch={dispatch} />
    </div>
   );
}

export default Add;