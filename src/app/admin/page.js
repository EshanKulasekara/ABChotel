import Form from 'next/form';

export default function AdminPage(){

    const findUser = async () => {
        "use server"

        console.log("Finding user...");
    }

    return(
        <div className="flex items-center justify-center h-screen">
            <h1>This page is for Admins only</h1>
            <div>
                <Form action={findUser}>
                    <input name="first_name" type="text" placeholder="First Name" className="input input-bordered" />
                    <input name="last_name" type="text" placeholder="Last Name" className="input input-bordered" />
                    <button type="submit" className="btn btn-primary">Find User</button>
                </Form>
            </div>
        </div>
    )
}