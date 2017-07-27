/**
 * Created by 孟庆东 on 2017/3/27.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import Touchable from 'react-native-touchable';


export default class HeaderBar extends Component {

    static propTypes = {
        containerStyle: View.propTypes.style,
        title: PropTypes.string,
        titleStyle: Text.propTypes.style,

        leftText: PropTypes.string,
        leftTextStyle: Text.propTypes.style,
        leftImageSource: Image.propTypes.source,
        leftImageStyle: Image.propTypes.style,

        rightText: PropTypes.string,
        rightTextStyle: Text.propTypes.style,
        rightImageSource: Image.propTypes.source,
        rightImageStyle: Image.propTypes.style,

        onLeftPress: PropTypes.func,
        onRightPress: PropTypes.func,
    };

    createTitle = () => {
        return (
            <Text style={this.props.titleStyle}>{this.props.title}</Text>
        );
    }

    createLeft = () => {
        if (this.props.leftText) {
            //设置leftText属性
            return this.createLeftText();
        } else if (this.props.leftImageSource) {
            //设置leftImage属性
            return this.createLeftImage();
        }
    }

    createLeftText = () => {
        return (
            <Touchable
                style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
                onPress={this.props.onLeftPress}>
                <Text style={this.props.leftTextStyle}>{this.props.leftText}</Text>
            </Touchable>
        );
    }

    createLeftImage = () => {
        return (
            <Touchable
                style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
                onPress={this.props.onLeftPress}>
                <Image
                    style={this.props.leftImageStyle}
                    source={this.props.leftImageSource}
                />
            </Touchable>
        );
    }

    createRight = () => {
        if (this.props.rightText) {
            //设置rightText属性
            return this.createRightText();
        } else if (this.props.rightImageSource) {
            //设置rightImage属性
            return this.createRightImage();
        }
    }

    createRightText = () => {
        return (
            <Touchable
                style={{position: 'absolute', right: 0, bottom: 0, top: 0}}
                onPress={this.props.onRightPress}>
                <Text style={this.props.rightTextStyle}>{this.props.rightText}</Text>
            </Touchable>
        );
    }

    createRightImage = () => {
        return (
            <Touchable
                style={{position: 'absolute', right: 0, bottom: 0, top: 0}}
                onPress={this.props.onRightPress}>
                <Image
                    style={this.props.rightImageStyle}
                    source={this.props.rightImageSource}
                />
            </Touchable>
        );
    }

    render() {
        var props = Object.assign({}, this.props);
        props.style = [styles.container, this.props.containerStyle]
        return (
            <View style={props.style}>
                {this.createTitle()}
                {this.createLeft()}
                {this.createRight()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
});