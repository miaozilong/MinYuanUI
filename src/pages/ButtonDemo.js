import styles from './index.css';
import {Button} from '@/components/Button'
import {Icon} from '@/components/Icon'
import React from 'react'

export default class ButtonDemo extends React.Component {
    render() {
        return (
            <div>
                <Button icon='下拉' notext={false}>下拉</Button>
                <Button icon='保存' notext={false}>保存</Button>
                <Button icon='入库开始时间' notext={false}>入库开始时间</Button>
                <Button icon='入库结束时间' notext={false}>入库结束时间</Button>
                <Button icon='分组删除' notext={false}>分组删除</Button>
                <Button icon='分组导入' notext={false}>分组导入</Button>
                <Button icon='分组排序' notext={false}>分组排序</Button>
                <Button icon='分组添加' notext={false}>分组添加</Button>
                <Button icon='分组选中编辑' notext={false}>分组选中编辑</Button>
                <Button icon='列表中删除' notext={false}>列表中删除</Button>
                <Button icon='列表设备导入' notext={false}>列表设备导入</Button>
                <Button icon='列表设备批量编辑' notext={false}>列表设备批量编辑</Button>
                <Button icon='列表设备排序' notext={false}>列表设备排序</Button>
                <Button icon='列表设备移组' notext={false}>列表设备移组</Button>
                <Button icon='手动拉取' notext={false}>手动拉取</Button>
                <Button icon='排序' notext={false}>排序</Button>
                <Button icon='服务子项' notext={false}>服务子项</Button>
                <Button icon='枪机_在线' notext={false}>枪机_在线</Button>
                <Button icon='添加分组' notext={false}>添加分组</Button>
                <Button icon='添加用户' notext={false}>添加用户</Button>
                <Button icon='添加用户组' notext={false}>添加用户组</Button>
                <Button icon='球机_在线' notext={false}>球机_在线</Button>
                <Button icon='用户' notext={false}>用户</Button>
                <Button icon='表格编辑' notext={false}>表格编辑</Button>
                <Button icon='表格表头处编辑' notext={false}>表格表头处编辑</Button>
                <Button icon='车辆出入口' notext={false}>车辆出入口</Button>
                <Button icon='车辆出入口_布防' notext={false}>车辆出入口_布防</Button>
                <Button icon='门开' notext={false}>门开</Button>
                <Button icon='门开_布防' notext={false}>门开_布防</Button>
            </div>
        );
    }
}
