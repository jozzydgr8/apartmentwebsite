import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import {getFirestore, collection, onSnapshot, query, where} from "firebase/firestore"
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


//firebase init
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { UseContextData } from './ContextFolder/Context/UseContextData';
import AdminUpload from './Admin/AdminUpload';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHAJYVLlNM8u2L-PMngG-oeJ9BpEw6AqA",
  authDomain: "apartmentwebsite-fe584.firebaseapp.com",
  projectId: "apartmentwebsite-fe584",
  storageBucket: "apartmentwebsite-fe584.appspot.com",
  messagingSenderId: "649191728575",
  appId: "1:649191728575:web:020b8bf5025fb749a56d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase methods
export const auth = getAuth();
export const db = getFirestore();
export const colRef = collection(db, 'apartment');
export const userRef = collection(db, 'user')
export const storage = getStorage(app);
export const bookRef = collection(db, 'book')

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='apartmentwebsite' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='upload' element={<AdminUpload/>}/>
  </Route>
  </>
))
function App() {
  const {dispatch, loading:load} = UseContextData();;
  
  //data
  useEffect(()=>{
    dispatch({type:'loading', payload:true});
     
    const unSubscribe = onSnapshot(colRef, (snapshot)=>{
        const data = []
        const dataRef = snapshot.docs.forEach(doc=>{
          data.push({...doc.data(), id:doc.id});
          dispatch({type:'getData', payload:data});
          console.log(data);
        });
      });
    
      
      return ()=> unSubscribe();
      
    },[]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
