const app = Vue.createApp({
    data: function() {
        return {
            items: [
                { 
                    title: 'DDDDDDDDDD',
                    text: '444444444 87777777777778787564654sdfs65s4df65s4df65sd4f65s4df65s4d6f54sdfsdfsdf5s65dfsdfsdfsdfsdf564seterte6r5t4er6t5er6t54e6r5t4er65t4e6r54tdfsdf',
                    isOpen: false,
                },
                { 
                    title: 'ItemWWWWWWWWWWWWWWWWWW',
                    text: '999999999 2321111111111111111111s321111111111111sdfsdfsdf32s1df321s32f1d32sf1d3sdf13sdf13s21df3s2f1d',
                    isOpen: false,
                },
                { 
                    title: 'SSSSSSS',
                    text: '7777777777788 2321111111111111111111s321111111111111sdfsdfsdf32s1df321s32f1d32sf1d3sdf13sdf13s21df3s2f1d',
                    isOpen: false,
                },
            ]
        };
    },
    methods: {
        openItem: function(index) {
            this.items[index].isOpen = !this.items[index].isOpen;
        }

    }
});

app.mount('#app');