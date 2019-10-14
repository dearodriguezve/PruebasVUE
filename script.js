const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: ['Peras','Manzana','Platanos'],
        frutas2: [
            {nombre:'Pera', cantidad: 10},
            {nombre:'Manzana', cantidad: 0},
            {nombre:'Platano', cantidad: 13}
        ],
        nuevaFruta:''
    },
    methods:{
        agregarFruta: function(){
            this.frutas2.push({
                nombre:this.nuevaFruta,
                cantidad: 0
            })
        }
    }
})