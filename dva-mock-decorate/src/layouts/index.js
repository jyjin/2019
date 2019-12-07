import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Mock + Dva 的使用</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
