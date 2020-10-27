const postAPI = async (url, body) => {
  const newurl = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (newurl.status === 201) {
    const temp = await newurl.json();
    return temp;
  }
};


export default { postAPI };
