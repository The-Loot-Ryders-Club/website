<template>
    <v-container class="pr-2 pl-2 mt-5 pb-10">
        <v-card rounded  class="mr-9 ml-9 pa-3" style="background:#189AB4">
            <v-img :src="banner" />
        </v-card>
        <v-row sm="4" class="mt-12 mr-8 ml-8 " justify="center" align="center">
            <v-col class="align-center justify-center losung">
                <div class="losung-alignment">
                    <p>What we do?</p>
                    <p>
                        Always <span class="losung-words" style="color:#f4760d">Riding</span>,<br/>
                        Always <span class="losung-words" style="color:#fec511">Looting</span>!
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
    </v-container>
</template>
<script>
import banner from "../assets/HomePage/Banner.jpg"
export default {
    data: () => ({
        banner: banner,
    }) 
}
</script>
<style scoped>
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



/* @media screen and (max-width: 470px) {
    .losung {
        font-size: 20px
    }
} */
</style>