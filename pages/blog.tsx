import { getAllPosts } from "../lib/post_api";

const Home = ({ posts }: { posts: any[] }) => {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          {post.title} - {post.author}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  // 게시물 데이터들을 가져옵니다.
  const posts = getAllPosts(["slug", "title", "date"]);

  // getStaticProps에서 반환하는 객체는 페이지 컴포넌트의 props로 넘어갑니다.
  return {
    props: {
      posts,
    },
  };
}

export default Home;
