const app = Vue.createApp({
    data: function() {
        return {
            count: 0
        };
    },
    methods: {
        dec: function() {
            if (this.count > 0)
            this.count--;
        },
        inc: function() {
            if (this.count < 10)
            this.count++;
        }
    }
});
app.mount('#app');