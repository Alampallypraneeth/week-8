    import { useLocation } from "react-router-dom";

    function User() {
    let { state } = useLocation();

    console.log(state.user);
    return (
        <div className="border p-2 m-20">
            <h1 className="font-bold text-3xl mb-3 p-1 bg-cyan-200 text-center text-cyan-950">User Details</h1>
        <p className="text-amber-700 font-semibold">Name: {state?.user?.name}</p>
        <p className="text-amber-700 font-semibold">Email: {state?.user?.email}</p>
        <p className="text-amber-700 font-semibold">Dateofbirth: {state?.user?.dateOfBirth}</p>
        <p className="text-amber-700 font-semibold">PhoneNumber: {state?.user?.mobileNumber}</p>
        </div>
    );
    }

    export default User;