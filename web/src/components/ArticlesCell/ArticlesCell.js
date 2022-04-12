export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((item) => (
        <article key={item.id}>
          <header>
            <h2>{item.title}</h2>
          </header>
          <p>{item.body}</p>
          <div>Posted at: {item.createdAt}</div>
        </article>
      ))}
    </>
  )
}
