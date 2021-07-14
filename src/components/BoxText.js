import React from 'react'

function BoxText(props) {

    const completedStyle = {
        textDecoration: 'line-through',
        color: '#cdcdcd'
    }

    return (
        <div className ='checkbox_each'>
            <input onChange={() => props.handleChange(props.todolist.id)} type='checkbox' checked={props.todolist.completed} /> <span style={props.todolist.completed ? completedStyle : null}> {props.todolist.text} </span> <br />
        </div>
    )
}

export default BoxText
