import mongoose, { Document, Model } from 'mongoose';

export interface IBooking extends Document {
  user: mongoose.Types.ObjectId;
  tour: mongoose.Types.ObjectId;
  travelDate: Date;
  travelers: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
}

const bookingSchema = new mongoose.Schema<IBooking>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
      required: true
    },
    travelDate: {
      type: Date,
      required: [true, 'Please add a travel date']
    },
    travelers: {
      type: Number,
      required: [true, 'Please add number of travelers'],
      min: [1, 'Number of travelers must be at least 1']
    },
    totalPrice: {
      type: Number,
      required: [true, 'Please add total price']
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Prevent duplicate bookings
bookingSchema.index({ user: 1, tour: 1, travelDate: 1 }, { unique: true });

// Populate user and tour data when querying bookings
bookingSchema.pre(/^find/, function (this: any) {
  this.populate({
    path: 'user',
    select: 'name email'
  }).populate({
    path: 'tour',
    select: 'title price duration image'
  });
});

const Booking: Model<IBooking> = mongoose.model('Booking', bookingSchema);

export default Booking;
