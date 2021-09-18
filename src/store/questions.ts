import { uniq } from "lodash"
import { defineStore } from 'pinia'


export const questionStore = defineStore({
  id: 'Questions',
  state: () => ({
    categories: []
  }),
  getters: {

  },
  actions: {
    // fetchQuestions(cb: (success: boolean, obj: any) => any) {
    fetchQuestions() {
      fetch("../../db.json")
        .then((response) => response.json())
        .then(
          (data) =>
            this.categories = uniq(data.questions.map((c: any) => c.category))
        )
    }
  }
})