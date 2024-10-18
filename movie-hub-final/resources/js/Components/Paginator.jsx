import { Link } from "@inertiajs/react";

Link

const Paginator = ({meta}) => {
    const prev = meta.links[0].url;
    const next  = meta.links[meta.links.length - 1].url
    const current = meta.current_page;

    return(
        <div>
            <div className="pagination-container">
                <ul className="pagination">
                    
                {prev && <Link href={prev} className="page-item"><a href="#">&laquo;</a></Link>}
                <li className="page-item active"><a href="#">{current}</a></li>
                {next && <Link href={next} className="page-item"><a href="#">&raquo;</a></Link>
}
                </ul>
            </div>
        </div>
    )
}

export default Paginator