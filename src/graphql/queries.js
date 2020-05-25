/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      articleType
      title
      subtitle
      subtitle2
      description
      content
      content2
      content3
      rawcontent
      img
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
      images
      videos
      showSeparator
      specifics
      projectStr
      projectId
      sequenceStr
      sequenceId
      sequence {
        id
        name
        description
        img
        sequenceId
        projectStr
        projectId
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
        layout {
          id
          title
          subtitle
        }
      }
      project {
        id
        name
        description
        palette
        logo
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
      }
      owner {
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
          contactMail
          projectId
          locales
        }
        articles {
          nextToken
        }
      }
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        articleType
        title
        subtitle
        subtitle2
        description
        content
        content2
        content3
        rawcontent
        img
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
        images
        videos
        showSeparator
        specifics
        projectStr
        projectId
        sequenceStr
        sequenceId
        sequence {
          id
          name
          description
          img
          sequenceId
          projectStr
          projectId
        }
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
        owner {
          id
          name
          pic
          token
          email
          projectStr
          projectId
          companyStr
        }
      }
      nextToken
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
      }
      articles {
        items {
          id
          articleType
          title
          subtitle
          subtitle2
          description
          content
          content2
          content3
          rawcontent
          img
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
          images
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
          contactMail
          projectId
          locales
        }
        articles {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      palette
      logo
      contact {
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
      articles(limit: 200) {
        items {
          id
          articleType
          title
          subtitle
          subtitle2
          description
          content
          content2
          content3
          rawcontent
          img
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
          images
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
      }
      nextToken
    }
  }
`;
export const getSequence = /* GraphQL */ `
  query GetSequence($id: ID!) {
    getSequence(id: $id) {
      id
      name
      description
      img
      sequenceId
      projectStr
      projectId
      project {
        id
        name
        description
        palette
        logo
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
      }
      articles(limit: 200) {
        items {
          id
          articleType
          title
          subtitle
          subtitle2
          description
          content
          content2
          content3
          rawcontent
          img
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
          images
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
      layout {
        id
        title
        subtitle
      }
    }
  }
`;
export const listSequences = /* GraphQL */ `
  query ListSequences(
    $filter: ModelSequenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSequences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        img
        sequenceId
        projectStr
        projectId
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
        layout {
          id
          title
          subtitle
        }
      }
      nextToken
    }
  }
`;
