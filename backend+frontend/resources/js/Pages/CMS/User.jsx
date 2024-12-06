import SidebarCMS from "@/Components/CMS/SidebarCMS";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Modal from '@/Components/Modal';
import { Inertia } from "@inertiajs/inertia";


const Comments = (prop) => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
      axios.get('/api/users').then(res => setUserList(res.data)); 
    }, []);

    return (
        <div>
            <SidebarCMS> 
        <div className=" mt-5">
            <Head title="CMS Awards"></Head>
            <h2>Users</h2>
           
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Contoh data dummy */}
                    {userList.map((user,id) => (
                        <tr key={id}>
                            <th scope="row">{id + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                            <button className="btn btn-danger mr-2">
                                  <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        </SidebarCMS>


        </div>
    );
};

export default Comments;
