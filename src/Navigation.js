
import React from "react"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import PayButton from './components/PayButton'
import HomeScreen from './screens/Home'
import WalletScreen from './screens/Wallet'
import PayScreen from './screens/Pay'
const Tab = createBottomTabNavigator()
export default function Navigation(){
  const icons = {
    Home: {
      lib: AntDesign,
      name:'home',
    },
    Wallet: {
      lib: AntDesign,
      name:'creditcard',
    },
    Notifications: {
      lib: Ionicons,
      name:'ios-notifications-outline',
    },
   Setthings : {
      lib: Ionicons,
      name:'ios-settings',
    },
  }
  return(
    <Tab.Navigator screenOptions={({route, navigation}) => ({
      tabBarIcon: ({color, size, focused}) => {
        if(route.name === 'Pay'){
          return (


          <PayButton  onPress={() => navigation.navigate('Pay')} focused={focused} />
          )
        }
        const {lib: Icon, name} = icons[route.name]
        return <Icon name={name} size={size} color={color} />
      },
    })}
      
    tabBarOptions={{
      style:{
        backgroundColor: '#131418',
        borderTopColor:'#f1f1f1',
      },
        activeTintColor:'#fff',
        inactiveTintColor: '#92929c'
    }}
    >
      <Tab.Screen name="Home" options={{ title: 'Inicio', }} component={HomeScreen} />
        <Tab.Screen name="Wallet" options={{ title: 'Carteira', }} component={WalletScreen} />
        <Tab.Screen name="Pay" options={{ title: '', }} component={PayScreen} />
        <Tab.Screen name="Notifications" options={{ title: 'Notificacoes', }} component={PayScreen} />
        <Tab.Screen name="Setthings" options={{ title: 'Opcoes', }} component={PayScreen} />

    </Tab.Navigator>
  )

}

