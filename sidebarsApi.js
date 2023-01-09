/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {type: 'autogenerated', dirName: '.'},
  //   // {type:'autogenerated',dirName:'./api'}
  // ],
  openApiSidebar: [
    {
      type: "category",
      label: "API",
      collapsed:false,
      link: {
        type: "generated-index",
        title: "GATEWAY API",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/",
        // collapsed: false,
      },
      // @ts-ignore
      items: require("./api/gateway/sidebar.js")
    }
    // {type: 'autogenerated', dirName: './docs/petstore'},

  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type:'doc',
      id:'ddoc'
    },
    // 'intro', // main page
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
    {
      type:'link',
      label:'Dineropay',
      href:'https://test.com'
    }
  ],
  */
};

module.exports = sidebars;
