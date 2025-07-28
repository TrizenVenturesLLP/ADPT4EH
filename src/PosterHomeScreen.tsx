import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

const PosterHomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const serviceCategories = [
    {
      id: 1,
      title: 'Home Services',
      icon: '🏠',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 2,
      title: 'General Errands & Delivery',
      icon: '📦',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 3,
      title: 'Beauty & Personal Care',
      icon: '🧴',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 4,
      title: 'Installation & Smart Solutions',
      icon: '💡',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 5,
      title: 'Daily Help & Assistants',
      icon: '👤',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 6,
      title: 'Tutoring & Education',
      icon: '📚',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 7,
      title: 'Creative & Technical Tasks',
      icon: '✏️',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 8,
      title: 'Administrative / Office Tasks',
      icon: '📋',
      color: 'rgb(247, 248, 253)',
    },
    {
      id: 9,
      title: 'Event Support',
      icon: '🎉',
      color: 'rgb(247, 248, 253)',
    },
  ];

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

      {/* Service Categories Grid */}
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesGrid}>
          {serviceCategories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                <Text style={styles.categoryIconText}>{category.icon}</Text>
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

        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <View style={styles.featuredCard}>
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>Daily Help & Assistants 24/7</Text>
            </View>
            <View style={styles.featuredImage}>
              <Text style={styles.featuredImagePlaceholder}>👥</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  categoryCard: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconText: {
    fontSize: 24,
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
  featuredSection: {
    marginBottom: 20,
  },
  featuredCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredContent: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  featuredImage: {
    width: 80,
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredImagePlaceholder: {
    fontSize: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
});

export default PosterHomeScreen; 