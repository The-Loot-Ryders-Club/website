<template>
    <v-container class="mt-5">
        <h1 class="text-f mr-2 ml-2 mb-4" 
            style="text-align:center; margin-top:25px; color:#3f4652"
            >Welcome To Our Library!
        </h1>

        <div>
            <v-row v-for="folder in folders" :key="folder.FileName">
                <v-row align="center" justify="center" class="mt-2 mb-2">
                    <h2 class="text-f mr-2 ml-2 mb-4" 
                        style="text-align:center; margin-top:25px; color:#3f4652"
                    > 
                        {{ folder.FileName }}
                    </h2>
                </v-row>
                    <v-row align="center" justify="center">
                    <v-col cols="12" sm="4" md="4" xs="" lg="3" xl="2" v-for="image in folder.images" :key="image">
                     
                        <!-- <img :src="require('../assets/Library/' + image)" /> -->
                        <img class="main-img" :src="require('@/assets/Library/'+ folder.FileName + '/' +image)" />
                    </v-col>
                </v-row>
            </v-row>
        </div>

        <!-- <v-row align="center" justify="center" class="mt-8 ">
            <v-col cols=6 md="2" sm="3"   align="center" justify="center" class="">
                <v-select
                    class="font-t"
                    v-model="selected_option_1"
                    :items="background"
                    @change="onChange_1(selected_option_1)"
                    label="Background"
                    background-color="#B9D9EB"
                    color="#189AB4"
                    item-color="#189AB4"
                    outlined
                    filled
                ></v-select>
            </v-col>
            <v-col cols=6 md="2"  sm="3" class="" align="center" justify="center">
                <v-select
                    class="font-t"      
                    v-model="selected_option_2"
                    @change="onChange_2(selected_option_2)"
                    :items="body"
                    label="Skin"
                    background-color="#B9D9EB"
                    color="#189AB4"
                    item-color="#189AB4"
                    outlined
                    filled
                ></v-select>
            </v-col>
            <v-col cols="6" md="2" sm="3" align="center" justify="center">
                <v-select
                    class="font-t"
                    v-model="selected_option_3"
                    @change="onChange_3(selected_option_3)"
                    :items="clothes"
                    label="Clothes"
                    background-color="#B9D9EB"
                    color="#189AB4"
                    item-color="#189AB4"
                    outlined
                    filled
                ></v-select>
            </v-col>
            <v-col cols=6 md="2" sm="3"  align="center" justify="center">
                <v-select
                    class="font-t"
                    v-model="selected_option_4"
                    @change="onChange_4(selected_option_4)"
                    :items="expression"
                    label="Expression"
                    background-color="#B9D9EB"
                    color="#189AB4"
                    item-color="189AB4"
                    outlined
                    filled
                ></v-select>
            </v-col>
        </v-row> -->
        <h3 class="text-f mt-16" 
            style="text-align:center;
                    margin-top:20px; 
                    margin-bottom:30px;
                    color:#3f4652"
            >More sticker are coming soon!
        </h3>
    </v-container>
</template>
<script>import pro_pfp from "../assets/TeamPage/pro_pfp.png"
import idx from "../assets/json-output.js"
const zeroPad = (num, places) => String(num).padStart(places, '0')

export default {
    data: () => ({
        pic_id:'381',
        pic_url: '../assets/output/img/381.png',
        new_link:'',
        pro_pfp: pro_pfp,
        background: ['CreamWhite', 'Fire', 'Gold', 'GTAVibe', 'Softpink'],
        body: ["Aquatic", "Emerald", "Evil", "Rediation", "Zombie"],
        clothes: ["BobberHoodie", "Decoratedshirt", "Downjacket", "Hoodie", "Prisoner"],
        expression: ["Exp_1", "Exp_2", "Exp_3", "Exp_4", "Exp_5"],
        selected_option_1: '',
        selected_option_2: '',
        selected_option_3: '',
        selected_option_4: '',
        idx:idx,
        images:[],
        stickers: [],
        folders: [],
        
    }), 
    methods: {
        generate_nft: function(){
            let filter = {
                        background: this.selected_option_1,
                        body: this.selected_option_2,
                        clothes: this.selected_option_3,
                        expression: this.selected_option_4}
            // console.log(filter)
            let entry = idx.filter(function(item) {
                for (var key in filter) {
                    if(item[key] == undefined || item[key] != filter[key])
                        return false;
                }
                return true;
            })
            this.pic_id = (zeroPad(entry[0]['id'],3))
            // console.log(filter, entry)
            // this.pic_id = entry[0]['id']
        },

        onChange_1(option){
            this.selected_option_1 = option
            this.generate_nft()
        },
        onChange_2(option){
            this.selected_option_2 = option
            this.generate_nft()
        },
        onChange_3(option){
            this.selected_option_3 = option
            this.generate_nft()
        },
        onChange_4(option){
            this.selected_option_4 = option
            this.generate_nft()
        },

        downloadImage: function(url, name){
            fetch(url)
                .then(resp => resp.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    // the filename you want
                    a.download = name;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                })
                .catch(() => alert('An error sorry'));
        },

        populateData() {
            this.folders = [
                {
                "FileName": "AOT",
                "images": [
                    "mikasa2.png",
                    "hange.png",
                    "levi.png",
                    "historia.png",
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
                    "bokuto2.png",
                    "kuroo.png",
                    "nishinoya.png",
                    "kenma.png",
                    "kageyama.png",
                    "oikawa.png",
                    "sugawara.png",
                    "hinata1.png",
                    "tsukishima.png",
                    "akaashi.png",
                    "bokuto3.png"
                ]
                },
                {
                "FileName": "JJK",
                "images": [
                    "inumaki.png",
                    "yuta1.png",
                    "maki.png",
                    "nanami.png",
                    "megumi1.png",
                    "suguru2.png",
                    "nobara.png",
                    "sukuna.png",
                    "megumi2.png",
                    "gojo1.png",
                    "gojo2.png",
                    "yuji.png",
                ]
                },
                {
                "FileName": "One Piece",
                "images": [
                    "Gol D Roger.png",
                    "Nami.png",
                    "Shanks.png",
                    "Ace.png",
                    "Zoro.png",
                    "sanji.png",
                    "Robin.png",
                    "Luffy.png",
                    "Chopper.png",
                    "trafalgar111.png"
                ]
                },
                {
                "FileName": "Demon Slayer",
                "images": [
                    "Kanayo.png",
                    "zenitsu1.png",
                    "muzan.png",
                    "Shinobu.png",
                    "inosuke.png",
                    "tanjiro2.png",
                    "Tomioka1.png",
                    "tanjiro1.png",
                    "nezuko.png",
                    "muichiro.png",
                    "mitsuri.png"
                ]
                }
            ];
        }
        // importAll(r) {
        //     r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
        // },
    },

    mounted(){
        // this.importAll(require.context('../assets/output/img/', true, /\.png$/));
        this.selected_option_1= 'GTAVibe',
        this.selected_option_2= 'Zombie',
        this.selected_option_3= 'BobberHoodie',
        this.selected_option_4= 'Exp_1',
        this.generate_nft(),

        this.populateData();


    }, 
}
</script>
<style scoped>
.main-img {
    /* border: 3px solid #189AB4; */
    /* padding: 15px; */
    max-width:250px
}

.text-f {
    font-family: "Questrian";
    color:#272c33;
}
.v-text-field--outlined >>> fieldset {
  border-color: #189AB4;
}

.font-t{
  font-family: "Questrian";
}
.v-text-field input::placeholder {
    color: green;
}
.fb-btn.v-btn--outlined {
    border: thin solid #189AB4;
  }
  
@media screen and (max-width: 600px) {
    .main-img {
        max-width: 100%
    }
}

@media screen and (max-width: 960px) {
    .main-img {
        max-width: 200px
    }
}

::v-deep .v-list-item--link::before { background-color: #189AB4;  }
::v-deep .theme--light.v-list-item:hover::before { opacity: 0.3; }
</style>