import { ApolloServer, IResolverObject } from "apollo-server-micro";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./typeDefs/typeDefs";

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
});

export const config = {
	api: {
		bodyParser: false
	}
};

export default apolloServer.createHandler({ path: "/api/graphql" });
