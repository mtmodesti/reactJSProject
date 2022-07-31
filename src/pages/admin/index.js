import { Container } from "./styles"
import { UserContext } from "../../providers/user/user"
import { useContext } from "react";

export const AdminPage = () => {

    const {logged} = useContext(UserContext)

    return (
        <Container>
            oi
            <button
            onClick={() => {
                console.log(logged)
            }}
            >teste</button>
        </Container>
    )
}