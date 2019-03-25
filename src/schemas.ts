import { gql } from 'apollo-server';

export default gql`
""" Represents a SHIELD agent """
type Agent {
    """
    Agent's ID code
    Classified as level 4
    """
    id: String

    """
    First name of the agent
    Classified as level 2
    """
    firstName: String

    """
    Last name of the agent
    Classified as level 3
    """
    lastName: String

    """
    Age of the agent
    Classified as level 3
    """
    age: Int

    """
    Access-control level
    Classified as level 5
    """
    level: Int

    """
    Agent's type
    Classified as level 3
    """
    type: AgentType

    """
    Agent's secret code
    Classified as level 10
    """
    secretCode: String
}

""" Type of the agent """
enum AgentType {
    Director
    Field
    Administrator
    Biochemist
    Engineer
    Specialist
}

type Query {
    """
    Agent by ID. 
    """
    agent(id: String!): Agent,

    """
    All agents
    """
    agents: [Agent]
  }

type Mutation {
    """
    Test mutation
    """
    print(message: String!): String!
  }

`;