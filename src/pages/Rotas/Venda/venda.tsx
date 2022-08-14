import Menu from "menu/menu";
import styles from "./Venda.module.scss";
import fone from './produtos/fone.jpg'
import xbox from './produtos/xbox.jpg'
import cadeira from './produtos/cadeira.jpg'
import Gamer from './produtos/notGamer.jpg'
import Memoria from './produtos/memoria.jpg'
import core from './produtos/core.jpg'
import teclado from './produtos/teclado.jpg'
import ssd from './produtos/ssd.jpg'
import monitor from './produtos/monitor.jpg'
import not from './produtos/not.jpg'
import placa from './produtos/placaVideo.jpg'
import mouse from './produtos/mouse.jpg'

export default function Venda() {
    return (
        <>
            <div className={styles.topo}>
            </div>
            <div className={styles.subtopo}>
                <h1>Produtos Da Loja</h1>
            </div>
            <div className={styles.paginaprodutos}>
                <div className={styles.produtos}>
                    <h1>Fone Gamer Headset</h1>
                    <img src={fone} className={styles.img}/>
                    <h3>R$ 299,99</h3>
                    <h6>A vista ou no pix R$199,99</h6>
                    <h6>Ou em ate 10x de 29,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Xbox one</h1>
                    <img src={xbox} className={styles.img}/>
                    <h3>R$ 1.999,99</h3>
                    <h6>A vista ou no pix R$1499,99</h6>
                    <h6>Ou em ate 10x de 199,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Cadeira gamer</h1>
                    <img src={cadeira} className={styles.img}/>
                    <h3>R$ 1.999,99</h3>
                    <h6>A vista ou no pix R$1499,99</h6>
                    <h6>Ou em ate 10x de 199,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Notbook gamer I7</h1>
                    <img src={Gamer} className={styles.img}/>
                    <h3>R$ 11.999,99</h3>
                    <h6>A vista ou no pix R$9.999,99</h6>
                    <h6>Ou em ate 10x de 1.199,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Memoria ram 8gb</h1>
                    <img src={Memoria} className={styles.img}/>
                    <h3>R$ 399,99</h3>
                    <h6>A vista ou no pix R$299,99</h6>
                    <h6>Ou em ate 10x de 39,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Processador core I5</h1>
                    <img src={core} className={styles.img}/>
                    <h3>R$ 999,99</h3>
                    <h6>A vista ou no pix R$699,99</h6>
                    <h6>Ou em ate 10x de 99,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Teclado Gamer</h1>
                    <img src={teclado} className={styles.img}/>
                    <h3>R$ 199,99</h3>
                    <h6>A vista ou no pix R$89,99</h6>
                    <h6>Ou em ate 10x de 19,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Ssd 256gb</h1>
                    <img src={ssd} className={styles.img}/>
                    <h3>R$ 999,99</h3>
                    <h6>A vista ou no pix R$699,99</h6>
                    <h6>Ou em ate 10x de 99,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Monitor Gamer</h1>
                    <img src={monitor} className={styles.img}/>
                    <h3>R$ 3.999,99</h3>
                    <h6>A vista ou no pix R$2.999,99</h6>
                    <h6>Ou em ate 10x de 399,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Notbook asus I5</h1>
                    <img src={not} className={styles.img}/>
                    <h3>R$ 2.799,99</h3>
                    <h6>A vista ou no pix R$1.999,99</h6>
                    <h6>Ou em ate 10x de 279,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Placa de video</h1>
                    <img src={placa} className={styles.img}/>
                    <h3>R$ 1.999,99</h3>
                    <h6>A vista ou no pix R$599,99</h6>
                    <h6>Ou em ate 10x de 199,99 sem juros</h6>
                </div>
                <div className={styles.produtos}>
                    <h1>Mouse</h1>
                    <img src={mouse} className={styles.img}/>
                    <h3>R$ 199,99</h3>
                    <h6>A vista ou no pix R$79,99</h6>
                    <h6>Ou em ate 10x de 19,99 sem juros</h6>
                </div>
            </div>
        </>
    )
}

