import React from 'react';
import { Layout, QueryResult } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from './../../../client/src/containers/track-card';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult data={data} loading={loading} error={error}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
