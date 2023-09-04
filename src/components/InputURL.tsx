import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Download from './Download';
import Loading from './Loading';

function InputURL() {
  const [url, setUrl] = useState('')
  const [disable, setDisable] = useState<boolean>(false)
  const [porcessed, setProcessed] = useState<boolean>(false)
  const success = () => toast('Convert Successfull');
  const failed = () => toast("Failed to send data!");
  const errorMessage = (msg: String) => toast(msg);
  const handleConvert = async () => {
    setDisable(true)
    setProcessed(false)
    if (url === '') {
      setDisable(false)
      return failed()
    }
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
        setDisable(false)
        setProcessed(true)
        setUrl('')
      } else {
        setDisable(false)
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
        {
          disable ? <Loading /> : <button onClick={handleConvert} disabled={disable} className="sm:relative sm:left-[-20px] btn btn-accent w-full sm:w-[100px] mt-2 sm:mt-0">Convert</button>
        }
        <Download porcessed={porcessed} />
      </div>
    </React.Fragment>
  )
}

export default InputURL