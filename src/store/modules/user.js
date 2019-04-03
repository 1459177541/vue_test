import user from '../../api/user';
import { USER } from '../mutation-types';

const state = {
  name: null,
};

const action = {
  login({ name, password, err }) {
    user.login(name, password, data => {
      if (data.status === 'SUCCESS') {
        this.$store.commit(USER.LOGIN, data);
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
