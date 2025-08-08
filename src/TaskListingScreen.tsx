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
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const PRIMARY_BLUE = '#2563eb';

const TaskListingScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock task data
  const tasks = [
    {
      id: 1,
      title: 'Replace a kitchen tap',
      location: 'Hyderabad',
      date: 'Tomorrow',
      time: 'Anytime',
      price: '₹249',
      poster: 'M',
      posterAvatar: '👨‍🦱',
    },
    {
      id: 2,
      title: 'Plumber (leakage fix, pipe installation, bathroom fitting)',
      location: 'Hyderabad',
      date: 'Before 14 July',
      time: 'Anytime',
      price: '₹149',
      poster: 'R',
      posterAvatar: '👨‍💼',
    },
    {
      id: 3,
      title: 'Home Deep Cleaning',
      location: 'Basheerbagh',
      date: 'Tomorrow',
      time: 'Anytime',
      price: '₹249',
      poster: 'S',
      posterAvatar: '👨',
    },
    {
      id: 4,
      title: 'TV Mounting Service',
      location: 'Hyderabad',
      date: 'This week',
      time: 'Afternoon',
      price: '₹399',
      poster: 'A',
      posterAvatar: '👨‍🔧',
    },
    {
      id: 5,
      title: 'Garden Maintenance',
      location: 'Secunderabad',
      date: 'Next week',
      time: 'Morning',
      price: '₹199',
      poster: 'K',
      posterAvatar: '👨‍🌾',
    },
  ];

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

  const handleTaskClick = (taskId: number) => {
    navigation.navigate('TaskDetails');
  };

  const handleOpenClick = (taskId: number) => {
    navigation.navigate('TaskDetails');
  };

  // Mobile layout
  if (isMobileView) {
    return (
      <View style={styles.mobileContainer}>
        {/* Header */}
        <View style={styles.mobileHeader}>
          <View style={styles.mobileHeaderTop}>
            <View style={styles.mobileLogoContainer}>
              <View style={styles.mobileLogoCircle}>
                <Text style={styles.mobileLogoHand}>✋</Text>
                <Text style={styles.mobileLogoCheck}>✓</Text>
              </View>
              <Text style={styles.mobileLogoText}>Extrahand</Text>
            </View>
            <TouchableOpacity 
              style={styles.mobilePostButton}
              onPress={() => navigation.navigate('TaskPostingForm')}
            >
              <Text style={styles.mobilePostButtonText}>Post a Task</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.mobileNavLinks}>
            <TouchableOpacity style={styles.mobileNavLink}>
              <Text style={styles.mobileNavLinkText}>Browse Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileNavLink}>
              <Text style={styles.mobileNavLinkText}>My Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileNavLink}>
              <Text style={styles.mobileNavLinkText}>List my services</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.mobileProfileButton}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.mobileProfileIcon}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search and Filters */}
        <View style={styles.mobileSearchSection}>
          <View style={styles.mobileSearchContainer}>
            <Text style={styles.mobileSearchIcon}>🔍</Text>
            <TextInput
              style={styles.mobileSearchInput}
              placeholder="Search for a task"
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999"
            />
          </View>
          
          <View style={styles.mobileFilters}>
            <TouchableOpacity style={styles.mobileFilterButton}>
              <Text style={styles.mobileFilterText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileFilterButton}>
              <Text style={styles.mobileFilterText}>50km Adelaide SA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileFilterButton}>
              <Text style={styles.mobileFilterText}>Any price</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileFilterButton}>
              <Text style={styles.mobileFilterText}>Other filters (1)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileFilterButton}>
              <Text style={styles.mobileFilterText}>Sort</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Task List */}
        <ScrollView style={styles.mobileTaskList} showsVerticalScrollIndicator={false}>
          <Text style={styles.mobileSectionTitle}>Available Tasks</Text>
          {tasks.map((task) => (
            <TouchableOpacity 
              key={task.id} 
              style={styles.mobileTaskCard}
              onPress={() => handleTaskClick(task.id)}
            >
              <View style={styles.mobileTaskHeader}>
                <Text style={styles.mobileTaskTitle}>{task.title}</Text>
                <View style={styles.mobileTaskPriceContainer}>
                  <Text style={styles.mobileTaskPrice}>{task.price}</Text>
                  <View style={styles.mobileTaskPosterAvatar}>
                    <Text style={styles.mobileTaskPosterText}>{task.poster}</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.mobileTaskDetails}>
                <View style={styles.mobileTaskDetail}>
                  <Text style={styles.mobileTaskDetailIcon}>📍</Text>
                  <Text style={styles.mobileTaskDetailText}>{task.location}</Text>
                </View>
                <View style={styles.mobileTaskDetail}>
                  <Text style={styles.mobileTaskDetailIcon}>📅</Text>
                  <Text style={styles.mobileTaskDetailText}>{task.date}</Text>
                </View>
                <View style={styles.mobileTaskDetail}>
                  <Text style={styles.mobileTaskDetailIcon}>⏰</Text>
                  <Text style={styles.mobileTaskDetailText}>{task.time}</Text>
                </View>
              </View>
              
              <TouchableOpacity 
                style={styles.mobileOpenButton}
                onPress={() => handleOpenClick(task.id)}
              >
                <Text style={styles.mobileOpenButtonText}>Open</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  // Desktop layout
  return (
    <View style={styles.desktopContainer}>
      {/* Header */}
      <View style={styles.desktopHeader}>
        <View style={styles.desktopHeaderLeft}>
          <View style={styles.desktopLogoContainer}>
            <View style={styles.desktopLogoCircle}>
              <Text style={styles.desktopLogoHand}>✋</Text>
              <Text style={styles.desktopLogoCheck}>✓</Text>
            </View>
            <Text style={styles.desktopLogoText}>Extrahand</Text>
          </View>
        </View>
        
        <View style={styles.desktopHeaderCenter}>
          <TouchableOpacity 
            style={styles.desktopPostButton}
            onPress={() => navigation.navigate('TaskPostingForm')}
          >
            <Text style={styles.desktopPostButtonText}>Post a Task</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.desktopHeaderRight}>
          <TouchableOpacity style={styles.desktopNavLink}>
            <Text style={styles.desktopNavLinkText}>Browse Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.desktopNavLink}>
            <Text style={styles.desktopNavLinkText}>My Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.desktopNavLink}>
            <Text style={styles.desktopNavLinkText}>List my services</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.desktopProfileButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.desktopProfileIcon}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search and Filters */}
      <View style={styles.desktopSearchSection}>
        <View style={styles.desktopSearchContainer}>
          <Text style={styles.desktopSearchIcon}>🔍</Text>
          <TextInput
            style={styles.desktopSearchInput}
            placeholder="Search for a task"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>
        
        <View style={styles.desktopFilters}>
          <TouchableOpacity style={styles.desktopFilterButton}>
            <Text style={styles.desktopFilterText}>Category</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.desktopFilterButton}>
            <Text style={styles.desktopFilterText}>50km Adelaide SA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.desktopFilterButton}>
            <Text style={styles.desktopFilterText}>Any price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.desktopFilterButton}>
            <Text style={styles.desktopFilterText}>Other filters (1)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.desktopFilterButton}>
            <Text style={styles.desktopFilterText}>Sort</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.desktopMainContent}>
        {/* Left Side - Available Tasks */}
        <View style={styles.desktopLeftSection}>
          <Text style={styles.desktopSectionTitle}>Available Tasks</Text>
          <ScrollView style={styles.desktopTaskList} showsVerticalScrollIndicator={false}>
            {tasks.map((task) => (
              <TouchableOpacity 
                key={task.id} 
                style={styles.desktopTaskCard}
                onPress={() => handleTaskClick(task.id)}
              >
                <View style={styles.desktopTaskHeader}>
                  <Text style={styles.desktopTaskTitle}>{task.title}</Text>
                  <View style={styles.desktopTaskPriceContainer}>
                    <Text style={styles.desktopTaskPrice}>{task.price}</Text>
                    <View style={styles.desktopTaskPosterAvatar}>
                      <Text style={styles.desktopTaskPosterText}>{task.poster}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.desktopTaskDetails}>
                  <View style={styles.desktopTaskDetail}>
                    <Text style={styles.desktopTaskDetailIcon}>📍</Text>
                    <Text style={styles.desktopTaskDetailText}>{task.location}</Text>
                  </View>
                  <View style={styles.desktopTaskDetail}>
                    <Text style={styles.desktopTaskDetailIcon}>📅</Text>
                    <Text style={styles.desktopTaskDetailText}>{task.date}</Text>
                  </View>
                  <View style={styles.desktopTaskDetail}>
                    <Text style={styles.desktopTaskDetailIcon}>⏰</Text>
                    <Text style={styles.desktopTaskDetailText}>{task.time}</Text>
                  </View>
                </View>
                
                <TouchableOpacity 
                  style={styles.desktopOpenButton}
                  onPress={() => handleOpenClick(task.id)}
                >
                  <Text style={styles.desktopOpenButtonText}>Open</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {/* Right Side - Task Locations Map */}
        <View style={styles.desktopRightSection}>
          <Text style={styles.desktopSectionTitle}>Task Locations</Text>
          <View style={styles.desktopMapContainer}>
            <View style={styles.desktopMapPlaceholder}>
              <Text style={styles.desktopMapText}>Map View</Text>
              <Text style={styles.desktopMapSubtext}>Hyderabad, India</Text>
              <Text style={styles.desktopMapSubtext}>Task locations would be displayed here</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Mobile styles
  mobileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobileHeader: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mobileHeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  mobileLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileLogoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: PRIMARY_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative',
  },
  mobileLogoHand: {
    fontSize: 16,
    color: '#fff',
  },
  mobileLogoCheck: {
    position: 'absolute',
    top: -2,
    right: -2,
    fontSize: 12,
    color: '#fff',
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 8,
    width: 16,
    height: 16,
    textAlign: 'center',
    lineHeight: 16,
  },
  mobileLogoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  mobilePostButton: {
    backgroundColor: PRIMARY_YELLOW,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  mobilePostButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  mobileNavLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  mobileNavLink: {
    paddingVertical: 5,
  },
  mobileNavLinkText: {
    fontSize: 14,
    color: '#666',
  },
  mobileProfileButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileProfileIcon: {
    fontSize: 18,
  },
  mobileSearchSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mobileSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  mobileSearchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  mobileSearchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  mobileFilters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  mobileFilterButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  mobileFilterText: {
    fontSize: 12,
    color: '#666',
  },
  mobileTaskList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mobileSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 15,
  },
  mobileTaskCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mobileTaskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  mobileTaskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    marginRight: 10,
  },
  mobileTaskPriceContainer: {
    alignItems: 'flex-end',
  },
  mobileTaskPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  mobileTaskPosterAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileTaskPosterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  mobileTaskDetails: {
    marginBottom: 10,
  },
  mobileTaskDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  mobileTaskDetailIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  mobileTaskDetailText: {
    fontSize: 14,
    color: '#666',
  },
  mobileOpenButton: {
    alignSelf: 'flex-start',
  },
  mobileOpenButtonText: {
    color: PRIMARY_BLUE,
    fontSize: 14,
    fontWeight: '500',
  },

  // Desktop styles
  desktopContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  desktopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  desktopHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desktopLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desktopLogoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: PRIMARY_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative',
  },
  desktopLogoHand: {
    fontSize: 16,
    color: '#fff',
  },
  desktopLogoCheck: {
    position: 'absolute',
    top: -2,
    right: -2,
    fontSize: 12,
    color: '#fff',
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 8,
    width: 16,
    height: 16,
    textAlign: 'center',
    lineHeight: 16,
  },
  desktopLogoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  desktopHeaderCenter: {
    flex: 1,
    alignItems: 'center',
  },
  desktopPostButton: {
    backgroundColor: PRIMARY_YELLOW,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  desktopPostButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  desktopHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  desktopNavLink: {
    paddingVertical: 5,
  },
  desktopNavLinkText: {
    fontSize: 16,
    color: '#666',
  },
  desktopProfileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopProfileIcon: {
    fontSize: 20,
  },
  desktopSearchSection: {
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  desktopSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    maxWidth: 600,
  },
  desktopSearchIcon: {
    fontSize: 18,
    marginRight: 15,
  },
  desktopSearchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  desktopFilters: {
    flexDirection: 'row',
    gap: 15,
  },
  desktopFilterButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  desktopFilterText: {
    fontSize: 14,
    color: '#666',
  },
  desktopMainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  desktopLeftSection: {
    flex: 1,
    paddingHorizontal: 60,
    paddingVertical: 30,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  desktopRightSection: {
    flex: 1,
    paddingHorizontal: 60,
    paddingVertical: 30,
  },
  desktopSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  desktopTaskList: {
    flex: 1,
  },
  desktopTaskCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  desktopTaskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  desktopTaskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    marginRight: 15,
  },
  desktopTaskPriceContainer: {
    alignItems: 'flex-end',
  },
  desktopTaskPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  desktopTaskPosterAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: PRIMARY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopTaskPosterText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  desktopTaskDetails: {
    marginBottom: 15,
  },
  desktopTaskDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  desktopTaskDetailIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  desktopTaskDetailText: {
    fontSize: 16,
    color: '#666',
  },
  desktopOpenButton: {
    alignSelf: 'flex-start',
  },
  desktopOpenButtonText: {
    color: PRIMARY_BLUE,
    fontSize: 16,
    fontWeight: '500',
  },
  desktopMapContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopMapPlaceholder: {
    alignItems: 'center',
  },
  desktopMapText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  desktopMapSubtext: {
    fontSize: 16,
    color: '#999',
    marginBottom: 5,
  },
});

export default TaskListingScreen; 