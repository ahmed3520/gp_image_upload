import {ref,uploadBytes, uploadBytesResumable} from 'firebase/storage'
import { storage } from '../config/firebase';
const onUploadFiles = async(file) => {
    console.log("file=>>>",file) // FileList ? https://developer.mozilla.org/en-US/docs/Web/API/FileList
    const storageRef = ref(storage, `testing/${file[0].name}`);
    const uploadTask =  uploadBytesResumable(storageRef, file[0])
    uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
      return false
    }, 
    () => {
        console.log('done')
   
      // Upload completed successfully, now we can get the download URL
    })
    
  }
  export {onUploadFiles}