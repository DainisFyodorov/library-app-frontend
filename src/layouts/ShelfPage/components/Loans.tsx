import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import ShelfCurrentLoans from "../../../models/ShelfCurrentLoans";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

export const Loans = () => {
    
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [httpError, setHttpError] = useState(null);
    
    // Current Loans
    const [shelfCurrentLoans, setShelfCurrentLoans] = useState<ShelfCurrentLoans[]>([]);
    const [isLoadingUserLoans, setIsLoadingUserLoans] = useState(true);

    useEffect(() => {
        const fetchUserCurrentLoans = async () => {

        }
        fetchUserCurrentLoans().catch((error: any) => {
            setIsLoadingUserLoans(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, [getAccessTokenSilently])

    if(isLoadingUserLoans) {
        return (
            <SpinnerLoading />
        );
    }

    return (
        <div></div>
    );
}