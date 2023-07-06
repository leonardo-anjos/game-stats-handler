import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage, Producer } from 'kafkajs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async publish(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'matches',
      messages: [{ value: JSON.stringify(body) }],
    });
    return 'sended message';
  }

  @MessagePattern('matches')
  consumerMatches(@Payload() message: KafkaMessage) {
    console.log('received message');
    console.log(message);
  }
}
