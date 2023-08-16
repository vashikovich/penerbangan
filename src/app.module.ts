import { Module } from '@nestjs/common';
import { SearchModule } from './Search/search.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('connString'), SearchModule],
})
export class AppModule {}
