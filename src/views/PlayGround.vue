<template>
    <v-container class="mt-5">
        <h2 class="text-f mr-2 ml-2" 
            style="text-align:center;
                    margin-top:25px; 
                    color:#3f4652 "
            >Welcome To Playground!
        </h2>
        <h3 class="text-f " 
            style="text-align:center;
                    margin-top:10px; 
                    margin-bottom:30px;
                    color:#3f4652"
            >Play around with some different traits and design your rabbit pfp
        </h3>
        <v-row>
            <v-col align="center">
                <!-- <v-card max-width="410px" class="" color="#189AB4">  -->
                    <!-- <v-img :src="'https://nftstorage.link/ipfs/bafybeiegfhz2w2lfhk63alld3uoraioc6zh7d77ako4mr3rn2a2i5e5kju/' + pic_id + '.png' "/>  -->
                        <img class="main-img" :src="require('../assets/output/img/' + pic_id + '.png')"/>
                    <!-- <img :src="this.images[pic_id].pathLong"/> -->
                    <!-- <v-lazy-image :src="require('../assets/output/img/0001.png')"/>  -->
             <!-- </v-card> -->
            </v-col>
        </v-row> 
        <v-row>
            <v-col align="center">
        <!-- <v-btn  class="ma-2 font-t" 
                outlined 
                href="../assets/output/img/0000.png"
                download="LootRyder.png"
            >
        Download</v-btn> -->
            <v-btn 
                @click="downloadImage(require('../assets/output/img/' + pic_id + '.png'), 'LootRyder.png')"
                class="mt-4 fb-btn text-f"
                style="background:#B9D9EB"
                x-large
                outlined
                
            >
            Download</v-btn>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mt-8 ">
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
        </v-row>
        <h3 class="text-f " 
            style="text-align:center;
                    margin-top:20px; 
                    margin-bottom:30px;
                    color:#3f4652"
            >More trait & layouts to Come!
        </h3>
    </v-container>
</template>
<script>
import pro_pfp from "../assets/TeamPage/pro_pfp.png"
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
        this.generate_nft()
    }, 
}
</script>
<style scoped>
.main-img {
    border: 6px solid #189AB4;
    /* padding: 15px; */
    max-width:400px;
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
  
@media screen and (max-width: 435px) {
    .main-img {
        max-width: 100%
    }
}

::v-deep .v-list-item--link::before { background-color: #189AB4;  }
::v-deep .theme--light.v-list-item:hover::before { opacity: 0.3; }
</style>