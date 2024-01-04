import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type StaredWordEntryDocument = HydratedDocument<StaredWordEntry>;

@Schema()
@ObjectType()
export class StaredWordEntry extends Document {
  @Field(() => String)
  _id: Types.ObjectId;
  
  @Field(() => String) 
  @Prop({ type: Types.ObjectId, required: true, ref: 'WordEntry' }) 
  referencedWordId: Types.ObjectId;  

  @Field(() => Date) 
  @Prop({ type: Date, required: true }) 
  dateStared: Date;  

  @Field(() => Date, { nullable: true }) 
  @Prop({ type: Date }) 
  dateUpdated: Date;  
}

export const StaredWordEntrySchema = SchemaFactory.createForClass(StaredWordEntry);
// Enforce uniqueness of the entry
StaredWordEntrySchema.index({_id:1}, { unique: true });