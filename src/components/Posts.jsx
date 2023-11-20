import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const postsData = [
  {
    id: 1,
    heading: 'A Changing World Order',
    content: 'The World is changing at a feverish pace. Friends Colleagues and everyone enagaged in knowledge work are bringing to sense this, including ...',
    author: 'Ujjwal Shukla',
    date: 'August 12',
    readTime: '21 mins Read',
    views: 102,
  },
  {
    id: 2,
    heading: 'India VS Australia',
    content: 'This is the content of the first post. It can be quite long and detailed.',
    author: 'Aman Singh',
    date: 'October 22',
    readTime: '22 mins Read',
    views: 100,
  },
  {
    id: 3,
    heading: 'World Cup Winners',
    content: 'This is the content of the first post. It can be quite long and detailed.',
    author: 'Arjun Singh',
    date: 'November 30',
    readTime: '29 mins Read',
    views: 109,
  },
  
];

const Posts = () => (
  <div className="posts">
    {postsData.map(post => (
      <div key={post.id} className="post">
        <div className="post-content">
          <h3>{post.heading}</h3>
          <p>{post.content}</p>
          {/* Like icon always visible */}
          <div className="like-icon">
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        </div>
        <div className="post-info">
          <p>
             <span className="th">thoughtby </span>  
            {post.author}</p>
          <p>
            {post.date} : {post.readTime} : {post.views} Views
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Posts;