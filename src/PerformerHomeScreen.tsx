import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Platform, Dimensions } from 'react-native';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';

const dummyTasks = [
  {
    id: 1,
    title: 'Replace a kitchen tap',
    location: 'Hyderabad',
    date: 'Tomorrow',
    time: 'Anytime',
    price: 'RS 249',
    status: 'Open',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    title: 'Plumber (leakage fix, pipe installation, bathroom fitting)',
    location: 'Hyderabad',
    date: 'Before 14 July',
    time: 'Anytime',
    price: 'RS 149',
    status: 'Open',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 3,
    title: 'Home Deep Cleaning',
    location: 'Basheerbagh',
    date: 'Tomorrow',
    time: 'Anytime',
    price: 'RS 249',
    status: 'Open',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 4,
    title: 'Sofa & Carpet Cleaning',
    location: 'Hyderabad',
    date: 'Flexible',
    time: '',
    price: 'RS 560',
    status: 'Open',
    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
];

const PerformerHomeScreen = () => {
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

  // Mobile layout (Android, iOS, and mobile web)
  if (isMobileView) {
    return (
      <View style={styles.mobileContainer}>
        {/* Header */}
        <View style={styles.mobileHeader}>
          <View style={styles.mobileLocationContainer}>
            <Text style={styles.mobileLocationTitle}>Hyderabad Deccan Railway Station</Text>
            <Text style={styles.mobileLocationSubtitle}>Red Hills-Malakpet-Hyderabad...</Text>
          </View>
          <View style={styles.mobileLogoCircle}>
            <Image source={require('../assets/images/logo.png')} style={styles.mobileLogoImage} />
            {/* <View style={styles.mobileCheckmark}>
              <Text style={styles.mobileCheckmarkText}>✓</Text>
            </View> */}
          </View>
        </View>

        {/* Search and Filters */}
        <View style={styles.mobileSearchRow}>
                  <View style={styles.mobileSearchContainer}>
          <Text style={styles.mobileSearchIcon}>🔍</Text>
          <TextInput style={styles.mobileSearchInput} placeholder="" />
        </View>
          <TouchableOpacity style={styles.mobileFilterBtn}>
            <Text style={styles.mobileFilterText}>Category ▼</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileFilterBtn}>
            <Text style={styles.mobileFilterText}>100km + Hyderabad ▼</Text>
          </TouchableOpacity>
        </View>

        {/* Task List */}
        <ScrollView style={styles.mobileTaskList} contentContainerStyle={{ paddingBottom: 100 }}>
          {dummyTasks.map(task => (
            <View key={task.id} style={styles.mobileTaskCard}>
              <View style={styles.mobileTaskContent}>
                <View style={styles.mobileTaskLeft}>
                  <Text style={styles.mobileTaskTitle}>{task.title}</Text>
                                     <View style={styles.mobileTaskMetaRow}>
                     <Text style={styles.mobileTaskMeta}>• {task.location}</Text>
                     <Text style={styles.mobileTaskMeta}>• {task.date}</Text>
                     {task.time ? <Text style={styles.mobileTaskMeta}>• {task.time}</Text> : null}
                   </View>
                  <Text style={styles.mobileTaskStatus}>{task.status}</Text>
                </View>
                <View style={styles.mobileTaskRight}>
                  <Text style={styles.mobileTaskPrice}>{task.price}</Text>
                  <Image source={{ uri: task.avatar }} style={styles.mobileAvatar} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.mobileBottomNav}>
                   <TouchableOpacity style={[styles.mobileNavItem, styles.mobileNavActive]}>
           <Text style={[styles.mobileNavIcon, styles.mobileNavIconActive]}>⌂</Text>
           <Text style={[styles.mobileNavLabel, styles.mobileNavLabelActive]}>Home</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.mobileNavItem}>
           <Text style={styles.mobileNavIcon}>☐</Text>
           <Text style={styles.mobileNavLabel}>Tasks</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.mobileNavItem}>
           <Text style={styles.mobileNavIcon}>＋</Text>
           <Text style={styles.mobileNavLabel}>Post / Discover</Text>
         </TouchableOpacity>
                   <TouchableOpacity style={styles.mobileNavItem}>
            <Text style={styles.mobileNavIcon}>○</Text>
            <Text style={styles.mobileNavLabel}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileNavItem}>
            <Text style={styles.mobileNavIcon}>⚪</Text>
            <Text style={styles.mobileNavLabel}>Account</Text>
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
        <View style={{ flex: 1 }}>
          <Text style={styles.locationTitle}>Hyderabad Deccan Railway Station</Text>
          <Text style={styles.locationSubtitle}>Red Hills-Malakpet-Hyderabad...</Text>
        </View>
        <TouchableOpacity style={styles.logoCircle}>
          <Image source={require('../assets/images/logo.png')} style={{ width: 32, height: 32 }} />
        </TouchableOpacity>
      </View>
      {/* Search and Filters */}
      <View style={styles.searchRow}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>Category ▼</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>100km + Hyderbad ▼</Text></TouchableOpacity>
      </View>
      {/* Task List */}
      <ScrollView style={styles.taskList} contentContainerStyle={{ paddingBottom: 80 }}>
        {dummyTasks.map(task => (
          <View key={task.id} style={styles.taskCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                                 <View style={styles.taskMetaRow}>
                   <Text style={styles.taskMeta}>• {task.location}</Text>
                   <Text style={styles.taskMeta}>• {task.date}</Text>
                   {task.time ? <Text style={styles.taskMeta}>• {task.time}</Text> : null}
                 </View>
                <Text style={styles.taskStatus}>{task.status}</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.taskPrice}>{task.price}</Text>
                <Image source={{ uri: task.avatar }} style={styles.avatar} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
               <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>⌂</Text><Text style={styles.navLabel}>Home</Text></TouchableOpacity>
       <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>☐</Text><Text style={styles.navLabel}>Tasks</Text></TouchableOpacity>
       <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>＋</Text><Text style={styles.navLabel}>Post / Discover</Text></TouchableOpacity>
       <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>○</Text><Text style={styles.navLabel}>Chat</Text></TouchableOpacity>
       <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>⚪</Text><Text style={styles.navLabel}>Account</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Desktop web styles (existing)
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK,
  },
  locationSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: PRIMARY_YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 8,
  },
  filterBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 4,
  },
  filterText: {
    color: DARK,
    fontSize: 14,
  },
  taskList: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  taskCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 4,
  },
  taskMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    gap: 8,
  },
  taskMeta: {
    fontSize: 13,
    color: '#888',
    marginRight: 8,
  },
  taskStatus: {
    color: PRIMARY_YELLOW,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 2,
  },
  taskPrice: {
    color: DARK,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginTop: 2,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 22,
    color: '#000',
  },
  navLabel: {
    fontSize: 11,
    color: DARK,
    marginTop: 2,
  },

  // Mobile styles (new)
  mobileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mobileLocationContainer: {
    flex: 1,
  },
  mobileLocationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 2,
  },
  mobileLocationSubtitle: {
    fontSize: 13,
    color: '#888',
  },
  mobileLogoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    // backgroundColor: PRIMARY_YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mobileLogoImage: {
    width: 32,
    height: 32,
  },
  mobileCheckmark: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileCheckmarkText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  mobileSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 8,
  },
  mobileSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  mobileSearchIcon: {
    fontSize: 16,
    color: '#000',
    marginRight: 8,
  },
  mobileSearchInput: {
    flex: 1,
    fontSize: 14,
    color: DARK,
  },
  mobileFilterBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  mobileFilterText: {
    color: DARK,
    fontSize: 13,
  },
  mobileTaskList: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  mobileTaskCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  mobileTaskContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mobileTaskLeft: {
    flex: 1,
    marginRight: 12,
  },
  mobileTaskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 8,
    lineHeight: 20,
  },
  mobileTaskMetaRow: {
    marginBottom: 8,
  },
  mobileTaskMeta: {
    fontSize: 13,
    color: '#888',
    marginBottom: 2,
  },
  mobileTaskStatus: {
    color: PRIMARY_YELLOW,
    fontSize: 13,
    fontWeight: 'bold',
  },
  mobileTaskRight: {
    alignItems: 'center',
  },
  mobileTaskPrice: {
    color: DARK,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  mobileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  mobileBottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  mobileNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  mobileNavActive: {
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  mobileNavIcon: {
    fontSize: 20,
    color: '#000',
    marginBottom: 2,
  },
  mobileNavIconActive: {
    color: '#000',
  },
  mobileNavLabel: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
  },
  mobileNavLabelActive: {
    color: DARK,
    fontWeight: '500',
  },
});

export default PerformerHomeScreen; 