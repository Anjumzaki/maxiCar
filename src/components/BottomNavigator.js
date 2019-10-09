import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 1,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music', color: '#0095cd' },
      { key: 'albums', title: 'Albums', icon: 'album', color: '#0095cd' },
      { key: 'recents', title: 'Recents', icon: 'history', color: '#0095cd' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}