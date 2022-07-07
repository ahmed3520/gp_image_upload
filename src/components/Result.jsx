import React from 'react'

const Result = ({res}) => {
  return (
    <>
     <div wireoading style={{width:'inherit', height:'50%', margin:'auto', opacity:'unset !important'}} 
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden
         bg-gray-700 flex flex-col items-center justify-center">
          
         {res==0?
          <h2 class="text-center text-white text-xl font-semibold"> Low possibility of parkinson's disease.</h2>
          :
          <h2 class="text-center text-white text-xl font-semibold">
          High possibility of parkinson's disease, we recommend you to consult your doctor.  
          </h2>}
      </div>
    </>
   
  )
}

export default Result