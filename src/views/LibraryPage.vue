<template>
    <v-container class="mt-5">
        <!-- <v-img :src="rabbit_01" class="fix" ></v-img> -->
        <!-- <v-row justify="center" align="center" class="m-bottom">
            <v-col cols="12" sm="9" class="align-center justify-center font landing-text scope">
                <p class="logo-title"> The Loot Ryders Club </p>
                <p>
                    Discover and Explore <br/>
                    A New Generation of Rabbits <br/> 
                    That Will Bring You Loot and Luck in 2023!
                </p>
            </v-col>
            
        </v-row> -->

        <h1 class="text-f mr-2 ml-2 mb-4" 
            style="text-align:center; margin-top:25px; color:#FBE4D8"
            >Welcome To Our Library!
        </h1>

        <!-- <div> -->
        <v-container>
            <v-row v-for="folder in folders" :key="folder.FileName" style="background-color: transparent">
                <v-row align="center" justify="center" class="mt-2 mb-2">
                    <h2 class="text-f mr-2 ml-2 mb-4" 
                        style="text-align:center; margin-top:25px; color:#FBE4D8"
                    > 
                        {{ folder.FileName }}
                    </h2>
                </v-row>
                    <v-row align="center" justify="center">
                    <v-col cols="12" sm="3" md="4" lg="3" xl="2" xs="10" v-for="image in folder.images" :key="image">
                        
                        <!-- <img :src="require('../assets/Library/' + image)" /> -->
                        <img class="main-img" :src="require('@/assets/Library/'+ folder.FileName + '/' +image)" />
                    </v-col>
                </v-row>
            </v-row>
            <!-- </div> -->
            <h3 class="text-f mt-16" 
                style="text-align:center;
                        margin-top:20px; 
                        margin-bottom:30px;
                        color:#FBE4D8"
                >More sticker are coming soon!
            </h3>
        </v-container>
    </v-container>
</template>
<script>
import rabbit_01 from "../assets/HomePage/rabbit_02.png"
export default {
    name: "HomePage",
    data: () => ({
        rabbit_01: rabbit_01,
        folders: [],
    }),
    methods: {
        populateData() {
            this.folders = [
   
   {
       "FileName": "AOT",
       "images": [
           "hange.png",
           "levi.png",
           "historia.png",
           "mikasa.png",
           "jean.png",
           "armin.png",
           "eren2.png",
           "annie.png",
           "reiner.png",
           "sasha.png",
           "eren1.png"
       ]
   },
   {
       "FileName": "Haikyuu",
       "images": [
           "kuroo.png",
           "bokuto.png",
           "nishinoya.png",
           "kenma.png",
           "kageyama.png",
           "oikawa.png",
           "sugawara.png",
           "hinata.png",
           "tsukishima.png",
           "akaashi.png"
       ]
   },
   {
       "FileName": "JJK",
       "images": [
           "inumaki.png",
           "yuta.png",
           "maki.png",
           "nanami.png",
           "megumi1.png",
           "nobara.png",
           "sukuna.png",
           "suguru.png",
           "megumi2.png",
           "gojo1.png",
           "gojo2.png",
           "yuji.png"
       ]
   },
   {
       "FileName": "One Piece",
       "images": [
           "roger.png",
           "nami.png",
           "shanks.png",
           "ace.png",
           "sanji.png",
           "robin.png",
           "zoro.png",
           "luffy.png",
           "chopper.png",
           "trafalgar111.png"
       ]
   },
   {
       "FileName": "Demon Slayer",
       "images": [
           "muzan.png",
           "muishiro.png",
           "shinobu.png",
           "tomioka.png",
           "zenitsu.png",
           "inosuke.png",
           "kanao.png",
           "tanjiro2.png",
           "tanjiro1.png",
           "nezuko.png",
           "mitsuri.png"
       ]
   }
]
        }
    },
    mounted(){
        this.populateData();
    }
}
</script>
<style lang="scss" scoped>

.text-f {
    font-family: "Questrian";
    color:#2B124C;
}

.main-img {
    /* border: 3px solid #189AB4; */
    /* padding: 15px; */
    max-width:250px;
    pointer-events: none;
}

// .top-m-sui {
//         margin-top: 125px;
//     }

// img {
//     vertical-align: middle;
//     margin-left: -20px
// }
.logo-img {
    padding-right: 10%;
    margin-top: 2%;
    padding-left: 10%;
    display: block;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    // width: 75%;
    transform: translate(-50%, -50%);
}

// @media screen and (max-width: 700px) {
//   .logo-img {
//     // margin: 20% auto auto auto ;
//     padding-right: 10%;
//     padding-left: 10%;
//     display: block;
//     width: 100%;
//     }
// }

@media screen and (min-width: 700px) and (orientation:landscape)   {
    
    .logo-img {
        // margin: 20% auto auto auto ;
        padding-right: 10%;
        padding-top: 1%;
        padding-left: 10%;
        display: block;
        width: 65%;
    }
}

.logo-title {
  font-size:50px;
  font-weight: bold;
  white-space: nowrap; 
  color:#2B124C !important;
//   margin-bottom: 20px;
}


.font{
  font-family: "Questrian";
  color: white !important;
}

.landing-text {
    font-size: 30px;
    color:#FBE4D8 !important;
}
.fix{
    position:fixed;
    bottom:0px;
    right:7.5%;
    // height:60%;
    width: 40%;
    transform: scaleX(-1);
}
.m-bottom{
    margin-bottom: 0px;
}
.container-scoped{ position: absolute; bottom: 0px }

@media screen and (max-width: 600px) and (min-width: 300px) {
    .main-img {
        max-width: 100%;
        // background-color: aqua;
    }
}

@media only screen and (max-width: 960px) and (min-width: 600px) { //960
    .main-img {
        max-width: 100%;
        // background-color: green;
    }
}

</style>