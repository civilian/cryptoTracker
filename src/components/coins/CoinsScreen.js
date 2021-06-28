import React, { Component } from 'react';
import {View, Text, Pressable } from 'react-native';

class CoinsScreen extends Component {

    handelPress = () => {
        console.log("go to detail", this.props)
    }

    render(){
        return (
            <View>
                <Text>Coins Screen</Text>
                <Pressable onPress={this.handelPress}>
                    <Text>Ir a detail</Text>
                </Pressable>
            </View>
        );
    }

}

export default CoinsScreen;