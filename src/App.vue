<template>
  <q-layout view="lHh lpR fFf" class="bg-light-blue-1">
    <q-header class="bg-light-blue-3 text-white" height-hint="98">
      <q-toolbar style="position:absolute">
        <q-toolbar-title >
          <q-avatar>
            <img src="https://img.icons8.com/external-icematte-lafs/62/000000/external-Check-it-icematte-lafs.png"/>
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs indicator-color="transparent" active-color="white" class="text-light-blue-2">
        <q-route-tab to="/" label="My Tasks" />
        <!-- <q-route-tab  to="/about" label="About app" /> -->
      </q-tabs>

    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
    

    <q-footer class="bg-light-blue-2 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-dark text-center">
          My contacts: 
          <a target="_blank" :href="myContacts.git" style="text-decoration: none; color:inherit;">
            <q-avatar>
              <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
            </q-avatar>
          </a>
          <a target="_blank" :href="myContacts.tg" style="text-decoration: none; color:inherit;">
            <q-avatar>
              <img src="https://img.icons8.com/fluency/48/000000/telegram-app.png"/>
            </q-avatar>
          </a>
          <a target="_blank" :href="myContacts.resumeNotion" style="text-decoration: none; color:inherit;">
            <q-avatar>
              <img src="https://img.icons8.com/plasticine/100/000000/resume.png"/>
            </q-avatar>
          </a>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>  
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  computed: {
    ...mapGetters(['myContacts'])
  },
  methods: {
    ...mapActions(['getTasks']),
  },
  mounted(){
    this.getTasks()
  }
}
</script>

<style lang="scss" scoped>
#title{
  @media (max-width: $breakpoint-xs-max){    
    display: none;
  }
}
</style>