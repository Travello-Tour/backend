import { Injectable } from '@nestjs/common';
import { apiDestinations } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class DestinationsService {
  async getApiData(page?: number, limit?: number) {
    let url = apiDestinations;
    if (page !== undefined && limit !== undefined) {
      url = `${url}?page=${page}&limit=${limit}&v=1.5`;
    } else {
      url = `${url}?v=1.5`;
    }
    return await axiosRequest(url);
  }
}
