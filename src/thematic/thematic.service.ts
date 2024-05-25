import { Injectable } from '@nestjs/common';
import { apiThematic } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class ThematicService {
  async getApiData() {
    return await axiosRequest(apiThematic);
  }
}
