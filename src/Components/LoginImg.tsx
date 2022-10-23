import LogoImgComponent from '../assets/undraw_About_us_page_re_2jfm 1.svg'
import styles from './LoginImg.module.css'

export function LoginImg(){
    return (
        <div className={styles.divider}>
            <img src={LogoImgComponent} alt="" />
        </div>
    )
}