import { Injectable } from '@nestjs/common';
import { apiSearchTours } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class TourService {
  async getApiData(id: string) {
    const url = `${apiSearchTours}/${id}`;
    return axiosRequest(url);
  }
}
