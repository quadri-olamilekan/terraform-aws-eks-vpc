module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/quadri-olamilekan/terraform-aws-eks-vpc.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
     }