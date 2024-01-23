
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  _v: string;
  // Add other fields as needed
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: false, lowercase: true },
  _v: { type: String },
  // Add other fields as needed
}, {
  timestamps: false,
  versionKey: false, // Specify the version key field name
});


userSchema.pre('save', function(next) {
    this._v = '1.0.0';
    next();
});
export const User = mongoose.model<IUser>('user', userSchema);

