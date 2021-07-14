import React, {Component} from 'react'
import BoxText from './BoxText'
import Todoitem from './TodoItem'


// function Checkbox () {
//     const todoList = Todoitem.map(todolist => {
//         return <BoxText key={todolist.id} todolist={todolist}/>
//     })
//     return(
//         <form className='Checklist'>
//             {todoList}
//         </form>
//     ) 
// }

class Checkbox extends Component {
    constructor() {
        super()
        this.state = {
            todoNote : Todoitem
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedList = prevState.todoNote.map(todo =>{
                if(todo.id === id) {
                    todo.completed = !todo.completed
                } 
                return todo
            })
            return {todoNote: updatedList}
        })
    }

    render() {
        const todoList = this.state.todoNote.map(list => {
            return <BoxText key={list.id} todolist={list} handleChange={this.handleChange}/>
        })

        return(
            <form className='Checklist'>
                {todoList}
            </form>
        )
    }
}

export default Checkbox   

