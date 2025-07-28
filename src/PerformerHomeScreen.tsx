import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

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
                  <Text style={styles.taskMeta}>📍 {task.location}</Text>
                  <Text style={styles.taskMeta}>📅 {task.date}</Text>
                  {task.time ? <Text style={styles.taskMeta}>⏰ {task.time}</Text> : null}
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
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>🏠</Text><Text style={styles.navLabel}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>📋</Text><Text style={styles.navLabel}>Tasks</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>＋</Text><Text style={styles.navLabel}>Post / Discover</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>💬</Text><Text style={styles.navLabel}>Chat</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navIcon}>👤</Text><Text style={styles.navLabel}>Account</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: PRIMARY_YELLOW,
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
    color: DARK,
  },
  navLabel: {
    fontSize: 11,
    color: DARK,
    marginTop: 2,
  },
});

export default PerformerHomeScreen; 