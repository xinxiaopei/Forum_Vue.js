import Vue from 'vue'
import Vuex from 'vuex'

import thread from './modules/thread'
import category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		meta: {
			name: '',
			categories: [
				{ name: 'All', value: 'ALL' }
			]
		},
		accountTabs: 0,
		accountModal: false,
		username: '',

		ajaxErrors: [],
		ajaxErrorsModal: false
	},
	getters: {
		categoriesWithoutAll (state) {
			let categories =
				state.meta.categories
				.filter(category => category.value !== 'ALL' )

			categories.unshift({
				name: 'Select a category',
				disabled: true
			})

			return categories.filter(category => category.value !== 'ALL' )
		}
	},
	mutations: {
		setAccountTabs (state, index) {
			state.accountTabs = index;
		},
		setSelectOptions (state, payload) {
			state.selectOptions[payload.name] = payload.value;
		},
		setAccountModalState (state, value) {
			state.accountModal = value;
		},
		setAjaxErrorsModalState (state, value) {
			state.ajaxErrorsModal = value;
		},
		setAjaxErrors (state, value) {
			state.ajaxErrors = value
		},
		setUsername (state, value) {
			state.username = value
		},
		setForumName (state, value) {
			state.meta.name = value
		},
		addCategories (state, value) {
			if(Array.isArray(value)) {
				state.meta.categories.push(...value)
			} else {
				state.meta.categories.push(value)
			}
		}
	},
	modules: { thread, category }
})