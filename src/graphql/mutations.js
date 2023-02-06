/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
export const createAnnotation = /* GraphQL */ `
  mutation CreateAnnotation(
    $input: CreateAnnotationInput!
    $condition: ModelAnnotationConditionInput
  ) {
    createAnnotation(input: $input, condition: $condition) {
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
export const updateAnnotation = /* GraphQL */ `
  mutation UpdateAnnotation(
    $input: UpdateAnnotationInput!
    $condition: ModelAnnotationConditionInput
  ) {
    updateAnnotation(input: $input, condition: $condition) {
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
export const deleteAnnotation = /* GraphQL */ `
  mutation DeleteAnnotation(
    $input: DeleteAnnotationInput!
    $condition: ModelAnnotationConditionInput
  ) {
    deleteAnnotation(input: $input, condition: $condition) {
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
