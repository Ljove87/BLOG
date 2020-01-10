
const totalLikes = blogs => blogs.reduce((likes, blog) => likes + blog.likes, 0);

const formatBlog = (blog = {}) => ({ author: blog.author, likes: blog.likes })
const favoriteBlog = blogs => formatBlog(blogs.sort((a, b) => a.likes < b.likes)[0])

// Use author names as keys to increment blog count if necessary
const mostLikes = blogs => Object.values(
  blogs.reduce((blogsPerAuthor, blog) => {
    const author = blog.author
    const perviousAuthorObject = blogsPerAuthor[author] ? { ...blogsPerAuthor[author] } : { author, likes: 0 }
    perviousAuthorObject.likes += blog.likes
    return { ...blogsPerAuthor, [author]: perviousAuthorObject }
  }, {}))
  .sort((a, b) => a.likes < b.likes)[0]


const dummy = (blogs) => {
   return blog = 1
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostLikes
  }