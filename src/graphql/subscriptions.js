/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
