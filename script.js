// Property Data
const properties = [
    {
        id: 1,
        title: "Modern Downtown Apartment",
        location: "Downtown, NY",
        price: "$450,000",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
        bedrooms: 2,
        bathrooms: 2,
        area: "1200",
        type: "apartment",
        status: "For Sale",
        description: "Beautiful modern apartment in the heart of downtown with stunning city views.",
        features: ["Air Conditioning", "Gym", "Parking", "Security", "Balcony"]
    },
    {
        id: 2,
        title: "Luxury Family Villa",
        location: "Beverly Hills, CA",
        price: "$1,200,000",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        bedrooms: 4,
        bathrooms: 3,
        area: "3500",
        type: "villa",
        status: "For Sale",
        description: "Stunning luxury villa with pool, garden, and premium finishes throughout.",
        features: ["Swimming Pool", "Garden", "Garage", "Fireplace", "Walk-in Closet"]
    },
    {
        id: 3,
        title: "Cozy Studio Apartment",
        location: "Brooklyn, NY",
        price: "$2,500/month",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        bedrooms: 1,
        bathrooms: 1,
        area: "600",
        type: "apartment",
        status: "For Rent",
        description: "Charming studio apartment perfect for young professionals.",
        features: ["Furnished", "Internet", "Near Subway", "Pet Friendly"]
    },
    {
        id: 4,
        title: "Suburban Family House",
        location: "Queens, NY",
        price: "$650,000",
        image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        bedrooms: 3,
        bathrooms: 2,
        area: "2000",
        type: "house",
        status: "For Sale",
        description: "Perfect family home in quiet suburban neighborhood with excellent schools.",
        features: ["Backyard", "Garage", "Basement", "Updated Kitchen", "Hardwood Floors"]
    },
    {
        id: 5,
        title: "Luxury Penthouse",
        location: "Manhattan, NY",
        price: "$2,800,000",
        image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
        bedrooms: 3,
        bathrooms: 3,
        area: "2500",
        type: "condo",
        status: "For Sale",
        description: "Exclusive penthouse with panoramic city views and luxury amenities.",
        features: ["City Views", "Concierge", "Rooftop Terrace", "Wine Cellar", "Smart Home"]
    },
    {
        id: 6,
        title: "Modern Condo",
        location: "Jersey City, NJ",
        price: "$380,000",
        image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
        bedrooms: 2,
        bathrooms: 2,
        area: "1100",
        type: "condo",
        status: "For Sale",
        description: "Contemporary condo with modern amenities and easy access to NYC.",
        features: ["Fitness Center", "Pool", "Parking", "Near Transit", "Modern Kitchen"]
    }
];

// Current filtered properties
let filteredProperties = [...properties];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    loadFeaturedProperties();
    setupEventListeners();
    setupFormHandlers();
    setupViewToggle();
    
    // Load properties grid if on listings page
    if (document.getElementById('propertiesGrid')) {
        loadPropertiesGrid();
    }
}

// Load Featured Properties on Home Page
function loadFeaturedProperties() {
    const featuredContainer = document.getElementById('featuredProperties');
    if (!featuredContainer) return;
    
    const featuredProps = properties.slice(0, 3);
    featuredContainer.innerHTML = featuredProps.map(property => createPropertyCard(property)).join('');
}

// Load Properties Grid on Listings Page
function loadPropertiesGrid() {
    const gridContainer = document.getElementById('propertiesGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = filteredProperties.map(property => createPropertyCard(property)).join('');
    updateResultsCount();
}

// Create Property Card HTML
function createPropertyCard(property) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="property-card" onclick="showPropertyDetails(${property.id})">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}">
                    <div class="property-badge">${property.status}</div>
                </div>
                <div class="property-info">
                    <div class="property-price">${property.price}</div>
                    <h5 class="property-title">${property.title}</h5>
                    <p class="property-location">
                        <i class="fas fa-map-marker-alt me-2"></i>${property.location}
                    </p>
                    <div class="property-features">
                        <div class="feature-item">
                            <i class="fas fa-bed d-block"></i>
                            <span>${property.bedrooms} Bed</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-bath d-block"></i>
                            <span>${property.bathrooms} Bath</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-ruler-combined d-block"></i>
                            <span>${property.area} sqft</span>
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                        <button class="btn btn-outline-primary btn-sm flex-fill me-md-2">
                            <i class="fas fa-heart me-1"></i>Save
                        </button>
                        <button class="btn btn-primary btn-sm flex-fill">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show Property Details Modal
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const modalTitle = document.getElementById('propertyModalTitle');
    const modalBody = document.getElementById('propertyModalBody');
    
    if (!modalTitle || !modalBody) return;
    
    modalTitle.textContent = property.title;
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${property.image}" alt="${property.title}" class="img-fluid rounded mb-3">
            </div>
            <div class="col-md-6">
                <div class="property-price h4 text-primary mb-3">${property.price}</div>
                <p class="property-location mb-3">
                    <i class="fas fa-map-marker-alt me-2"></i>${property.location}
                </p>
                <div class="property-features mb-3">
                    <div class="row">
                        <div class="col-4 text-center">
                            <i class="fas fa-bed text-primary d-block mb-1"></i>
                            <small>${property.bedrooms} Bedrooms</small>
                        </div>
                        <div class="col-4 text-center">
                            <i class="fas fa-bath text-primary d-block mb-1"></i>
                            <small>${property.bathrooms} Bathrooms</small>
                        </div>
                        <div class="col-4 text-center">
                            <i class="fas fa-ruler-combined text-primary d-block mb-1"></i>
                            <small>${property.area} sqft</small>
                        </div>
                    </div>
                </div>
                <p class="mb-3">${property.description}</p>
                <div class="features-list">
                    <h6>Features:</h6>
                    <ul class="list-unstyled">
                        ${property.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('propertyModal'));
    modal.show();
}

// Filter Properties
function filterProperties() {
    const propertyType = document.getElementById('propertyType')?.value;
    const priceRange = document.getElementById('priceRange')?.value;
    const location = document.getElementById('location')?.value.toLowerCase();
    const bedrooms = document.getElementById('bedrooms')?.value;
    
    filteredProperties = properties.filter(property => {
        let matches = true;
        
        if (propertyType && property.type !== propertyType) {
            matches = false;
        }
        
        if (location && !property.location.toLowerCase().includes(location)) {
            matches = false;
        }
        
        if (bedrooms && property.bedrooms < parseInt(bedrooms)) {
            matches = false;
        }
        
        if (priceRange) {
            const price = parseFloat(property.price.replace(/[$,]/g, ''));
            const [min, max] = priceRange.split('-').map(p => parseFloat(p));
            
            if (max) {
                if (price < min || price > max) matches = false;
            } else {
                if (price < min) matches = false;
            }
        }
        
        return matches;
    });
    
    loadPropertiesGrid();
    showFilterMessage();
}

// Sort Properties
function sortProperties(sortBy) {
    switch(sortBy) {
        case 'price-low':
            filteredProperties.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.price.replace(/[$,]/g, ''));
                return priceA - priceB;
            });
            break;
        case 'price-high':
            filteredProperties.sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/[$,]/g, ''));
                const priceB = parseFloat(b.price.replace(/[$,]/g, ''));
                return priceB - priceA;
            });
            break;
        case 'newest':
            filteredProperties.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            filteredProperties.sort((a, b) => a.id - b.id);
            break;
    }
    
    loadPropertiesGrid();
}

// Update Results Count
function updateResultsCount() {
    const countElement = document.getElementById('resultsCount');
    if (countElement) {
        countElement.textContent = filteredProperties.length;
    }
}

// Show Filter Message
function showFilterMessage() {
    const message = filteredProperties.length === 0 
        ? 'No properties found matching your criteria. Please adjust your filters.'
        : `Found ${filteredProperties.length} properties matching your criteria.`;
    
    showNotification(message, filteredProperties.length === 0 ? 'warning' : 'success');
}

// Setup Event Listeners
function setupEventListeners() {
    // Sort dropdown change
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', function() {
            sortProperties(this.value);
        });
    }
    
    // Search on Enter key
    const searchInputs = document.querySelectorAll('#location');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterProperties();
            }
        });
    });
}

// Setup View Toggle
function setupViewToggle() {
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    const mapView = document.getElementById('mapView');
    const propertiesGrid = document.getElementById('propertiesGrid');
    const mapSection = document.getElementById('mapSection');
    
    if (!gridView || !listView || !mapView) return;
    
    gridView.addEventListener('click', function() {
        setActiveView(this);
        if (propertiesGrid) propertiesGrid.parentElement.classList.remove('d-none');
        if (mapSection) mapSection.classList.add('d-none');
        loadPropertiesGrid();
    });
    
    listView.addEventListener('click', function() {
        setActiveView(this);
        if (propertiesGrid) propertiesGrid.parentElement.classList.remove('d-none');
        if (mapSection) mapSection.classList.add('d-none');
        loadPropertiesList();
    });
    
    mapView.addEventListener('click', function() {
        setActiveView(this);
        if (propertiesGrid) propertiesGrid.parentElement.classList.add('d-none');
        if (mapSection) mapSection.classList.remove('d-none');
    });
}

// Set Active View
function setActiveView(activeButton) {
    document.querySelectorAll('.view-toggle .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Load Properties List View
function loadPropertiesList() {
    const gridContainer = document.getElementById('propertiesGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = filteredProperties.map(property => createPropertyListItem(property)).join('');
    updateResultsCount();
}

// Create Property List Item
function createPropertyListItem(property) {
    return `
        <div class="col-12 mb-4">
            <div class="property-card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div class="property-image">
                            <img src="${property.image}" alt="${property.title}" style="height: 200px;">
                            <div class="property-badge">${property.status}</div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="property-info">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="property-price">${property.price}</div>
                                    <h5 class="property-title">${property.title}</h5>
                                    <p class="property-location">
                                        <i class="fas fa-map-marker-alt me-2"></i>${property.location}
                                    </p>
                                    <p class="text-muted">${property.description}</p>
                                </div>
                                <div class="col-md-4">
                                    <div class="property-features">
                                        <div class="feature-item">
                                            <i class="fas fa-bed"></i>
                                            <span>${property.bedrooms} Bed</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-bath"></i>
                                            <span>${property.bathrooms} Bath</span>
                                        </div>
                                        <div class="feature-item">
                                            <i class="fas fa-ruler-combined"></i>
                                            <span>${property.area} sqft</span>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2 mt-3">
                                        <button class="btn btn-primary" onclick="showPropertyDetails(${property.id})">
                                            View Details
                                        </button>
                                        <button class="btn btn-outline-primary">
                                            <i class="fas fa-heart me-1"></i>Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Setup Form Handlers
function setupFormHandlers() {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginForm);
    }
    
    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterForm);
    }
    
    // Feedback Form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackForm);
    }
    
    // Newsletter Form
   const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        // Remove any existing error message
        let errorMsg = newsletterForm.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }

        // Create error container if needed
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message text-danger mt-2';

        // Validation
        if (email === '') {
            errorMsg.textContent = 'Please enter your email address.';
            newsletterForm.appendChild(errorMsg);
            emailInput.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMsg.textContent = 'Please enter a valid email address.';
            newsletterForm.appendChild(errorMsg);
            emailInput.focus();
            return;
        }

        // If valid
        alert('Successfully subscribed to our newsletter!');
        emailInput.value = '';
    });
}
}


// Handle Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value,
        newsletter: document.getElementById('contactNewsletter').checked
    };
    
    // Simulate form submission
    showLoadingButton(e.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoadingButton(e.target.querySelector('button[type="submit"]'), 'Send Message');
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
        
        if (formData.newsletter) {
            showNotification('You\'ve been subscribed to our newsletter!', 'info');
        }
    }, 2000);
}

// Handle Login Form
function handleLoginForm(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    showLoadingButton(e.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoadingButton(e.target.querySelector('button[type="submit"]'), 'Login');
        
        // Simulate successful login
        if (email && password) {
            showNotification('Login successful! Welcome back.', 'success');
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            e.target.reset();
            updateNavbarForLoggedInUser(email);
        } else {
            showNotification('Invalid email or password.', 'danger');
        }
    }, 1500);
}

// Handle Register Form
function handleRegisterForm(e) {
    e.preventDefault();
    
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'danger');
        return;
    }
    
    showLoadingButton(e.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoadingButton(e.target.querySelector('button[type="submit"]'), 'Create Account');
        showNotification('Account created successfully! Please check your email for verification.', 'success');
        bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
        e.target.reset();
    }, 2000);
}

// Handle Feedback Form
function handleFeedbackForm(e) {
    e.preventDefault();
    
    showLoadingButton(e.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoadingButton(e.target.querySelector('button[type="submit"]'), 'Submit Feedback');
        showNotification('Thank you for your feedback! We appreciate your input.', 'success');
        bootstrap.Modal.getInstance(document.getElementById('feedbackModal')).hide();
        e.target.reset();
    }, 1500);
}

// Handle Newsletter Form
function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const button = e.target.querySelector('button[type="submit"]');
    
    showLoadingButton(button);
    
    setTimeout(() => {
        hideLoadingButton(button, 'Subscribe');
        showNotification('Successfully subscribed to our newsletter!', 'success');
        e.target.reset();
    }, 1500);
}

// Update Navbar for Logged In User
function updateNavbarForLoggedInUser(email) {
    const authButtons = document.querySelector('.d-flex');
    if (authButtons) {
        authButtons.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="fas fa-user me-2"></i>${email.split('@')[0]}
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Profile</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-heart me-2"></i>Saved Properties</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Settings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                </ul>
            </div>
        `;
    }
}

// Logout Function
function logout() {
    showNotification('You have been logged out successfully.', 'info');
    location.reload();
}

// Show Loading Button
function showLoadingButton(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Processing...';
    button.disabled = true;
    button.dataset.originalText = originalText;
}

// Hide Loading Button
function hideLoadingButton(button, defaultText) {
    const originalText = button.dataset.originalText || defaultText;
    button.innerHTML = originalText;
    button.disabled = false;
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingAlerts = document.querySelectorAll('.alert-notification');
    existingAlerts.forEach(alert => alert.remove());
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-notification position-fixed`;
    alertDiv.style.cssText = `
        top: 100px; 
        right: 20px; 
        z-index: 9999; 
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    alertDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <div class="me-2">
                <i class="fas fa-${getAlertIcon(type)}"></i>
            </div>
            <div class="flex-grow-1">${message}</div>
            <button type="button" class="btn-close btn-close-sm ms-2" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

// Get Alert Icon
function getAlertIcon(type) {
    const icons = {
        'success': 'check-circle',
        'danger': 'exclamation-triangle',
        'warning': 'exclamation-circle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.property-card, .service-card, .team-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize scroll animations when page loads
window.addEventListener('load', animateOnScroll);

// Mobile Menu Close on Link Click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});

// Form Validation Enhancement
function enhanceFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    validateField(this);
                }
            });
        });
    });
}

// Validate Individual Field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    // Remove existing feedback
    const existingFeedback = field.parentElement.querySelector('.invalid-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'This field is required.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address.';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            message = 'Please enter a valid phone number.';
        }
    }
    
    // Password validation
    if (field.type === 'password' && value && field.id.includes('register')) {
        if (value.length < 6) {
            isValid = false;
            message = 'Password must be at least 6 characters long.';
        }
    }
    
    // Update field appearance
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        
        // Add error message
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        feedback.textContent = message;
        field.parentElement.appendChild(feedback);
    }
    
    return isValid;
}

// Initialize form validation enhancement
document.addEventListener('DOMContentLoaded', enhanceFormValidation);

// Property Search Functionality for Hero Section
function setupHeroSearch() {
    const heroSearchForm = document.querySelector('.search-bar');
    if (heroSearchForm) {
        const searchButton = heroSearchForm.querySelector('.btn-primary');
        if (searchButton) {
            searchButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get search parameters
                const type = heroSearchForm.querySelector('select').value;
                const location = heroSearchForm.querySelector('input[type="text"]').value;
                const price = heroSearchForm.querySelectorAll('select')[1].value;
                
                // Store search parameters in localStorage
                localStorage.setItem('searchParams', JSON.stringify({
                    type: type.toLowerCase(),
                    location: location,
                    price: price
                }));
                
                // Navigate to listings page
                window.location.href = 'listings.html';
            });
        }
    }
}

// Apply stored search parameters on listings page
function applyStoredSearch() {
    const storedParams = localStorage.getItem('searchParams');
    if (storedParams && document.getElementById('propertiesGrid')) {
        const params = JSON.parse(storedParams);
        
        // Set form values
        if (params.location) {
            const locationInput = document.getElementById('location');
            if (locationInput) locationInput.value = params.location;
        }
        
        if (params.price) {
            const priceSelect = document.getElementById('priceRange');
            if (priceSelect) priceSelect.value = params.price;
        }
        
        // Apply filters
        filterProperties();
        
        // Clear stored parameters
        localStorage.removeItem('searchParams');
    }
}

// Initialize hero search and apply stored search
document.addEventListener('DOMContentLoaded', function() {
    setupHeroSearch();
    applyStoredSearch();
});