import React from 'react'

class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        };
    }

    handleInputChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state.input);
        this.setState({
            input: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='item'
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    />
            </form>
        )
    }
}

export default ToDoForm