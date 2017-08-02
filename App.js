import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Card from './card';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {profiles.reverse().map((profile, i) => {
          return (
            <Card
            key={i}
            profile={profile}
          />
          )
        })}  
      </View>
    );
  }
}

const profiles = [
  {
    imageUri: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/s480x480/12240029_10153607856526488_987321964405759845_n.jpg?oh=1025a7ad10f5ff0640d68ed57050fe87&oe=59FD4EDA',
    name: 'Raleigh Times',
    distance: '0.0',
    rating: '0/0',
  },
  {
    imageUri: 'http://bbqgeek.typepad.com/.a/6a00d834561f7869e20120a8bfb3ac970b-800wi',
    name: 'The Pit',
    distance: '0.0',
    rating: '0/0',
  },
  {
    imageUri: 'https://www.nctriangledining.com/wp-content/uploads/2014/03/HibernianGlenwood-Front.jpg',
    name: 'Hibernian Irish Pub & Restaurant',
    distance: '0.0',
    rating: '4.3',
  },
  {
    imageUri: 'http://ac-restaurants.com/cms/wp-content/themes/ACR/library/images/pooles-background2.jpg',
    name: 'Poole\'s Diner',
    distance: '0.0',
    rating: '4.2',
  },
]