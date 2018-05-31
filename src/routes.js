import { 
  TodosContainer,
  TodoContainer,
  CreateTodoContainer }   from './modules/todos/containers'

import { NotFoundPage }   from './containers'

const routes = [
  {
    path: "/tasks",
    component: TodosContainer,
    label: "All tasks",
    exac: true
  },
  {
    path: "/create",
    component: CreateTodoContainer,
    label: "Create new task"
  },
  {
    path: "/edit/:id",
    component: TodoContainer,
  },
  {
    component: NotFoundPage
  }
]

export default routes