import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/user.module.scss'

export default function User({ user }) {
    const { query } = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>пользователь c id {query.id}</h1>
                <h1>имя пользователя - {user.name}</h1>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({ params }) {
    console.log(params);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: { user }, // will be passed to the page component as props
    }
}