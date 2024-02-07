import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-eu-west-2.hygraph.com/v2/cls3476rp0drl01wgovnyinz3/master";
const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getBusiness = async () => {
  const query = gql`
    query GetBusiness {
      businessLists {
        id
        name
        about
        address
        contactPerson
        email
        phoneNumber
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
export default {
  getSlider,
  getCategories,
  getBusiness,
};
