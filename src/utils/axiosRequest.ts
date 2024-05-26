import axios from 'axios';
export const API_URL = 'https://api.bolshayastrana.com/';
export const API_KEY =
  'nw3O6j0UFQrY8lOnFRPJPqDXiO_S-9Q7wNTYxs4bguswAwhleD9VTa08GaJuXa7z';
async function axiosRequest(
  url: string,
  method?: keyof typeof axios.defaults,
  options: any = {},
) {
  try {
    const response = await axios({
      url: `${API_URL}${url}`,
      method: method || 'get',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        ...options.headers,
      },
      ...options,
    });
    return response.data;
  } catch (error) {
    // Обработка ошибки
    if (axios.isAxiosError(error)) {
      console.error('Ошибка ответа:', error.response);
      throw new Error(
        `Запрос не выполнен со статусом ${error.response?.status}`,
      );
    } else {
      console.error('Непредвиденная ошибка:', error);
      throw new Error('Произошла непредвиденная ошибка');
    }
  }
}

export default axiosRequest;
