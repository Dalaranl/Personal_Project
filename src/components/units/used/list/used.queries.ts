import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int, $search: String) {
    fetchUseditems(isSoldout: $isSoldout, page: $page, search: $search) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      createdAt
      seller {
        _id
        name
        picture
      }
    }
  }
`;

export const FETCH_USEDITEMS_OFTHEBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
    }
  }
`;
