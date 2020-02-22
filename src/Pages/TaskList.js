import React from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    List
} from '@material-ui/core'
import TaskItem from './../Components/TaskItem'

const TaskList = () => {
    const tasks = useSelector(state => state.taskList.tasks)

    return (
        <List>
            {tasks.map(({ title }) => (
                <TaskItem
                    title={title}
                />
            ))}
        </List>
    )
}

export default TaskList