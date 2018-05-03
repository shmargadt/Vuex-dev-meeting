import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
	text: '',
	actionsOnProcess: false,
	mutatiosOnProcess: false,
	stateChanged: false,
	stateInComponentChanged: false
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
	changeProcess(state, field) {
		state[field] = !state[field];
	},
	addText(state) {
		state.text += makeid();
	}
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
	showTheMagic: ({ dispatch, commit }, field) => {
		commit('changeProcess', 'actionsOnProcess')
		setTimeout(function () {
			commit('changeProcess', 'mutatiosOnProcess');
			commit('changeProcess', 'actionsOnProcess')
		}, 2000);
		setTimeout(function () {
			dispatch('addText');
			commit('changeProcess', 'mutatiosOnProcess')
			commit('changeProcess','stateChanged')
		}, 3000);
		setTimeout(function () {
			commit('changeProcess','stateChanged')
			commit('changeProcess','stateInComponentChanged')
		}, 4000);
		setTimeout(function () {
			commit('changeProcess','stateInComponentChanged')
		}, 5000);
		
	},
	changeProcess: ({ commit }, field) => commit('changeProcess', field),
	addText: ({ commit }) => commit('addText')
}

// getters are functions
const getters = {
	textLength: state => state.text.length,
	textValue: state => state.text
}

function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 1; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
