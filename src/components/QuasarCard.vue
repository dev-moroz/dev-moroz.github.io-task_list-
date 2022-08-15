<template>
  
    <q-card class="my-card flex column justify-between" :class="isDone ? 'bg-green-11' : ''">

      <q-card-section v-if="id !== cleanTask.id">
          <div class="col text-h6" ref="title">{{title}}</div>
          <div class="text-subtitle">
            <div class="text-grey" ref="text" v-if="typeof text === 'object'">
              <p v-for="item,i in text" :key="i">{{item}}</p>
            </div>
          </div>
      </q-card-section>

      <q-card-section v-else>
          <q-input type="textarea" autogrow outlined v-model="cleanTask.text" label-slot class="q-mr-sm" ></q-input>
      </q-card-section>

      <q-card-actions v-if="id !== cleanTask.id">
        <q-btn flat round :color="isDoneIcon.color" :icon="isDoneIcon.icon" @click="changeChecked(id)"/>
        <q-btn flat round icon="edit" style="top:10px" class="btn-card-action text-grey" @click="editTask(id)"/>  
        <q-btn flat round icon="delete" class="btn-card-action text-red" @click="removeTask(id)"/>
      </q-card-actions>

      <q-card-actions v-else>
        <q-btn flat round color="green" icon="task" @click="doneChangeTask({id, newText: cleanTask.text})"/>
      </q-card-actions>

    </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
props: 
   {
      title :String,
      text : [Object, String],
      id: Number,
      isDone: Boolean
   },
  computed:{
    ...mapGetters(['cleanTask']),

   isDoneIcon(){
      return this.isDone 
         ? {icon: 'restore', color: 'blue'}
         : {icon: 'done', color: 'green'} 
   }
  },
  methods: {
   ...mapActions(['changeChecked', 'removeTask', 'editTask', 'doneChangeTask']),
  }
}
</script>

<style lang="scss">
.my-card{
  border: 1px solid #faebd7;
  box-shadow: none;
  width: 100%;
  min-width: 300px;
  max-width: 300px;

  .text-subtitle{
    overflow-wrap: anywhere;
  }

  .btn-card-action{
    transition: .1s;
    opacity: 0.1;
    position:absolute; 
    right:10px;
  }
  
  &:hover .btn-card-action{
    opacity: 1;
  }
}

</style>
