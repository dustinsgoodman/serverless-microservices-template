module.exports = {
  "**/*.js": "yarn lint:errors",
  "services/graphql-api/**/*.js": () => {
    return [
      "yarn apollo client:download-schema --endpoint=http://localhost:3000/local/graphql services/graphql-api/schema/schema.graphql",
      "graphql-schema-linter",
      "git add services/graphql-api/schema/schema.graphql"
    ];
 }
};
