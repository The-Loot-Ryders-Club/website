<template>
  <v-app>
    <v-app-bar
      app
      color="#ADD8E6"
      height=100%
      class="mt-2"
      flat
      
    >
      <router-link to="/">
        <v-img  height="100" width="100" class="logo-text-out mb-2" :src="logo"/>
      </router-link>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon color="#272c33" class="d-flex d-md-none " style="margin-right: 15px;" @click="drawer = !drawer"></v-app-bar-nav-icon>
   
      <v-container fluid fill-height  class="d-none d-md-flex">
        <v-spacer></v-spacer>

        <v-btn  large color="#80a0aa" class="navigation mx-4 font " to="project" active-class="no-active" >
          Mindset
        </v-btn>
       
        <v-btn large color="#80a0aa" class="navigation mx-4 font"  min-width=200px; to="playground" active-class="no-active" > 
          Playround
        </v-btn>
   
        <v-btn large color="#80a0aa"  class="navigation mx-4 font"  to="team" active-class="no-active" >
          Team
        </v-btn>

      </v-container>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      style="max-width: 250px; max-height:100%"
      color="#272c33"
      temporary
      app
      left
    >
    <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          class="fill-height"
          justify="center"
        >

          <v-list-item>
            <v-img class="ml-8 mt-3 mb-3" max-width="150px" :src="logo"/>
          </v-list-item>


          <v-list-item class="align-center justify-center fill-height font">
            <v-btn color="#3f4652" elevation="12" style="color: white ;font-size: 12px; min-width: 200px;" >
              <router-link style="all:unset" to="/project">Ideology</router-link>
            </v-btn>
          </v-list-item>

           <v-list-item class="mt-6 align-center justify-center fill-height font">
            <v-btn color="#3f4652" elevation="12" style="color: white ; font-size: 12px; min-width: 200px;">
             <router-link style="all:unset" to="/package">PlayGround</router-link>
            </v-btn>
          </v-list-item>

          <v-list-item class="mt-6 align-center justify-center fill-height font">
            <v-btn color="#3f4652" elevation="12" style="color: white ; font-size: 12px; min-width: 200px;">
             <router-link style="all:unset" to="/team">Team</router-link>
            </v-btn>
          </v-list-item>

        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>

    <v-main style="background-color:#ADD8E6">
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import logo from "./assets/HomePage/2Logo.png";
export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  data: () => ({
    logo: logo,
    drawer: false,
    group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
<style >

@font-face {
  font-family: "Qanelas";
  src: local("Qanelas"),   url(../src/assets/fonts/Qanelas.otf) format("truetype");}


.v-btn--active.no-active::before {                                                                             
  opacity: 0 !important;
}

.font{
     font-family: "Qanelas";
     /* font-size: 16px !important; */
     color: white !important;
  }
</style>
