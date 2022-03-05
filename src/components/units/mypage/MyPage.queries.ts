import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      name
      price
      createdAt
      soldAt
    }
  }
`;

export const FETCH_USEDITEMS_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USEDITEMS_COUNTISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export const FETCH_USEDITEMS_COUNTIBOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;

export const FETCH_USEDITEMS_COUNTIPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      createdAt
      status
      amount
      balance
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      amount
      balance
      status
      statusDetail
      useditem {
        name
        soldAt
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYTING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      createdAt
      impUid
      amount
      balance
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      createdAt
      useditem {
        name
      }
      amount
      balance
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      picture
    }
  }
`;

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;
