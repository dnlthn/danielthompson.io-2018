// Daily Tech
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

// Occasional Tech
import phoenix from 'images/tech-icons/phoenix.svg'
import rails from 'images/tech-icons/rails.svg'
import lodash from 'images/tech-icons/lodash.svg'
import express from 'images/tech-icons/express.svg'
import graphcool from 'images/tech-icons/graphcool.svg'
import mongodb from 'images/tech-icons/mongodb.svg'
import mysql from 'images/tech-icons/mysql.svg'

import elixir from 'images/tech-icons/elixir.svg'
import ruby from 'images/tech-icons/ruby.svg'

import digitalocean from 'images/tech-icons/digitalocean.svg'

// Previous Tech
import angular from 'images/tech-icons/angular.svg'
import bootstrap from 'images/tech-icons/bootstrap.svg'
import jquery from 'images/tech-icons/jquery.svg'
import sass from 'images/tech-icons/sass.svg'
import dotnet from 'images/tech-icons/dotnet.svg'

import python from 'images/tech-icons/python.svg'
import java from 'images/tech-icons/java.svg'
import c from 'images/tech-icons/c.svg'
import cplusplus from 'images/tech-icons/cplusplus.svg'
import lua from 'images/tech-icons/lua.svg'

import atom from 'images/tech-icons/atom.svg'
import intellij from 'images/tech-icons/intellij.svg'

const daily_tech = [
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

const occasional_tech = [
  {
    label: 'Phoenix',
    svg: phoenix,
    frequency: 'occasionally',
    category: 'tooling',
  },
  {
    label: 'Ruby on Rails',
    svg: rails,
    frequency: 'occasionally',
    category: 'tooling',
  },
  {
    label: 'Lodash',
    svg: lodash,
    frequency: 'occasionally',
    category: 'tooling',
  },
  {
    label: 'Express',
    svg: express,
    frequency: 'occasionally',
    category: 'tooling',
  },
  {
    label: 'Graphcool',
    svg: graphcool,
    frequency: 'occasionally',
    category: 'tooling',
  },
  {
    label: 'MongoDB',
    svg: mongodb,
    frequency: 'occasionally',
    category: 'tooling',
  },
  {
    label: 'MySQL',
    svg: mysql,
    frequency: 'occasionally',
    category: 'tooling',
  },

  {
    label: 'Elixir',
    svg: elixir,
    frequency: 'occasionally',
    category: 'languages',
  },
  {
    label: 'Ruby',
    svg: ruby,
    frequency: 'occasionally',
    category: 'languages',
  },

  {
    label: 'Digital Ocean',
    svg: digitalocean,
    frequency: 'occasionally',
    category: 'the rest',
  },
]

const previous_tech = [
  {
    label: 'Angular.js',
    svg: angular,
    frequency: 'previously',
    category: 'tooling',
  },
  {
    label: 'Bootstrap',
    svg: bootstrap,
    frequency: 'previously',
    category: 'tooling',
  },
  {
    label: 'jQuery',
    svg: jquery,
    frequency: 'previously',
    category: 'tooling',
  },
  {
    label: 'Sass',
    svg: sass,
    frequency: 'previously',
    category: 'tooling',
  },
  {
    label: '.NET',
    svg: dotnet,
    frequency: 'previously',
    category: 'tooling',
  },

  {
    label: 'Python',
    svg: python,
    frequency: 'previously',
    category: 'languages',
  },
  {
    label: 'Java',
    svg: java,
    frequency: 'previously',
    category: 'languages',
  },
  {
    label: 'C',
    svg: c,
    frequency: 'previously',
    category: 'languages',
  },
  {
    label: 'C++',
    svg: cplusplus,
    frequency: 'previously',
    category: 'languages',
  },
  {
    label: 'Lua',
    svg: lua,
    frequency: 'previously',
    category: 'languages',
  },

  {
    label: 'Atom',
    svg: atom,
    frequency: 'previously',
    category: 'the rest',
  },
  {
    label: 'Intellij IDEA',
    svg: intellij,
    frequency: 'previously',
    category: 'the rest',
  },
]
export default [...daily_tech, ...occasional_tech, ...previous_tech]
