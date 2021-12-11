import Layout from "../componenets/Layout/layout";
import Followers from "../componenets/Followers/follower";
import axios from "axios";

export async function getStaticProps(context) {
  const { data } = await axios.get("https://randomuser.me/api/?results=5");

  return {
    props: { data },
  };
}

export default function Follower({ data }) {
  
  return (
    <Layout Followers>
      <Followers data={data} />
    </Layout>
  );
}
