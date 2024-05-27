import { Module } from '@nestjs/common';
import { AccommodationTypesModule } from './accomodation-types/accommodation-types.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarPresetsModule } from './calendar-presets/calendar-presets.module';
import { RegistrationModule } from './registration/registration.module';
import { ThematicModule } from './thematic/thematic.module';
import { TourModule } from './tour/tour.module';
// import { UserModule } from './user/user.module';
import { VariablesModule } from './variables/variables.module';
// import { User } from './user/user.entity';
import { DestinationsModule } from './destinations/destinations.module';

@Module({
  imports: [
    VariablesModule,
    ThematicModule,
    CalendarPresetsModule,
    TourModule,
    AccommodationTypesModule,
    RegistrationModule,
    DestinationsModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'your_username',
    //   password: 'your_password',
    //   database: 'your_database',
    //   entities: [User],
    //   synchronize: true,
    // }),
    // UserModule,
  ],
})
export class AppModule {}
