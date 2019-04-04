import user from '../../api/user';
import { USER } from '../mutation-types';

const state = {
  name: null,
};

const action = {
  login({ commit }, { name, password, err }) {
    alert(commit);
    user.login(name, password, data => {
      if (data.status === 'SUCCESS') {
        commit(USER.LOGIN, data);
      } else {
        err(data);
      }
    });
  },
  register({ id, name, password, rb }) {
    user.register(id, name, password, rb);
  },
  checkName({ id, rb }) {
    return user.checkName(id, rb);
  },
};

const mutations = {
  [USER.LOGIN](state, { data }) {
    state.name = data.data.name;
    state.id = data.data.id;
  },
};

export default {
  namespaced: true,
  state,
  action,
  mutations,
};
