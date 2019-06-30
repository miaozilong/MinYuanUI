import React from 'react';
import {Modal} from './Modal'

/*
*   测试组件的文件,随便改
* * */
function App() {
    return (
        <div>
            <Modal title='test' visible={true} btn2={false} btn1Name={'btn1name'} tips={'提示内容'}>23123</Modal>
        </div>
    );
}

export default App;
