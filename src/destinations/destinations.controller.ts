import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { CreateDestinationDto } from './dto/create-destination.dto';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get(':userId')
  getDestinations(@Param('userId', ParseIntPipe) userId: number) {
    return this.destinationsService.getDestinationsByUser(userId);
  }

  @Post()
  createDestination(@Body() destination: CreateDestinationDto) {
    return this.destinationsService.createDestination(destination);
  }
}
