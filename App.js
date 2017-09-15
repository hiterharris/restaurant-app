import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Card from './card';
import profiles from './data/profiles.json';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('/Users/HiterHarrisIV/Desktop/restaurant-app/assets/images/Logo.png')}
          />
        </View>
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
      </View>
    );
  }
}

// const profiles = [
//   {
//     imageUri: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-0/s480x480/12240029_10153607856526488_987321964405759845_n.jpg?oh=1025a7ad10f5ff0640d68ed57050fe87&oe=59FD4EDA',
//     name: 'Raleigh Times',
//     distance: '0.0',
//     rating: '0/0',
//   },
//   {
//     imageUri: 'http://bbqgeek.typepad.com/.a/6a00d834561f7869e20120a8bfb3ac970b-800wi',
//     name: 'The Pit',
//     distance: '0.0',
//     rating: '0/0',
//   },
//   {
//     imageUri: 'https://www.nctriangledining.com/wp-content/uploads/2014/03/HibernianGlenwood-Front.jpg',
//     name: 'Hibernian Irish Pub & Restaurant',
//     distance: '0.0',
//     rating: '4.3',
//   },
//   {
//     imageUri: 'http://ac-restaurants.com/cms/wp-content/themes/ACR/library/images/pooles-background2.jpg',
//     name: 'Poole\'s Diner',
//     distance: '0.0',
//     rating: '4.2',
//   },
//   {
//     imageUri: 'http://downtownraleigh.liveworkplay.com/system/photos/2130/large/1609722_461732593967204_5669102398795330920_n.jpg',
//     name: 'Clouds Brewing',
//     distance: '0.0',
//     rating: '4.3',
//   },
//   {
//     imageUri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/69/00/a5690048a2b973d88b080bfa2c232ab5--american-kitchen-italian-foods.jpg',
//     name: 'Gravy',
//     distance: '0.0',
//     rating: '4.2',
//   },
//   {
//     imageUri: 'https://media-cdn.tripadvisor.com/media/photo-s/02/fa/e6/66/quirky-goth-style-decor.jpg',
//     name: 'Remedy Diner',
//     distance: '0.0',
//     rating: '4.3',
//   },
//   {
//     imageUri: 'https://www.nctriangledining.com/wp-content/uploads/2012/09/Sitti-Side.jpg',
//     name: 'Sitti',
//     distance: '0.0',
//     rating: '4.5',
//   },
//   {
//     imageUri: 'https://s3-media2.fl.yelpcdn.com/bphoto/gj9gyBGKWHiGckTi4xCs1w/ls.jpg',
//     name: 'The Big Easy',
//     distance: '0.0',
//     rating: '3.9',
//   },
//   {
//     imageUri: 'http://www.newraleigh.com/images/made/images/articles11/beasleys-front_704_446_80_s.jpg',
//     name: 'Beasley\'s Chicken + Honey',
//     distance: '0.0',
//     rating: '4.4',
//   },
//   {
//     imageUri: 'https://www.nctriangledining.com/wp-content/uploads/2016/01/RaleighBeerGarden-FrontDay.jpg',
//     name: 'Raleigh Beer Garden',
//     distance: '0.0',
//     rating: '4.2',
//   },
// ]

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#BD1802',
    flex: 1,
    top: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
})