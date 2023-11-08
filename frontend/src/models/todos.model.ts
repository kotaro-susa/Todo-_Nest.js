export enum TodoStatus {
  waiting = 'waiting',
  done = 'done',
}

export type TodoModel = {
  id: string
  title: string
  status: TodoStatus
  created_at: Date
  updated_at: Date
}
