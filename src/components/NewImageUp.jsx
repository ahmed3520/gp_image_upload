import React, { Component } from 'react';
import {ref,uploadBytes, uploadBytesResumable} from 'firebase/storage'
import { storage } from '../config/firebase';
import ReactModal from 'react-modal';
import axios from 'axios';
import Result from './Result';
import Nav from './Navbar/Nav';
import { getInstance } from './axios';
export default class MultipleImageUploadComponent extends Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props)
        this.state = {
            file: [null],
            loading:false,
            openModel:false,
            userRes:'',
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal () {
      this.setState({ openModel: false });
    }
  
    
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
     fileUplaod = (file) => {

      let formData = new FormData();
      formData.append("image", file, file.name);
      
      getInstance()
        .post(`https://lit-brook-35752.herokuapp.com/up_image`, formData)
        .then((response) => {
          this.setState({userRes:response.data.prediction, loading:false})
          this.fileArray=[]
          this.fileObj=[]
          console.log("IMAGES_SUBMIT_SUCCESS", response);
        })
        .catch((err) => {
          console.error("image submit error", err);
        });
  }
  
    uploadFiles(e) {
        e.preventDefault()
       // this.onUploadFiles(this.fileObj)
        console.log(this.state.file,"===>", this.fileObj)
        this.setState({loading:true, openModel:true})
        console.log('up=>',this.fileObj[0][0].name)
        this.fileUplaod(this.fileObj[0][0])
       /*  axios.get(`http://127.0.0.1:5000/test/${this.fileObj[0][0].name}`)
        .then((res) => {
          this.setState({userRes:res.data.prediction, loading:false})
         this.fileArray=[]
         this.fileObj=[]
        })
        .catch((error) => {
          console.log(error);
        });*/
  
    
      

    }
     onUploadFiles = async(file) => {

        Array.prototype.every.call(file, files => { 

            console.log("===>file==>",files[0])
            const storageRef = ref(storage, `testing/${files[0].name}`);
            const uploadTask =  uploadBytesResumable(storageRef, files[0])
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
         })
   
        
      }
    render() {
        return (
          <>
          <Nav/>
            <form>
           <ReactModal 
           isOpen={this.state.openModel}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          {this.state.loading?
        <div wireoading style={{width:'inherit', height:'50%', margin:'auto', opacity:'unset !important'}} 
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden
         bg-gray-700  flex flex-col items-center justify-center">
          <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
          <p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
      </div>
    :<>
    <Result res={this.state.userRes}/>
    </>}
<button onClick={this.handleCloseModal}>Close Modal</button>

        </ReactModal>

                  <div className="py-20 h-screen  px-2 flex cont-im	" >
      {/*  {<ClosingAlert status={validate} text={'None of these fields can be empty!!'} type={errorType} style={{paddingTop:'5rem'}}/>}*/}
      <img src='/parkinson/4724357.jpg' className='img-p' style={{width:'70%'}}/>

            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg mt-40 img-uploader" >
                
                <div className="md:flex">
                    <div className="w-full">

                     

                      <div className="p-4 border-b-2">

                        <span className="text-lg font-bold text-gray-600">Add Image</span>
                        
                      </div>

                      <div className="p-3">

                    

                        <div className="mb-2"> 
                            <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                <div className="absolute">
                                    <div className="flex flex-col items-center "> 
                                      <i className="fa fa-cloud-upload fa-3x text-gray-200"></i> 
                                      <span className="block text-gray-400 font-normal">Attach you files here</span> 
                                      <span className="block text-gray-400 font-normal">or</span>
                                    
                                       <span className="block text-blue-400 font-normal">Browse files</span>
                                    
                                    </div>
                                </div> <input type="file" class="h-full w-full opacity-0" name="" multiple  onChange={this.uploadMultipleFiles}/>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                              <span>Accepted file type:image only</span>
                              <span className="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span>
                            </div>
                        </div>
                        <div className='flex' style={{width:'50%'}}>
                        {
                          this.fileArray? this.fileArray.map((data)=><img src={data} style={{width:'25%', marginRight:'10px'}}/>):<></>
                        }
                        </div>
                        <div className="mt-3 text-center pb-3">
                          <button
                           className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700" 
                           onClick={this.uploadFiles}>Start</button>
                          
                        </div>
                  
                        
                      </div>
                    </div>
                </div>
            </div>
        </div>
               
            </form >
            </>
        )
    }
}