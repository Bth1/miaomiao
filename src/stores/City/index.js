const state = {
  nm : window.localStorage.getItem('nowNm') || '北京',//如果本地存储有值则取前，无值则取后
  id : window.localStorage.getItem('nowId') || 1
};

const actions = {

};

const mutations = {
  CITY_INFO(state, payload) {
    state.nm = payload.nm;
    state.id = payload.id;
  }
};

export default {
  namespaced : true,
  state,
  actions,
  mutations
}