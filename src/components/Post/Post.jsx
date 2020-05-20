import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';


const LinkContainer = (props) => {

  const { content, path, className } = props;
    return (
      <Link to={path} className={className}>
        {content}
      </Link>
    )
}


const getImage  = (userInfo) => {
  return <img src={userInfo.avatar} alt={userInfo.name} />
}

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);
  const [follow, toggleFollow] = useState(false);

  const { comments, imageUrl } = postInfo;

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className="post__header">
          <div className="user">
            <LinkContainer path={`/users/${userInfo.username}`} className={"user__thumb"} content = {() => (getImage(userInfo))}/>
            <LinkContainer path={`/users/${userInfo.username}`} className={"user__name"} content = {userInfo.name}/>
          </div>

          <button
            className="post__context"
            onClick={() => toggleFollow(!follow)}
          >
            { follow
              ? <span className="follow-btn is-following">{"Seguindo"}</span>
              : <span className="follow-btn">{"Seguir"}</span>
            }
          </button>
        </header>
      )}

      <figure className="post__figure">
        <img src={imageUrl} alt="" />
      </figure>

      {userInfo && (
        <nav className="post__controls">
          <button
            className="post__control"
            onClick={() => setLike(!like)}
          >
            { like
              ? <i className="fas fa-heart" />
              : <i className="far fa-heart" />
            }
          </button>

          {userInfo && comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>curtido por <Link to="/" >{comments[0].name}</Link> e outra{((comments.length - 1) + like) > 1 && 's'} <Link to="/">
                {(comments.length - 1) + like} pessoa{((comments.length - 1) + like) > 1 && 's'}.
              </Link>
            </span>
              </div>
            </div>
          )}
        </nav>
      )}
      </article>
  );
};

export default Post;
