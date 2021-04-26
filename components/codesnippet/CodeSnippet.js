
const CodeSnippet = async ({query, res}) => {
  const snippet = `
  <!doctype html>
    <html>
    <head>
      <title>Prakash Acharya</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <base target="_blank">
      <style>
        body {
          margin: 0
        }
        .gitlab-embed-snippets {
          margin: unset !important;
        }
        .gitlab-embed-snippets .btn-group a.btn {
          padding: 4px 4px !important;
        }
      </style>
    </head>
    <body>
        //Get Gitlab or Gist script tag
      <script src="https://${query.snippet}.js"></script>
    </body>
  </html>
  `
  res.end(snippet);
}

export default CodeSnippet;