const { createApp } = Vue

  createApp({
    data() {
      return {
        email: []
      }
    },
    methods:{
        emailFuncion(n) {
         for(let i = 0; i < n; i++)
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
               this.email.push(response.data.response)
            })
        }
    },
    created() {
        this.emailFuncion(15)
    }
  }).mount('#app')
  