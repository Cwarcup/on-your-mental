import axios from 'axios'

const ApiClient = async ({ path, method }) => {
  const config = {
    url: path,
    method,
  }

  return axios(config).then((res) => res.data)
}

// for future use.
