/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSequence = /* GraphQL */ `
  query GetSequence($id: ID!) {
    getSequence(id: $id) {
      id
      name
      description
      image {
        id
        type
        name
        description
        zoomable
        src
        thumbnailSrc
        w
        h
        size
        weUseIt
      }
      sequenceId
      projectStr
      projectId
      project {
        id
        name
        description
        palette
        logo
        image {
          id
          type
          name
          description
          zoomable
          src
          thumbnailSrc
          w
          h
          size
          weUseIt
        }
        contact {
          id
          name
          pic
          token
          email
          projectStr
          projectId
          companyStr
        }
        contactMail
        projectId
        locales
        profiles {
          nextToken
        }
        sequences {
          nextToken
        }
        articles {
          nextToken
        }
        files {
          nextToken
        }
      }
      articles(limit: 400) {
        items {
          id
          articleType
          title
          subtitle
          subtitle2
          subtitle3
          description
          content
          content2
          content3
          rawcontent
          image {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          leftImage {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          rightImage {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          topImage {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          btmImage {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          link
          expiresAt
          isDraft
          slug
          status
          period
          createdAt
          updatedAt
          createdBy
          version
          start_time
          end_time
          canBeDeleted
          records
          num
          pdfFile
          pdf {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          locale
          isAClone
          isACloneOf
          hasClones
          images {
            id
            type
            name
            description
            zoomable
            src
            thumbnailSrc
            w
            h
            size
            weUseIt
          }
          videos
          showSeparator
          specifics
          projectStr
          projectId
          sequenceStr
          sequenceId
          owner {
            id
            name
            email
            pic
          }
        }
        nextToken
      }
      layout {
        id
        title
        subtitle
      }
    }
  }
`;
