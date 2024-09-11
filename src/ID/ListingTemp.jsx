import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../component/ListingTemp';
import { UseContextData } from '../ContextFolder/Context/UseContextData';
import { colRef, storage } from '../App';
import { deleteObject, ref } from 'firebase/storage';
import { deleteDoc, doc } from 'firebase/firestore';
import { UseContextAuth } from '../ContextFolder/Context/UseContextAuth';

function ListingTemp() {
    const { user } = UseContextAuth();
    const [temp, setTemp] = useState(null);
    const { id } = useParams();
    const { data } = UseContextData();

    useEffect(() => {
        const template = data && data.find(item => item.id === id);

        if (template) {
            setTemp(template);
        }
    }, [data, id]);

    const getImagePaths = (fileUrls) => {
        return fileUrls ? fileUrls.map(img => img.imagePath) : [];
    };

    const handleDelete = async (imagePaths, id) => {
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
        } catch (error) {
            console.error("Error deleting:", error);
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
                        <div><button>book now</button></div>
                        {user && user.uid === process.env.REACT_APP_superAdmin && (
                            <div>
                                <button onClick={() => handleDelete(imagePaths, temp.id)}>Delete this apartment</button>
                                <button>Make unavailable</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingTemp;
