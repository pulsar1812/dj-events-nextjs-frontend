import Link from 'next/link';

import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import styles from '@/styles/DashboardEvent.module.css';

export default function DashboardEvent({ event, handleDelete }) {
  return (
    <div className={styles.event}>
      <h4>
        <Link href={`/events/${event.slug}`}>
          <a>{event.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${event.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> Edit
        </a>
      </Link>
      <a
        href='#'
        className={styles.delete}
        onClick={() => handleDelete(event.id)}
      >
        <FaTimes /> Delete
      </a>
    </div>
  );
}
