const productos = [
    {
        id: 1,
        name: "Café Colombia",
        description: "Cuarto de café importado de Colombia, de tostado intenso.",
        price: 14000,
        img: "img/cafe-colombia-prueba.jpg",
        category: "café",
        breve: "Café molido o en grano de origen"
    },
    {
        id: 2,
        name: "Café Perú",
        description: "Cuarto de café extraido de Perú, de tostado medio.",
        price: 13000,
        img: "img/cafe-colombia-prueba.jpg",
        category: "café",
        breve: "Café molido o en grano de origen"
    },
    {
        id: 3,
        name: "Café Costa Rica",
        description: "Cuarto de café extraido de Costa Rica, de tostado suave.",
        price: 17000,
        img: "img/cafe-colombia-prueba.jpg",
        category: "café",
        breve: "Café molido o en grano de origen"
    },
    {
        id: 4,
        name: "Cafetera Chemex",
        description: "Cafetera de diseño moderno. Perfecta para filtrados. Capacidad: 600Ml",
        price: 130000,
        img: "img/chemex.jpeg",
        category: "cafetera",
        breve: "Cafetera moderna de vidrio"
    },
    {
        id: 5,
        name: "Cafetera Moka",
        description: "Cafetera tradicional italiana, ideal para cafés intensos. Capacidad: 12 pocillos",
        price: 92000,
        img: "img/moka.jpg",
        category: "cafetera",
        breve: "Cafetera tradicional italiana"
    },
    {
        id: 6,
        name: "Prensa francesa",
        description: "Cafetera de prensa, no necesita filtros. Capacidad: 1Lt",
        price: 50000,
        img: "img/prensa-francesa.jpg",
        category: "cafetera",
        breve: "Cafetera de émbolo"
    },
    {
        id: 7,
        name: "Filtros Kalita Wave",
        description: "60 filtros Kalita Wave 185 x 100. Recomendados para cafeteras Chemex o V60",
        price: 30000,
        img: "img/filtro.jpg",
        category: "accesorio",
        breve: "Filtros de papel premium"
    },
    {
        id: 8,
        name: "Molino de café",
        description: "Molinillo de mano, con muelas de cerámicas ajustables para una mayor precisión y duración.",
        price: 80000,
        img: "img/molino.jpg",
        category: "accesorio",
        breve: "Molinillo manual de café"
    },
    {
        id: 9,
        name: "Tetera barista",
        description: "Tetera Kettle Swallow, de 600 ml. Su moderno diseño de 'pico de cisne' asegura un vertido parejo y preciso",
        price: 200000,
        img: "img/tetera-barista.jpg",
        category: "accesorio",
        breve: "Tetera con diseño 'pico de cisne'"
    }
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
            resolve(productos.find(prod => prod.id == id))
        }, 200)
    })
}
export function getProductsByCategory(category) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = productos.filter((prod) => prod.category == category)
            if (filteredProducts.length > 0) {
                const modifiedProducts = filteredProducts.map(producto => {
                    return {
                        ...producto,
                        img: `../${producto.img}`
                    };
                });
                resolve(modifiedProducts)
            }
        })
    }, 2000)


}

