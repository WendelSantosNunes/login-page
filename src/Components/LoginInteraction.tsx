import GoogleImg from '../assets/iconfinder_Google_1298745 1.svg'
import styles from './LoginInteraction.module.css'

export function LoginInteraction(){
    return (
        <div className={styles.containerInteraction}>
            <div className={styles.interaction}>
                <p>Bem vindo de volta</p>
                <h1>Faça login na sua conta</h1>

                <form>
                    <label htmlFor="E-mail">E-mail</label>
                    <input type="text" name="e-mail" />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" />

                    <div>
                        <div>
                            <div></div>
                            <p>Lembre de mim </p>
                        </div>
                        <a href="#">Esqueceu sua senha? </a>
                    </div>

                    <div className={styles.login}>
                        <button >Entrar</button>
                    </div>
                    <button className={styles.register}> 
                        <img src={GoogleImg} alt="Logo Google" />
                        <p>Ou faça login com o Google</p>
                    </button>
                </form>
            </div>
        </div>
    )
}