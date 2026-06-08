#!/usr/bin/env bash

set -euo pipefail

REPO="OWNER/REPO"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$SCRIPT_DIR"

gh issue create \
  --repo "$REPO" \
  --title "Set up package architecture" \
  --body-file "./issues/001-set-up-package-architecture.md" \
  --label "setup" \
  --label "architecture" \
  --label "foundation"

gh issue create \
  --repo "$REPO" \
  --title "Define component API conventions" \
  --body-file "./issues/002-define-component-api-conventions.md" \
  --label "architecture" \
  --label "components"

gh issue create \
  --repo "$REPO" \
  --title "Define CSS variable contract" \
  --body-file "./issues/003-define-css-variable-contract.md" \
  --label "theme" \
  --label "css" \
  --label "architecture"

gh issue create \
  --repo "$REPO" \
  --title "Set up Storybook" \
  --body-file "./issues/004-set-up-storybook.md" \
  --label "documentation" \
  --label "storybook"

gh issue create \
  --repo "$REPO" \
  --title "Set up testing and accessibility checks" \
  --body-file "./issues/005-set-up-testing-and-accessibility-checks.md" \
  --label "testing" \
  --label "accessibility"

gh issue create \
  --repo "$REPO" \
  --title "Build foundational primitives" \
  --body-file "./issues/006-build-foundational-primitives.md" \
  --label "components" \
  --label "primitives"

gh issue create \
  --repo "$REPO" \
  --title "Build form components" \
  --body-file "./issues/007-build-form-components.md" \
  --label "components" \
  --label "forms"

gh issue create \
  --repo "$REPO" \
  --title "Build marketing section components" \
  --body-file "./issues/008-build-marketing-section-components.md" \
  --label "components" \
  --label "marketing"

gh issue create \
  --repo "$REPO" \
  --title "Add documentation site/readme" \
  --body-file "./issues/009-add-documentation-site-readme.md" \
  --label "documentation"

gh issue create \
  --repo "$REPO" \
  --title "Set up release/versioning workflow" \
  --body-file "./issues/010-set-up-release-versioning-workflow.md" \
  --label "release" \
  --label "ci"
