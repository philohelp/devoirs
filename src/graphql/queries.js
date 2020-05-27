/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
        token
        email
        projectStr
        projectId
        companyStr
        project {
          id
          name
          description
          palette
          logo
          contactMail
          projectId
          locales
        }
        articles {
          nextToken
        }
      }
      contactMail
      projectId
      locales
      profiles {
        items {
          id
          name
          pic
          token
          email
          projectStr
          projectId
          companyStr
        }
        nextToken
      }
      sequences {
        items {
          id
          name
          description
          img
          sequenceId
          projectStr
          projectId
        }
        nextToken
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
          img
          leftImg
          rightImg
          topImg
          btmImg
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
          locale
          isAClone
          isACloneOf
          hasClones
          imgs
          videos
          showSeparator
          specifics
          projectStr
          projectId
          sequenceStr
          sequenceId
        }
        nextToken
      }
      files {
        items {
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
        nextToken
      }
    }
  }
`;

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      name
      pic
      token
      email
      projectStr
      projectId
      companyStr
      project {
        id
        name
        description
        palette
        logo
        locales
        contactMail
      }
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pic
        token
        email
        projectStr
        projectId
        companyStr
        project {
          id
          name
          description
          palette
          logo
          locales
          contactMail
          projectId
        }
      }
      nextToken
    }
  }
`;

export const getProjectArticles = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      palette
      logo
      locales
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
      sequences {
        items {
          id
          name
          description
          img
          sequenceId
          projectStr
          projectId
        }
        nextToken
      }
      articles(limit: 1000) {
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
          img
          leftImg
          rightImg
          topImg
          btmImg
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
          imgs
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
        }
        nextToken
      }
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        palette
        logo
        locales
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
      }
      nextToken
    }
  }
`;
