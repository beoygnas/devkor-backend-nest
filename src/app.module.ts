import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/users.entity';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '9240',
      database: 'nestjsdb',
      entities: [Users],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
} 
