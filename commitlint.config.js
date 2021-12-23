module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          "docs",
          "chore",
          "feat",
          "fix",
          "merge",
          "improvement",
          "perf",
          "refactor",
          "revert",
          "style",
          "test",
          "ci",
          "build",
        ]
      ]
    }
  }
  