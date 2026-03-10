import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onUserCreate = async (newUser) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("http://localhost:4000/user-api/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });

            if (res.status === 201) {
                //user created it shd navigate to users list
                navigate("/user-list");
            } else {
                alert("Failed to create user");
            }
        } catch (err) {
            console.error("Error creating user:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p className="text-2xl text-center text-blue-700">Loading...</p>;
    if (error) return <p className="text-2xl text-center text-red-500">{error.message}</p>;

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl text-blue-950 font-extrabold">User Registration</h1>

            <div className="mt-10">
                <form 
                    onSubmit={handleSubmit(onUserCreate)} 
                    className="flex flex-col mx-30 gap-3 justify-center flex-wrap"
                >
                    <label className="font-bold text-amber-950 text-left">UserName</label>
                    <input type="text" {...register("name")} className="border p-2" placeholder="Enter Name" />

                    <label className="font-bold text-amber-950 text-left">Email</label>
                    <input type="email" {...register("email")} className="border p-2" placeholder="Enter Email" />

                    <label className="font-bold text-amber-950 text-left">Date of Birth</label>
                    <input type="date" {...register("dateOfBirth")} className="border p-2" />

                    <label className="font-bold text-amber-950 text-left">Phone Number</label>
                    <input type="text" {...register("mobileNumber")} className="border p-2" placeholder="Enter Phone Number" />

                    <button type="submit" className="bg-amber-400 font-bold rounded p-2 mt-3">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;