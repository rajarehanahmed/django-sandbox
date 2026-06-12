export type BlogPost = {
  id: number;
  thumbnail?: string;
  title: string;
  author: string;
  datePublished: string;
  excerpt: string;
  path: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    thumbnail: "https://blog.nightly.mozilla.org/files/2025/10/image2.png",
    title: "More Kit, More Control – These Weeks in Firefox: Issue 203",
    author: "Katherine Patenio",
    datePublished: "June 3, 2026",
    excerpt:
      "Highlights James enabled adaptive autofill in Nightly for testing, which we believe should provide better results in the URL bar when doing autocomplete. Jack updated the illustrations shown on some ...",
    path: "/blog/1",
  },
  {
    id: 2,
    thumbnail: "https://blog.nightly.mozilla.org/files/2025/10/headlines190_3.png",
    title: "Backup for a Rainy Day – These Weeks in Firefox: Issue 202",
    author: "Mike Conley",
    datePublished: "June 1, 2026",
    excerpt:
      "Highlights The profile backup mechanism has been enabled by default for all desktop platforms in Nightly, as well as Beta. The current plan is to have this ride out to ...",
    path: "/blog/2",
  },
  {
    id: 3,
    thumbnail: "https://blog.nightly.mozilla.org/files/2025/09/headlines189_3.png",
    title: "Settings Are Getting a New Look!",
    author: "talee",
    datePublished: "May 20, 2026",
    excerpt:
      "The redesign of Firefox Settings is now enabled by default in Nightly. With this change, we are making it easier for people to customize Firefox and discover the controls that ...",
    path: "/blog/3",
  },
  {
    id: 4,
    thumbnail: "https://blog.nightly.mozilla.org/files/2025/09/headlines187_1.png",
    title: "Import-ant Updates – These Weeks in Firefox: Issue 201",
    author: "Katherine Patenio",
    datePublished: "April 30, 2026",
    excerpt:
      "Highlights Import attributes will be supported for WebExtensions, starting in Firefox 150. This allows WebExtension authors to import CSS module scripts and JSON into their JavaScript modules ...",
    path: "/blog/4",
  },
];
