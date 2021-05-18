import { useRouter } from 'next/router';
import Link from 'next/link';
import qs from 'qs';

import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
  const router = useRouter();

  return (
    <Layout title='Search Results'>
      <Link href='/events'>Go Back</Link>
      <h1>Search Results for "{router.query.term}" </h1>
      {events.length === 0 && <h3>There is no event</h3>}

      {events.map((e) => (
        <EventItem key={e.id} event={e} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
