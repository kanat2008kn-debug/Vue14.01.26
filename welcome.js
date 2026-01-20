 const app = Vue.createApp({
    data() {
        return {
            name: '',
            lastName: '',
        };
    },
    computed: {
        fullName: function () {
            if (this.name && this.lastName)
                return 'Добро пожаловать, ' + this.name + ' ' + this.lastName; +'!'
            return 'Давай знакомиться!'
        }
    }
    
});

app.mount('#app');