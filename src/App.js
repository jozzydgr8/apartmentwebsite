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
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messageingSenderId,
  appId: process.env.REACT_APP_appId
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
