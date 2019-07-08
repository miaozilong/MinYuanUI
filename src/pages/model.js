// import {delay} from 'dva/saga';

export default {
    namespace: 'demo',
    state: {
        dataSource: [],
    },
    effects: {
        * fetch({payload}, {call, put}) {
            // debugger
            /*
            模拟dataSource
             */
            // yield call(delay, 3000);
            const dataSource = [{
                key: 0,
                name: '测试名称',
                address: '测试地址',
            }]
            yield put({type: 'save', payload: {dataSource}})
        },
    },
    reducers: {
        save(state, {payload}) {
            return {...state, ...payload};
        },
    },

};
