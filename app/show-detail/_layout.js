import { useRouter } from "expo-router";
import ShowDetail from "./[id]";

const Layout = () => {
    const router = useRouter();
    return(
        <>
            <ShowDetail />
        </>
        
    );
}

export default Layout;