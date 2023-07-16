import ReactDOM from 'react-dom/client';
import './scss/reset.scss';
import './scss/index.scss';
import App from './App';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(_, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
  fragments: createFragmentRegistry(gql`
    fragment ClientFragment on Client {
      id
      name
      email
      phone
    }
  `),
});

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
