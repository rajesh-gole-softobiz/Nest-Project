/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgresuser',
      password: 'password',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname+'dist/**/*.entity.js'],
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
