// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// BONUS
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const {createApp} = Vue;

createApp({

    created() {
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp);
            })
            
        }
    },

    data(){
        return{
            mailAddresses: [],
        }
    },

}).mount("#app");