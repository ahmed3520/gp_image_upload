import React from "react";

const Alert = ({ color , status, text, type}) => {
  const [showAlert, setShowAlert] = React.useState(status);
  console.log(status)
  return (
    <>

      {status?
      
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
            color +
            "-500"
          }
          style={{marginBottom:'5rem'}}
        >
    <h1>LOOOL</h1>

            {console.log('looool')}
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{type}!</b> {text}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      
      
      :null}
    </>
  );
};

export default function ClosingAlert( {text, type, status}) {
  return (
    <>
       <Alert color="red" status={status} type={type} text={text} />
    </>
  );
}