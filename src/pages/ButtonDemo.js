import styles from './index.css';
import {Button} from '@/components/Button'
import {Icon} from '@/components/Icon'
import React from 'react'

export default class ButtonDemo extends React.Component {
    render() {
        return (
            <div>
                <Button icon='RFID_在线' notext={false}>RFID_在线</Button>
                <Button icon='RFID_布防' notext={false}>RFID_布防</Button>
                <Button icon='RFID_离线' notext={false}>RFID_离线</Button>
                <Button icon='下拉_未选中' notext={false}>下拉_未选中</Button>
                <Button icon='下拉_选中' notext={false}>下拉_选中</Button>
                <Button icon='人脸相机_布控' notext={false}>人脸相机_布控</Button>
                <Button icon='人脸相机_未选中' notext={false}>人脸相机_未选中</Button>
                <Button icon='人脸相机_选中' notext={false}>人脸相机_选中</Button>
                <Button icon='保存_未选中' notext={false}>保存_未选中</Button>
                <Button icon='保存_选中' notext={false}>保存_选中</Button>
                <Button icon='入库开始时间_未选中' notext={false}>入库开始时间_未选中</Button>
                <Button icon='入库开始时间_选中' notext={false}>入库开始时间_选中</Button>
                <Button icon='入库结束时间_未选中' notext={false}>入库结束时间_未选中</Button>
                <Button icon='入库结束时间_选中' notext={false}>入库结束时间_选中</Button>
                <Button icon='分组删除_未选中' notext={false}>分组删除_未选中</Button>
                <Button icon='分组删除_选中' notext={false}>分组删除_选中</Button>
                <Button icon='分组导入_未选中' notext={false}>分组导入_未选中</Button>
                <Button icon='分组导入_选中' notext={false}>分组导入_选中</Button>
                <Button icon='分组排序_未选中' notext={false}>分组排序_未选中</Button>
                <Button icon='分组排序_选中' notext={false}>分组排序_选中</Button>
                <Button icon='分组添加_未选中' notext={false}>分组添加_未选中</Button>
                <Button icon='分组添加_选中' notext={false}>分组添加_选中</Button>
                <Button icon='分组选中编辑_未选中' notext={false}>分组选中编辑_未选中</Button>
                <Button icon='分组选中编辑_选中' notext={false}>分组选中编辑_选中</Button>
                <Button icon='列表中删除_未选中' notext={false}>列表中删除_未选中</Button>
                <Button icon='列表中删除_选中' notext={false}>列表中删除_选中</Button>
                <Button icon='列表设别批量编辑_选中' notext={false}>列表设别批量编辑_选中</Button>
                <Button icon='列表设备导入_未选中' notext={false}>列表设备导入_未选中</Button>
                <Button icon='列表设备导入_选中' notext={false}>列表设备导入_选中</Button>
                <Button icon='列表设备批量编辑_未选中 ' notext={false}>列表设备批量编辑_未选中 </Button>
                <Button icon='列表设备排序_未选中' notext={false}>列表设备排序_未选中</Button>
                <Button icon='列表设备排序_选中' notext={false}>列表设备排序_选中</Button>
                <Button icon='列表设备移组_未选中' notext={false}>列表设备移组_未选中</Button>
                <Button icon='列表设备移组_选中' notext={false}>列表设备移组_选中</Button>
                <Button icon='手动拉取_未选中' notext={false}>手动拉取_未选中</Button>
                <Button icon='手动拉取_选中' notext={false}>手动拉取_选中</Button>
                <Button icon='报警点' notext={false}>报警点</Button>
                <Button icon='排序_未选中' notext={false}>排序_未选中</Button>
                <Button icon='排序_选中' notext={false}>排序_选中</Button>
                <Button icon='服务器' notext={false}>服务器</Button>
                <Button icon='服务子项' notext={false}>服务子项</Button>
                <Button icon='枪机_在线' notext={false}>枪机_在线</Button>
                <Button icon='添加分组_未选中' notext={false}>添加分组_未选中</Button>
                <Button icon='添加分组_选中' notext={false}>添加分组_选中</Button>
                <Button icon='添加用户_未选中' notext={false}>添加用户_未选中</Button>
                <Button icon='添加用户_选中' notext={false}>添加用户_选中</Button>
                <Button icon='添加用户组_未选中' notext={false}>添加用户组_未选中</Button>
                <Button icon='添加用户组_选中' notext={false}>添加用户组_选中</Button>
                <Button icon='球机_在线' notext={false}>球机_在线</Button>
                <Button icon='用户' notext={false}>用户</Button>
                <Button icon='表格编辑_未选中' notext={false}>表格编辑_未选中</Button>
                <Button icon='表格编辑_选中' notext={false}>表格编辑_选中</Button>
                <Button icon='表格表头处编辑' notext={false}>表格表头处编辑</Button>
                <Button icon='车辆出入口_在线' notext={false}>车辆出入口_在线</Button>
                <Button icon='车辆出入口_布防' notext={false}>车辆出入口_布防</Button>
                <Button icon='车辆出入口_离线' notext={false}>车辆出入口_离线</Button>
                <Button icon='门开_在线' notext={false}>门开_在线</Button>
                <Button icon='门开_布防' notext={false}>门开_布防</Button>
                <Button icon='门开_离线' notext={false}>门开_离线</Button>

            </div>

        );
    }
}
