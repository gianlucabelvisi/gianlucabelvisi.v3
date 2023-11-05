/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `GianlucaBelvisi.com`,
        siteUrl: `https://gianlucabelvisi.com`
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-firebase",
            options: {
                credentials: {
                    apiKey: process.env.GATSBY_API_KEY,
                    authDomain: process.env.GATSBY_AUTH_DOMAIN,
                    databaseURL: process.env.GATSBY_DATABASE_URL,
                    projectId: process.env.GATSBY_PROJECT_ID,
                    storageBucket: process.env.GATSBY_STORAGE_BUCKET,
                    messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
                    appId: process.env.GATSBY_APP_ID,
                    measurementId: process.env.GATSBY_MEASUREMENT_ID
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ],

};