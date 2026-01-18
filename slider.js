const app = Vue.createApp({
    data: function() {
        return {
            currentImage: 2,
            images: [
                "https://viridi-lab.ru/upload/iblock/fbd/wwcfpfzu3u327j8gpowmtshap5nr14j3.jpg",
                "https://viridi-lab.ru/upload/iblock/33d/d9rges0zdrgg2gobsmmw57vglktru9f6.jpg",
                "https://viridi-lab.ru/upload/iblock/9b0/6l1bo1at6qcsss4hz97d60wmlchwoi0m.jpg",
            ]
        };
    },
    methods: {
        prevImage() {
            this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.currentImage = (this.currentImage + 1) % this.images.length;
        }
    }
});

app.mount('#app');