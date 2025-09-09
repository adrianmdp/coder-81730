import { addDoc, collection, getDocs } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../utils/firebase"


const getAll = async () => {

    try {
        const querySnapshot = await getDocs(collection(db, 'users'))

        const users = querySnapshot.docs.map(elem => {
            return {
                id: elem.id,
                ...elem.data()
            }
        })

        return users
    } catch(error) {
        console.log(error);
    }
    
}

const add = async (newValue, file, path) => {
  // 1. Inicializa el servicio de Storage
  const storage = getStorage();

  // 2. Crea una referencia a la ubicación deseada en Storage
  // Por ejemplo, 'images/nombre-de-la-imagen.jpg'
  const storageRef = ref(storage, path);

  try {
    // 3. Sube el archivo
    const snapshot = await uploadBytes(storageRef, file);
    console.log('¡Archivo subido exitosamente!', snapshot.metadata.fullPath);

    // 4. Obtiene la URL de descarga
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('URL de descarga:', downloadURL);

    return downloadURL;
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    return null;
  }

    // 1 - Agregar la imagen a storage
    // Esto una vez agregada, debería devolver información el archivo (incluida la url donde esta guarado)

    // const imgUrl = "http:/("

    // try {
    //     const docRef = await addDoc(collection(db, "users"), newValue)
    //     console.log("Documento agregado con ID:", docRef.id)
    // } catch (error) {
    //     console.error("Error al agregar documento:", error)
    // }


}

const update = (value) => {


}

const getById = (id) => {

}

const remove = (id) => {

}

export const users = { getAll, getById, add, update, remove }
