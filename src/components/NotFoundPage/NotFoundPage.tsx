import styles from './NotFoundPage.module.css';
import {useNavigate} from 'react-router';
import ButtonMantine from "../../UI/ButtonMantine.tsx";
export default function NotFoundPage () {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h2>
                        Упс! Такой страницы <br />
                        не существует
                    </h2>
                    <p>Давайте перейдём к началу.</p>
                </div>

                <ButtonMantine
                    w={'100'}
                    h={'36'}
                    onClick={() => navigate('/Москва')}
                >
                    На главную
                </ButtonMantine>
            </div>
            <div className="tenor-gif-embed" data-postid="12536795" data-share-method="host" data-aspect-ratio="1.90476"
                 data-width="100%"><a href="https://tenor.com/view/sad-cat-lonely-upset-crying-gif-12536795">печальный
                кот плачет грустный GIF</a>from <a href="https://tenor.com/search/sad-gifs">Sad GIFs</a></div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>
    )
}