import { Button, Upload } from 'antd';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { colRef, storage } from '../App';
import { v4 } from 'uuid';
import { addDoc } from 'firebase/firestore';

function AdminUpload() {
    const [apartment, setApartment] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [toilet, setToilet]= useState('');
    const [park, setPark] = useState('');
    const [daily, setDaily] = useState('');
    const [weekly, setWeekly] = useState('')
    const [monthly, setMonthly] = useState('');
    const [annum, setAnnum] = useState('');
    const [fileList, setFileList] = useState([]);

  //const imageparh
    // const imagePath = `data/${fileLis}`
    //handleUploadchange
    const handleUploadChange = ({fileList})=>{
      setFileList(fileList)
    }
    //handle  storage of files images
    const uploadFilesToStorage = async ()=>{
      const filesData = await Promise.all(fileList.map(async(file)=>{
        const imagePath = `images/${file.name + v4()}`;
        const storageRef = ref(storage, imagePath);

        await uploadBytes(storageRef, file.originFileObj);
        const url = await getDownloadURL(storageRef);
        return {
          url:url,
          imagePath:imagePath
        }
      })
    );
    return filesData;
    };

    //handle fileSubmit
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const formData={
        apartment:apartment,
        bedroom:bedroom,
        bathroom:bathroom,
        toilet:toilet,
        park:park,
        daily:daily,
        weekly:weekly,
        monthly:monthly,
        annum:annum
      };
      try{
        const filesData = await uploadFilesToStorage();
        formData.fileUrls = filesData

        const docRef = await addDoc(colRef, formData);
        console.log('document written with id:', docRef.id)
      }catch(error){
        console.log(error)
      }
    }
  return (
    <section className='background'>
    <div className='container-fluid'>
      <div>
      <form onSubmit={handleSubmit}>
        <h2 className='monserrat'>welcome! upload aparments</h2>
        <input onChange={(e)=>setApartment(e.target.value)}
        value={apartment}
         placeholder='apartment qualities/Title' />
        <input 
        value={bedroom}
        onChange={(e)=>setBedroom(e.target.value)}
        placeholder='bedroom amount' />
        <input
        value={bathroom}
        onChange={(e)=>setBathroom(e.target.value)}
        placeholder='bathroom amount' />
        <input
        value={toilet}
        onChange={(e)=>setToilet(e.target.value)}
        placeholder='toilet amount' />
        <input 
        value={park}
        onChange={(e)=>setPark(e.target.value)}
        placeholder='parking spaces' />
        <input 
        value={daily}
        onChange={(e)=>setDaily(e.target.value)}
        placeholder='price per day' />
        <input
         value={weekly}
         onChange={(e)=>setWeekly(e.target.value)}
         placeholder='price per week' />
        <input 
        value={monthly}
        onChange={(e)=>setMonthly(e.target.value)}
        placeholder='price per month' />
        <input 
        value={annum}
        onChange={(e)=>setAnnum(e.target.value)}
        placeholder='price per annum' />

        <Upload.Dragger
        fileList={fileList}
        multiple
        listType='picture'
        onChange={handleUploadChange}
        beforeUpload={()=> false 
          //this will prevent upload
        }
        >
          <p>Drag files here OR</p>
          <Button>click to upload files </Button>
        </Upload.Dragger>

        <button type='submit'>submit</button>
      </form>
      </div>

    </div>
    </section>
  )
}

export default AdminUpload
