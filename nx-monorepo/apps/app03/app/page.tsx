import styles from './page.module.scss';
import Link from 'next/link';
import { getNewsList } from '../../../libs/client';

export default async function Index() {
  const { contents } = await getNewsList();

  const time = new Date().toLocaleDateString();

  if (!contents || contents.length === 0)
    return <div>記事データがありません</div>;

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h1>Welcome to app03!</h1>
        <h2>このページはブランドのニュースをお届けするサイトです</h2>
        <p>{time}</p>
        <div>
          <ul>
            {contents.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/${post.id}`}>
                    {post.title}: {post.id}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
