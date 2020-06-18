function request(url: string, type = "GET", json?: {}) {
  const options = {
    method: type,
    body: json && JSON.stringify(json),
    headers: {},
  };

  return fetch(url, options)
    .then((response) => {
      const status = response.status >= 200 && response.status < 300;

      if (!status) {
        // @ts-ignore
        const error = new Error(response);

        error.response = response;

        throw error;
      }

      return response.json();
    })
    .catch((error) => console.log(error));
}

export default request;
