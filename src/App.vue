<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      style="max-width: 250px; max-height:100%"
      color="#272c33"
      temporary
      app
      bottom
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
            <router-link to="/">
            <v-img class="mb-3" max-width="150px" :src="nav_logo"/>
            </router-link>
          </v-list-item>

          <v-list-item class="align-center justify-center fill-height" style="margin-top:-7px">
            <v-row class="ma-0 pa-0">
              <v-col
                  cols=""
                >
                  <v-btn
                    class="mx-3"
                    dark
                    href="https://twitter.com/LootRydersClub" target="_blank"
                    color="#3f4652"
                   >
                    <v-icon color="white" >$vuetify.icons.twitter</v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-3"
                    dark
                    href="https://discord.gg/lootryders" target="_blank" 
                    color="#3f4652"
                   >
                    <v-icon color="white" >$vuetify.icons.discord</v-icon>
                  </v-btn>
              </v-col>
            </v-row>
          </v-list-item>

          <v-list-item class="align-center justify-center fill-height font">
            <v-btn large color="#3f4652" elevation="12" style="color: white ;font-size: 12px; min-width: 200px;" >
              <router-link style="all:unset" to="/project">Roadmap</router-link>
            </v-btn>
          </v-list-item>

           <v-list-item class="mt-6 align-center justify-center fill-height font">
            <v-btn large color="#3f4652" elevation="12" style="color: white ; font-size: 12px; min-width: 200px;">
             <router-link style="all:unset" to="/playground">PlayGround</router-link>
            </v-btn>
          </v-list-item>

          <v-list-item class="mt-6 align-center justify-center fill-height font">
            <v-btn large color="#3f4652" elevation="12" style="color: white ; font-size: 12px; min-width: 200px;">
             <router-link style="all:unset" to="/team">Team</router-link>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#9bcde0"
      height=110%
      flat
      hide-on-scroll
      
    >
      <router-link to="/">
        <v-img  class="logo-text-out logo mb-2 ml-2 mr-4" :src="logo"/>
      </router-link>
      
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon color="#272c33" class="d-flex d-md-none " style="margin-right: 15px;" @click="drawer = !drawer"></v-app-bar-nav-icon>
   
      <v-container fluid fill-height  class="d-none d-md-flex">
        <v-spacer></v-spacer>

        <v-btn  large color="#3f4652" style="color: white;" class="navigation mx-4 font " to="project" active-class="no-active" >
          Roadmap
        </v-btn>
       
        <v-btn large color="#3f4652" style="color: white;" class="navigation mx-4 font"  min-width=200px; to="playground" active-class="no-active" > 
          PlayGround
        </v-btn>
   
        <v-btn large color="#3f4652" style="color: white;" class="navigation mx-4 font"  to="team" active-class="no-active" >
          Team
        </v-btn>

        <v-btn
            class="mx-2"
            color="white"
            style="background: #3f4652"
            icon
            large
            dark
            href="https://twitter.com/LootRydersClub" target="_blank"
         
        >
            <v-icon>$vuetify.icons.twitter</v-icon>
        </v-btn>
        <v-btn
            class="mx-4"
            olor="white"
            style="background: #3f4652"
            icon
            icons
            large
            dark
            href="https://discord.gg/lootryders" target="_blank"
         
        >
            <v-icon>$vuetify.icons.discord</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    
    <!--  -->
    <v-main style="background-color:#9bcde0"> <!-- ADD8E6 -->
      <router-view/>
   </v-main>
  </v-app>
</template>

<script>
import logo from "./assets/HomePage/2Logo.png";
import nav_logo from "./assets/HomePage/s_logo.png"
import banner from "./assets/HomePage/Banner.jpg"
export default {
  name: 'App',
  components: {
    // HelloWorld,
  },

  data: () => ({
    logo: logo,
    nav_logo: nav_logo,
    banner:banner,
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
<style lang="scss" scoped>

@font-face {
  font-family: "Qanelas";
  src: local("Qanelas"), url(../src/assets/fonts/Qanelas.otf) format("truetype");
}

@font-face {
  font-family: "JUSTSansRegular";
  src: local("JUSTSansRegular"), url(../src/assets/fonts/JUSTSansRegular.otf) format("truetype");
}

@font-face {
  font-family: "Questrian";
  src: local("Questrian"), url(../src/assets/fonts/Questrian.otf) format("truetype");
}

.v-list-item-group {
  justify-content: center!important;
}
.v-list-item:hover {
  background: transparent !important;
}
.v-list-item {
  &--active {
    background-color: transparent ;
      .active {
      display: inline-block!important;
    }
  }
  margin-top: 20px;
  font-style: normal;
  font-weight: 900;
  text-align: center !important;
  color: rgba(88,0,0,0.1) !important;
  justify-content: center!important;
  letter-spacing: 0.20em;
  text-transform: uppercase;
}

.v-btn--active.no-active::before {                                                                             
  opacity: 0 !important;
}

.theme--light.v-list-item--active:before, .theme--light.v-list-item--active:hover:before, .theme--light.v-list-item:focus:before {
    opacity: 0;
}

.font{
  font-family: "Questrian";
  // color: white !important;
}

.logo {
  max-width: 100px;
}


@media screen and (max-width: 500px) {
  .logo {
    max-width: 60px;
  }
}
// @media screen and (max-width: 500px){
// .logo-title { display: none}
// }
</style>
