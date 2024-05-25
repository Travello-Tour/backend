import { Injectable } from '@nestjs/common';
import { apiVariables } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class VariablesService {
  async getApiData(): Promise<any> {
    return await axiosRequest(apiVariables);
  }
}
