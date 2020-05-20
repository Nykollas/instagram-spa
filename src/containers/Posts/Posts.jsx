import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      { posts.length > 0 && posts.map((post) => {

          const { userId, id} = post;

          return <Post
            postInfo={post}
            userInfo={getUserHandler(userId)}
            key={id}
          />
      })
      }
    </section>
  </div>
);

export default Posts;
