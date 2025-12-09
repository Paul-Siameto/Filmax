import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user if not exists
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@filmax.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      id: uuidv4(),
      name: 'Admin User',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
      phone: '+1234567890',
    },
  });

  console.log('✅ Admin user created:', { email: admin.email, role: admin.role });

  // Create sample tours if none exist
  const tourCount = await prisma.tour.count();
  
  if (tourCount === 0) {
    const sampleTours = [
      {
        id: uuidv4(),
        title: 'Safari Adventure',
        location: 'Maasai Mara, Kenya',
        duration: 5,
        price: 1500,
        type: 'Adventure',
        groupSize: 8,
        difficulty: 'moderate',
        status: 'active',
        description: 'Experience the wild beauty of Maasai Mara with our expert guides. Witness the Great Migration and see the Big Five in their natural habitat.',
        overview: '5-day safari adventure in the heart of Maasai Mara with luxury tented accommodation and expert guides.',
        highlights: [
          'Game drives in Maasai Mara National Reserve',
          'Witness the Great Migration (seasonal)',
          'Visit a Maasai village',
          'Hot air balloon safari (optional)'
        ],
        itinerary: [
          { day: 1, title: 'Arrival & Transfer', description: 'Arrive in Nairobi and transfer to Maasai Mara' },
          { day: 2, title: 'Game Drives', description: 'Full day of game drives in the reserve' },
          { day: 3, title: 'Cultural Experience', description: 'Visit a Maasai village and learn about their culture' },
          { day: 4, title: 'Hot Air Balloon Safari', description: 'Optional hot air balloon ride at sunrise' },
          { day: 5, title: 'Departure', description: 'Morning game drive and transfer back to Nairobi' }
        ],
        inclusions: [
          '4 nights accommodation in luxury tents',
          'All meals and drinks (excluding alcohol)',
          'Game drives in 4x4 vehicles',
          'Professional guide and park fees'
        ],
        exclusions: [
          'International flights',
          'Visa fees',
          'Travel insurance',
          'Tips and gratuities'
        ],
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ]
      },
      {
        id: uuidv4(),
        title: 'Beach Paradise',
        location: 'Zanzibar, Tanzania',
        duration: 7,
        price: 2200,
        type: 'Beach',
        groupSize: 12,
        difficulty: 'easy',
        status: 'active',
        description: 'Relax on the pristine beaches of Zanzibar and enjoy the crystal clear waters of the Indian Ocean.',
        overview: '7-day beach getaway in Zanzibar with luxury beachfront accommodation and water activities.',
        highlights: [
          'White sandy beaches',
          'Snorkeling and diving',
          'Spice farm tour',
          'Stone Town exploration'
        ],
        itinerary: [
          { day: 1, title: 'Arrival', description: 'Transfer to beach resort' },
          { day: 2, title: 'Beach Day', description: 'Relax on the beach' },
          { day: 3, title: 'Water Sports', description: 'Snorkeling and water activities' },
          { day: 4, title: 'Spice Tour', description: 'Visit a local spice farm' },
          { day: 5, title: 'Stone Town', description: 'Explore the historic Stone Town' },
          { day: 6, title: 'Island Hopping', description: 'Visit nearby islands' },
          { day: 7, title: 'Departure', description: 'Transfer to airport' }
        ],
        inclusions: [
          '6 nights beachfront accommodation',
          'All meals and drinks (excluding alcohol)',
          'Airport transfers',
          'Guided tours and activities'
        ],
        exclusions: [
          'International flights',
          'Visa fees',
          'Travel insurance',
          'Tips and gratuities'
        ],
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ]
      }
    ];

    for (const tour of sampleTours) {
      await prisma.tour.create({
        data: {
          ...tour,
          highlights: JSON.stringify(tour.highlights),
          itinerary: JSON.stringify(tour.itinerary),
          inclusions: JSON.stringify(tour.inclusions),
          exclusions: JSON.stringify(tour.exclusions),
          gallery: JSON.stringify(tour.gallery),
        },
      });
    }

    console.log('✅ Sample tours created');
  } else {
    console.log('ℹ️  Database already contains tours, skipping sample data');
  }

  console.log('✨ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
