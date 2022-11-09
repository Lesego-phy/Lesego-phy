/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      email
      image
      events {
        items {
          id
          image
          title
          description
          eventType
          latitude
          longitude
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          eventID
          content
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        image
        events {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      image
      title
      description
      eventType
      latitude
      longitude
      userID
      comments {
        items {
          id
          eventID
          content
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        username
        name
        email
        image
        events {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        title
        description
        eventType
        latitude
        longitude
        userID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      eventID
      content
      event {
        id
        image
        title
        description
        eventType
        latitude
        longitude
        userID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      userID
      user {
        id
        username
        name
        email
        image
        events {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventID
        content
        event {
          id
          image
          title
          description
          eventType
          latitude
          longitude
          userID
          createdAt
          updatedAt
        }
        userID
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        events {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      eventID
      event {
        id
        image
        title
        description
        eventType
        latitude
        longitude
        userID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        eventID
        event {
          id
          image
          title
          description
          eventType
          latitude
          longitude
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
