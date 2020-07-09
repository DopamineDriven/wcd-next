// import { ObjectId } from "mongodb";
import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		role: String!
		email: String!
		image: String!
		source: String!
		content: String!
	}
	type Query {
		getUser(id: Int): User
	}
`;