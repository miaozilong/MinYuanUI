import React, {Component} from 'react';
import {Tree as AntTree} from 'antd';
import {TreeNode} from '../TreeNode'


export class Tree extends AntTree {

    componentWillMount() {
        let {treeNodeData} = this.props;
        this.treeNodeData = treeNodeData
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
        console.log(this.treeNodeData)
        return (
            <div>
                <AntTree {...this.props}>
                    {this.renderTreeNodes(this.treeNodeData)}
                </AntTree>
            </div>
        );
    }
}

