const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: ['Peras','Manzana','Platanos'],
        frutas2: [
            {nombre:'Pera', cantidad: 10},
            {nombre:'Manzana', cantidad: 0},
            {nombre:'Platano', cantidad: 13}
        ]
    }
})