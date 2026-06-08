# @type-r-development/component-library 🚀

[![.github/workflows/deploy.yaml](https://github.com/Type-R-Development/component-library/actions/workflows/deploy.yaml/badge.svg)](https://github.com/Type-R-Development/component-library/actions/workflows/deploy.yaml)

A framework-agnostic React component system designed for rapid client website development.

This repository contains reusable UI components, design primitives, accessibility standards, and the CSS variable contract used across all Type-R websites.

Components are intentionally CMS-agnostic and do not contain Sanity-specific logic. Styling is driven through a standardized CSS variable system that allows each website to define its own brand, theme, and design tokens while maintaining a consistent component API.

## Installation

To get started, install the TypeR Components Library using your preferred package manager:

```bash
npm install @type-r-development/component-library
```

or

```bash
yarn add @type-r-development/component-library
```

## Responsibilities

- Reusable UI components
- Design system primitives
- Accessibility standards
- Component documentation
- Storybook
- CSS variable contract
- Theming support

## Non-Goals

- CMS schemas
- Content modeling
- Sanity integrations
- Website routing
- Application state management

## Consumers

- page-builder
- website-template
- client websites
