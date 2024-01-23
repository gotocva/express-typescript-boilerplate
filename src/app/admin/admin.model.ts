
import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
  name: string;
  email: string;
  _v: string;
  // Add other fields as needed
}

const userSchema: Schema<IAdmin> = new Schema<IAdmin>({
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
export const Admin = mongoose.model<IAdmin>('admin', userSchema);

