import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasteController } from './paste/paste.controller';
import { PasteService } from './paste/paste.service';
import { Paste, PasteSchema } from './paste/schemas/paste.schema';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Paste.name, schema: PasteSchema }]),
    MongooseModule.forRoot(process.env.MONGODBURI),
  ],
  controllers: [AppController, PasteController, AdminController],
  providers: [AppService, PasteService, AdminService],
})
export class AppModule {}
