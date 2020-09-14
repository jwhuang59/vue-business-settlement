const SAVE_STEP = 'save_step';

const state = {
    step: ''
};

const mutations = {
    [SAVE_STEP](state, { playload }) {
        state.step = playload;
    }
};

const actions = {};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
};
