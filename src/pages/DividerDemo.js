import styles from './index.css';
import {Divider} from '../components/Divider'
import React from 'react'

export default class IconDemo extends React.Component {
    render() {
        return (
            <div style={{width: 580}}>
                <Divider orientation='left'>文字</Divider>
            </div>
        );
    }
}


