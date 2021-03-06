/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateSequence = /* GraphQL */ `
  subscription OnCreateSequence {
    onCreateSequence {
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
export const onUpdateSequence = /* GraphQL */ `
  subscription OnUpdateSequence {
    onUpdateSequence {
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
export const onDeleteSequence = /* GraphQL */ `
  subscription OnDeleteSequence {
    onDeleteSequence {
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
