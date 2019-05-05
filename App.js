import React from 'react'
import { Provider } from 'react-redux'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { Feather, AntDesign } from '@expo/vector-icons'

import { blue, brown, white, gold } from './utils/colors'

import store from './store'

import StatusBar from './components/StatusBar'
import NavigationService from './services/NavigationService'

/* Screens */
import Decks from './screens/Decks'
import Deck from './screens/Deck'
import AddDeck from './screens/AddDeck'
import AddCard from './screens/AddCard'
import Quiz from './screens/Quiz'
/* Screens */

store.subscribe(() => {
  const { cards, decks } = store.getState()
  // console.log('cards', cards)
  // console.log('decks', decks)
})

const DecksStack = createStackNavigator(
  {
    Decks,
    Deck,
    AddCard,
    Quiz,
  },
  {
    initialRouteName: 'Decks',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: brown,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const AddDeckStack = createStackNavigator(
  { AddDeck },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: brown,
      },
      headerTintColor: white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const MainNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Decks: {
        screen: DecksStack,
        navigationOptions: {
          tabBarLabel: 'Decks',
        },
      },
      AddDeck: {
        screen: AddDeckStack,
        navigationOptions: {
          tabBarLabel: 'Add Deck',
        },
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state

          switch (routeName) {
            case 'AddDeck':
              return <AntDesign name="pluscircle" size={25} color={tintColor} />
            default:
              return <Feather name="layers" size={25} color={tintColor} />
          }
        },
      }),
      navigationOptions: {
        header: null,
      },
      tabBarOptions: {
        activeTintColor: gold,
        style: {
          height: 50,
          backgroundColor: brown,
        },
      },
    },
  ),
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={blue} barStyle="light-content" />
        <MainNavigator
          style={{ flex: 1 }}
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider>
    )
  }
}
