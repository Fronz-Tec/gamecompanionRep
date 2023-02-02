import {Component } from "react";
import * as BluetoothStateManager from "react-native";
import Notificator from "../notification/notificator";

class ReceiveReviews extends Component (){
    /*ToDo: Make function that can communicate between two devices
        Need to search for other bluetooth devices constantly, making a connection in the  background
        with another device, and send or receive data from it.
        I don't even know if that's possible. A master-master connection needs to be established with any
        bluetooth device that has the app running in the background.
        Maybe if I had more time to plan and develop, the app could have been possible, or atleast another solution
        could have been considered

     */

    //TODO: if a review is received over Bluetooth, send a pushup notification
    if(){
        Notificator();
    }
}


//ToDo: Button to enable and disable bluetooth connection
function bluetoothButtonRender(status = false){

    let buttonText = "Activate";

    if(status){
        buttonText = "Deactivate";
    }else{
        buttonText = "Activate";
    }


    return(
        <View>
            <button onClick={toggleBluetooth({buttonText})} id={"bluetoothToggle"}>{buttonText}</button>
        </View>
    );
}

function toggleBluetooth(buttonText){
    //ToDo: enable and disable bluetooth
    if(buttonText == "Activate"){
        BluetoothStateManager.enable();
    }else{
        BluetoothStateManager.disable();
    }

}