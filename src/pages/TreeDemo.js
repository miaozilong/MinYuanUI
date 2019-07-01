import styles from './index.css';
import {Tree} from '@/components/Tree'
import React from 'react'

export default class Demo extends React.Component {


    render() {
        return (
            <div className={styles.normal}>
                <Tree blockNode />
            </div>
        );
    }

}
