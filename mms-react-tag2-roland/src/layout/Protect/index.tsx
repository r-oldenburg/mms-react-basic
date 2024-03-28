import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ProtectRender } from "./ProtectRender";

export const Protect = () => {

    const local = useLocalStorage("user", null);

    return (
        <div>
            Protect
            <ProtectRender user={local.value}></ProtectRender>
        </div>
    )
}
