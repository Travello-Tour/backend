import { Injectable } from '@nestjs/common';
import { apiAccommodationTypes } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class AccommodationTypesService {
  async getApiData() {
    return await axiosRequest(apiAccommodationTypes);
  }
}
