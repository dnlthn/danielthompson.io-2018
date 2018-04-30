import react from 'images/tech-icons/react.svg'
import redux from 'images/tech-icons/redux.svg'
import apollo from 'images/tech-icons/apollo.svg'
import jest from 'images/tech-icons/jest.svg'
import webpack from 'images/tech-icons/webpack.svg'

import glamorous from 'images/tech-icons/glamorous.svg'
import gatsby from 'images/tech-icons/gatsby.svg'
import javascript from 'images/tech-icons/javascript.svg'
import nodejs from 'images/tech-icons/nodejs.svg'
import graphql from 'images/tech-icons/graphql.svg'
import html from 'images/tech-icons/html.svg'
import css from 'images/tech-icons/css.svg'

import vscode from 'images/tech-icons/vscode.svg'
import git from 'images/tech-icons/git.svg'
import hyper from 'images/tech-icons/hyper.svg'
import netlify from 'images/tech-icons/netlify.svg'
import asana from 'images/tech-icons/asana.svg'
import slack from 'images/tech-icons/slack.svg'
import macos from 'images/tech-icons/macos.svg'

const data = [
  { label: 'React', svg: react, frequency: 'daily', category: 'tooling' },
  { label: 'Apollo', svg: apollo, frequency: 'daily', category: 'tooling' },
  { label: 'Redux', svg: redux, frequency: 'daily', category: 'tooling' },
  { label: 'Jest', svg: jest, frequency: 'daily', category: 'tooling' },
  { label: 'Webpack', svg: webpack, frequency: 'daily', category: 'tooling' },
  { label: 'Gatsby', svg: gatsby, frequency: 'daily', category: 'tooling' },
  {
    label: 'Glamorous',
    svg: glamorous,
    frequency: 'daily',
    category: 'tooling',
  },

  {
    label: 'JavaScript',
    svg: javascript,
    frequency: 'daily',
    category: 'languages',
  },
  { label: 'Node.js', svg: nodejs, frequency: 'daily', category: 'languages' },
  { label: 'GraphQL', svg: graphql, frequency: 'daily', category: 'languages' },
  { label: 'HTML', svg: html, frequency: 'daily', category: 'languages' },
  { label: 'CSS', svg: css, frequency: 'daily', category: 'languages' },

  {
    label: 'VSCode',
    svg: vscode,
    frequency: 'daily',
    category: 'the rest',
  },
  { label: 'Git', svg: git, frequency: 'daily', category: 'the rest' },
  { label: 'Hyper', svg: hyper, frequency: 'daily', category: 'the rest' },
  { label: 'Netlify', svg: netlify, frequency: 'daily', category: 'the rest' },
  { label: 'Asana', svg: asana, frequency: 'daily', category: 'the rest' },
  { label: 'Slack', svg: slack, frequency: 'daily', category: 'the rest' },
  { label: 'MacOS', svg: macos, frequency: 'daily', category: 'the rest' },
]

export default data
