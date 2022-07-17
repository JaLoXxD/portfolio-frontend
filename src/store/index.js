import { createStore } from "vuex";

export default createStore({
	state: {
		currentYear: new Date().getFullYear(),
		projectPopup: {
			isVisible: false,
			projectId: null,
		},
	},
	mutations: {
		setProjectPopup(state, payload) {
			state.projectPopup = payload;
		},
	},
	actions: {
		updateProject({ commit }, projectInfo) {
			commit("setProjectPopup", projectInfo);
		},
	},
	modules: {},
	getters: {
		getYear(state) {
			return state.currentYear;
		},
		getProjectPopup(state) {
			return state.projectPopup;
		},
	},
});
