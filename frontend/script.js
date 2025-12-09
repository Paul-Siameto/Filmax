// COMPLETE LIST OF ALL AFRICAN COUNTRIES
const africanCountries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon",
    "Central African Republic", "Chad", "Comoros", "Congo", "Côte d'Ivoire", "Djibouti", "DR Congo",
    "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana",
    "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
    "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria",
    "Rwanda", "São Tomé and Príncipe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
    "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

// Default data for initial setup
const defaultToursData = [
    {
        id: 1,
        title: "Masai Mara Great Migration Safari",
        location: "Kenya",
        duration: "7 Days",
        price: 2450,
        image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "luxury",
        groupSize: "6-12 People",
        difficulty: "Moderate",
        description: "Witness the spectacular Great Migration in Kenya's most famous reserve. This luxury safari offers front-row seats to one of nature's greatest spectacles.",
        overview: "Experience the awe-inspiring Great Migration in the Masai Mara, where millions of wildebeest and zebras cross the plains in search of greener pastures. This 7-day luxury safari provides unparalleled wildlife viewing opportunities with expert guides, comfortable accommodations, and unforgettable experiences in one of Africa's most iconic destinations.",
        highlights: [
            "Witness the Great Migration river crossings",
            "Luxury tented accommodation with all amenities",
            "Expert local guides with extensive knowledge",
            "Game drives in custom-built safari vehicles",
            "Cultural visits to Maasai villages",
            "Sunset cocktails in the bush",
            "Professional wildlife photography opportunities"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Arrival in Nairobi",
                description: "Arrive at Jomo Kenyatta International Airport and transfer to your hotel. Briefing about the safari ahead and welcome dinner.",
                meals: "Dinner",
                accommodation: "Nairobi Serena Hotel"
            },
            {
                day: "Day 2",
                title: "Travel to Masai Mara",
                description: "Scenic drive to the Masai Mara National Reserve with stopovers at the Great Rift Valley viewpoint. Afternoon game drive upon arrival.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Mara Serena Safari Lodge"
            },
            {
                day: "Day 3",
                title: "Masai Mara Exploration",
                description: "Full day of game drives in the Masai Mara. Morning and evening drives to maximize wildlife sightings including the Big Five.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Mara Serena Safari Lodge"
            },
            {
                day: "Day 4",
                title: "Masai Mara Exploration",
                description: "Another full day exploring the vast plains of the Masai Mara. Focus on predator sightings and the Great Migration herds.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Mara Serena Safari Lodge"
            },
            {
                day: "Day 5",
                title: "Mara River Experience",
                description: "Full day at the Mara River to witness the dramatic river crossings of wildebeest and zebras during migration season.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Mara Serena Safari Lodge"
            },
            {
                day: "Day 6",
                title: "Cultural Immersion",
                description: "Visit a traditional Maasai village to learn about their culture, traditions, and way of life. Afternoon game drive.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Mara Serena Safari Lodge"
            },
            {
                day: "Day 7",
                title: "Return to Nairobi",
                description: "Early morning game drive followed by breakfast and return transfer to Nairobi. Drop-off at airport or hotel.",
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            {
                category: "Accommodation",
                items: ["6 nights in luxury lodges/tented camps", "All accommodation as per itinerary", "All taxes and service charges"]
            },
            {
                category: "Meals",
                items: ["All meals as specified in itinerary", "Bottled water throughout the safari", "Complimentary tea and coffee"]
            },
            {
                category: "Transport",
                items: ["All airport transfers", "Game drives in custom 4x4 safari vehicles", "Professional driver/guide", "All fuel and vehicle costs"]
            },
            {
                category: "Activities",
                items: ["All park entry fees and conservation fees", "Game drives as per itinerary", "Cultural village visit", "All government taxes"]
            }
        ],
        exclusions: [
            "International flights and airport taxes",
            "Visa fees and travel insurance",
            "Optional activities (hot air balloon safari $450)",
            "Tips and gratuities for guides and staff",
            "Personal expenses and souvenirs",
            "Alcoholic and premium beverages"
        ],
        gallery: [
            "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/624033/pexels-photo-624033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        status: "active",
        bookings: 24
    },
    {
        id: 2,
        title: "Kilimanjaro 6-Day Machame Route",
        location: "Tanzania",
        duration: "6 Days",
        price: 1850,
        image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        type: "trekking",
        groupSize: "2-12 People",
        difficulty: "Challenging",
        description: "Challenge yourself with this 6-day trek up Mount Kilimanjaro via the scenic Machame Route. Summit Africa's highest peak with expert guides.",
        overview: "The Machame Route, also known as the 'Whiskey Route', is one of the most beautiful and popular routes up Mount Kilimanjaro. This 6-day itinerary provides adequate time for acclimatization while offering stunning views of the mountain's diverse ecosystems. With professional guides, porters, and quality equipment, you'll have the best chance of reaching Uhuru Peak at 5,895 meters.",
        highlights: [
            "Summit Africa's highest peak - Uhuru Peak (5,895m)",
            "Scenic Machame Route with diverse landscapes",
            "Professional guides and experienced porters",
            "All camping equipment and meals provided",
            "Gradual ascent for better acclimatization",
            "Breathtaking sunrise from the summit",
            "Certificate of achievement upon completion"
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Machame Gate to Machame Camp",
                description: "Trek through the lush rainforest from Machame Gate (1,800m) to Machame Camp (3,000m). Distance: 11km, 5-7 hours.",
                meals: "Lunch, Dinner",
                accommodation: "Machame Camp"
            },
            {
                day: "Day 2",
                title: "Machame Camp to Shira Camp",
                description: "Ascend through heather and moorland to Shira Camp (3,840m). Stunning views of the Shira Plateau. Distance: 5km, 4-6 hours.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Shira Camp"
            },
            {
                day: "Day 3",
                title: "Shira Camp to Barranco Camp",
                description: "Trek across the Shira Plateau and ascend to Lava Tower (4,630m) before descending to Barranco Camp (3,950m). Important for acclimatization. Distance: 10km, 6-8 hours.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Barranco Camp"
            },
            {
                day: "Day 4",
                title: "Barranco Camp to Karanga Camp",
                description: "Climb the impressive Barranco Wall and continue to Karanga Camp (3,995m). Shorter day to aid acclimatization. Distance: 5km, 4-5 hours.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Karanga Camp"
            },
            {
                day: "Day 5",
                title: "Karanga Camp to Barafu Camp",
                description: "Trek to Barafu Camp (4,673m), the base camp for the summit attempt. Rest and prepare for the midnight summit push. Distance: 4km, 4-5 hours.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Barafu Camp"
            },
            {
                day: "Day 6",
                title: "Summit Day - Barafu Camp to Uhuru Peak to Mweka Camp",
                description: "Midnight start for the summit push. Reach Uhuru Peak (5,895m) at sunrise, then descend to Mweka Camp (3,100m). Long and challenging day. Distance: 17km, 12-15 hours.",
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Mweka Camp"
            }
        ],
        inclusions: [
            {
                category: "Accommodation",
                items: ["5 nights camping on the mountain", "All camping equipment (quality tents, sleeping mats)", "All camping fees and taxes"]
            },
            {
                category: "Meals",
                items: ["All meals during the trek", "Purified drinking water", "Hot drinks (tea, coffee, cocoa)", "Nutritious meals prepared by experienced cooks"]
            },
            {
                category: "Staff",
                items: ["Professional mountain guide", "Assistant guides", "Porters (weight limit 15kg per person)", "Cook and kitchen team"]
            },
            {
                category: "Fees & Permits",
                items: ["All park entry fees", "Camping fees", "Rescue fees", "Government taxes", "Certificate of achievement"]
            }
        ],
        exclusions: [
            "International flights and airport transfers",
            "Tanzania visa fees",
            "Travel and medical insurance",
            "Tips for guides and porters (recommended $250-300)",
            "Personal trekking gear and equipment",
            "Items of personal nature",
            "Alcoholic beverages and snacks"
        ],
        gallery: [
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/624033/pexels-photo-624033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        status: "active",
        bookings: 18
    }
];

const defaultDestinationsData = [
    {
        id: 1,
        name: "Masai Mara, Kenya",
        country: "Kenya",
        description: "Home to the Great Migration and abundant wildlife",
        image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        tours: 12
    },
    {
        id: 2,
        name: "Mount Kilimanjaro, Tanzania",
        country: "Tanzania",
        description: "Africa's highest peak and a challenging trekking destination",
        image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        tours: 8
    }
];

const defaultTestimonialsData = [
    {
        text: "The Masai Mara safari exceeded all expectations. Our guide was incredibly knowledgeable and we saw the Big Five in just three days! The luxury accommodations were perfect after long days of game drives.",
        author: "Sarah Johnson",
        trip: "Masai Mara Safari",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        text: "An absolutely magical experience in the Serengeti. The attention to detail and personalized service made this trip unforgettable. We'll definitely be booking with Filmax Jambo Tours again!",
        author: "Michael Brown",
        trip: "Serengeti Luxury Safari",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        text: "The Kilimanjaro trek was challenging but so rewarding. The guides were professional and supportive throughout the entire journey. Reaching the summit was a life-changing experience!",
        author: "Jessica Williams",
        trip: "Kilimanjaro Trek",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        text: "Our family had the most amazing time on the Etosha safari. The kids were thrilled with the wildlife sightings, and the family-friendly accommodations made everything so comfortable.",
        author: "Robert Davis",
        trip: "Etosha Family Safari",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        text: "The Okavango Delta mokoro experience was unlike anything I've ever done. Being so close to nature in those traditional canoes was magical. Highly recommended for adventure seekers!",
        author: "Amanda Wilson",
        trip: "Okavango Delta Adventure",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        text: "Seeing the mountain gorillas in Uganda was a bucket list experience. The permits were worth every penny, and our guides were incredibly respectful of these magnificent creatures.",
        author: "David Thompson",
        trip: "Gorilla Trekking Experience",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

// Sample data for bookings
const defaultBookingsData = [
    {
        id: "BK-001",
        customer: "Michael Johnson",
        tour: "Masai Mara Safari",
        date: "15 Oct 2023",
        travelers: 4,
        amount: 4896,
        status: "confirmed"
    },
    {
        id: "BK-002",
        customer: "Sarah Williams",
        tour: "Kilimanjaro Trek",
        date: "18 Oct 2023",
        travelers: 2,
        amount: 3700,
        status: "pending"
    }
];

// Sample data for customers
const defaultCustomersData = [
    {
        id: "CUS-001",
        name: "Michael Johnson",
        email: "michael@example.com",
        phone: "(555) 123-4567",
        country: "United States",
        bookings: 3
    },
    {
        id: "CUS-002",
        name: "Sarah Williams",
        email: "sarah@example.com",
        phone: "(555) 987-6543",
        country: "United Kingdom",
        bookings: 2
    }
];

// Sample data for payments
const defaultPaymentsData = [
    {
        id: "PAY-001",
        customer: "Michael Johnson",
        bookingId: "BK-001",
        amount: 4896,
        date: "10 Oct 2023",
        method: "Credit Card",
        status: "completed"
    },
    {
        id: "PAY-002",
        customer: "Sarah Williams",
        bookingId: "BK-002",
        amount: 1850,
        date: "12 Oct 2023",
        method: "Bank Transfer",
        status: "pending"
    }
];

// Data Management Functions
function getStoredData(key, defaultValue) {
    const stored = localStorage.getItem(key);
    if (stored) {
        return JSON.parse(stored);
    }
    return defaultValue;
}

function saveDataToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Application State
let state = {
    cart: [],
    currentUser: null,
    currentTrip: null,
    filteredTrips: [],
    isAdmin: false,
    adminState: {
        currentTour: null,
        editingTour: false,
        currentTab: "admin-basic-info",
        tourFormData: {}
    }
};

// Data variables - will be loaded from localStorage or defaults
let toursData = [];
let destinationsData = [];
let testimonialsData = [];
let bookingsData = [];
let customersData = [];
let paymentsData = [];

// DOM Elements
const elements = {
    // Main site elements
    menuToggle: document.getElementById('menuToggle'),
    navLinks: document.getElementById('navLinks'),
    featuredTrips: document.getElementById('featuredTrips'),
    destinationsGrid: document.getElementById('destinationsGrid'),
    testimonialsGrid: document.getElementById('testimonialsGrid'),
    tripSearch: document.getElementById('tripSearch'),
    cartIcon: document.getElementById('cartIcon'),
    cartCount: document.querySelector('.cart-count'),
    cartItems: document.getElementById('cartItems'),
    cartTotal: document.getElementById('cartTotal'),
    loginBtn: document.getElementById('loginBtn'),
    registerBtn: document.getElementById('registerBtn'),
    adminLoginBtn: document.getElementById('adminLoginBtn'),
    tripDetailModal: document.getElementById('tripDetailModal'),
    bookingModal: document.getElementById('bookingModal'),
    cartModal: document.getElementById('cartModal'),
    authModal: document.getElementById('authModal'),
    adminLoginModal: document.getElementById('adminLoginModal'),
    closeTripModal: document.getElementById('closeTripModal'),
    closeBookingModal: document.getElementById('closeBookingModal'),
    closeCartModal: document.getElementById('closeCartModal'),
    closeAuthModal: document.getElementById('closeAuthModal'),
    closeAdminLoginModal: document.getElementById('closeAdminLoginModal'),
    loginTab: document.getElementById('loginTab'),
    registerTab: document.getElementById('registerTab'),
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    adminLoginForm: document.getElementById('adminLoginForm'),
    bookingForm: document.getElementById('bookingForm'),
    proceedToCheckout: document.getElementById('proceedToCheckout'),
    bookThisTrip: document.getElementById('bookThisTrip'),
    toast: document.getElementById('toast'),

    // Admin site elements
    mainSite: document.getElementById('mainSite'),
    adminSite: document.getElementById('adminSite'),
    adminLogoutBtn: document.getElementById('adminLogoutBtn'),

    // Admin dashboard elements
    adminTotalTours: document.getElementById('adminTotalTours'),
    adminActiveBookings: document.getElementById('adminActiveBookings'),
    adminTotalCustomers: document.getElementById('adminTotalCustomers'),
    adminMonthlyRevenue: document.getElementById('adminMonthlyRevenue'),
    adminRecentBookingsTable: document.getElementById('adminRecentBookingsTable'),
    adminPopularToursList: document.getElementById('adminPopularToursList'),
    adminToursGrid: document.getElementById('adminToursGrid'),
    adminActiveToursGrid: document.getElementById('adminActiveToursGrid'),
    adminInactiveToursGrid: document.getElementById('adminInactiveToursGrid'),
    adminAddTourBtn: document.getElementById('adminAddTourBtn'),
    adminTourModal: document.getElementById('adminTourModal'),
    adminTourForm: document.getElementById('adminTourForm'),
    adminTourModalTitle: document.getElementById('adminTourModalTitle'),
    adminTourModalBtn: document.getElementById('adminTourModalBtn'),
    adminCancelTour: document.getElementById('adminCancelTour'),
    adminItineraryContainer: document.getElementById('adminItineraryContainer'),
    adminAddItineraryDay: document.getElementById('adminAddItineraryDay'),
    adminItineraryDayTemplate: document.getElementById('adminItineraryDayTemplate'),
    adminCustomersTable: document.getElementById('adminCustomersTable'),
    adminAddCustomerBtn: document.getElementById('adminAddCustomerBtn'),
    adminCustomerModal: document.getElementById('adminCustomerModal'),
    adminCustomerForm: document.getElementById('adminCustomerForm'),
    adminSaveCustomer: document.getElementById('adminSaveCustomer'),
    adminCancelCustomer: document.getElementById('adminCancelCustomer'),
    adminAllBookingsTable: document.getElementById('adminAllBookingsTable'),
    adminNewBookingBtn: document.getElementById('adminNewBookingBtn'),
    adminNewBookingBtn2: document.getElementById('adminNewBookingBtn2'),
    adminBookingModal: document.getElementById('adminBookingModal'),
    adminBookingForm: document.getElementById('adminBookingForm'),
    adminSaveBooking: document.getElementById('adminSaveBooking'),
    adminCancelBooking: document.getElementById('adminCancelBooking'),
    adminTourPackage: document.getElementById('adminTourPackage'),
    adminPaymentsTable: document.getElementById('adminPaymentsTable'),
    adminAddPaymentBtn: document.getElementById('adminAddPaymentBtn'),
    adminPaymentModal: document.getElementById('adminPaymentModal'),
    adminPaymentForm: document.getElementById('adminPaymentForm'),
    adminSavePayment: document.getElementById('adminSavePayment'),
    adminCancelPayment: document.getElementById('adminCancelPayment'),
    adminPaymentCustomer: document.getElementById('adminPaymentCustomer'),
    adminPaymentBooking: document.getElementById('adminPaymentBooking'),
    adminDestinationsGrid: document.getElementById('adminDestinationsGrid'),
    adminAddDestinationBtn: document.getElementById('adminAddDestinationBtn'),
    adminDestinationModal: document.getElementById('adminDestinationModal'),
    adminDestinationForm: document.getElementById('adminDestinationForm'),
    adminSaveDestination: document.getElementById('adminSaveDestination'),
    adminCancelDestination: document.getElementById('adminCancelDestination')
};

// Initialize Application
function init() {
    // Load data from localStorage or use defaults
    loadDataFromStorage();

    populateAfricanCountries();
    renderFeaturedTrips();
    renderDestinations();
    renderTestimonials();
    setupEventListeners();
    loadCartFromStorage();
    initCounters(); // Initialize counter animations

    // Set min date to today
    const dateInput = document.getElementById('date');
    const travelDateInput = document.getElementById('travelDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    travelDateInput.min = today;
}

// Load data from localStorage
function loadDataFromStorage() {
    toursData = getStoredData('filmaxTours', defaultToursData);
    destinationsData = getStoredData('filmaxDestinations', defaultDestinationsData);
    testimonialsData = getStoredData('filmaxTestimonials', defaultTestimonialsData);
    bookingsData = getStoredData('filmaxBookings', defaultBookingsData);
    customersData = getStoredData('filmaxCustomers', defaultCustomersData);
    paymentsData = getStoredData('filmaxPayments', defaultPaymentsData);

    // Update filtered trips
    state.filteredTrips = [...toursData];
}

// Save data to localStorage
function saveAllData() {
    saveDataToStorage('filmaxTours', toursData);
    saveDataToStorage('filmaxDestinations', destinationsData);
    saveDataToStorage('filmaxTestimonials', testimonialsData);
    saveDataToStorage('filmaxBookings', bookingsData);
    saveDataToStorage('filmaxCustomers', customersData);
    saveDataToStorage('filmaxPayments', paymentsData);
}

// Populate African countries in destination dropdown
function populateAfricanCountries() {
    const destinationSelect = document.getElementById('destination');

    // Clear existing options except the first one
    while (destinationSelect.options.length > 1) {
        destinationSelect.remove(1);
    }

    // Add all African countries
    africanCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.toLowerCase();
        option.textContent = country;
        destinationSelect.appendChild(option);
    });
}

// Render Featured Trips
function renderFeaturedTrips() {
    elements.featuredTrips.innerHTML = state.filteredTrips.map(trip => `
        <div class="trip-card" data-trip-id="${trip.id}">
            <img src="${trip.image}" alt="${trip.title}" class="trip-img">
            <div class="trip-content">
                <h3>${trip.title}</h3>
                <div class="trip-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${trip.location}</span>
                    <span><i class="fas fa-clock"></i> ${trip.duration}</span>
                </div>
                <p>${trip.description}</p>
                <div class="trip-price">$${trip.price.toLocaleString()}</div>
                <div class="trip-actions">
                    <button class="btn btn-outline" onclick="viewTripDetails(${trip.id})">View Details</button>
                    <button class="btn btn-secondary" onclick="addToCart(${trip.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Destinations
function renderDestinations() {
    elements.destinationsGrid.innerHTML = destinationsData.map(destination => `
        <div class="destination-card" onclick="filterByDestination('${destination.name}')">
            <img src="${destination.image}" alt="${destination.name}" class="destination-img">
            <div class="destination-name">
                <h3>${destination.name}</h3>
                <p>${destination.tours} tours available</p>
            </div>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    elements.testimonialsGrid.innerHTML = testimonialsData.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-text">
                "${testimonial.text}"
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.author}" class="author-avatar">
                <div>
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.trip}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Trips based on search criteria
function filterTrips() {
    const destination = document.getElementById('destination').value.toLowerCase();
    const tripType = document.getElementById('trip-type').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;

    state.filteredTrips = toursData.filter(trip => {
        // Filter by destination
        if (destination && !trip.location.toLowerCase().includes(destination)) {
            return false;
        }

        // Filter by trip type
        if (tripType && trip.type !== tripType) {
            return false;
        }

        // Filter by duration
        if (duration) {
            const tripDays = parseInt(trip.duration);
            if (duration === "1-3" && (tripDays < 1 || tripDays > 3)) {
                return false;
            } else if (duration === "4-7" && (tripDays < 4 || tripDays > 7)) {
                return false;
            } else if (duration === "8-14" && (tripDays < 8 || tripDays > 14)) {
                return false;
            } else if (duration === "15+" && tripDays < 15) {
                return false;
            } else if (duration === "1-3m" && tripDays < 30) {
                return false;
            } else if (duration === "4-8m" && (tripDays < 120 || tripDays > 240)) {
                return false;
            } else if (duration === "9-12m" && tripDays < 270) {
                return false;
            }
        }

        // Filter by date (in a real app, this would check availability)
        if (date) {
            // For demo purposes, we'll just show all trips regardless of date
            // In a real app, you would check if the trip is available on the selected date
        }

        return true;
    });

    renderFeaturedTrips();

    if (state.filteredTrips.length === 0) {
        showToast('No trips found matching your criteria. Please try different filters.', 'error');
    } else {
        showToast(`Found ${state.filteredTrips.length} trips matching your criteria`, 'success');
    }
}

// Filter by Destination when clicking on destination cards
function filterByDestination(destination) {
    document.getElementById('destination').value = destination.toLowerCase();
    filterTrips();

    // Scroll to trips section
    document.getElementById('trips').scrollIntoView({ behavior: 'smooth' });
}

// View Trip Details
function viewTripDetails(tripId) {
    const trip = toursData.find(t => t.id === tripId);
    if (!trip) {
        showToast('Trip not found!', 'error');
        return;
    }

    state.currentTrip = trip;

    // Update modal content
    document.getElementById('modalTripTitle').textContent = trip.title;
    document.getElementById('modalTripLocation').textContent = trip.location;
    document.getElementById('modalTripDuration').textContent = trip.duration;
    document.getElementById('modalTripGroupSize').textContent = trip.groupSize;
    document.getElementById('modalTripPrice').textContent = `$${trip.price.toLocaleString()}`;
    document.getElementById('tripDescription').textContent = trip.overview || trip.description;

    // Render highlights
    const highlightsList = document.getElementById('tripHighlights');
    if (trip.highlights && trip.highlights.length > 0) {
        highlightsList.innerHTML = trip.highlights.map(highlight => `<li>${highlight}</li>`).join('');
    } else {
        highlightsList.innerHTML = '<li>No highlights available</li>';
    }

    // Render itinerary
    const itinerary = document.getElementById('tripItinerary');
    if (trip.itinerary && trip.itinerary.length > 0) {
        itinerary.innerHTML = trip.itinerary.map(day => `
            <div class="itinerary-day">
                <h4>${day.day}</h4>
                <p><strong>${day.title}</strong></p>
                <p>${day.description}</p>
                ${day.meals ? `<p><strong>Meals:</strong> ${day.meals}</p>` : ''}
                ${day.accommodation ? `<p><strong>Accommodation:</strong> ${day.accommodation}</p>` : ''}
            </div>
        `).join('');
    } else {
        itinerary.innerHTML = '<p>No detailed itinerary available</p>';
    }

    // Render inclusions
    const inclusions = document.getElementById('tripInclusions');
    if (trip.inclusions && trip.inclusions.length > 0) {
        inclusions.innerHTML = trip.inclusions.map(category => `
            <div class="inclusion-category">
                <h4>${category.category}</h4>
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    } else {
        inclusions.innerHTML = '<p>No inclusion details available</p>';
    }

    // Render exclusions
    const exclusions = document.getElementById('tripExclusions');
    if (trip.exclusions && trip.exclusions.length > 0) {
        exclusions.innerHTML = trip.exclusions.map(exclusion => `<li>${exclusion}</li>`).join('');
    } else {
        exclusions.innerHTML = '<li>No exclusion details available</li>';
    }

    // Render gallery
    const gallery = document.getElementById('tripGallery');
    const galleryImages = trip.gallery && trip.gallery.length > 0 ? trip.gallery : [trip.image];
    gallery.innerHTML = galleryImages.slice(0, 4).map(img =>
        `<img src="${img}" alt="${trip.title}">`
    ).join('');

    // Show modal
    elements.tripDetailModal.style.display = 'block';
}

// Add to Cart
function addToCart(tripId) {
    const trip = toursData.find(t => t.id === tripId);
    if (!trip) return;

    const existingItem = state.cart.find(item => item.id === tripId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            ...trip,
            quantity: 1
        });
    }

    updateCart();
    showToast('Trip added to cart!', 'success');
}

// Remove from Cart
function removeFromCart(tripId) {
    state.cart = state.cart.filter(item => item.id !== tripId);
    updateCart();
    showToast('Trip removed from cart', 'error');
}

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = totalItems;

    // Update cart items
    elements.cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>${item.location} • ${item.duration}</p>
                <div class="cart-item-price">$${item.price.toLocaleString()} x ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Update total
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    elements.cartTotal.textContent = `$${total.toLocaleString()}`;

    // Save to localStorage
    localStorage.setItem('safariCart', JSON.stringify(state.cart));
}

// Load Cart from Storage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('safariCart');
    if (savedCart) {
        state.cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Show Toast Notification
function showToast(message, type = 'success') {
    elements.toast.textContent = message;
    elements.toast.className = `toast ${type} show`;

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// WhatsApp contact functionality
function contactWhatsApp() {
    const phoneNumber = '254794070549';
    const message = 'Hello Filmax Jambo Tours! I would like to get more information about your safari trips.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Format numbers with commas
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toLocaleString() + '+';
}

// Animate counter
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = formatNumber(Math.floor(current));
    }, 20);
}

// Initialize counters when section is in view
function initCounters() {
    const statsSection = document.querySelector('.about');
    const statNumbers = document.querySelectorAll('.stat-number');

    // Check if elements exist
    if (!statsSection || statNumbers.length === 0) {
        console.log('Counter elements not found');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting animations
                animateCounter(statNumbers[0], 18); // Years
                animateCounter(statNumbers[1], 50000); // Happy Travelers
                animateCounter(statNumbers[2], 15); // African Countries

                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

// Admin Dashboard Functions
function showAdminLogin() {
    elements.adminLoginModal.style.display = 'block';
}

function loginToAdmin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    // Simple admin authentication (in a real app, this would be more secure)
    if (username === 'admin' && password === 'admin123') {
        state.isAdmin = true;
        elements.mainSite.style.display = 'none';
        elements.adminSite.style.display = 'block';
        elements.adminLoginModal.style.display = 'none';
        renderAdminDashboard();
        showToast('Admin login successful!', 'success');
    } else {
        showToast('Invalid admin credentials!', 'error');
    }
}

function logoutFromAdmin() {
    state.isAdmin = false;
    elements.adminSite.style.display = 'none';
    elements.mainSite.style.display = 'block';
    showToast('Admin logout successful!', 'success');
}

function renderAdminDashboard() {
    renderAdminTours();
    renderAdminBookings();
    renderAdminCustomers();
    renderAdminPayments();
    renderAdminDestinations();
    updateAdminDashboardStats();
}

// Render Admin Tours
function renderAdminTours() {
    // All tours
    elements.adminToursGrid.innerHTML = toursData.map(tour => createAdminTourCard(tour)).join('');

    // Active tours
    const activeTours = toursData.filter(tour => tour.status === 'active');
    elements.adminActiveToursGrid.innerHTML = activeTours.map(tour => createAdminTourCard(tour)).join('');

    // Inactive tours
    const inactiveTours = toursData.filter(tour => tour.status === 'inactive');
    elements.adminInactiveToursGrid.innerHTML = inactiveTours.map(tour => createAdminTourCard(tour)).join('');

    // Update tour dropdown in booking form
    elements.adminTourPackage.innerHTML = '<option value="">Select Tour Package</option>' +
        activeTours.map(tour => `<option value="${tour.id}">${tour.title}</option>`).join('');
}

// Create Admin Tour Card HTML
function createAdminTourCard(tour) {
    return `
        <div class="admin-tour-card">
            <div class="admin-tour-image" style="background-image: url('${tour.image}')">
                <span class="admin-tour-status admin-status-${tour.status}">${tour.status === 'active' ? 'Active' : 'Inactive'}</span>
            </div>
            <div class="admin-tour-info">
                <h3>${tour.title}</h3>
                <p>${tour.description}</p>
                <div class="admin-tour-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${tour.location}</span>
                    <span><i class="fas fa-clock"></i> ${tour.duration}</span>
                </div>
                <div class="admin-tour-price">$${tour.price.toLocaleString()}</div>
                <div class="admin-tour-actions">
                    <button class="admin-btn admin-btn-success" onclick="adminEditTour(${tour.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="admin-btn ${tour.status === 'active' ? 'admin-btn-warning' : 'admin-btn-secondary'}" onclick="adminToggleTourStatus(${tour.id})">
                        <i class="fas fa-power-off"></i> ${tour.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button class="admin-btn admin-btn-danger" onclick="adminDeleteTour(${tour.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render Admin Bookings
function renderAdminBookings() {
    // Recent bookings for dashboard (show only 5)
    const recentBookings = [...bookingsData].slice(-5);
    elements.adminRecentBookingsTable.innerHTML = recentBookings.map(booking => `
        <tr>
            <td>${booking.id}</td>
            <td>${booking.customer}</td>
            <td>${booking.tour}</td>
            <td>${booking.date}</td>
            <td>${booking.travelers}</td>
            <td>$${booking.amount.toLocaleString()}</td>
            <td><span class="admin-status admin-status-${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span></td>
            <td>
                <button class="admin-btn admin-btn-success admin-btn-sm" onclick="adminEditBooking('${booking.id}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteBooking('${booking.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');

    // All bookings for bookings tab
    elements.adminAllBookingsTable.innerHTML = bookingsData.map(booking => `
        <tr>
            <td>${booking.id}</td>
            <td>${booking.customer}</td>
            <td>${booking.tour}</td>
            <td>${booking.date}</td>
            <td>${booking.travelers}</td>
            <td>$${booking.amount.toLocaleString()}</td>
            <td><span class="admin-status admin-status-${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span></td>
            <td>
                <button class="admin-btn admin-btn-success admin-btn-sm" onclick="adminEditBooking('${booking.id}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteBooking('${booking.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');

    // Update booking dropdown in payment form
    elements.adminPaymentBooking.innerHTML = '<option value="">Select Booking</option>' +
        bookingsData.map(booking => `<option value="${booking.id}">${booking.id} - ${booking.customer}</option>`).join('');
}

// Render Admin Customers
function renderAdminCustomers() {
    elements.adminCustomersTable.innerHTML = customersData.map(customer => `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.country}</td>
            <td>${customer.bookings}</td>
            <td>
                <button class="admin-btn admin-btn-success admin-btn-sm" onclick="adminViewCustomer('${customer.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteCustomer('${customer.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');

    // Update customer dropdown in payment form
    elements.adminPaymentCustomer.innerHTML = '<option value="">Select Customer</option>' +
        customersData.map(customer => `<option value="${customer.id}">${customer.name}</option>`).join('');
}

// Render Admin Payments
function renderAdminPayments() {
    elements.adminPaymentsTable.innerHTML = paymentsData.map(payment => `
        <tr>
            <td>${payment.id}</td>
            <td>${payment.customer}</td>
            <td>${payment.bookingId}</td>
            <td>$${payment.amount.toLocaleString()}</td>
            <td>${payment.date}</td>
            <td>${payment.method}</td>
            <td><span class="admin-status admin-status-${payment.status}">${payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}</span></td>
            <td>
                <button class="admin-btn admin-btn-success admin-btn-sm" onclick="adminViewPayment('${payment.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeletePayment('${payment.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Render Admin Destinations
function renderAdminDestinations() {
    elements.adminDestinationsGrid.innerHTML = destinationsData.map(destination => createAdminDestinationCard(destination)).join('');
}

// Create Admin Destination Card HTML
function createAdminDestinationCard(destination) {
    return `
        <div class="admin-tour-card">
            <div class="admin-tour-image" style="background-image: url('${destination.image}')">
                <span class="admin-tour-status admin-status-${destination.status}">${destination.status === 'active' ? 'Active' : 'Inactive'}</span>
            </div>
            <div class="admin-tour-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="admin-tour-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${destination.country}</span>
                    <span><i class="fas fa-calendar"></i> ${destination.tours} Tours</span>
                </div>
                <div class="admin-tour-actions">
                    <button class="admin-btn admin-btn-success" onclick="adminEditDestination(${destination.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="admin-btn admin-btn-danger" onclick="adminDeleteDestination(${destination.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Update Admin Dashboard Stats
function updateAdminDashboardStats() {
    elements.adminTotalTours.textContent = toursData.length;
    elements.adminActiveBookings.textContent = bookingsData.filter(b => b.status === 'confirmed' || b.status === 'pending').length;
    elements.adminTotalCustomers.textContent = customersData.length;

    // Calculate monthly revenue (simplified)
    const monthlyRevenue = bookingsData.reduce((sum, booking) => sum + booking.amount, 0);
    elements.adminMonthlyRevenue.textContent = `$${monthlyRevenue.toLocaleString()}`;

    // Update popular tours list
    const popularTours = [...toursData].sort((a, b) => (b.bookings || 0) - (a.bookings || 0)).slice(0, 5);
    elements.adminPopularToursList.innerHTML = popularTours.map(tour => `
        <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
            <div style="font-weight: 500;">${tour.title}</div>
            <div style="font-size: 0.9rem; color: var(--gray);">${tour.bookings || 0} bookings</div>
        </li>
    `).join('');
}

// Admin Tour Management Functions
function adminAddNewTour() {
    state.adminState.editingTour = false;
    state.adminState.currentTour = null;
    state.adminState.tourFormData = {};
    elements.adminTourModalTitle.textContent = "Add New Tour";
    elements.adminTourForm.reset();
    elements.adminItineraryContainer.innerHTML = '';
    elements.adminTourModalBtn.textContent = "Next";
    adminSwitchTab('admin-basic-info');
    elements.adminTourModal.style.display = 'block';
}

function adminEditTour(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    state.adminState.editingTour = true;
    state.adminState.currentTour = tour;
    elements.adminTourModalTitle.textContent = "Edit Tour";
    elements.adminTourModalBtn.textContent = "Save Tour";

    // Fill form with tour data
    document.getElementById('adminTourId').value = tour.id;
    document.getElementById('adminTourTitle').value = tour.title;
    document.getElementById('adminTourLocation').value = tour.location;
    document.getElementById('adminTourDuration').value = tour.duration;
    document.getElementById('adminTourPrice').value = tour.price;
    document.getElementById('adminTourType').value = tour.type;
    document.getElementById('adminTourGroupSize').value = tour.groupSize;
    document.getElementById('adminTourDifficulty').value = tour.difficulty;
    document.getElementById('adminTourStatus').value = tour.status;
    document.getElementById('adminTourDescription').value = tour.description;
    document.getElementById('adminTourOverview').value = tour.overview;
    document.getElementById('adminTourHighlights').value = tour.highlights ? tour.highlights.join('\n') : '';
    document.getElementById('adminTourImage').value = tour.image;
    document.getElementById('adminTourInclusions').value = tour.inclusions ? tour.inclusions.join('\n') : '';
    document.getElementById('adminTourExclusions').value = tour.exclusions ? tour.exclusions.join('\n') : '';

    // Render itinerary
    elements.adminItineraryContainer.innerHTML = '';
    if (tour.itinerary && tour.itinerary.length > 0) {
        tour.itinerary.forEach((day, index) => {
            adminAddItineraryDay(day, index + 1);
        });
    }

    adminSwitchTab('admin-basic-info');
    elements.adminTourModal.style.display = 'block';
}

function adminAddItineraryDay(dayData = null, dayNumber = null) {
    const template = elements.adminItineraryDayTemplate.cloneNode(true);
    const dayElement = template.querySelector('.admin-itinerary-day');

    // Set day number
    const currentDays = elements.adminItineraryContainer.querySelectorAll('.admin-itinerary-day');
    const dayNum = dayNumber || currentDays.length + 1;
    dayElement.querySelector('.admin-day-number').textContent = dayNum;

    // Fill with data if provided
    if (dayData) {
        dayElement.querySelector('.admin-day-title').value = dayData.title || '';
        dayElement.querySelector('.admin-day-range').value = dayData.day || '';
        dayElement.querySelector('.admin-day-description').value = dayData.description || '';
        dayElement.querySelector('.admin-day-meals').value = dayData.meals || '';
        dayElement.querySelector('.admin-day-accommodation').value = dayData.accommodation || '';
    }

    // Add remove functionality
    dayElement.querySelector('.admin-remove-day').addEventListener('click', function() {
        dayElement.remove();
        adminUpdateDayNumbers();
    });

    elements.adminItineraryContainer.appendChild(dayElement);
}

function adminUpdateDayNumbers() {
    const days = elements.adminItineraryContainer.querySelectorAll('.admin-itinerary-day');
    days.forEach((day, index) => {
        day.querySelector('.admin-day-number').textContent = index + 1;
    });
}

function adminSwitchTab(tabId) {
    // Update tabs
    document.querySelectorAll('#adminTourModal .admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`#adminTourModal .admin-tab[data-tab="${tabId}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('#adminTourModal .admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    state.adminState.currentTab = tabId;

    // Update button text based on current tab
    if (state.adminState.editingTour) {
        elements.adminTourModalBtn.textContent = "Save Tour";
    } else {
        if (tabId === 'admin-inclusions-exclusions') {
            elements.adminTourModalBtn.textContent = "Save Tour";
        } else {
            elements.adminTourModalBtn.textContent = "Next";
        }
    }
}

function adminHandleTourModalBtn() {
    if (state.adminState.editingTour) {
        adminSaveTour();
    } else {
        // Save current tab data and move to next
        adminSaveCurrentTabData();

        if (state.adminState.currentTab === 'admin-basic-info') {
            adminSwitchTab('admin-itinerary');
        } else if (state.adminState.currentTab === 'admin-itinerary') {
            adminSwitchTab('admin-inclusions-exclusions');
        } else if (state.adminState.currentTab === 'admin-inclusions-exclusions') {
            adminSaveTour();
        }
    }
}

function adminSaveCurrentTabData() {
    if (state.adminState.currentTab === 'admin-basic-info') {
        state.adminState.tourFormData = {
            title: document.getElementById('adminTourTitle').value,
            location: document.getElementById('adminTourLocation').value,
            duration: document.getElementById('adminTourDuration').value,
            price: parseFloat(document.getElementById('adminTourPrice').value),
            type: document.getElementById('adminTourType').value,
            groupSize: document.getElementById('adminTourGroupSize').value,
            difficulty: document.getElementById('adminTourDifficulty').value,
            status: document.getElementById('adminTourStatus').value,
            description: document.getElementById('adminTourDescription').value,
            overview: document.getElementById('adminTourOverview').value,
            highlights: document.getElementById('adminTourHighlights').value.split('\n').filter(h => h.trim() !== ''),
            image: document.getElementById('adminTourImage').value || 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        };
    } else if (state.adminState.currentTab === 'admin-itinerary') {
        // Collect itinerary data
        const itineraryDays = [];
        const dayElements = elements.adminItineraryContainer.querySelectorAll('.admin-itinerary-day');
        dayElements.forEach(dayElement => {
            const dayData = {
                day: dayElement.querySelector('.admin-day-range').value,
                title: dayElement.querySelector('.admin-day-title').value,
                description: dayElement.querySelector('.admin-day-description').value,
                meals: dayElement.querySelector('.admin-day-meals').value,
                accommodation: dayElement.querySelector('.admin-day-accommodation').value
            };
            itineraryDays.push(dayData);
        });
        state.adminState.tourFormData.itinerary = itineraryDays;
    } else if (state.adminState.currentTab === 'admin-inclusions-exclusions') {
        state.adminState.tourFormData.inclusions = document.getElementById('adminTourInclusions').value.split('\n').filter(i => i.trim() !== '');
        state.adminState.tourFormData.exclusions = document.getElementById('adminTourExclusions').value.split('\n').filter(e => e.trim() !== '');
    }
}

function adminSaveTour() {
    // For new tours, collect all data from state
    if (!state.adminState.editingTour) {
        adminSaveCurrentTabData();
    }

    const tourData = state.adminState.editingTour ? {} : state.adminState.tourFormData;

    if (state.adminState.editingTour) {
        // For editing, collect data from form
        tourData.id = state.adminState.currentTour.id;
        tourData.title = document.getElementById('adminTourTitle').value;
        tourData.location = document.getElementById('adminTourLocation').value;
        tourData.duration = document.getElementById('adminTourDuration').value;
        tourData.price = parseFloat(document.getElementById('adminTourPrice').value);
        tourData.type = document.getElementById('adminTourType').value;
        tourData.groupSize = document.getElementById('adminTourGroupSize').value;
        tourData.difficulty = document.getElementById('adminTourDifficulty').value;
        tourData.status = document.getElementById('adminTourStatus').value;
        tourData.description = document.getElementById('adminTourDescription').value;
        tourData.overview = document.getElementById('adminTourOverview').value;
        tourData.highlights = document.getElementById('adminTourHighlights').value.split('\n').filter(h => h.trim() !== '');
        tourData.image = document.getElementById('adminTourImage').value || 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        tourData.inclusions = document.getElementById('adminTourInclusions').value.split('\n').filter(i => i.trim() !== '');
        tourData.exclusions = document.getElementById('adminTourExclusions').value.split('\n').filter(e => e.trim() !== '');
        tourData.bookings = state.adminState.currentTour.bookings;

        // Collect itinerary data
        const itineraryDays = [];
        const dayElements = elements.adminItineraryContainer.querySelectorAll('.admin-itinerary-day');
        dayElements.forEach(dayElement => {
            const dayData = {
                day: dayElement.querySelector('.admin-day-range').value,
                title: dayElement.querySelector('.admin-day-title').value,
                description: dayElement.querySelector('.admin-day-description').value,
                meals: dayElement.querySelector('.admin-day-meals').value,
                accommodation: dayElement.querySelector('.admin-day-accommodation').value
            };
            itineraryDays.push(dayData);
        });
        tourData.itinerary = itineraryDays;
    } else {
        // For new tours, use data from state
        tourData.id = toursData.length > 0 ? Math.max(...toursData.map(t => t.id)) + 1 : 1;
        tourData.bookings = 0;
    }

    if (state.adminState.editingTour) {
        // Update existing tour
        const index = toursData.findIndex(t => t.id === state.adminState.currentTour.id);
        if (index !== -1) {
            toursData[index] = tourData;
        }
    } else {
        // Add new tour
        toursData.push(tourData);
    }

    // Save data to localStorage
    saveAllData();

    // Update main site with new data
    state.filteredTrips = [...toursData];
    renderFeaturedTrips();
    renderDestinations();

    // Update admin dashboard
    renderAdminTours();
    updateAdminDashboardStats();
    adminCloseTourModal();
    showToast(`Tour ${state.adminState.editingTour ? 'updated' : 'added'} successfully!`, 'success');
}

function adminToggleTourStatus(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;

    tour.status = tour.status === 'active' ? 'inactive' : 'active';

    // Save data to localStorage
    saveAllData();

    renderAdminTours();
    showToast(`Tour ${tour.status === 'active' ? 'activated' : 'deactivated'} successfully!`, 'success');
}

function adminDeleteTour(tourId) {
    if (confirm('Are you sure you want to delete this tour? This action cannot be undone.')) {
        toursData = toursData.filter(t => t.id !== tourId);

        // Save data to localStorage
        saveAllData();

        // Update main site with new data
        state.filteredTrips = [...toursData];
        renderFeaturedTrips();
        renderDestinations();

        // Update admin dashboard
        renderAdminTours();
        updateAdminDashboardStats();
        showToast('Tour deleted successfully!', 'success');
    }
}

function adminCloseTourModal() {
    elements.adminTourModal.style.display = 'none';
    state.adminState.editingTour = false;
    state.adminState.currentTour = null;
    state.adminState.tourFormData = {};
}

// Other Admin Functions
function adminAddNewCustomer() {
    elements.adminCustomerModal.style.display = 'block';
}

function adminSaveCustomer() {
    const form = elements.adminCustomerForm;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const customerData = {
        id: "CUS-" + String(customersData.length + 1).padStart(3, '0'),
        name: document.getElementById('adminNewCustomerName').value,
        email: document.getElementById('adminNewCustomerEmail').value,
        phone: document.getElementById('adminNewCustomerPhone').value,
        country: document.getElementById('adminNewCustomerCountry').value,
        bookings: 0
    };

    customersData.push(customerData);

    // Save data to localStorage
    saveAllData();

    renderAdminCustomers();
    updateAdminDashboardStats();
    adminCloseCustomerModal();
    showToast('Customer added successfully!', 'success');
}

function adminCloseCustomerModal() {
    elements.adminCustomerModal.style.display = 'none';
    elements.adminCustomerForm.reset();
}

function adminViewCustomer(customerId) {
    const customer = customersData.find(c => c.id === customerId);
    if (!customer) return;

    alert(`Customer Details:\n\nName: ${customer.name}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nCountry: ${customer.country}\nBookings: ${customer.bookings}`);
}

function adminDeleteCustomer(customerId) {
    if (confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
        customersData = customersData.filter(c => c.id !== customerId);

        // Save data to localStorage
        saveAllData();

        renderAdminCustomers();
        updateAdminDashboardStats();
        showToast('Customer deleted successfully!', 'success');
    }
}

function adminAddNewPayment() {
    elements.adminPaymentModal.style.display = 'block';
}

function adminSavePayment() {
    const form = elements.adminPaymentForm;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const customer = customersData.find(c => c.id === document.getElementById('adminPaymentCustomer').value);
    if (!customer) {
        showToast('Please select a valid customer', 'error');
        return;
    }

    const paymentData = {
        id: "PAY-" + String(paymentsData.length + 1).padStart(3, '0'),
        customer: customer.name,
        bookingId: document.getElementById('adminPaymentBooking').value,
        amount: parseFloat(document.getElementById('adminPaymentAmount').value),
        date: document.getElementById('adminPaymentDate').value,
        method: document.getElementById('adminPaymentMethod').value,
        status: document.getElementById('adminPaymentStatus').value
    };

    paymentsData.push(paymentData);

    // Save data to localStorage
    saveAllData();

    renderAdminPayments();
    adminClosePaymentModal();
    showToast('Payment added successfully!', 'success');
}

function adminClosePaymentModal() {
    elements.adminPaymentModal.style.display = 'none';
    elements.adminPaymentForm.reset();

    // Set payment date to today
    const paymentDateInput = document.getElementById('adminPaymentDate');
    const today = new Date().toISOString().split('T')[0];
    paymentDateInput.value = today;
}

function adminViewPayment(paymentId) {
    const payment = paymentsData.find(p => p.id === paymentId);
    if (!payment) return;

    alert(`Payment Details:\n\nID: ${payment.id}\nCustomer: ${payment.customer}\nBooking ID: ${payment.bookingId}\nAmount: $${payment.amount}\nDate: ${payment.date}\nMethod: ${payment.method}\nStatus: ${payment.status}`);
}

function adminDeletePayment(paymentId) {
    if (confirm('Are you sure you want to delete this payment? This action cannot be undone.')) {
        paymentsData = paymentsData.filter(p => p.id !== paymentId);

        // Save data to localStorage
        saveAllData();

        renderAdminPayments();
        showToast('Payment deleted successfully!', 'success');
    }
}

function adminAddNewDestination() {
    elements.adminDestinationModal.style.display = 'block';
}

function adminSaveDestination() {
    const form = elements.adminDestinationForm;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const destinationData = {
        id: destinationsData.length > 0 ? Math.max(...destinationsData.map(d => d.id)) + 1 : 1,
        name: document.getElementById('adminDestinationName').value,
        country: document.getElementById('adminDestinationCountry').value,
        description: document.getElementById('adminDestinationDescription').value,
        image: document.getElementById('adminDestinationImage').value || 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: document.getElementById('adminDestinationStatus').value,
        tours: 0
    };

    destinationsData.push(destinationData);

    // Save data to localStorage
    saveAllData();

    // Update main site with new data
    renderDestinations();

    // Update admin dashboard
    renderAdminDestinations();
    adminCloseDestinationModal();
    showToast('Destination added successfully!', 'success');
}

function adminCloseDestinationModal() {
    elements.adminDestinationModal.style.display = 'none';
    elements.adminDestinationForm.reset();
}

function adminEditDestination(destinationId) {
    const destination = destinationsData.find(d => d.id === destinationId);
    if (!destination) return;

    // In a real app, you would open an edit modal
    alert(`Editing destination: ${destination.name}\n\nThis would open a destination edit form in a real application.`);
}

function adminDeleteDestination(destinationId) {
    if (confirm('Are you sure you want to delete this destination? This action cannot be undone.')) {
        destinationsData = destinationsData.filter(d => d.id !== destinationId);

        // Save data to localStorage
        saveAllData();

        // Update main site with new data
        renderDestinations();

        // Update admin dashboard
        renderAdminDestinations();
        showToast('Destination deleted successfully!', 'success');
    }
}

function adminEditBooking(bookingId) {
    const booking = bookingsData.find(b => b.id === bookingId);
    if (!booking) return;

    alert(`Editing booking: ${bookingId}\n\nThis would open a booking edit form in a real application.`);
}

function adminDeleteBooking(bookingId) {
    if (confirm('Are you sure you want to delete this booking? This action cannot be undone.')) {
        bookingsData = bookingsData.filter(b => b.id !== bookingId);

        // Save data to localStorage
        saveAllData();

        renderAdminBookings();
        updateAdminDashboardStats();
        showToast('Booking deleted successfully!', 'success');
    }
}

function adminOpenBookingModal() {
    elements.adminBookingModal.style.display = 'block';
}

function adminCloseBookingModal() {
    elements.adminBookingModal.style.display = 'none';
    elements.adminBookingForm.reset();
}

function adminSaveBooking() {
    const form = elements.adminBookingForm;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const tour = toursData.find(t => t.id === parseInt(document.getElementById('adminTourPackage').value));
    if (!tour) {
        showToast('Please select a valid tour package', 'error');
        return;
    }

    const bookingData = {
        id: "BK-" + String(bookingsData.length + 1).padStart(3, '0'),
        customer: document.getElementById('adminCustomerName').value,
        tour: tour.title,
        date: document.getElementById('adminTravelDate').value,
        travelers: parseInt(document.getElementById('adminTravelers').value),
        amount: tour.price * parseInt(document.getElementById('adminTravelers').value),
        status: "pending"
    };

    bookingsData.push(bookingData);

    // Save data to localStorage
    saveAllData();

    renderAdminBookings();
    updateAdminDashboardStats();
    adminCloseBookingModal();
    showToast('Booking created successfully!', 'success');
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle - FIXED
    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', () => {
            elements.navLinks.classList.toggle('active');
        });
    }

    // Search form
    elements.tripSearch.addEventListener('submit', function(e) {
        e.preventDefault();
        filterTrips();
    });

    // Cart icon
    elements.cartIcon.addEventListener('click', () => {
        elements.cartModal.style.display = 'block';
    });

    // Auth buttons
    elements.loginBtn.addEventListener('click', () => {
        elements.authModal.style.display = 'block';
        showLoginForm();
    });

    elements.registerBtn.addEventListener('click', () => {
        elements.authModal.style.display = 'block';
        showRegisterForm();
    });

    // Admin login button
    elements.adminLoginBtn.addEventListener('click', showAdminLogin);

    // Admin login form
    elements.adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        loginToAdmin();
    });

    // Auth tabs
    elements.loginTab.addEventListener('click', showLoginForm);
    elements.registerTab.addEventListener('click', showRegisterForm);

    // Auth forms
    elements.loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Simulate login
        state.currentUser = { email, name: email.split('@')[0] };
        elements.authModal.style.display = 'none';
        showToast(`Welcome back, ${state.currentUser.name}!`, 'success');
        this.reset();
    });

    elements.registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Simulate registration
        state.currentUser = { email, name: document.getElementById('registerFirstName').value };
        elements.authModal.style.display = 'none';
        showToast(`Account created successfully! Welcome, ${state.currentUser.name}!`, 'success');
        this.reset();
    });

    // Booking form
    elements.bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        elements.bookingModal.style.display = 'none';
        showToast('Booking confirmed! Check your email for details.', 'success');
        this.reset();
    });

    // Proceed to checkout
    elements.proceedToCheckout.addEventListener('click', () => {
        if (state.cart.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }
        elements.cartModal.style.display = 'none';
        elements.bookingModal.style.display = 'block';
        document.getElementById('bookingTripTitle').textContent = `Booking ${state.cart.length} item(s)`;
    });

    // Book this trip button
    elements.bookThisTrip.addEventListener('click', () => {
        if (state.currentTrip) {
            elements.tripDetailModal.style.display = 'none';
            elements.bookingModal.style.display = 'block';
            document.getElementById('bookingTripTitle').textContent = state.currentTrip.title;
        }
    });

    // Close modals
    elements.closeTripModal.addEventListener('click', () => {
        elements.tripDetailModal.style.display = 'none';
    });

    elements.closeBookingModal.addEventListener('click', () => {
        elements.bookingModal.style.display = 'none';
    });

    elements.closeCartModal.addEventListener('click', () => {
        elements.cartModal.style.display = 'none';
    });

    elements.closeAuthModal.addEventListener('click', () => {
        elements.authModal.style.display = 'none';
    });

    elements.closeAdminLoginModal.addEventListener('click', () => {
        elements.adminLoginModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === elements.tripDetailModal) {
            elements.tripDetailModal.style.display = 'none';
        }
        if (e.target === elements.bookingModal) {
            elements.bookingModal.style.display = 'none';
        }
        if (e.target === elements.cartModal) {
            elements.cartModal.style.display = 'none';
        }
        if (e.target === elements.authModal) {
            elements.authModal.style.display = 'none';
        }
        if (e.target === elements.adminLoginModal) {
            elements.adminLoginModal.style.display = 'none';
        }
        if (e.target === elements.adminTourModal) {
            adminCloseTourModal();
        }
        if (e.target === elements.adminBookingModal) {
            adminCloseBookingModal();
        }
        if (e.target === elements.adminCustomerModal) {
            adminCloseCustomerModal();
        }
        if (e.target === elements.adminPaymentModal) {
            adminClosePaymentModal();
        }
        if (e.target === elements.adminDestinationModal) {
            adminCloseDestinationModal();
        }
    });

    // Close mobile menu when clicking on a link - FIXED
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Only close if we're on mobile (menu is active)
            if (elements.navLinks.classList.contains('active')) {
                elements.navLinks.classList.remove('active');
            }
        });
    });

    // Admin Event Listeners
    // Admin menu item activation
    document.querySelectorAll('.admin-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            if (tabId) {
                // Hide all tabs
                document.querySelectorAll('.admin-tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });

                // Show selected tab
                document.getElementById(tabId).classList.add('active');

                // Update menu items
                document.querySelectorAll('.admin-menu-item').forEach(i => {
                    i.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    });

    // Admin tour tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Update tabs
            document.querySelectorAll('.admin-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');

            // Update tab content
            document.querySelectorAll('.admin-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Admin tour modal tabs
    document.querySelectorAll('#adminTourModal .admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            adminSwitchTab(tabId);
        });
    });

    // Add tour button
    elements.adminAddTourBtn.addEventListener('click', adminAddNewTour);

    // Admin tour modal button
    elements.adminTourModalBtn.addEventListener('click', adminHandleTourModalBtn);

    // Add itinerary day
    elements.adminAddItineraryDay.addEventListener('click', () => {
        adminAddItineraryDay();
    });

    // Cancel tour
    elements.adminCancelTour.addEventListener('click', adminCloseTourModal);

    // Close admin modal buttons
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // New booking buttons
    elements.adminNewBookingBtn.addEventListener('click', adminOpenBookingModal);
    elements.adminNewBookingBtn2.addEventListener('click', adminOpenBookingModal);

    // Save booking
    elements.adminSaveBooking.addEventListener('click', adminSaveBooking);

    // Cancel booking
    elements.adminCancelBooking.addEventListener('click', adminCloseBookingModal);

    // Add customer button
    elements.adminAddCustomerBtn.addEventListener('click', adminAddNewCustomer);

    // Save customer
    elements.adminSaveCustomer.addEventListener('click', adminSaveCustomer);

    // Cancel customer
    elements.adminCancelCustomer.addEventListener('click', adminCloseCustomerModal);

    // Add payment button
    elements.adminAddPaymentBtn.addEventListener('click', adminAddNewPayment);

    // Save payment
    elements.adminSavePayment.addEventListener('click', adminSavePayment);

    // Cancel payment
    elements.adminCancelPayment.addEventListener('click', adminClosePaymentModal);

    // Add destination button
    elements.adminAddDestinationBtn.addEventListener('click', adminAddNewDestination);

    // Save destination
    elements.adminSaveDestination.addEventListener('click', adminSaveDestination);

    // Cancel destination
    elements.adminCancelDestination.addEventListener('click', adminCloseDestinationModal);

    // Logout button
    elements.adminLogoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            logoutFromAdmin();
        }
    });
}

// Show Login Form
function showLoginForm() {
    elements.loginTab.classList.add('active');
    elements.registerTab.classList.remove('active');
    elements.loginForm.style.display = 'block';
    elements.registerForm.style.display = 'none';
}

// Show Register Form
function showRegisterForm() {
    elements.registerTab.classList.add('active');
    elements.loginTab.classList.remove('active');
    elements.registerForm.style.display = 'block';
    elements.loginForm.style.display = 'none';
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally for onclick handlers
window.viewTripDetails = viewTripDetails;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.filterByDestination = filterByDestination;
window.contactWhatsApp = contactWhatsApp;
window.filterTrips = filterTrips;
window.showAdminLogin = showAdminLogin;
window.loginToAdmin = loginToAdmin;
window.logoutFromAdmin = logoutFromAdmin;
window.adminAddNewTour = adminAddNewTour;
window.adminEditTour = adminEditTour;
window.adminToggleTourStatus = adminToggleTourStatus;
window.adminDeleteTour = adminDeleteTour;
window.adminAddNewCustomer = adminAddNewCustomer;
window.adminSaveCustomer = adminSaveCustomer;
window.adminViewCustomer = adminViewCustomer;
window.adminDeleteCustomer = adminDeleteCustomer;
window.adminAddNewPayment = adminAddNewPayment;
window.adminSavePayment = adminSavePayment;
window.adminViewPayment = adminViewPayment;
window.adminDeletePayment = adminDeletePayment;
window.adminAddNewDestination = adminAddNewDestination;
window.adminSaveDestination = adminSaveDestination;
window.adminEditDestination = adminEditDestination;
window.adminDeleteDestination = adminDeleteDestination;
window.adminEditBooking = adminEditBooking;
window.adminDeleteBooking = adminDeleteBooking;
window.adminOpenBookingModal = adminOpenBookingModal;
window.adminSaveBooking = adminSaveBooking;

