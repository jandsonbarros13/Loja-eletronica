import { RiWhatsappFill } from 'react-icons/ri'
import styles from './Fale.module.scss'
export default function Fale() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.capa}><h1 className={styles.titulo}>Fale com a gente, gostariamos de saber sua opnião</h1></div>
                <div className={styles.pagina}>
                    <h1 className={styles.ti1}>Diga nos a sua duvida</h1>
                    <h4 className={styles.sub}>Respondemos geralmente em pouco tempo</h4>
                    <div className={styles.contatos}>
                        <div className={styles.capital}>
                            <h1>Capital e região metropolitana</h1>
                            <h3>(85)3333-7878</h3>
                            <h1>Ou ligue gratis</h1>
                            <h3>0800-969-4040</h3>
                            <button className={styles.button}><a href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank"><RiWhatsappFill></RiWhatsappFill></a></button>
                        </div>
                        <div className={styles.interior}>
                            <h1>Interior litoral e demais regiões</h1>
                            <h3>(88)3333-8787</h3>
                            <h1>Ou ligue gratis</h1>
                            <h3>0800-789-5050</h3>
                            <button className={styles.button}><a href="https://web.whatsapp.com/send?phone=5599111112222" target="_blank"><RiWhatsappFill></RiWhatsappFill></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}