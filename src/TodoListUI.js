import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
const TodoListUI = (props) => {
    return (
        <div>
            <div>
                <Input
                    value={props.inputValue}
                    type="text" placeholder="todo info"
                    style={{'width':'300px','margin':'10px 10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtbClick}>提交</Button>
            </div>
            <List
                style={{'margin':'10px','width':'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item
                        onClick={() => {props.handleItemDelete(index)}}
                    >
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoListUI;
