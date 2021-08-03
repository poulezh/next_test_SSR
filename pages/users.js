import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    // const [users, setUsers] = useState(
    //     [
    //         { id: 1, name: 'petr' },
    //         { id: 2, name: 'oleg' },
    //     ]
    // )

    // useEffect( async () =>{
    //     const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
    //     const data = await response.json() 
    //     setUsers(data)

    // } , [])


    return (
        <MainContainer keywords = 'rrrr'>
            <Link href="/">
                <a> назад</a>
            </Link>

            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}> 
                        <Link href={`/users/${user.id}`}>
                            <a> {user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json() 
   
    return {
      props: {users}, // will be passed to the page component as props
    }
  }