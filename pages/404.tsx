import type { NextPage } from "next";
type Props = {
  error404Props: String;
};

const Custom404: NextPage<Props> = ({ error404Props }) => {
  // 해당 페이지에서 getStaticProps props로 받아온 데이터를 사용할 수 있습니다.
  return (
    <>
      <div> 404 - {error404Props}</div>
    </>
  );
};

export async function getStaticProps() {
  // 서버에서 데이터를 미리 받아옵니다.
  // 아래 props는 서버쪽에서 데이터를 받아왔다는 가정하에 props 데이터를 넘겨줍니다.
  return {
    props: { error404Props: "페이지를 찾을 수 없습니다." },
  };
}

export default Custom404;
