import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESSTOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient(
      "https://backend07.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );

    const result = await graphqlClient.request(RESTORE_ACCESSTOKEN);

    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
