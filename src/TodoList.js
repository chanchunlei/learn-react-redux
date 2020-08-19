import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store/index'
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState(); //获取store中的数据
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange); //state改变

    }
    render() {
        return(
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtbClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
    componentDidMount() {

        const action = getInitList();
        store.dispatch(action)
    }

    handleInputChange(e) {
        // const val = e.target.value;
        // this.setState(() => {
        //     return {
        //         inputValue: val
        //     }
        //
        // })
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    handleStoreChange() { //store改变就赋值回来给state
        //console.log('store changed');
        this.setState(store.getState())
    }
    handleBtnClick() { //prevState上次state中的数据
        // this.setState((prevState) => {
        //     return {
        //         list: [...prevState.list, prevState.inputValue],
        //         inputValue: ''
        //     }
        //
        // })
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index) {
        // this.setState((prevState) => {
        //     const list = [...prevState.list];
        //     list.splice(index,1);
        //     return {list};
        //
        // })
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

}

export default TodoList;
