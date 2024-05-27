import { Injectable } from '@nestjs/common';
import { apiTour } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class TourService {
  async getApiData(id: number) {
    const url = `${apiTour}?id=${id}&v=1.5`;
    return axiosRequest(url);
  }
}
