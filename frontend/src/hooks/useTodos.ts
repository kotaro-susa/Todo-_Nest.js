import { REQUEST_DATA } from '@/constants/requestdata'
import { TodoModel, TodoStatus } from '@/models/todos.model'
import { useEffect, useState } from 'react'

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([])
  const [todo, setTodo] = useState<string>('')
  const [todoId, setTodoId] = useState<string>('')

  useEffect(() => {
    readAllTodos()
  }, [])

  const readAllTodos = async () => {
    const res = await fetch(REQUEST_DATA.TODO_GET)
    const json = await res.json()
    setTodos(json)
  }

  const createTodo = async () => {
    if (!todo) {
      return
    }
    if (todoId === '') {
      await fetch(REQUEST_DATA.TODO_POST, {
        method: 'POST',
        body: JSON.stringify({
          title: todo,
          status: TodoStatus.waiting,
        }),
        headers: { 'Content-type': 'application/json' },
      })
    } else {
      await fetch(REQUEST_DATA.TODO_PUT, {
        method: 'PUT',
        body: JSON.stringify({
          id: todoId,
          title: todo,
        }),
        headers: { 'Content-type': 'application/json' },
      })
    }
    readAllTodos()
    setTodo('')
    setTodoId('')
  }
  // チェックボタン押下時のデータ(updateTodo)を受け入れている
  const updateStatusTodo = async (updateTodo: TodoModel) => {
    const todoStatus = updateTodo.status == TodoStatus.waiting ? TodoStatus.done : TodoStatus.waiting
    await fetch(REQUEST_DATA.TODO_PUT, {
      method: 'PUT',
      body: JSON.stringify({
        id: updateTodo.id,
        status: todoStatus,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    readAllTodos()
  }
  const updateTitleTodo = async (updateTodo: TodoModel) => {
    setTodoId(updateTodo.id)
    setTodo(updateTodo.title)
  }
  const deleteTodo = async (deleteTodo: TodoModel) => {
    if (!deleteTodo) {
      return
    }
    await fetch(REQUEST_DATA.TODO_DELETE + deleteTodo.id, {
      method: 'DELETE',
    })
    readAllTodos()
  }
  return {
    todo,
    setTodo,
    todos,
    setTodos,
    todoId,
    setTodoId,
    readAllTodos,
    createTodo,
    updateStatusTodo,
    updateTitleTodo,
    deleteTodo,
  }
}
