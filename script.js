const options = {
    data: function() {
        return {
            title: 'Hello Vue!',
            count: 0
        };
    },
    methods: {
        sayHello() {
            this.title = 'You clicked me!';
        }
    }
};
const app = Vue.createApp(options);
app.mount('#app');