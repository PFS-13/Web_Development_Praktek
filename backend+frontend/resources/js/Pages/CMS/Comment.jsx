import SidebarCMS from "@/Components/CMS/SidebarCMS";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Modal from '@/Components/Modal';
import { Inertia } from "@inertiajs/inertia";


const Comments = (prop) => {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
      axios.get('/api/comments').then(res => setCommentList(res.data)); 
    }, []);



  
    return (
        <div>
            <SidebarCMS> 
        <div className=" mt-5">
            <Head title="CMS Awards"></Head>
            <h2>Comments</h2>

            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Countries</th>
                        <th scope="col">Awards</th>
                        <th scope="col">Year</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Contoh data dummy */}
                    {commentList.map((comment,id) => (
                        <tr key={id}>
                            <th scope="row">{id + 1}</th>
                            <td>{comment.name}</td>
                            <td>{comment.title}</td>
                            <td>{comment.comment}</td>
                            <td>{comment.rating}</td>
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
