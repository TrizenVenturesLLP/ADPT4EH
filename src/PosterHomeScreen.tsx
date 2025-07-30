import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Image,
} from 'react-native';

const PosterHomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if we're on mobile web view
  useEffect(() => {
    const checkScreenSize = () => {
      if (Platform.OS === 'web') {
        const { width } = Dimensions.get('window');
        setIsMobileView(width <= 768);
      } else {
        setIsMobileView(true); // Always mobile layout on native mobile
      }
    };

    checkScreenSize();
    if (Platform.OS === 'web') {
      const subscription = Dimensions.addEventListener('change', checkScreenSize);
      return () => subscription?.remove();
    }
  }, []);

  const serviceCategories = [
    {
      id: 1,
      title: 'Home Services',
      image: require('../assets/images/home.png'),
      color: '#f4f4f4',
    },
    {
      id: 2,
      title: 'General Errands & Delivery',
      image: require('../assets/images/delivery.png'),
      color: '#f4f4f4',
    },
    {
      id: 3,
      title: 'Beauty & Personal Care',
      image: require('../assets/images/beauty.png'),
      color: '#f4f4f4',
    },
    {
      id: 4,
      title: 'Installation & Smart Solutions',
      image: require('../assets/images/smart.png'),
      color: '#f4f4f4',
    },
    {
      id: 5,
      title: 'Daily Help & Assistants',
      image: require('../assets/images/assist.png'),
      color: '#f4f4f4',
    },
    {
      id: 6,
      title: 'Tutoring & Education',
      image: require('../assets/images/tutor.png'),
      color: '#f4f4f4',
    },
    {
      id: 7,
      title: 'Creative & Technical Tasks',
      image: require('../assets/images/creative.png'),
      color: '#f4f4f4',
    },
    {
      id: 8,
      title: 'Administrative / Office Tasks',
      image: require('../assets/images/office.png'),
      color: '#f4f4f4',
    },
    {
      id: 9,
      title: 'Event Support',
      image: require('../assets/images/events.png'),
      color: '#f4f4f4',
    },
  ];

  const bannerImages = [
    require('../assets/images/banner1.png'),
    require('../assets/images/banner2.png'),
    require('../assets/images/banner3.png'),
    require('../assets/images/banner4.png'),
    require('../assets/images/banner5.png'),
    require('../assets/images/banner6.png'),
    require('../assets/images/banner7.png'),
  ];

  const mostBookedServices = [
    {
      id: 1,
      title: 'Parcel Pickup & Delivery',
      image: require('../assets/mosted-booked-services/delivery.png'),
      rating: '4.76',
      reviews: '98K',
      price: '₹199',
    },
    {
      id: 2,
      title: 'At-Home Haircut (Women)',
      image: require('../assets/mosted-booked-services/homefacial.png'),
      rating: '4.88',
      reviews: '132K',
      price: '₹699',
    },
    {
      id: 3,
      title: 'Home Deep Cleaning',
      image: require('../assets/mosted-booked-services/homeclean.png'),
      rating: '4.82',
      reviews: '45K',
      price: '₹399',
    },
    {
      id: 4,
      title: 'TV Mounting Service',
      image: require('../assets/mosted-booked-services/tv-mounting.png'),
      rating: '4.91',
      reviews: '67K',
      price: '₹299',
    },
    {
      id: 5,
      title: 'Online Tuition Classes',
      image: require('../assets/mosted-booked-services/online-tution.png'),
      rating: '4.85',
      reviews: '89K',
      price: '₹499',
    },
    {
      id: 6,
      title: 'Logo Design Service',
      image: require('../assets/mosted-booked-services/logo-design.png'),
      rating: '4.79',
      reviews: '34K',
      price: '₹899',
    },
  ];

  // Mobile layout (Android, iOS, and mobile web)
  if (isMobileView) {
    return (
      <View style={styles.mobileContainer}>
        {/* Header */}
        <View style={styles.mobileHeader}>
          <View style={styles.mobileHeaderTop}>
            <View style={styles.mobileLocationContainer}>
              <Text style={styles.mobileLocationText}>Hyderabad Decan Railway Station</Text>
              <Text style={styles.mobileLocationSubtext}>Red Hills-Malakpet-Hyderaba...</Text>
              <Text style={styles.mobileLocationArrow}>▼</Text>
            </View>
            <TouchableOpacity style={styles.mobileCartButton}>
              <Text style={styles.mobileCartIcon}>🛒</Text>
            </TouchableOpacity>
          </View>
          
          {/* Search Bar */}
          <View style={styles.mobileSearchContainer}>
            <Text style={styles.mobileSearchIcon}>🔍</Text>
            <TextInput
              style={styles.mobileSearchInput}
              placeholder="Search for"
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          style={styles.mobileScrollableContent} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mobileScrollContentContainer}
        >
          {/* Service Categories Grid */}
          <View style={styles.mobileCategoriesGrid}>
            {serviceCategories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.mobileCategoryCard}>
                <View style={[styles.mobileCategoryIcon, { backgroundColor: category.color }]}>
                  <Image source={category.image} style={styles.mobileCategoryImage} />
                </View>
                <Text style={styles.mobileCategoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Custom Task Button */}
          <View style={styles.mobileCustomTaskContainer}>
            <TouchableOpacity style={styles.mobileCustomTaskButton}>
              <Text style={styles.mobileCustomTaskText}>Custom Task</Text>
              <Text style={styles.mobileCustomTaskIcon}>📅</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal Scrollable Banners */}
          <View style={styles.mobileBannerSection}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.mobileBannerScrollContainer}
            >
              {bannerImages.map((banner, index) => (
                <TouchableOpacity key={index} style={styles.mobileBannerCard}>
                  <Image source={banner} style={styles.mobileBannerImage} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Most Booked Services Section */}
          <View style={styles.mobileMostBookedSection}>
            <Text style={styles.mobileMostBookedTitle}>Most Booked Services</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.mobileMostBookedScrollContainer}
            >
              {mostBookedServices.map((service) => (
                <TouchableOpacity key={service.id} style={styles.mobileServiceCard}>
                  <Image source={service.image} style={styles.mobileServiceImage} />
                  <View style={styles.mobileServiceContent}>
                    <Text style={styles.mobileServiceTitle}>Title: {service.title}</Text>
                    <View style={styles.mobileServiceRating}>
                      <Text style={styles.mobileStarIcon}>⭐</Text>
                      <Text style={styles.mobileRatingText}>{service.rating} ({service.reviews})</Text>
                    </View>
                    <Text style={styles.mobileServicePrice}>{service.price}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Refer Section */}
          <View style={styles.mobileReferSection}>
            <View style={styles.mobileReferCard}>
              <View style={styles.mobileReferContent}>
                <Text style={styles.mobileReferTitle}>Refer and get</Text>
                <Text style={styles.mobileReferSubtitle}>free services</Text>
                <Text style={styles.mobileReferDescription}>Invite and get ₹ 100*</Text>
                <TouchableOpacity style={styles.mobileReferButton}>
                  <Text style={styles.mobileReferButtonText}>Book now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mobileReferImageContainer}>
                <Image source={require('../assets/images/refer.png')} style={styles.mobileReferImage} />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.mobileBottomNav}>
          <TouchableOpacity style={[styles.mobileNavItem, styles.mobileNavItemActive]}>
            <Text style={styles.mobileNavIcon}>⌂</Text>
            <Text style={styles.mobileNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavItem}>
            <Text style={styles.mobileNavIcon}>☐</Text>
            <Text style={styles.mobileNavText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavItem}>
            <Text style={styles.mobileNavIcon}>＋</Text>
            <Text style={styles.mobileNavText}>Post / Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavItem}>
            <Text style={styles.mobileNavIcon}>○</Text>
            <Text style={styles.mobileNavText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavItem}>
            <Text style={styles.mobileNavIcon}>⚪</Text>
            <Text style={styles.mobileNavText}>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Desktop web layout (existing implementation)
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Hyderabad Decan Railway Station</Text>
            <Text style={styles.locationSubtext}>Red Hills-Malakpet-Hyderaba...</Text>
            <Text style={styles.locationArrow}>▼</Text>
          </View>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollableContent} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Service Categories Grid */}
        <View style={styles.categoriesGrid}>
          {serviceCategories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                <Image source={category.image} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Custom Task Button */}
        <View style={styles.customTaskContainer}>
          <TouchableOpacity style={styles.customTaskButton}>
            <Text style={styles.customTaskText}>Custom Task</Text>
            <Text style={styles.customTaskIcon}>📅</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal Scrollable Banners */}
        <View style={styles.bannerSection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bannerScrollContainer}
          >
            {bannerImages.map((banner, index) => (
              <TouchableOpacity key={index} style={styles.bannerCard}>
                <Image source={banner} style={styles.bannerImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Most Booked Services Section */}
        <View style={styles.mostBookedSection}>
          <Text style={styles.mostBookedTitle}>Most Booked Services</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.mostBookedScrollContainer}
          >
            {mostBookedServices.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceCard}>
                <Image source={service.image} style={styles.serviceImage} />
                <View style={styles.serviceContent}>
                  <Text style={styles.serviceTitle}>Title: {service.title}</Text>
                  <View style={styles.serviceRating}>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.ratingText}>{service.rating} ({service.reviews})</Text>
                  </View>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Refer Section */}
        <View style={styles.referSection}>
          <View style={styles.referCard}>
            <View style={styles.referContent}>
              <Text style={styles.referTitle}>Refer and get</Text>
              <Text style={styles.referSubtitle}>free services</Text>
              <Text style={styles.referDescription}>Invite and get ₹ 100*</Text>
              <TouchableOpacity style={styles.referButton}>
                <Text style={styles.referButtonText}>Book now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.referImageContainer}>
              <Image source={require('../assets/images/refer.png')} style={styles.referImage} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>➕</Text>
          <Text style={styles.navText}>Post / Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Desktop web styles (existing)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  locationContainer: {
    flex: 1,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  locationSubtext: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  locationArrow: {
    fontSize: 12,
    color: '#666',
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  scrollableContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingTop: 20,
    paddingBottom: 80, // Space for bottom navigation
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  categoryCard: {
    width: '31%',
    alignItems: 'center',
    marginBottom: 24,
  },
  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  categoryTitle: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16,
  },
  customTaskContainer: {
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  customTaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  customTaskText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginRight: 8,
  },
  customTaskIcon: {
    fontSize: 16,
  },
  mostBookedSection: {
    marginBottom: 20,
  },
  mostBookedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'left',
    paddingHorizontal: 12,
  },
  mostBookedScrollContainer: {
    paddingHorizontal: 12,
  },
  serviceCard: {
    width: 320,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  serviceContent: {
    padding: 16,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  serviceRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  bannerSection: {
    marginBottom: 20,
  },
  bannerScrollContainer: {
    paddingHorizontal: 12,
  },
  bannerCard: {
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bannerImage: {
    width: 320,
    height: 180,
    borderRadius: 12,
  },
  referSection: {
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  referCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  referContent: {
    flex: 1,
    marginRight: 20,
  },
  referTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  referSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  referDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  referButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  referButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  referImageContainer: {
    width: 140,
    height: 140,
  },
  referImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    // Active state styling if needed
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#fff',
  },
  navText: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },

  // Mobile styles (new)
  mobileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  mobileHeader: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mobileHeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  mobileLocationContainer: {
    flex: 1,
  },
  mobileLocationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  mobileLocationSubtext: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  mobileLocationArrow: {
    fontSize: 12,
    color: '#666',
  },
  mobileCartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileCartIcon: {
    fontSize: 20,
    color: '#000',
  },
  mobileSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  mobileSearchIcon: {
    fontSize: 16,
    marginRight: 10,
    color: '#000',
  },
  mobileSearchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  mobileScrollableContent: {
    flex: 1,
  },
  mobileScrollContentContainer: {
    paddingTop: 20,
    paddingBottom: 80, // Space for bottom navigation
  },
  mobileContentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mobileCategoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  mobileCategoryCard: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 24,
  },
  mobileCategoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  mobileCategoryTitle: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16,
  },
  mobileCustomTaskContainer: {
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  mobileCustomTaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  mobileCustomTaskText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginRight: 8,
  },
  mobileCustomTaskIcon: {
    fontSize: 16,
  },
  mobileMostBookedSection: {
    marginBottom: 20,
  },
  mobileMostBookedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'left',
    paddingHorizontal: 12,
  },
  mobileMostBookedScrollContainer: {
    paddingHorizontal: 12,
  },
  mobileServiceCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mobileServiceImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  mobileServiceContent: {
    padding: 16,
  },
  mobileServiceTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  mobileServiceRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  mobileStarIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  mobileRatingText: {
    fontSize: 12,
    color: '#666',
  },
  mobileServicePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  mobileBannerSection: {
    marginBottom: 20,
  },
  mobileBannerScrollContainer: {
    paddingHorizontal: 12,
  },
  mobileBannerCard: {
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mobileBannerImage: {
    width: 280,
    height: 160,
    borderRadius: 12,
  },
  mobileReferSection: {
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  mobileReferCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  mobileReferContent: {
    flex: 1,
    marginRight: 16,
  },
  mobileReferTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  mobileReferSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  mobileReferDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  mobileReferButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  mobileReferButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  mobileReferImageContainer: {
    width: 120,
    height: 120,
  },
  mobileReferImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  mobileBottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  mobileNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  mobileNavItemActive: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  mobileNavIcon: {
    fontSize: 20,
    marginBottom: 2,
    color: '#000',
  },
  mobileNavText: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  mobileCategoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default PosterHomeScreen; 