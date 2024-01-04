import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type StaredKanjiEntryDocument = HydratedDocument<StaredKanjiEntry>;

@Schema()
@ObjectType()
export class StaredKanjiEntry extends Document {
  @Field(() => String)
  _id: Types.ObjectId;
  
  @Field(() => String) 
  @Prop({ type: Types.ObjectId, required: true, ref: 'KanjiEntry' }) 
  referencedKanjiId: Types.ObjectId;  

  @Field(() => Date) 
  @Prop({ type: Date, required: true }) 
  dateStared: Date;  

  @Field(() => Date, { nullable: true }) 
  @Prop({ type: Date }) 
  dateUpdated: Date;  
}

export const StaredKanjiEntrySchema = SchemaFactory.createForClass(StaredKanjiEntry);
// Enforce uniqueness of the entry
StaredKanjiEntrySchema.index({_id:1}, { unique: true });