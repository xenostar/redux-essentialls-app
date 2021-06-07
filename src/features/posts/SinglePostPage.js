import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from 'features/posts/PostAuthor'
import { ReactionButtons } from 'features/posts/ReactionButtons'
import { selectPostById } from 'features/posts/postsSlice'
import { TimeAgo } from 'features/posts/TimeAgo'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
