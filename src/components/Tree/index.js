import React, {Component} from 'react';
import {Tree as AntTree} from 'antd';
import {TreeNode} from '../TreeNode'


export class Tree extends AntTree {
    componentWillMount() {
        const {treeNodeData} = this.props;
        // this.treeNodeData = treeNodeData
        this.treeNodeData = [
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
        ];

    }

    renderTreeNodes = (data, parent) =>
        data.map(item => {
            debugger
            if (!item.isLeaf && item.children) {
                return (
                    <TreeNode {...item} dataRef={item} parent={parent ? parent : ''}>
                        {this.renderTreeNodes(item.children, item)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} dataRef={item} parent={parent ? parent : ''}/>;
        });


    render() {
        return (
            <div>
                <AntTree {...this.props}>
                    {this.renderTreeNodes(this.treeNodeData)}
                </AntTree>
            </div>
        );
    }
}

