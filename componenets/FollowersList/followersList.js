import React, { useEffect, useState } from "react";
import styles from "./followerList.module.css";
import axios from "axios";
import Link from "next/link";


export default function FollowersList({data}) {
  const [followers, setFollowers] = useState([]);

  useEffect( () => {
      setFollowers(data.results)
  }, [])

  return (
    <div className={styles.followerslistContainer}>
      <div>
        {followers.map((follower, index) => (
          <div
            className={styles.followerItem}
            data-testid={`follower-card-${index}`}
            key={`follower-card-${index}`}
          >
            <img src={follower.picture.large} />
            <div className={styles.followersDetails}>
              <div className={styles.followerItemName}>
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.todoFooter}>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
