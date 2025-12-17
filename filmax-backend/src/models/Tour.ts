import mongoose, { Document, Model } from 'mongoose';

interface IItineraryItem {
  day: number;
  title: string;
  description: string;
}

interface IInclusion {
  title: string;
  items: string[];
}

export interface ITour extends Document {
  title: string;
  location: string;
  duration: number;
  price: number;
  type: string;
  groupSize: number;
  difficulty: string;
  status: 'active' | 'inactive';
  description: string;
  overview: string;
  highlights: string[];
  itinerary: IItineraryItem[];
  inclusions: IInclusion[];
  exclusions: string[];
  image: string;
  gallery: string[];
  createdAt: Date;
}

const tourSchema = new mongoose.Schema<ITour>(
  {
    title: {
      type: String,
      required: [true, 'Please add a tour title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
      trim: true
    },
    duration: {
      type: Number,
      required: [true, 'Please add a duration in days']
    },
    price: {
      type: Number,
      required: [true, 'Please add a price']
    },
    type: {
      type: String,
      required: [true, 'Please add a tour type']
    },
    groupSize: {
      type: Number,
      required: [true, 'Please add group size']
    },
    difficulty: {
      type: String,
      required: [true, 'Please add a difficulty level']
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    description: {
      type: String,
      required: [true, 'Please add a description']
    },
    overview: {
      type: String,
      required: [true, 'Please add an overview']
    },
    highlights: [{
      type: String
    }],
    itinerary: [{
      day: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }],
    inclusions: [{
      title: {
        type: String,
        required: true
      },
      items: [{
        type: String
      }]
    }],
    exclusions: [{
      type: String
    }],
    image: {
      type: String,
      required: [true, 'Please add a cover image']
    },
    gallery: [{
      type: String
    }],
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

// Create indexes for search functionality
tourSchema.index({ title: 'text', description: 'text', location: 'text' });

tourSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'tour',
  justOne: false
});

const Tour: Model<ITour> = mongoose.model('Tour', tourSchema);

export default Tour;
