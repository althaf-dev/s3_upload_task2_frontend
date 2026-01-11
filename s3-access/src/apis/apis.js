export async function getSignedURl(url, fileName, fileType) {
  console.log('payload', fileName);
  try {
    const res = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        fileName,
        fileType,
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
}

export async function uploadImage(url, file) {
  try {
    const res = await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    });

    if (!res.ok) {
      throw new Error('upload failed');
    }
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

export async function uploadSuccess(url, objectKey, fileName) {
  try {
    const res = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        fileName,
        objectKey,
      }),
    });

    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.messsage);
    throw e;
  }
}
