
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import styles from './layout.module.css';

const PageLayout = ({ children }) => {


    return (
        <div className={styles.plcontainer}>
            <aside className={styles.sidebarLeft}><LeftSideBar /></aside>
            <main className={styles.plcontent}>{children}</main>
            <aside className={styles.sidebarRight}><RightSideBar /></aside>
        </div>
    );
};

export default PageLayout;
