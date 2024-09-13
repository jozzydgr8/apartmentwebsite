import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../component/ListingTemp';
import { UseContextData } from '../ContextFolder/Context/UseContextData';
import { colRef, db, storage } from '../App';
import { deleteObject, ref } from 'firebase/storage';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { UseContextAuth } from '../ContextFolder/Context/UseContextAuth';

function ListingTemp() {
    const { user } = UseContextAuth();
    const [temp, setTemp] = useState(null);
    const { id } = useParams();
    const { data, dispatch } = UseContextData();

    useEffect(() => {
        const template = data && data.find(item => item.id === id);

        if (template) {
            setTemp(template);
        }
    }, [data, id]);

    console.log('id',temp &&temp.id)

//handle making doc unavailable

    const handleUnavailable = async (id)=>{
        dispatch({type:'loading', payload:true})
        const docRef = doc(db, 'apartment', id);
        try{
           await setDoc(docRef, {
               available:!temp.available
           }, {merge:true})
           dispatch({type:'loading', payload:false})
        }catch(error){
           console.error(error)
           dispatch({type:'loading', payload:false})
        }

}
    //get imagePaths
    const getImagePaths = (fileUrls) => {
        return fileUrls ? fileUrls.map(img => img.imagePath) : [];
    };

    const handleDelete = async (imagePaths, id) => {
        dispatch({type:'loadiing', payload:true})
        try {
            // First, delete each image from storage
            for (const imagePath of imagePaths) {
                const fileStorage = ref(storage, imagePath);
                await deleteObject(fileStorage);
            }

            // Then, delete the document from Firestore
            const docRef = doc(colRef, id);
            await deleteDoc(docRef);

            // Redirect after deletion
            window.location.href = '/apartmentwebsite'; // Or use navigate('/apartmentwebsite') if using React Router
            dispatch({type:'loadiing', payload:false})
        } catch (error) {
            console.error("Error deleting:", error);
            dispatch({type:'loadiing', payload:false})
        }
    };

    if (!temp) {
        return <span>Can't find file</span>;
    }

    const imagePaths = getImagePaths(temp.fileUrls);

    return (
        <section id='list'>
            <div className='container-fluid'>
                <List data={temp} key={temp.id} length={temp.length} />
                <div>
                    <div>
                        <h1>{temp.apartment} is available for booking</h1>
                        
                            <button className={temp.available != true ? 'unavailablebutton':''} disabled={temp.available}>
                                {temp.available === true ? ' Book now':' currently unavailable'}

                            </button>
                            <br />
                        
                        {user && user.uid === process.env.REACT_APP_superAdmin && (
                            <>
                                <button className={temp.available != true ? 'unavailablebutton':''} onClick={() => handleDelete(imagePaths, temp.id)}>
                                    Delete this apartment
                                </button>
                                <br />
                                <button className={temp.available != true ? 'unavailablebutton':''} onClick={()=>handleUnavailable(temp.id)}>
                                    {temp.available === true ? ' make unavailable':' make available'}
                                </button>
                                
                            </>
                        )}
                        

                        <p>
                            For more enquiries please chat or call us 
                            <div className="footerFlex"> <ion-icon name="call-outline"></ion-icon> 08800292</div>
                            <div className="footerFlex"> <ion-icon name="mail-outline"></ion-icon> ourmail.com</div>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingTemp;
