import { Link } from "@inertiajs/react";



const isPaginator = (meta) => {
    const prev = meta.links[0].url;
    const next  = meta.links[meta.links.length - 1].url
    const current = meta.current_page;

    return(
        <div>
            <div className="pagination-container">
                <ul className="pagination">
                    
                {prev && <Link href={prev} className="page-item"><span >&laquo;</span></Link>}
                <li className="page-item active">{current}</li>
                {next && <Link href={next} className="page-item"><span >&raquo;</span></Link>
}
                </ul>
            </div>
        </div>
    )
}


const Paginator = ({meta}) => {
    if(meta.total > 11) {
        return isPaginator(meta)
    }
  }
  

export default Paginator