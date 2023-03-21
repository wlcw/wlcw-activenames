// import bcrypt from 'bcrypt';
import mongoose, { CallbackError } from "mongoose";
// import { slugify } from '@/lib/utils/common';
import { ICoach } from "./Coach.types";

const CoachSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, index: true },
  activeName: String,
  password: { type: String, required: true, select: false },
  email: { type: String, unique: true, required: true },
  joinDate: { type: Date, default: Date.now },
  tokenVersion: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  approved: { type: Boolean, default: true },
  role: { type: String, default: "head-coach" },
  rank: { type: String, default: "Coach" },
  receivedMOU: { type: Boolean, default: false },
  emojiObject: { type: Object, emoji: String, unified: String },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Coach",
  },
  ancestors: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coach",
        index: true,
      },
      name: String,
      slug: String,
      activeName: String,
      email: String,
      joinDate: Date,
      tokenVersion: Number,
      verified: Boolean,
      approved: Boolean,
      role: String,
      rank: String,
    },
  ],
  prospectRecord: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Prospect",
  },

  memoOfUnderstanding: {
    type: Object,
    agreedMOU: Boolean,
    dateAgreed: Date,
  },
});

// CoachSchema.pre("save", async function generateSlug(next) {
//   this.slug = slugify(this.name);
//   next();
// });

const saltFactor = process.env.SALT_WORK_FACTOR as string;

// CoachSchema.pre('save', async function save(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(parseInt(saltFactor));
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err as CallbackError | undefined);
//   }
// });

// CoachSchema.methods.comparePassword = async function comparePassword(
//   password: string
// ) {
//   return await bcrypt.compare(password, this.password);
// };

const CoachModel =
  mongoose.models.Coach || mongoose.model<ICoach>("Coach", CoachSchema);
export default CoachModel;
