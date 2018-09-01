export default {
  namespace: 'count',
  state: { num: 80 },
  effects: {
    *add({ payload }, { select, put }) {
      const num = yield select(state => state.count.num);
      yield put({ type: 'updateState', payload: { num: num + 1 } });
    },
    *dec({ payload }, { select, put }) {
      const num = yield select(state => state.count.num);
      yield put({ type: 'updateState', payload: { num: num - 1 } });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
