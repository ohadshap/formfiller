/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onCreateDocument(filter: $filter) {
      id
      name
      description
      image
      Annotations {
        items {
          id
          field
          docId
          page
          x
          y
          text
          font
          fontSize
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onUpdateDocument(filter: $filter) {
      id
      name
      description
      image
      Annotations {
        items {
          id
          field
          docId
          page
          x
          y
          text
          font
          fontSize
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
    onDeleteDocument(filter: $filter) {
      id
      name
      description
      image
      Annotations {
        items {
          id
          field
          docId
          page
          x
          y
          text
          font
          fontSize
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
export const onCreateAnnotation = /* GraphQL */ `
  subscription OnCreateAnnotation(
    $filter: ModelSubscriptionAnnotationFilterInput
  ) {
    onCreateAnnotation(filter: $filter) {
      id
      field
      docId
      page
      x
      y
      text
      font
      fontSize
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnnotation = /* GraphQL */ `
  subscription OnUpdateAnnotation(
    $filter: ModelSubscriptionAnnotationFilterInput
  ) {
    onUpdateAnnotation(filter: $filter) {
      id
      field
      docId
      page
      x
      y
      text
      font
      fontSize
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnnotation = /* GraphQL */ `
  subscription OnDeleteAnnotation(
    $filter: ModelSubscriptionAnnotationFilterInput
  ) {
    onDeleteAnnotation(filter: $filter) {
      id
      field
      docId
      page
      x
      y
      text
      font
      fontSize
      createdAt
      updatedAt
    }
  }
`;
