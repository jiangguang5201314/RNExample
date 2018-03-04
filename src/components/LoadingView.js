/**
 * User: puti.
 * Time: 2018/1/14 上午9:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {observer} from 'mobx-react'
import Spinkit from 'react-native-spinkit';

@observer
export class LoadingView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.store.isLoading) {
            return null;
        }
        return (
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: this.props.marginTop
                }}>
                {this.props.loadingView ? this.props.loadingView : <Spinkit size={70} type={'9CubeGrid'}/> }
            </View>
        );
    }
}

