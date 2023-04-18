import React from 'react';
import css from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className={`page-footer ${css.footerFixed}`}>
            <p className='text-align center'>Made By Mark</p>
            <div className='align-item center'>
                <a href="https://github.com/MarkJNap" target='#_blank'> <FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/mark-napolitano-02b965247/" target='#_blank'> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.google.com/search?rlz=1C1GCEA_enAU837AU837&sxsrf=APwXEddhyzGBs9Tzik_JNWIHLN3pZOIKUA:1681805689839&q=I+don%27t+have+twitter&spell=1&sa=X&ved=2ahUKEwif8OS1_rL-AhXzTWwGHbL3BmYQBSgAegQIBxAB&biw=1254&bih=1313" target='#_blank'> <FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </footer>
    )
}