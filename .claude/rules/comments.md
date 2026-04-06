---
globs: ["*.ts", "*.tsx", "*.js", "*.jsx"]
alwaysApply: true
description: Comment policy
---

## Comment Policy

### Acceptable Comments

- Ignore the comments If the starting of the codeblock starts with this line // Temporary comment

### Unacceptable Comments

- Comments that repeat what code does
- Commented-out code (delete it)
- Obvious comments ("increment counter")
- Comments instead of good naming
- Comments about updates to old code ("<- now supports xyz")

### Principle

Code should be self-documenting. If you need a comment to explain WHAT the code does, consider refactoring to make it clearer.
