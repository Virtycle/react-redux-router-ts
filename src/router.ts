
import { Home } from '@pages/home';
import  Detail  from '@pages/detail';
import { TodoList } from '@pages/todo-list';



const routerMap = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/detail/:id',
        name: 'Detail',
        importPath: '@pages/detail',
        component: Detail
    },{
        path: '/todoList',
        name: 'TodoList',
        component: TodoList
    }
]

export default routerMap