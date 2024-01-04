import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

export type StaredWordsCollectionDocument = HydratedDocument<StaredWordsCollection>;

@Schema()
@ObjectType()
export class StaredWordsCollection extends Document {
  @Field(() => String)
  _id: Types.ObjectId;

  /*
  @Field(() => String) 
  @Prop({ type: Types.ObjectId, required: true, ref: 'WordEntry' }) 
  collectionOwnerID: Types.ObjectId;
  */

  
  @Field(() => [String]) 
  @Prop({ type: [Types.ObjectId], required: true, ref: 'StaredWordEntry' }) 
  staredWords: Types.ObjectId[];  

  @Field(() => [String]) 
  @Prop({ type: [Types.ObjectId], required: true, ref: 'StaredKanjiEntry' }) 
  staredKanjis: Types.ObjectId[];  

}

export const StaredWordsCollectionSchema = SchemaFactory.createForClass(StaredWordsCollection);
// Enforce uniqueness of the entry
StaredWordsCollectionSchema.index({_id:1}, { unique: true });