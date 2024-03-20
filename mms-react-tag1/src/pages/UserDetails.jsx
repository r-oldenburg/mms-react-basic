import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { userData } from "../store/userData";

const UserDetails = () => {

    const params = useParams();

    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams()
    console.log("search", search.get("name"))

    const selectedUser = userData.find(item => item.id === params.id);

    function handleBack() {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={handleBack}>Zurück</button>
            <h3>Name: {selectedUser.name}</h3>
            <p><span style={{ fontWeight: "bold" }}>Age:</span> {selectedUser?.age}</p>
            <p><span style={{ fontWeight: "bold" }}>Details:</span> {selectedUser.details}</p>
        </div>
    )
}

export default UserDetails
