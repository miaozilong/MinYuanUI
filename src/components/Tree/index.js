import React, {Component} from 'react';
import {Tree as AntTree} from 'antd';
import {TreeNode} from '../TreeNode'
import produce from 'immer'
import _ from 'lodash'

export class Tree extends AntTree {

    state = {
        expandedKeys: []
    }

    componentWillMount() {
        let {treeNodeData} = this.props;
        this.treeNodeData = treeNodeData
        // 展开的节点
        let {expandedKeys} = this.props;
        this.setState(produce(draft => {
            draft.expandedKeys = expandedKeys ? expandedKeys : []
        }))
    }

    handleOnSelect = (selectedKeys, {selected: bool, selectedNodes, node, event}) => {
        // 展开的节点中 增加当前选中的第一个节点
        this.setState(produce(draft => {
            draft.expandedKeys.push(selectedKeys[0])
        }))
        const {onSelect} = this.props;
        if (onSelect) {
            onSelect(selectedKeys, {selected: bool, selectedNodes, node, event});
        }
    }

    onExpand = (expandedKeys, {expanded, node}) => {
        debugger
        // expandedKeys.reverse()
        if (expanded) {
            this.setState(produce(draft => {
                draft.expandedKeys.push(_.get(node, 'props.eventKey'))
            }))
        } else {
            this.setState(produce(draft => {
                draft.expandedKeys = _.remove(draft.expandedKeys, v => v !== _.get(node, 'props.eventKey'))
            }))
        }
        const {onExpand} = this.props;
        if (onExpand) {
            this.onExpand(expandedKeys, {expanded, node})
        }
    };

    renderTreeNodes = (data, parent) =>
        data.map(item => {
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
        // console.log(this.treeNodeData)
        return (
            <div>
                <AntTree
                    {...this.props}
                    blockNode={true}
                    onSelect={this.handleOnSelect}
                    expandedKeys={this.state.expandedKeys}
                    onExpand={this.onExpand}
                >
                    {this.renderTreeNodes(this.treeNodeData)}
                </AntTree>
            </div>
        );
    }
}

