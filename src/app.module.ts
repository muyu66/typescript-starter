import { Module } from '@nestjs/common';
import { TestModule } from './module/test.module';

@Module({
  imports: [TestModule],
})
export class AppModule { }
