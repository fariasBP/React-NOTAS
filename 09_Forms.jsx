import React from 'react';


class TaskForm extends React.Component {
    state = {
        title: '',
        description: ''
    }

    eventSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }
    eventChange(e) {
        if (e.target.name == 'title') 
            this.setState({title: e.target.value})
        else if (e.target.name == 'description') 
            this.setState({description: e.target.value})

        // o tambien:

        /* this.setState({
            [e.target.name]: e.target.value
        }) */
    }
    render() {
        return(
            <form onSubmit={this.eventSubmit.bind(this)}>
                <input type="text" name="title" placeholder="Write a Task" onChange={this.eventChange.bind(this)} value={this.state.title}/>
                <br/>
                <br/>
                <textarea name="description" placeholder="Write a Description" onChange={this.eventChange.bind(this)} value={this.state.description}>
                </textarea>
                <br/>
                <input type="submit" value="Save a Task"/>
            </form>
        )
    }
}

export default TaskForm;