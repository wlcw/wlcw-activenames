import { Mongoose } from 'mongoose';

declare global {
  // eslint-disable-next-line no-unused-vars
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}
