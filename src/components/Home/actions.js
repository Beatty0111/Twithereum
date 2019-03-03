export const getComments = () => ({
    type: 'GRAB_COMMENTS',
    payload: fetch('/ApiServices/CommentService/?limit=100000', {
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => data.results),
  });
  

export const getPosts = () => ({
    type: 'GRAB_POSTS',
    payload: fetch('/ApiServices/PostService/?limit=100000', {
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => data.results),
  });