import { Injectable } from '@nestjs/common';
import { apiCalendarPresets } from 'src/utils/apiUrl';
import axiosRequest from 'src/utils/axiosRequest';
@Injectable()
export class CalendarPresetsService {
  async getApiData() {
    return await axiosRequest(apiCalendarPresets);
  }
}
