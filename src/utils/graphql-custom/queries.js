export const listDocsAndAnnotations = /* GraphQL */ `
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
            items {
                y
                x
                field
                font
                fontSize
                id
                page
                text
            }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;