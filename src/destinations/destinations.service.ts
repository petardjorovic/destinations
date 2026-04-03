import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';

@Injectable()
export class DestinationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDestinationsByUser(userId: number) {
    const existingUser = await this.prisma.user.findUnique({
      where: { userId },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    return this.prisma.destination.findMany({
      where: { userId },
    });
  }

  createDestination(destination: CreateDestinationDto) {
    return this.prisma.destination.create({
      data: {
        name: destination.name,
        travelDate: destination.travelDate
          ? new Date(destination.travelDate)
          : null,
        notes: destination.notes ? destination.notes : null,
        userId: destination.userId,
      },
    });
  }
}
