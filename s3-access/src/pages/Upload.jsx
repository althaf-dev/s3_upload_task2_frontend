import React, { useState } from 'react';
import { getSignedURl, uploadImage, uploadSuccess } from '../apis/apis';
import CONSTANTS from '../constants/constants';

function Upload() {
  const [data, setData] = useState({
    data: {},
    loading: false,
    error: null,
    message :''
  });

  const [fileData, setFileData] = useState();

  const handleUploadClick = async () => {
    const url = `${CONSTANTS.baseURL}/upload/url`;
    setData((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }));
    try {
      if (!fileData.name) return;
      const data = await getSignedURl(url, fileData.name, fileData.type);

      if (data.url) {
        await uploadImage(data.url, fileData);
        const res =  await uploadSuccess(
          `${CONSTANTS.baseURL}/upload/success`,
          data.key,
          fileData.name
        );
        console.log("final message",res)
        setData((prev)=>({
          ...prev,
          laoding:false,
          message:res.message
        }))
      }

      setData((prev) => ({
        ...prev,
        data: data,
        laoding: false,
        error: null,
      }));
      // console.log('url', data);
    } catch (e) {
      setData((prev) => ({
        ...prev,
        error: e.message,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFileData(e.target.files[0]);
    setData({
      data:{},
      loading:false,
      error:null,
      message: ''
    })
  };

  console.log(data)

  return (
    <div>
      <h1>Upload Image</h1>

      <input type="file" onChange={handleFileChange} />
      <div
        style={{
          margin: '16px',
        }}
      >
        <button disabled={data.loading} onClick={handleUploadClick}>upload</button>
      </div>
      {data.loading && <p>{"uploading..."}</p>}
      {data.error && <p style={{ color: 'red' }}>{data.error}</p>}
      {data.message && <p style={{color:'green'}}>{data.message}</p>}
    </div>
  );
}

export default Upload;
