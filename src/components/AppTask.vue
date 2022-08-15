<template>
   <div class="column">

      <div class="q-pa-md row q-gutter-md justify-center">
         <template v-for="item,i in tasks" :key="i">
            <QuasarCard :text="item.text" :title="item.title" :id="item.id" :isDone="item.isDone" v-if="!item.isDone"/>
         </template>
      </div>

       <div class="q-pa-md row q-gutter-md justify-center">
         <template v-for="item,i in tasks" :key="i">
            <QuasarCard :text="item.text" :title="item.title" :id="item.id" :isDone="item.isDone" v-if="item.isDone"/>
         </template>
      </div>

      <div class="q-pa-md row q-gutter-md justify-center">
         <q-spinner color="primary" size="3em" v-if="loadTasks"/>
         <p v-if="!isTasks && !loadTasks">Tasks list is empty</p>
      </div>
   </div>  
</template>

<script>
import QuasarCard from '@/components/QuasarCard.vue'
import { mapGetters } from 'vuex'
export default {
   computed:{
      ...mapGetters(['tasks', 'isTasks', 'loadTasks']),
   },
   components: {
      QuasarCard
   }
}
</script>