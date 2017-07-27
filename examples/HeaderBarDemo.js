/**
 * Created by 孟庆东 on 2017/7/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native';
import HeaderBar from 'react-native-header-bar'

export default class PwdInputDemo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderBar
                    containerStyle={{backgroundColor:'red'}}
                    title="我是title"/>

                <HeaderBar
                    containerStyle={{backgroundColor:'red',height:50,marginTop:20}}
                    title="我是title"/>

                <HeaderBar
                    containerStyle={{backgroundColor:'black',marginTop:20}}
                    title="我是title"
                    titleStyle={{color:'white',fontSize:17}}/>

                <HeaderBar
                    containerStyle={{backgroundColor:'blue',marginTop:20}}
                    title="我是title"
                    titleStyle={{color:'red',fontSize:17}}
                    leftText="Back"
                    leftTextStyle={{color:'red',fontSize:15,paddingLeft:12,paddingRight:12}}
                    onLeftPress={()=>{
                        Alert.alert('点击左侧');
                    }}/>
                <HeaderBar
                    containerStyle={{backgroundColor:'blue',marginTop:20}}
                    title="我是title"
                    titleStyle={{color:'red',fontSize:17}}
                    leftImageSource={require('./back.png')}
                    leftImageStyle={{width:20,height:16,marginLeft:12,marginRight:12}}
                    onLeftPress={()=>{
                        Alert.alert('点击左侧');
                    }}/>

                <HeaderBar
                    containerStyle={{backgroundColor:'blue',marginTop:20}}
                    title="我是title"
                    titleStyle={{color:'red',fontSize:17}}
                    leftImageSource={require('./back.png')}
                    leftImageStyle={{width:20,height:16,marginLeft:12,marginRight:12}}
                    onLeftPress={()=>{Alert.alert('点击左侧');}}
                    rightText="右侧"
                    rightTextStyle={{color:'yellow',fontSize:15,paddingLeft:12,paddingRight:12}}
                    onRightPress={()=>{Alert.alert('点击右侧');}}
                />
                <HeaderBar
                    containerStyle={{backgroundColor:'blue',marginTop:20}}
                    title="我是title"
                    titleStyle={{color:'red',fontSize:17}}
                    leftImageSource={require('./back.png')}
                    leftImageStyle={{width:20,height:16,marginLeft:12,marginRight:12}}
                    onLeftPress={()=>{Alert.alert('点击左侧');}}
                    rightImageSource={require('./share.png')}
                    rightImageStyle={{width:20,height:20,marginLeft:12,marginRight:12}}
                    onRightPress={()=>{Alert.alert('点击右侧');}}
                />
            </View>
        );
    }
}