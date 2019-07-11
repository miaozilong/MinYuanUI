import styles from './index.css';
import {Button} from '@/components/Button'
import {Icon} from '@/components/Icon'
import React from 'react'

export default class ButtonDemo extends React.Component {
    render() {
        return (
            <Button icon='tableEdit'> 测试</Button>
        );
    }
}
