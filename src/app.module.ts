import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PostsModule, TagsModule, UsersModule, SubscribersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
