const createRequest = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);

    return response.json();
  } catch (err) {
    console.log(err)
    return;
  }
};

export default createRequest;
