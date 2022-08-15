import { createStore } from "vuex"
import { getDatabase, ref, child, get, set, update, remove } from "firebase/database"
class newTaskItem {
  constructor(text) {
    this.text = text
  }
  text

  getInfo(id) {
    const arrText = this.text.split("\n")
    const title = arrText[0]
    arrText.shift()
    const task = store.state.tasks.find(item => item.id === id)

    return {
      id: id ? id : this.getNextTaskId(),
      text: arrText.length ? arrText : '',
      title: title,
      isDone: id ? task.isDone : false,
      date: new Date().toLocaleString(),
    }
  }

  getNextTaskId = () => {
    const tasks = store.state.tasks
    return tasks.length ? tasks[tasks.length - 1].id + 1 : 1
  }
}

const store = {
  state: {
    tasks: [],
    cleanTask: {
      text: "",
      id: null,
    },
    myContacts: {
      git: "https://github.com/dev-moroz",
      tg: "https://t.me/dev_moroz",
      resumeNotion: "https://brindle-debt-0dd.notion.site/97925d98fd9e4f81a4ce5aaad84f2fa9",
    },
  },

  getters: {
    tasks: state => state.tasks,
    myContacts: state => state.myContacts,
    cleanTask: state => state.cleanTask,
  },

  mutations: {
    setTasks(state, task) {
      state.tasks = task
    },

    setNewTask(state, text) {
      const newTask = new newTaskItem(text)
      state.tasks.push(newTask.getInfo())
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter(item => item.id !== id)
    },

    changeTaskInfo(state, id) {
      const task = state.tasks.find(item => item.id === id)

      state.cleanTask.text += task.title + "\n"
      state.cleanTask.id = id

      let text = task.text
      for (let key in text) {
        if (task.title != text[0]) {
          state.cleanTask.text += text[key] + "\n"
        }
      }
    },

    setChangeCheсked(state, id) {
      const task = state.tasks.find(item => item.id === id)
      task.isDone = !task.isDone
    },

    setChangeTask(state, { id, updateText }) {
      const task = state.tasks.find(item => item.id === id)
      task.title = updateText.title
      task.text = updateText.text
    },

    endChangeTask(state) {
      state.cleanTask = {
        text: "",
        id: null,
      }
    },
  },

  actions: {
    getTasks({ commit }) {
      const dbRef = ref(getDatabase())
      get(child(dbRef, "tasks"))
        .then(res => {
          if (res.exists()) {
            const obj = res.val()
            const array = Object.keys(obj).map(key => obj[key])
            commit("setTasks", array)
          }
        })
        .catch(error => {
          console.error(error)
        })
    },

    addTask({ commit }, text) {
      const newTask = new newTaskItem(text)
      const db = getDatabase()
      set(ref(db, "tasks/" + newTask.getNextTaskId()), newTask.getInfo())
      commit("setNewTask", text)
    },

    removeTask({ commit }, id) {
      const db = getDatabase()
      remove(ref(db, `tasks/${id}/`))
      commit("deleteTask", id)
    },

    changeChecked({ commit, state }, id) {
      const db = getDatabase()
      const task = state.tasks.find(item => item.id === id)
      update(ref(db, `tasks/${id}/`), { isDone: !task.isDone })
      commit("setChangeCheсked", id)
    },

    editTask({ commit }, id) {
      commit("changeTaskInfo", id)
    },

    doneChangeTask({ commit }, { id, newText }) {
      commit("endChangeTask")

      const db = getDatabase()
      const updateTask = new newTaskItem(newText)
      const updateText = updateTask.getInfo(id)
      update(ref(db, "tasks/" + id), updateText)
      commit("setChangeTask", { id, updateText })
    },
  },
  modules: {},
}
export default createStore(store)
