import {delay} from 'dva/saga';

export default {
    namespace: 'demo',
    state: {
        dataSource: [],
        treeNodeData:[]
    },
    effects: {
        * fetch({payload}, {call, put}) {
            // debugger
            /*
            模拟dataSource
             */
            yield call(delay, 1000);
            // const dataSource = [{
            //     key: 0,
            //     name: '测试名称',
            //     address: '测试地址',
            // }]
            // yield put({type: 'save', payload: {dataSource}})

            const treeNodeData = [
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
            yield put({type: 'save', payload: {treeNodeData}})








        },
    },
    reducers: {
        save(state, {payload}) {
            return {...state, ...payload};
        },
    },

};
