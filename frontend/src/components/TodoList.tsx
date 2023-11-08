import { TodoModel, TodoStatus } from '@/models/todos.model'

type Props = {
  todos: TodoModel[]
  updateStatusTodo: Function
  updateTitleTodo: Function
  deleteTodo: Function
}

const TodoList = ({ todos, updateStatusTodo, updateTitleTodo, deleteTodo }: Props) => {
  return (
    <>
      {todos?.length > 0 ? (
        <ul className='divide-y divide-gray-200 border-t border-b border-gray-200'>
          {todos.map((todo) => (
            <li key={todo.id} className='flex items-center justify-between space-x-3 py-4'>
              <input
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600 cursor-pointer'
                onChange={() => updateStatusTodo(todo)}
                checked={todo.status == TodoStatus.done ? true : false}
              />
              <div className='flex min-w-0 flex-1 items-center space-x-3'>
                <div className='min-w-0 flex-1'>
                  <p
                    className={
                      todo.status == TodoStatus.done
                        ? 'truncate text-sm font-medium text-gray-900 line-through'
                        : 'truncate text-sm font-medium text-gray-900'
                    }
                  >
                    {todo.title}
                  </p>
                </div>
              </div>
              <div className='flex space-x-2'>
                <button
                  type='button'
                  className='flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200'
                  onClick={() => updateTitleTodo(todo)}
                >
                  編集
                </button>
                <button
                  type='button'
                  className='flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 hover:bg-red-200'
                  onClick={() => deleteTodo(todo)}
                >
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='mx-auto text-center'>
          <h2 className='text-2xl font-bold text-gray-800'>タスクなし</h2>
        </div>
      )}
    </>
  )
}

export default TodoList
