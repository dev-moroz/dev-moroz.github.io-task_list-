<template>
  <q-form @submit.prevent="clearForm()" class="d-flex row q-mt-md">
    <q-input type="textarea" filled autogrow outlined v-model="text" label-slot class="q-mr-sm" >
      <template v-slot:label>
        First paragraph is header
      </template>
    </q-input>
    <div>
      <q-btn id="btn_add_task" label="Add task" type="submit" color="primary" @click="addTask(text)" :disabled="!text.length" />
    </div>
  </q-form>
</template>

<style></style>

<script>
import { mapActions } from "vuex"
export default {
  name: "HelloWorld",
  data() {
    return {
      text: "",
    }
  },
  methods: {
    ...mapActions(['addTask']),
    clearForm() {
      this.text = ""
    }
  },
}
</script>
