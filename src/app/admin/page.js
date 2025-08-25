import Form from 'next/form';
import { db } from '@/db/index';
import { users } from '@/db/schema';

export default function AdminPage(){

    const findUser = async (fromData) => {
        "use server"

        const firstName = fromData.get("first_name");
        const lastName = fromData.get("last_name");

        const foundUsers = await db
            .select()
            .from(users)
            .where(and(eq(users.firstName, firstName),eq(users.lastName, lastName)));

        console.log("found Users:", foundUsers);
    }

    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <h1>This page is for Admins only</h1>
            <div className="flex flex-col gap-4 mt-4">
                <Form action={findUser}>
                    <input name="first_name" type="text" placeholder="First Name" className="input input-bordered" />
                    <input name="last_name" type="text" placeholder="Last Name" className="input input-bordered" />
                    <button type="submit" className="btn btn-primary">Find User</button>
                </Form>
            </div>
        </div>
    )
}
