// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function getProducts() {
    const response = await getDocs(collection(db, "products"))
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
    const listaProds = [];
    response.forEach(doc => listaProds.push({ id: doc.id, ...doc.data() }));
    return listaProds.find(prod => prod.id == id)
}

export async function sendOrder(order){
    const orderCollection = collection(db,"pedidos");
    const docRef = await addDoc(orderCollection, order)
    return docRef.id
    
}