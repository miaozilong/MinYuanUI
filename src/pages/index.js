import styles from './index.css';
import {Modal} from '@/components/Modal'

export default function() {
  return (
    <div className={styles.normal}>
        <Modal visible={true} tips={"test"} title={'asd'}></Modal>
    </div>
  );
}
