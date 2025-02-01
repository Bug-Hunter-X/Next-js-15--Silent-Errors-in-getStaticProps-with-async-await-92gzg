# Next.js 15: Silent Errors in `getStaticProps` with `async/await`

This repository demonstrates a subtle bug in Next.js 15 related to error handling within `getStaticProps` when using `async/await`.  Improper error handling can lead to blank pages or cryptic 500 errors without clear console logs.

## Problem

The `bug.js` file shows a `getStaticProps` function that fetches data asynchronously.  If the fetch fails, a silent error occurs, resulting in an empty page.

## Solution

The `bugSolution.js` file presents a corrected version with robust error handling.  It uses a `try...catch` block to gracefully handle potential errors during the fetch, providing fallback mechanisms and logging helpful error information to the console.