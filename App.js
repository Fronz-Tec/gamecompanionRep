import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native-web';
// import Login from './components/login'
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import {store} from "./components/bluetooth/configureStore";
import {Button, SafeAreaView} from "react-native";
import {bluetoothPeripheralsFound} from "./components/bluetooth/bluetoothReducer";
// import OwnReview from "./components/review/ownReview";

export default function App() {

  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  )



//     let alreadyLoggedIn = false;
//
//     alreadyLoggedIn = async () => {
//         try {
//             const value = await AsyncStorage.getItem("@username_input");
//
//             if (value !== null) {
//                 alreadyLoggedIn = true;
//             }
//         } catch (e) {
//             alert('Failed to fetch the input from storage');
//         }
//     };
//
//
//     //if no username_input stored value, login screen is shown, else app view is shown
//   if(!alreadyLoggedIn){
//     return (
//         <View>
//             <p>ABC</p>
//             {/*<Login></Login>*/}
//         </View>
//
//     );
//   }else{
//     return (
//         <View style={styles.container}>
//           <Text>Open up App.js to start working on your app!</Text>
//           <StatusBar style="auto" />
//           {/*<OwnReview></OwnReview>*/}
//         </View>
//     );
//   }
}

const Home = () =>{
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello world</Text>
            <Button
                title="Press Here"
                onPress={() => {
                    dispatch(bluetoothPeripheralsFound(['AA:DD:CC:DD']));
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
