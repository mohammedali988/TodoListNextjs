import styles from "./follower.module.css";
import FollowersList from "../FollowersList/followersList";


export default function Followers({data}) {

  return (
    <div className={styles.followers}>
      <h1 className={styles.header}> hiiiiii Followers</h1>
      <FollowersList data={data} />
    </div>
  );
}
