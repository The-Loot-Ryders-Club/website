<template>
    <v-container class="pr-2 pl-2 mt-5 pb-10">
        <v-card elevation="6" rounded  class="mr-9 ml-9 pa-3" style="background:#c2e0ec">
            <v-img :src="banner" />
        </v-card>
        <v-row sm="4" class="mt-12 mr-8 ml-8 " justify="center" align="center">
            <v-col class="align-center justify-center losung">
                <div class="losung-alignment">
                    <p>What we do?</p>
                    <p>
                        Always <span class="losung-words" style="color:#f4760d">Riding</span>,<br/>
                        Always <span class="losung-words" style="color:#c6a229">Looting</span>!
                    </p>
                </div>
            </v-col>
            <v-col  sm="8" style="">
                <p class="description">Introducing Loot Ryders, a community that aims to bring happy bunnies over to the sui network. Launching on the year of the rabbit, 
                                        Loot Ryders NFTs with over 300 hand-drawn traits aims to build a close knit community with the goals of building togetherness, rewards and fun.</p>

                <p class="description">Each Ryder NFT gains access to exclusive rewards such as, exclusive giveaways and raffles, merch, access to our staking and reward system and loads more to be announced.
                                         Over at Loot Ryders, we aim to be one of the top Projects on sui and intend to offer several services to all SUI NFT communities as a whole.
                                     Creating platforms that can help build and foster relationships with every project in the Sui space. 
                </p>
            </v-col>
        </v-row>
        <h2 class="text-f" 
            style="text-align:center;
                    margin-top:60px; 
                    margin-bottom:50px;
                    color:#3f4652 "
            >Our Roadmap:
        </h2>
        <v-row class="mt-12 mr-8 ml-8 mb-10">
            <v-col cols="12" lg="3" md="12"  sm="12" xs="12">
                <v-card 
                    color="#c2e0ec"
                    hover 
                    elevation="8"
                    rounded
                    class="mx-auto" 
                    max-height="400px" 
                    max-width="400px">
                        <v-card-title  
                            primary-title 
                            class="v-card-title-text justify-center text-f pt-8 pb-8" 
                            style="color:#f4760d"
                            >Minting Event
                        </v-card-title>
                        <v-card-text class="v-card-main-text justify-center text-center text-f pb-8">
                            We have partnered with Clutchy Launchpad who will be helping with our fundamental
                            plan to fullfill all our thoughts and develop all the necessary functionality  
                            for our collection.
                        </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="12" sm="12" xs="12">
                <v-card 
                    color="#c2e0ec"
                    hover 
                    elevation="8"
                    rounded
                    class="mx-auto" 
                    max-height="400px" 
                    max-width="400px">
                        <v-card-title  
                            primary-title 
                            class="v-card-title-text justify-center text-f pt-8 pb-8" style="color:#c6a229"
                            >Staking Page
                        </v-card-title>
                        <v-card-text class="v-card-main-text justify-center text-center text-f pb-8">
                            Staking would be vital utility to our Lootboxes idea. It would be 
                            the only utility that will allow yielding of our future token that will be essential
                            for iteractions within our ecosystem.
                        </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="12" sm="12" xs="12">
                <v-card 
                    color="#c2e0ec"
                    hover 
                    elevation="8"
                    rounded
                    class="mx-auto" 
                    max-height="400px" 
                    max-width="400px">
                        <v-card-title  
                            primary-title 
                            class="v-card-title-text justify-center text-f pt-8 pb-8" 
                            style="color:#f4760d"
                            >Reward System
                        </v-card-title>
                        <v-card-text class="v-card-main-text justify-center text-center text-f pb-8">
                            Reward system is the last step towards preparation & fullfilling 
                            the fundamentals for the Lootbox system. It's Functionality would be implemented 
                            on top of the staking utility and our NFT's.
                        </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3" md="12"  sm="12" xs="12">
                <v-card 
                    color="#c2e0ec"
                    hover 
                    elevation="8"
                    rounded
                    class="mx-auto" 
                    max-height="400px" 
                    max-width="400px">
                        <v-card-title  
                            primary-title 
                            class="v-card-title-text justify-center text-f pt-8 pb-8" 
                            style="color:#c6a229"
                            >Lootboxes
                        </v-card-title>
                        <v-card-text class="v-card-main-text justify-center text-center text-f pb-8">
                            Goal for our early roadmap would be the finalization of Lootboxes
                            system, that provides totally new experience to our users. You will be able to 
                            unlock new real-world rewards and benefits.
                        </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <h2 class="text-f" 
            style="text-align:center;
                    margin-top:70px; 
                    margin-bottom:px;
                    color:#3f4652 "
            >Our Partners
        </h2>
        <!-- <v-row class="mt-12 mr-8 ml-8 mb-10">
            <v-col></v-col>  
            <v-col v-for="i in partners" :key="i" cols="12" md="3" sm="12" xs="12">
                <v-card 
                    class=" pa-3 pb-1 mx-auto"
                    max-width="250px"
                    max-height="250px"
                    color="rgba(39,44,51, 0.15)"
                    hover 
                    elevation="8"
                    rounded
                    >
                        <img class="partner-img" :src=i />
                </v-card>
            </v-col>
        </v-row> -->
        <v-row class="mt-12 mr-8 ml-8 row-break">
            <v-col></v-col>
            <v-col v-for="i in partners_1" :key="i" cols="12" md="3" sm="12" xs="12">
                <v-card 
                    class=" pa-3 pb-1 mx-auto"
                    max-width="250px"
                    max-height="250px"
                    color="rgba(39,44,51, 0.15)"
                    hover 
                    elevation="8"
                    rounded
                    >
                        <img class="partner-img" :src=i />
                </v-card>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row class="mr-8 ml-8 mb-6">
            <v-col></v-col>
            <v-col v-for="i in partners_2" :key="i" cols="12" md="3" sm="12" xs="12">
                <v-card 
                    class=" pa-3 pb-1 mx-auto"
                    max-width="250px"
                    max-height="250px"
                    color="rgba(39,44,51, 0.15)"
                    hover 
                    elevation="8"
                    rounded
                    >
                        <img class="partner-img" :src=i />
                </v-card>
            </v-col>
            <v-col></v-col>
        </v-row>        
    </v-container>
</template>
<script>
import banner from "../assets/HomePage/Banner.jpg"
import sns from "../assets/Partners/sns.png"
import suiWhale from "../assets/Partners/suiwhale.png"
import suiEcosystem from "../assets/Partners/suiEcosystem.png"
import clutchy from "../assets/Partners/clutchy.png"
import buzz from "../assets/Partners/buzz.png"
export default {
    data: () => ({
        banner: banner,
        partners_1: [
            clutchy, sns,
        ],
        partners_2: [
            suiWhale, buzz, suiEcosystem
        ],
    }) 
}
</script>
<style scoped>

.partner-img {
    max-width:100%;
}
.text-f {
    font-family: "Questrian";
    color:#272c33;
}

.v-card-title-text{
    font-size: 26px;

}

.v-card-main-text{
    font-size: 16px
}

.losung-words{
    font-size: 60px
}

.losung {
    text-align: center;
    font-family: "Questrian";
    font-size: 54px;
    color:#3f4652 !important;
    white-space: nowrap; 
}

.description {
    font-family: "Questrian";
    font-size:24px;
    color:#3f4652 !important;
}


.losung-alignment {
    display: inline-block; 
    text-align: left;
}


@media screen and (max-width: 820px) {
    .losung {
        font-size:38px;
        /* text-align: left; */
    }

    .description {
        font-size:22px;
    }

    .losung-words{
        font-size: 48px;
    }

    /* .v-card-main-text {
        font-size: 14px;
    }

    .v-card-title-text{
        font-size: 18px
    } */
}

@media screen and (max-width: 460px) {
    .losung {
        font-size:28px;
        text-align: left;
    }

    .description {
        font-size:16px;
    }

    .losung-words{
        font-size: 32px;
    }
}
@media screen and (max-width: 950px) {
    .row-break {
        margin-bottom: -62.5px;
    }
}

/* @media screen and (max-width: 470px) {
    .losung {
        font-size: 20px
    }
} */
</style>