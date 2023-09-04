import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Download from './Download';

function InputURL() {
  const [url, setUrl] = useState('')
  const success = () => toast('Convert Successfull');
  const failed = () => toast("Failed to send data!");
  const errorMessage = (msg: String) => toast(msg);
  const handleConvert = async () => {
    if (url === '') return failed()
    try {
      const response = await fetch('https://videotoaudio-e0kj.onrender.com/api/v1/converters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });

      if (response.ok) {
        success()
        setUrl('')
      } else {
        failed();
      }
    } catch (error: any) {
      errorMessage(error.message);
    }

  }

  return (
    <React.Fragment>
      <div className="urlInput sm:flex">
        <input onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Youtube URL to Audio" className=" input input-bordered input-accent w-full max-w-xs" value={url} />
        <button onClick={handleConvert} className="sm:relative sm:left-[-20px] btn btn-accent w-full sm:w-[100px] mt-2 sm:mt-0">Convert</button>
        <Download />
      </div>
    </React.Fragment>
  )
}

export default InputURL