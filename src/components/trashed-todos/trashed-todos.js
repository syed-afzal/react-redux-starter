import React from 'react';
import { connect } from 'react-redux';
import Todo from '../todo/todo'
import '../pending-todos/pending-todos.scss'


class TrashedTodos extends React.Component {
    constructor(props) {
        super(props);
        this._renderTodos = this._renderTodos.bind(this);
    }


    _renderTodos(){
        let {trashedTodos} = this.props;
        return (
            trashedTodos.length > 0 ?
                trashedTodos.map((todo) => {
                    return <Todo {...todo}
                                 key={todo.id}
                                 onToggle={this._handleToggle}
                                 showEdit={false}
                                 showDelete={false}
                    />
                })
                :
                <div className="nothing">
                    Trashed is empty..!
                </div>
        )
    }
    render() {
        return (
            <div className="todo-list">
                <h4>Deleted Todos</h4>
                {this._renderTodos()}
            </div>
        )
    }
}

/* Map state to props */
const mapStateToProps = (state) => {
    let data = state.todos;
    return {
        trashedTodos: data.trashedTodos
    };
};


/* Connect Component with Redux */
export default connect(mapStateToProps, null)(TrashedTodos)
export {TrashedTodos as ComponentTrashedTodos};