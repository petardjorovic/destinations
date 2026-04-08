import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { type RequestWithUser } from '../types/request-with-user.type';

@Controller('destinations')
@UseGuards(JwtAuthGuard)
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  getDestinations(@Request() req: RequestWithUser) {
    return this.destinationsService.findAll(req.user.sub);
  }

  @Get(':id')
  getDestination(
    @Request() req: RequestWithUser,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinationsService.findOne(req.user.sub, id);
  }

  @Post()
  createDestination(@Body() destination: CreateDestinationDto) {
    return this.destinationsService.createDestination(destination);
  }
}
