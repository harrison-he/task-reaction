import React from 'react'
import {
    ListItem,
    ListItemText
} from '@material-ui/core'

const TaskItem = ({ title }) => (
    <ListItem>
        <ListItemText primary={title} />
    </ListItem>
)

export default TaskItem