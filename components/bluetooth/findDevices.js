import {Component} from "react";
import BleManager from 'react-native-ble-manager';
import {NativeAppEventEmitter, NativeModules} from 'react-native'
import * as bleManagerEmitter from "@reduxjs/toolkit";

const BleManagerModule = NativeModules.BleManager;
BleManager.start();

class FindDevices extends Component{

    componentDidMount() {

        //Trigger event when Peripheral is found
        NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral',(data) =>
        {
            console.log(data) // Name of peripheral device
        });

        this.handlerDiscover = bleManagerEmitter.addListener(
            'BleManagerDiscoverPeripheral',
            //call function for handling of disovering new peripheral
            this.handleDiscoverPeripheral
        );

        //write the peripherals into a Map list
        this.state = {
            peripherals: new Map(),
        };



        this.handlerStop = bleManagerEmitter.addListener(
            'BleManagerStopScan',
            this.handleStopScan
        );


        this.scanForDevices();
    }

    //BleManager scans for devices
    scanForDevices(){
        BleManager.scan([], 15);
    }

    handleDiscoverPeripheral = (peripheral) => {
        const { peripherals } = this.state;

        if (peripheral.name) {
            peripherals.set(peripheral.id, peripheral.name);
        }
        this.setState({ peripherals });
    };

    handleStopScan = () => {
        console.log('Scan is stopped. Devices: ', this.state.peripherals);
    }



}