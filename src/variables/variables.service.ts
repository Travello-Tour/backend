import { Injectable } from '@nestjs/common';
import { apiVariables } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class VariablesService {
  async getApiData(page?: number, limit?: number): Promise<any> {
    let url = apiVariables;
    if (page !== undefined && limit !== undefined) {
      url += `?page=${page}&limit=${limit}&v=1.5`;
    } else {
      url += '?v=1.5';
    }
    return await axiosRequest(url);
  }
}
