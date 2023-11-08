import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

type Props = {
  todo: string
  setTodo: Dispatch<SetStateAction<string>>
  todoId: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const TodoInput = ({ todo, setTodo, todoId, onClick }: Props) => {
  return (
    <div className='mt-8 flex'>
      <label htmlFor='todo' className='sr-only'>
        新しいタスク
      </label>
      <input
        type='text'
        name='todo'
        id='todo'
        className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6'
        placeholder='新しいタスク'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type='submit'
        className='ml-4 flex-shrink-0 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700'
        onClick={onClick}
      >
        {todoId === '' ? '追加' : '更新'}
      </button>
    </div>
  )
}

export default TodoInput
