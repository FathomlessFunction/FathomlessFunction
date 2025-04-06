---
date:
  created: 2025-04-06
---

# Hello World!

Today I set up this website, using Github Actions, Material on MKDocs.
<!-- more -->

This was very easy to do, and I especially love this blog section! In the past, I have briefly used both [Docusaurus](https://docusaurus.io/) and [Jekyll](https://jekyllrb.com/), but I came across Material when searching for alternatives and wanted to see what using it was like! 

The learning curve for this is significantly lower than what is required for both Docusaurus and Jekyll - in Jekyll for example, I've found I need to manage which documents are parents of the other using metadata. In comparison, this automatically generates a page structure, simply by looking at the folders and markdown files within your 'docs' folder! Very simple and easy to do, though I imagine perhaps this simplicity may come at the cost of there being less customisation options down the line.

Regardless, it's great to have a little website and blog to experiment with!

## Today's learnings
One small error I ran into was regarding the 'date' metadata for this page. It must always follow the format `YYYY-MM-DD` - so it is necessary to include zeroes in order to meet this format. For example, `2025-01-01` is valid, but `2025-1-1` is not.

The generated website also provided the following commands - I shall include them below:

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Relevant Links & Resources
- [Material's Getting Started documentation](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Documentation on how to set up Blogs](https://squidfunk.github.io/mkdocs-material/tutorials/blogs/basic/)
- [mkdocs.org](https://www.mkdocs.org)