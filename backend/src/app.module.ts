import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    RecipeModule,
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
