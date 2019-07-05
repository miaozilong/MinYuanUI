import {Table, Input, Button, Popconfirm, Form, Icon} from 'antd';
import styles from './index.less'
import produce from 'immer'
import _ from 'lodash'

const EditableContext = React.createContext();

const EditableRow = ({form, index, ...props}) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({editing}, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const {record, handleSave} = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({...record, ...values});
        });
    };

    renderCell = form => {
        this.form = form;
        const {children, dataIndex, record, title} = this.props;
        const {editing} = this.state;
        return editing ? (
            <Form.Item style={{margin: 0}}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save}/>)}
            </Form.Item>
        ) : (
            <div
                className={styles['editable-cell-value-wrap']}
                style={{paddingRight: 24}}
                onClick={this.toggleEdit}
            >
                {children}&nbsp;&nbsp;<Icon type="edit"  style={{fontSize:18}} theme="twoTone"/>
            </div>
        );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                    children
                )}
            </td>
        );
    }
}

export class TableInformation extends React.Component {

    state = {
        dataSource: []
    }

    componentWillMount() {
        let {columns, operationTitle, dataSource, handleOperate} = this.props;
        if (operationTitle) {
            // 如果有*操作*这一列
            columns.push({
                title: operationTitle,
                dataIndex: 'operate',
                key: 'operate',
                align: 'center'
            });
            // todo  目前只支持一行表格
            _.set(dataSource[0], 'operate', <Icon
                style={{fontSize: 25}} type='edit' onClick={handleOperate ? handleOperate : void (0)}/>)
        }
        this.columns = columns;
        this.setState(produce(draft => {
            draft.dataSource = dataSource
        }))
    }

    handleSave = row => {
        const oldData = [...this.state.dataSource];
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        const changed = !(_.isEqual(oldData, newData))
        if (changed) {
            // 经过深思: 这里不让表格数据中的数据直接修改,需要调用者重新发送ajax请求 重新渲染页面
            // 但是带来的问题就是如果大量数据加载比较浪费网络
            // this.setState(produce(draft => {
            //     draft.dataSource = newData
            // }));
            const {handleSave} = this.props;
            if (handleSave) {
                handleSave(row);
            }
        }
    };

    render() {
        const {dataSource} = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return {...col, align: 'center'};
            }
            return {
                ...col,
                align: 'center',
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.props.handleSave ? this.handleSave : void (0),
                }),
            };
        });
        return (
            <div>
                <Table
                    components={components}
                    rowClassName={() => styles['editable-row']}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
            </div>
        );
    }
}

