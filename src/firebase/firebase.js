// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcMohRAOhOW7lLwtKJocfGY3gVFB3Qh74",
    authDomain: "mi-cafe-2358f.firebaseapp.com",
    projectId: "mi-cafe-2358f",
    storageBucket: "mi-cafe-2358f.appspot.com",
    messagingSenderId: "937312758271",
    appId: "1:937312758271:web:5de31ca2a326bcce699fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function getProducts() {
    const response = await getDocs(collection(db, "products"))
    console.log(response);
    const listaProds = [];
    response.forEach(doc => listaProds.push({ id: doc.id, ...doc.data() }));
    return listaProds
}

export async function getProductsByCategory(category) {
    const q = query(collection(db, "products"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const listaFiltro = [];
    querySnapshot.forEach(doc => listaFiltro.push({ id: doc.id, ...doc.data() }));
    return listaFiltro.map(producto => {
        return {
            ...producto,
            img: `../${producto.img}`
        };
    })
}

export async function getProductDetail(id) {
    const response = await getDocs(collection(db, "products"))
    console.log(response);
    const listaProds = [];
    response.forEach(doc => listaProds.push({ id: doc.id, ...doc.data() }));
    return listaProds.find(prod => prod.id == id)
}