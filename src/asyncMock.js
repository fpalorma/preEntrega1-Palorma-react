const productos = [
    {
        id: 1,
        name: "Café Colombia",
        description: "Cuarto de café extraido de Colombia, de tostado intenso.",
        price: 14000,
        img: "Static/Images/cafe-colombia-prueba.jpg",
    },
    {
        id: 2,
        name: "Café Perú",
        description: "Cuarto de café extraido de Perú, de tostado medio.",
        price: 13000,
        img: "Static/Images/cafe-colombia-prueba.jpg",
    },
    {
        id: 3,
        name: "Café Costa Rica",
        description: "Cuarto de café extraido de Costa Rica, de tostado suave.",
        price: 17000,
        img: "Static/Images/cafe-colombia-prueba.jpg",
    },
];

export function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 300)
    })
}

export function getProductDetail(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 200)
    })
}

