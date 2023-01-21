<template>
    <v-container fill-height fluid>
        <v-img :src="rabbit_01" class="fix" ></v-img>
        <v-row justify="center" align="center" class="m-bottom">
            <v-col cols="12" sm="9" class="align-center justify-center font landing-text scope">
                <p class="logo-title"> The Loot Ryders Club </p>
                <p>
                    Discover and Explore <br/>
                    A New Generation of Rabbits <br/> 
                    That Will Bring You Loot and Luck in 2023!
                </p>
                
                <p class="top-m-sui">
                    Exclusively only on: 
                    <img style="max-height:150px;" src="../assets/HomePage/sui-logo.png"/>
                </p>
       
                <!-- <p style="margin-top:80px"> </p> -->
                <!-- <p><img style="max-height:200px" src="../assets/HomePage/sui-logo.png"/></p> -->
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>
import rabbit_01 from "../assets/HomePage/rabbit_02.png"
export default {
    name: "HomePage",
    data: () => ({
        rabbit_01: rabbit_01,
    }),
    methods: {}
}
</script>
<style lang="scss" scoped>

.top-m-sui {
        margin-top: 125px;
    }

img {
    vertical-align: middle;
    margin-left: -20px
}
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
  color:#272c33 !important;
//   margin-bottom: 20px;
}


.font{
  font-family: "Questrian";
  color: white !important;
}

.landing-text {
    font-size: 30px;
    color:#3f4652 !important;
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

@media screen and (max-width: 750px){

    .top-m-sui {
        margin-top: 50px;
        font-size: 18px; 
       
        img {
            margin-top: -20px;
            margin-left: -10px;
            width: 250px;
            // max-width: 190px;
            // margin-left: 300px;
            // margin-left: -60px;
        }
    }
    .landing-text {
        font-size: 20px;
        text-align: center;
    }

    .logo-title {
        font-size: 28px;
    }

    // .fix {
    //     right: 25%;
    //     width: 50%;
    // }
    .fix {
        width: 45%
    }

    .m-bottom {
        margin-bottom: 10em;
    }
}

@media screen and (min-height: 2000px) {
    .fix {
        width: 60%;
        right: 0%;
    }
}

@media screen and (min-width: 2000px) {
    .fix {
        width: 30%;
        right: 10%;
    }
}

</style>