<template>
    <v-container clas="mt-5">
        <h2 class="text-f" 
            style="text-align:center;
                    margin-top:25px; 
                    margin-bottom:50px;
                    color:#3f4652 "
            >Meet Our Team:
        </h2>
        <v-row>
            <v-col md="6" sm="6" class="mt-5 right-p-mar">
                <v-card class="mx-auto pa-12 pb-5 rounded" 
                        min-height="" 
                        max-width="600px" 
                        outlined 
                        style="background:#B9D9EB"
                >
                    <v-img :src="huge_pfp"/>
                    <v-card-title style="font-size: 24px;" class="pl-0 text-f"> Huge Boba
                        <v-btn
                            class="mx-3"
                            small
                            dark
                            href="https://twitter.com/HugeBoba" target="_blank"
                            color="transparent"
                        >
                            <v-icon color="red" >$vuetify.icons.twitter</v-icon>
                        </v-btn>
                      
                    </v-card-title>
                    <v-card-subtitle class="pl-0 pt-2 text-f" style="font-size: 18px">Co-Founder / CEO </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col  md="6" sm="6" class="mt-5 left-p-mar ">
                <v-card class="mx-auto pa-12 pb-5 rounded" 
                        min-height="" 
                        max-width="600px" 
                        outlined 
                        style="background:#B9D9EB"
                >
                    <v-img :src="akz_pfp"/>
                    <v-card-title style="font-size: 24px;" class="pl-0 text-f">AKZ
                        <v-btn
                            class="mx-3"
                            small
                            dark
                            href="https://twitter.com/HayKayZee2" target="_blank"
                            color="transparent"
                        >
                            <v-icon color="red" >$vuetify.icons.twitter</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-subtitle class="pl-0 pt-2 text-f" style="font-size: 18px">Co-Founder / CEO</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="marr">
            <v-col md="6" sm="6" class="mt-5">
                <v-card class="mx-auto pa-12 pb-5 rounded" 
                        min-height="" 
                        max-width="600px" 
                        outlined 
                        style="background:#B9D9EB"
                >
                    <v-img :src="pro_pfp"/>
                    <v-card-title style="font-size: 24px;" class="pl-0 text-f">Pro
                        <v-btn
                            class="mx-3"
                            small
                            dark
                            href="https://twitter.com/PRO100SKILL8" target="_blank"
                            color="transparent"
                        >
                            <v-icon color="red" >$vuetify.icons.twitter</v-icon>
                        </v-btn>
                    </v-card-title> 
                    <v-card-subtitle class="pl-0 pt-2 text-f" style="font-size: 18px">Co-Founder / CXO </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import huge_pfp from "../assets/TeamPage/HugeBoba_pfp.png"
import akz_pfp from "../assets/TeamPage/Akz_pfp.png"
import pro_pfp from "../assets/TeamPage/pro_pfp.png"
export default {
    data: () => ({
        huge_pfp: huge_pfp,
        akz_pfp: akz_pfp, 
        pro_pfp: pro_pfp,
    }),
}
</script>
<style scoped>
.text-f {
    font-family: "Questrian";
    color:#272c33;
}

.marr {
    margin-top: 32.5px;
}
.right-p-mar{
    margin-left: 100px;
}
.left-p-mar {
    margin-left:-200px
}

@media screen and (max-width: 1903px) {
    .marr{
        margin-top: 0px;
    }

    .right-p-mar {
        margin-left: 0px;
    }

    .left-p-mar {
        margin-left: 0px;
    }
}
</style>