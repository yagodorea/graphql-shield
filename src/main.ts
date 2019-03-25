import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './schemas';
import { environment } from './environment';
import { userPermissions } from './data/permissions';

const server = new ApolloServer({
    resolvers, 
    typeDefs,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground,
    context: ({req, res}) => ({
        token: req.headers['access_token'],
        level: () => {
            let user: any = userPermissions.find(user => user.token == req.headers['access_token']);
            return user ? user.level : 0;
        }
    })
});

server.listen(environment.port)
.then(({ url }) => console.log(`Server ready at ${url}. `));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed.'));
}