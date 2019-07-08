import styles from './index.css';
import {Icon} from '@/components/Icon'
import React from 'react'

export default class IconDemo extends React.Component {
    render() {
        return (
            <Icon
                component='tableEdit'
                focuschange
                style={{fontSize:30}}
            />
        );
    }
}
