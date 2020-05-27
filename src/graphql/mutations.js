/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticle = /* GraphQL */ `
  mutation CreateArticle($input: CreateArticleInput!) {
    createArticle(input: $input) {
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
        }
        articles {
          nextToken
        }
        layout
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
        }
        articles {
          nextToken
        }
      }
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle($input: UpdateArticleInput!) {
    updateArticle(input: $input) {
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
        }
        articles {
          nextToken
        }
        layout
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
        }
        articles {
          nextToken
        }
      }
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle($input: DeleteArticleInput!) {
    deleteArticle(input: $input) {
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
        }
        articles {
          nextToken
        }
        layout
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
        }
        articles {
          nextToken
        }
      }
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile($input: DeleteProfileInput!) {
    deleteProfile(input: $input) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
        }
        articles {
          nextToken
        }
      }
      contactMail
      projectId
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
          sequenceId
          projectStr
          projectId
          layout
        }
        nextToken
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
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
        }
        articles {
          nextToken
        }
      }
      contactMail
      projectId
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
          sequenceId
          projectStr
          projectId
          layout
        }
        nextToken
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
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
        }
        articles {
          nextToken
        }
      }
      contactMail
      projectId
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
          sequenceId
          projectStr
          projectId
          layout
        }
        nextToken
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
export const createSequence = /* GraphQL */ `
  mutation CreateSequence($input: CreateSequenceInput!) {
    createSequence(input: $input) {
      id
      name
      description
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
      layout
    }
  }
`;
export const updateSequence = /* GraphQL */ `
  mutation UpdateSequence($input: UpdateSequenceInput!) {
    updateSequence(input: $input) {
      id
      name
      description
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
      layout
    }
  }
`;
export const deleteSequence = /* GraphQL */ `
  mutation DeleteSequence($input: DeleteSequenceInput!) {
    deleteSequence(input: $input) {
      id
      name
      description
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
      layout
    }
  }
`;
