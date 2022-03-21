import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error';
import GetMission from './Mission';

const link = from([new HttpLink({ uri: 'https://api.spacex.land/graphql/' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const Apollo = () => {
  return (
    <ApolloProvider client={client}>
      <GetMission />
    </ApolloProvider>
  );
};
