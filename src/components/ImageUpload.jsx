import React, { useState, useEffect} from 'react'
import {ref,uploadBytes, uploadBytesResumable} from 'firebase/storage'
import { storage } from '../config/firebase.js'
import ClosingAlert from './Alert.jsx'
import { onUploadFiles } from '../utils/upload.js'

var fileObj = [];
 var fileArray = [];
const ImageUpload = () => {

 
const [image,setImage] = useState('')
const [preview, setPreview] = useState()
const [title,setTitle] = useState('')
const [disable, setDisable] = useState(false)
const [validate, setValidate] = useState(false)
const [errorType, setErrorType] = useState('')

function setButtonStatus(status) {
  setDisable(status)
  console.log("status", status)
}
console.log("status=>", disable)

console.log(image)
const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setImage(undefined)
        return
    }
    fileObj.push(e.target.files)
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(fileObj[0][i])
  }
console.log('target=>', e.target.files[0])
    // I've kept this example simple by using the first image instead of multiple
    setImage(fileObj)
}
useEffect(() => {
    if (!image) {
        setPreview(undefined)
        return
    }
    var objectUrl ;
    for(const element of image){

    }
console.log("image=>",image)


    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [image])

async function uploadImage(e){
e.preventDefault();
if(!image){
  setValidate(true)
  if(!image){
    setErrorType('Image')
  }else{
    setErrorType(`Image's title`)
  }
}else{
const imageStatus = await onUploadFiles(image, title,setButtonStatus)
console.log("image status",imageStatus)
}
}
useEffect(() => {
  if(disable){
    setImage('')
    setTitle('')
    setPreview('')
    setDisable(false)
  }
}, [disable])
console.log(fileArray)
  return (
    <div>

        <div className="py-20 h-screen bg-gray-300 px-2" >
      {/*  {<ClosingAlert status={validate} text={'None of these fields can be empty!!'} type={errorType} style={{paddingTop:'5rem'}}/>}*/}

            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg" >
                <div className="md:flex">
                    <div className="w-full">

                     

                      <div className="p-4 border-b-2">

                        <span className="text-lg font-bold text-gray-600">Add documents</span>
                        
                      </div>

                      <div className="p-3">

                    

                        <div className="mb-2"> 
                          <span>Attachments</span>
                            <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                <div className="absolute">
                                    <div className="flex flex-col items-center "> 
                                      <i className="fa fa-cloud-upload fa-3x text-gray-200"></i> 
                                      <span className="block text-gray-400 font-normal">Attach you files here</span> 
                                      <span className="block text-gray-400 font-normal">or</span>
                                    
                                       <span className="block text-blue-400 font-normal">Browse files</span>
                                    
                                    </div>
                                </div> <input type="file" class="h-full w-full opacity-0" name="" multiple onChange={onSelectFile}/>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                              <span>Accepted file type:image only</span>
                              <span className="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span>
                            </div>
                        </div>

                        <div className="mt-3 text-center pb-3">

                          <button className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700" onClick={(e)=>uploadImage(e)}>Create</button>
                          
                        </div>
                  
                        
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageUpload