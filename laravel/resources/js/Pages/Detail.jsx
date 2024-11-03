import React, { useState, useEffect} from 'react';
import Actor from "@/Components/Detail/Actor";
import '../../css/detail-page.css'
import '../../css/base.css'
import '../../css/styles.css';
import Topbar from '@/Components/Topbar';
import { Head, useForm, usePage} from "@inertiajs/react";
import Modal from '@/Components/Modal';
import Comment from '@/Components/Detail/Comment';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Detail(props){
  
  let user = usePage().props.auth.user;
  if(!user){
    user = {id: -1}
  }
  const [showAlert, setShowAlert] = useState(false);
  console.log('detail page ', props.comment)
  console.log("props :",props)
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    if (user.id != -1){
        setModalOpen(!isModalOpen);
    } else {
            setShowAlert(true);
    }
    
  };
  const movie = props.myMovie
  const { data, setData, post, processing, errors, reset } = useForm({
    rating: '',
    comment: '',
    id_user: user.id,
    id_movie: movie.id_movies
});

const submit = (e) => {
    e.preventDefault();

    post(route('insert-comment'), {
        onFinish: () => reset('password', 'password_confirmation'),
    });
};

    return (
        <div>
          <Head title={movie.title}></Head>
          <Topbar />
    
    <div className="container">
        <div className="movie-title">
        <div className="real-title">{movie.title}</div>
         <div className="original-title">
                    {movie.alternative_title}
                </div>
        </div>
        <div className="detail">
            <div className="image">
                <img src = {movie.link_posters} />
            </div>
            <div className="content">
               
                <div className="genre">
                    {movie.genres.split(', ').map((genre, index) => (
                    <span key={index}>{genre}</span>
                  ))}
                </div>
                <div className="year">
                   <strong>Year : </strong> {movie.year}
               </div>
               {/* <div className="movie-rating">
                   <strong>Rating : </strong> {movie.rating}
               </div> */}
               <div className="availability">
                   <strong>Availability :</strong> {movie.availability}
               </div>
                <div className="description">{movie.synopsis}</div>
            </div>
        </div>

        <div className="title">Actor</div>
        <div className="media-scroller snaps-inline">
            <Actor actor = {props.actors}></Actor>
        </div>

        <div className="title">Trailer</div>
        <iframe id="ytplayer" type="text/html" width="800" height="420"
        src={movie.link_trailers.replace('watch?v=', 'embed/')} style={{ border: "none" }} allowFullScreen title={movie.title}></iframe>


        <div className="title">Comments</div>
        
        <div className="comment-section">
        {showAlert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Anda harus login untuk menambahkan komentar
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}
        <button id="openModalBtn" className="button_comment" onClick={toggleModal}>Leave a Comment</button>
        <button id="openModalBtn" className="button_filter">Filter</button>
        <div className="comments-box">
            <Comment comment = {props.comments}></Comment>
        </div>
        
    </div>
    
    <Modal show={isModalOpen} onClose={toggleModal}>   
    <form onSubmit={submit} id="commentForm" className='p-4'>
              <h2 style={{textAlign : 'center'}}>Leave a Comment</h2>
                  <label htmlFor="rating">Rating:</label>
                  <input type="number" placeholder='1-5' min={0} max={5} id="rating" name="rating" value={data.rating} onChange={(e) => setData('rating', e.target.value)} required />
                  <label htmlFor="comment">Comment:</label>
                  <textarea id="comment" name="comment" value={data.comment} onChange={(e) => setData('comment', e.target.value)} rows="4" required></textarea>
                  <PrimaryButton className="ms-4" disabled={processing}>
                        Submit
                    </PrimaryButton>
              </form>
      </Modal>

</div>


        </div>
      );
    };