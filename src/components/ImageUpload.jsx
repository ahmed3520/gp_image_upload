import React, { useState, useEffect} from 'react'
const ImageUpload = () => {
const [image,setImage] = useState('')
const [preview, setPreview] = useState('')
console.log(image)
const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setImage(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setImage(e.target.files[0])
}
useEffect(() => {
    if (!image) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [image])
  return (
    <div>
        <div className="py-20 h-screen bg-gray-300 px-2">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
                <div className="md:flex">
                    <div className="w-full">

                     

                      <div className="p-4 border-b-2">

                        <span className="text-lg font-bold text-gray-600">Add documents</span>
                        
                      </div>

                      <div className="p-3">

                        <div className="mb-2"> 
                          <span claclassNamess="text-sm">Title</span> 
                          <input className="text" 
                          class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"/> 
                        </div>

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
                                </div> <input type="file" class="h-full w-full opacity-0" name="" onChange={onSelectFile}/>
                            </div>
                            <div className="flex justify-between items-center text-gray-400">
                              <span>Accepted file type:.doc only</span>
                              <span className="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span>
                            </div>
                        </div>

                        <div className="mt-3 text-center pb-3">

                          <button className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700">Create</button>
                          
                        </div>

                        
                      </div>
                       

                      {image && <img src={preview}/>}

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageUpload