import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { Registration } from './registration';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService, Registration]
})
export class RegistrationModule {}
