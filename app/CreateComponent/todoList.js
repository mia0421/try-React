import React from 'react';
import ReactDOM from 'react-dom';

///TO DO LIST
const ToDoList = (props) => (
    <ul>{
        props.List.map((item) => (
            <li key={item.Id}>{item.Txt}</li>
        ))
    }
    </ul>
)

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            txt: ''
        };
    }
    /// 需使用 arrow function 需另外安裝套件 babel-plugin-transform-class-properties
    onChange = (e) => {
       
        const txt = e.target.value;
        this.setState({ txt });
    }
    handleSubmit = (e) => {
        e.preventDefault();
       let newList = this.state.list.concat({ Id: this.state.list.length + 1, Txt: this.state.txt });
        this.setState({
            list: newList,
            txt: ''
        });
    }
    render() {
        return (
            <div>
                <h5>TODO List</h5>
                <ToDoList List={this.state.list} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.value} />
                    <button type="submit" >{`Add #${this.state.list.length + 1}`}</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<ToDoItem />, document.getElementById('todoList'));
