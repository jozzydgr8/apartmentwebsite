import { Button, message, Upload } from 'antd';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { colRef, storage } from '../App';
import { v4 } from 'uuid';
import { addDoc } from 'firebase/firestore';
import { UseContextData } from '../ContextFolder/Context/UseContextData';

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
    const [overview, setOverview] = useState('')
    const {dispatch} = UseContextData();

  //const imageparh
    // const imagePath = `data/${fileLis}`

    //before upload
    const beforeUpload = (file) => {
      const isPicture = file.type.startsWith('image/');
      if (!isPicture) {
        message.error('You can only upload image files!');
      }
      return isPicture; // Return false to prevent uploading non-image files
    };
    //handleUploadchange
    const handleUploadChange = ({fileList})=>{
      setFileList(fileList)
    }
    //handle  storage of files images
    const uploadFilesToStorage = async ()=>{
      if (fileList.length === 0) {
        message.error('Please upload at least one image!');
        return;
      }
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
      dispatch({type:'loading', payload:true})
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
        dispatch({type:'loading', payload:false})
      }catch(error){
        console.log(error)
        dispatch({type:'loading', payload:false})
      }
    }
  return (
    <section id='upload'>
    <div className='container-fluid'>
      <div>
      <form onSubmit={handleSubmit}>
        <h2 className='monserrat'>welcome! upload aparments</h2>
        <br/>
        
        <input required onChange={(e)=>setApartment(e.target.value)}
        value={apartment}
         placeholder='apartment qualities/Title' />
        <br/>
        
        <input  
        type='number'
        value={bedroom}
        onChange={(e)=>setBedroom(e.target.value)}
        placeholder='bedroom amount' />
        <br/>
        
        <input
        type='number'
        value={bathroom}
        onChange={(e)=>setBathroom(e.target.value)}
        placeholder='bathroom amount' />
        <br/>
        
        <input
        type='number'
        value={toilet}
        onChange={(e)=>setToilet(e.target.value)}
        placeholder='toilet amount' />
        <br/>
        
        <input required 
        type='number'
        value={park}
        onChange={(e)=>setPark(e.target.value)}
        placeholder='parking spaces' />
        <br/>
        
        <input required 
        type='number'
        value={daily}
        onChange={(e)=>setDaily(e.target.value)}
        placeholder='price per day in numbers' />
        <br/>
        
        <input required
        type='number'
         value={weekly}
         onChange={(e)=>setWeekly(e.target.value)}
         placeholder='price per week in numbers' />
        <br/>
        
        <input required 
        type='number'
        value={monthly}
        onChange={(e)=>setMonthly(e.target.value)}
        placeholder='price per month in numbers' />
        <br/>
        
        <input required 
        type='number'
        value={annum}
        onChange={(e)=>setAnnum(e.target.value)}
        placeholder='price per annum in numbers' />
        
        <br/>
        <label htmlFor='overview'>overview/summary</label>
        <br/>
        <textarea
          value={overview} 
          onChange={(e)=>setOverview(e.target.value)}
          placeholder='type in overview brief summary of apartment not neccessary but neccessary for lounge and
           bridal shower upload'
        />

        <Upload.Dragger
        required
        fileList={fileList}
        multiple
        accept='image/*'
        listType='picture'
        onChange={handleUploadChange}
        beforeUpload={beforeUpload}
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
