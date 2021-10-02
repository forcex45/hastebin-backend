import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PasteDocument = Paste & Document;

@Schema()
export class Paste {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  deleted: boolean;

  @Prop()
  owner: string;
  
  @Prop()
  reported: boolean;
}

export const PasteSchema = SchemaFactory.createForClass(Paste);