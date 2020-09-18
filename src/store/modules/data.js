const SAVE_STATUS = 'save_status';
const SAVE_STEP = 'save_channel';

const state = {
    status: '',
    channel: ''
};

const mutations = {
    [SAVE_STATUS](state, { playload }) {
        state.status = playload;
    },
    [SAVE_STEP](state, { playload }) {
        state.channel = playload;
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
