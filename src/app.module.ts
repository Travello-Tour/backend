import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccommodationTypesModule } from './accommodation-types/accommodation-types.module';
import { AuthModule } from './auth/auth.module';
import { CalendarPresetsModule } from './calendar-presets/calendar-presets.module';
import { DatabaseModule } from './database/database.module';
import { DestinationsModule } from './destinations/destinations.module';
import { ThematicModule } from './thematic/thematic.module';
import { TourModule } from './tour/tour.module';
import { VariablesModule } from './variables/variables.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VariablesModule,
    ThematicModule,
    CalendarPresetsModule,
    TourModule,
    AccommodationTypesModule,
    DestinationsModule,
    AuthModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
