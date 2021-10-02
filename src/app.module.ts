import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteController } from './paste/paste.controller';
import { PasteService } from './paste/paste.service';
import { Paste, PasteSchema } from './paste/schemas/paste.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Paste.name, schema: PasteSchema }]),
    MongooseModule.forRoot('mongodb+srv://forcex:4eVi3uABKLTIziMO@cluster0.9hmr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController, PasteController],
  providers: [AppService, PasteService],
})
export class AppModule {}
