<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:version-check-rules -->

# Always verify library versions before writing any code

⛔ **NEVER write any library-specific code without first reading `package.json` AND the relevant `node_modules/<pkg>/dist/*.d.ts`. Violation of this rule causes bugs.**

**Before using any library API, component, or prop — read `package.json` first.**

## Current dependency versions (from package.json)

| Package               | Version |
| --------------------- | ------- |
| `next`                | 16.2.6  |
| `react` / `react-dom` | 19.2.4  |
| `@heroui/react`       | ^3.0.5  |
| `@heroui/styles`      | ^3.0.5  |
| `better-auth`         | ^1.6.11 |
| `swiper`              | ^12.1.4 |
| `react-icons`         | ^5.6.0  |
| `react-fast-marquee`  | ^1.6.5  |
| `react-hot-toast`     | ^2.6.0  |
| `tailwindcss`         | ^4      |
| `mongodb`             | ^7.2.0  |

## Rules

### Version Checks (do these first)

1. **Read `package.json`** before using any library API to confirm the installed major version.
2. **Read `node_modules/<package>/dist/*.d.ts`** to confirm a specific prop or component exists before using it.

### API Usage

3. **Never assume an API from training data.** Major versions often have breaking changes. A prop or component that existed in v2 may not exist in v3.
4. **HeroUI v3 is NOT HeroUI v2 / NextUI.** It is built on React Aria. Key differences discovered in this project:
   - `Input` does NOT support `startContent`, `endContent`, `classNames`, or `variant="bordered"`. Use `InputGroup` with `InputGroup.Prefix` / `InputGroup.Suffix` instead.
   - `Button` does NOT support `startContent`. Place icons as direct children. Use `isPending` not `isLoading`. Valid variants: `primary | secondary | tertiary | outline | ghost | danger`.
   - `Fieldset.Group` has built-in CSS (`w-full space-y-4`) that conflicts with custom grid classes — use a plain `<div>` for grid layouts inside `Fieldset`.
   - `Checkbox` requires full compound anatomy: `Checkbox.Control → Checkbox.Indicator` + `Checkbox.Content → Label`.
   - `toast()` from `react-hot-toast` takes a string or JSX — NOT an object `{title, description}`.
5. **Swiper v12** has a different API than v9/v10. Check `node_modules/swiper/` before using any Swiper props or modules.

### Auth & Async

6. **`callbackURL` in better-auth** only applies to email verification flows — it does not auto-redirect after sign-in/sign-up. Use `router.push()` manually after a successful auth call.
7. **Never use `setTimeout` as a substitute for real async handling.** Always `await` the actual call and set loading state from its result.
<!-- END:version-check-rules -->
