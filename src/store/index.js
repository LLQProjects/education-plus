// state
const myState = {
    todos: [
        {
            text: 'ab',
            complete: true
        }
    ],
    visibilityFilter: 'SHOW_COMPLETE'
}

// action : 有类型，有数据
const myAction = {
    type: 'ADD_TODO',
    text: 'Go to swimming pool'
}

// reducer: 把action 和 state 串联起来
function todos(state, action) {
    if (action.type === 'ADD_TODO') {
        return state.todos.concat(action.text)
    } else {
        return state
    }
}

//  再写一个reducer，来调用管理所有reducer
function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}