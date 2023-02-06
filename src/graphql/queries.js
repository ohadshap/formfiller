/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        Annotations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnnotation = /* GraphQL */ `
  query GetAnnotation($id: ID!) {
    getAnnotation(id: $id) {
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
export const listAnnotations = /* GraphQL */ `
  query ListAnnotations(
    $filter: ModelAnnotationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnotations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const annotationsByDocId = /* GraphQL */ `
  query AnnotationsByDocId(
    $docId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnnotationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    annotationsByDocId(
      docId: $docId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
