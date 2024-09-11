import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
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
import { UseContextAuth } from './ContextFolder/Context/UseContextAuth';
import { Register } from './User/Register';
import ListingTemp from './ID/ListingTemp';
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


function App() {
  const {user, loading, dispatch:dis} = UseContextAuth();;

  const {dispatch, loading:load} = UseContextData();


  
//auth check
  useEffect(()=>{
    dis({type:'loading', payload:true})
    const order = async ()=>{
      try{
        const unsubscribe = onAuthStateChanged(auth, user=>{
          if(user){
            const user = auth.currentUser;
            dis({type:'signUser', payload:user});
            console.log('signed in')
          }else{
            dis({type:'signUser', payload:null});
            console.log('logged out')
          }

        })
      }catch(error){
        console.error(error)
      }
    }

    order();

  
        
    
    return ()=>{
      order();
    }
  },[]);


  //data
  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
  
    const unSubscribe = onSnapshot(colRef, (snapshot) => {
      // Create an array of documents with their data and ID
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  
      // Dispatch data after gathering all documents
      dispatch({ type: 'getData', payload: data });
      console.log(data);
  
      // Turn off loading state after data is loaded
      dispatch({ type: 'loading', payload: false });
    }, (error) => {
      console.error("Error fetching data:", error);
      dispatch({ type: 'loading', payload: false });
    });
  
    // Cleanup function to unsubscribe from the snapshot listener
    return () => unSubscribe();
  }, []);

    //routes 
    if(loading || load){
      return(<>
      ...loading
      </>)
    }

    const router = createBrowserRouter(createRoutesFromElements(
      <>
      <Route path='apartmentwebsite' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='register' element={!user ? <Register/>:<Navigate to={'/apartmentwebsite'}/>} />
        <Route path='upload' element={user && user.uid === process.env.REACT_APP_superAdmin ? <AdminUpload/>: <Navigate to={'/apartmentwebsite'}/>}/>
        <Route path=':id' element={<ListingTemp/>} />
      </Route>
      </>
    ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
