import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Linking , Icon} from 'react-native';

import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'
   
  export default class Nav extends Component {
    tabs = [
      {
        key: 'games',
        icon: 'gamepad-variant',
        label: 'Games',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'movies-tv',
        icon: 'movie',
        label: 'Movies & TV',
        barColor: '#B71C1C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'music',
        icon: 'music-note',
        label: 'Music',
        barColor: '#E64A19',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      }
    ]
   
    renderIcon = icon => ({ isActive }) => (
      <Icon size={24} color="white" name={icon} />
    )
   
    renderTab = ({ tab, isActive }) => (
      <FullTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )
   
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {/* Your screen contents depending on current tab. */}
          </View>
          <BottomNavigation
            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </View>
      )
    }
  }