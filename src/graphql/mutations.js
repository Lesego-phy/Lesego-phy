/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
