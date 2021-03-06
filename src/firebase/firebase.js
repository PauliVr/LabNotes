import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAF69GlD9YNy106CYWYcGm9FqKYOap70KM',
  authDomain: 'spacenotes-2ddef.firebaseapp.com',
  projectId: 'spacenotes-2ddef',
  storageBucket: 'spacenotes-2ddef.appspot.com',
  messagingSenderId: '311695225043',
  appId: '1:311695225043:web:bc4c05341f18bb64dca426',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const user = auth.currentUser;
const db = getFirestore(app);
// const storage = getStorage(app); //imagen

export async function userExist(uid) {
  const docRef = doc(db, 'users', uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

//google
export async function registerUser(uid, name, email) {
  try {
    const userCollection = collection(db, 'users');
    console.log(uid);
    console.log(name);
    console.log(email);
    await setDoc(doc(userCollection, uid), {
      uid,
      name,
      email,
    });
  } catch (error) {
    console.log('usuario no guardado', error);
  }
}

export async function registerUserEmailPass(uid, userName, name, email, password) {
  try {
    const userCollection = collection(db, 'users');
    console.log(uid);
    console.log(userName);
    console.log(name);
    console.log(email);
    console.log(password);
    await setDoc(doc(userCollection, uid), {
      uid,
      userName,
      name,
      email,
      password,
    });
  } catch (e) {
    console.log('Usuario no guardado', e);
  }
}
export async function saveNote(title, content, uid) {
  let alert = '';
  let today = new Date();
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  let month = monthNames[today.getMonth()];
  let day = today.getDate() + '/' + month + '/' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' hrs';
  let registerDay = day + ' ' + time;
  try {
    const noteCollection = collection(db, 'notes');
    await addDoc(noteCollection, {
      title,
      content,
      registerDay,
      uid,
    });
    alert = 'check';
  } catch (e) {
    console.log('error');
    alert = 'uncheck';
  }
  return alert;
}

export async function getNote(uid) {
  let data = [];
  console.log(uid);
  const querySnapshot = await getDocs(collection(db, 'notes'));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, infoNote: doc.data() });
  });

  const colectionData = data.filter((doc) => doc.infoNote.uid === uid);
  console.log(colectionData);

  return colectionData;
}

export async function getUserNote(id) {
  const idNote = id;
  const docSnap = await getDoc(doc(db, 'notes', idNote));

  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    console.log('no jal??');
  }
}

export async function updateNote(id, title, content) {
  let alert = '';
  let today = new Date();
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  let month = monthNames[today.getMonth()];
  let day = today.getDate() + '/' + month + '/' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' hrs';
  let registerDay = day + ' ' + time;
  try {
    const idNote = id;
    const docRef = doc(db, 'notes', idNote);
    console.log(id, title, content, registerDay);
    await updateDoc(docRef, {
      title: title,
      content: content,
      registerDay,
    });
    alert = 'check';
  } catch (e) {
    console.log('error');
    alert = 'uncheck';
  }
  return alert;
}

export default function deleteNote(id) {
  deleteDoc(doc(db, 'notes', id));
}
