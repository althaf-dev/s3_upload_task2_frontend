import React, { useEffect, useState } from 'react';
import { getImages } from '../apis/apis';
import constants from '../constants/constants';

function View() {
  const [data, setData] = useState({
    loading: false,
    images: [],
    error: null,
  });

  useEffect(() => {
    const url = `${constants.baseURL}/upload/view`;
    async function getImageList(url) {
      const data = await getImages(url);
      setData((prev) => ({
        loading: false,
        error: null,
        images: data,
      }));
    }

    getImageList(url);
  }, []);

  return (
    <div style={{
      margin:"12px"
    }}>
      <h1>view images</h1>
      <div style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        gap:"8px"
      }}>
          {data?.images?.length && data.images?.map((img) => (
        <div style={{
          maxWidth:"400px",
          maxHeight:"300px",
          border:"1px solid purple",
          borderRadius:"12px"

        }}>
          <img style={{
           borderTopLeftRadius:"12px",
           borderTopBottomRadius:"12px"
          }} src={img?.url} alt={img.fileName} width={"400px"} height={"200px"} />
          <p>Image name</p>
        </div>
      ))}
      </div>
    
    </div>
  );
}

export default View;
