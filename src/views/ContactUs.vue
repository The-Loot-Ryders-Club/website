<template>
    <v-container>
        <h1 class="text-f mr-2 ml-2 mb-4" 
            style="text-align:center; margin-top:25px"
        >
            Contact Us
        </h1>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
                class="text-f"
                color="#FBE4D8"
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                class="text-f"
                color="#FBE4D8"
            ></v-text-field>

            <v-textarea
                v-model="message"
                :rules="messageRules"
                label="Message"
                required
                class="text-f"
                color="#FBE4D8"
            ></v-textarea>

            <v-btn 
                :disabled="!valid" 
                @click="submit" 
                class="text-f mt-5"
                style="background-color: #FBE4D8; color:black !important"
            >
                Send Inquiry
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
    data: () => ({
        valid: true,
        name: '',
        email: '',
        message: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        messageRules: [
            v => !!v || 'Message is required',
        ],
    }),
    methods: {
        submit() {
        if (this.$refs.form.validate()) {
            // Here you would typically send the data to your server
            alert('Inquiry sent!');
            // Reset form
            this.$refs.form.reset();
        }
        },
    },
};
</script>
<style lang="scss" scoped>
    .text-f {
        font-family: "Questrian";
        color:#FBE4D8 !important;
    };

    ::v-deep .v-label,
    ::v-deep .v-input__control > .v-input__slot > .v-text-field__slot input,
    ::v-deep .v-textarea textarea,
    ::v-deep .v-input__icon--clear .v-icon,
    ::v-deep .v-input__icon--prepend .v-icon,
    ::v-deep .v-input__icon--append .v-icon,
    ::v-deep .v-input__icon--append-outer .v-icon {
        color: #FBE4D8  !important;
    }

    ::v-deep .v-input__slot::before {
        border-color: #FBE4D8 !important;
    }

    ::v-deep .v-input__slot:focus {
        outline: none !important;
        border-bottom: 1px solid #FBE4D8  !important;
    }
    
</style>