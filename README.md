# MinYuanUI

民原科技前端UI库

公司内部的UI

需要大家的**努力**


## 使用说明:

添加依赖:

`npm install minyuanui`

### Modal 模态框

#### 说明:

民原科技的公用模态框,将操作按钮居中,添加模态框的提示功能

![1561876448249](assets/1561876448249.png)

#### 声明:

`import {Modal} from 'minyuanui';`

#### API:

| 参数     | 说明                                  | 类型              | 默认值 |
| -------- | ------------------------------------- | ----------------- | ------ |
| btn2     | 第二个按钮是否显示                    | boolean           | true   |
| btn1Name | 按钮1上的文字内容                     | string\|ReactNode | 确定   |
| btn2Name | 按钮2上的文字内容只在btn2为true时有效 | string\|ReactNode | 确定   |
| tips     | 模态框左下角提示内容                  | string\|ReactNode | ''     |
| onOk     | 按钮1回调函数                         | function          |        |
| onCancel | 按钮2回调函数 只在btn2为true时有效    | function          |        |

其他API参考ant design的Modal组件 [传送门](<https://ant-design.gitee.io/components/modal-cn/#API>)

#### Samples:

`
<Modal btn2={false} btn1Name={'btn1name'} tips={'提示内容'}></Modal>
`



### Tree 可编辑树(没有写完,没有测试)

#### 说明:

基于AntDesign设计的功能更强的树,可直接传入数据,不用手动拼接TreeNode节点,每个节点都带有 parent 属性表示父节点,如果 parent 为空表示根节点

![1561993699229](assets/1561993699229.png)

#### 声明:

`import {Tree} from 'minyuanui';`

#### API:

| 参数         | 说明     | 类型 | 默认值 |
| ------------ | -------- | ---- | ------ |
| treeNodeData | 节点数据 | json | []     |
|              |          |      |        |
|              |          |      |        |
|              |          |      |        |
|              |          |      |        |

其他API参考ant design的Tree组件 [传送门](<https://ant-design.gitee.io/components/tree-cn/#Tree-props>)

#### Samples:

```jsx
treeNodeData =[
            {
                key: '0', title: '中国', isLeaf: false, children: [
                    {key: '11', title: '北京', editable: true, isLeaf: true},
                    {
                        key: '32', title: '江苏', isLeaf: false, children: [
                            {key: '3206', title: '南通', isLeaf: true, deletable: true}
                        ]
                    }
                ]
            }, {
                key: '1', title: '美国', isLeaf: true
            }
        ]
<Tree blockNode treeNodeData={treeNodeData}/>
```



### TreeNode 可编辑树节点

#### 说明:

当光标放到树节点上时,显示编辑和删除图标,点击图标时有回调函数

需要设置树节点的属性blockNode设置为true

![1561897133204](assets/1561897133204.png)

![1561899670913](assets/1561899670913.png)

#### 声明:

`import {EditableTreeNode} from 'minyuanui';`

#### API:

| 参数              | 说明                     | 类型                          | 默认值 |
| ----------------- | ------------------------ | ----------------------------- | ------ |
| handleClickEdit   | 点击编辑按钮时的回调函数 | function(treenode)            |        |
| handleClickDelete | 点击删除按钮时的回调函数 | function(treenode)            |        |
| handleFinishEdit  | 编辑完成后的回调函数     | function(treenode,{newTitle}) |        |
| editable          | 该节点是否能编辑         | boolean                       | false  |
| deletable         | 该节点是否能编辑         | boolean                       | false  |

其他功能: 编辑状态下按回车或者点击勾选图标,可触发编辑完成功能

其他API参考ant design的TreeNode组件 [传送门](<https://ant-design.gitee.io/components/tree-cn/#TreeNode-props>)

#### Samples:

```jsx
<Tree blockNode>
    <EditableTreeNode title={'节点标题2'}
        handleClickEdit={this.test1}
        handleClickDelete={this.test2}
        handleHandleEdit={this.test3}
        editable
        />
</Tree>
```



### TableInformation 表格信息框

#### 说明:

用于显示**一行**信息的表格,可在界面上修改部分列数据,修改数据后,需要提交AJAX请求,重新获取数据

![1562310648867](assets/1562310648867.png)

![1562310629200](assets/1562310629200.png)



#### 声明:

`import {TableInformation} from 'minyuanui';`

#### API:

| 参数           | 说明                                                         | 类型                 | 默认值 | 是否必须 |
| -------------- | ------------------------------------------------------------ | -------------------- | ------ | -------- |
| columns        | 参考AntDesign中Table的[columns](<https://ant-design.gitee.io/components/table-cn/#Table>)对象,增加了editable:true属性,用于表示该列可修改 | array object         | 无     | 是       |
| dataSource     | 参考AntDesign中Table的dataSource对象,目前只支持一行数据      | array object         | 无     | 是       |
| operationTitle | 操作列的标题,如果没有改属性,则不会自动生成操作列             | string\|react node   | 无     | 否       |
| handleSave     | 保存后的回调函数                                             | function(new record) | 无     | 是       |
| handleOperate  | 点击操作按钮之后的回调                                       | function             | 无     | 否       |

其他API参考ant design的Table组件 [传送门](<https://ant-design.gitee.io/components/table-cn/#Table>)

#### Samples:

```jsx
class TableInformationDemo extends React.Component {
    columns = [
        {
            title:'名称',
            dataIndex: 'name',
            key: 'name',
            editable: true,
            width: 200
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    dataSource = [{
        key: 0,
        name: '测试名称',
        address: '测试地址',
    }]

    handleSave(newRecord,) {
        console.log(newRecord)
    }

    handleOperate = () => {
        console.log('handleOperate')
    }

    render() {
        return (
            <div className={styles.normal}>
                <TableInformation columns={this.columns} operationTitle='操作' handleSave={this.handleSave}
                                  dataSource={this.dataSource} handleOperate={this.handleOperate}
                />
            </div>
        );
    }
}
```


## 贡献

欢迎PR

## 作者

缪子龙 *其他作者即将出现...*

