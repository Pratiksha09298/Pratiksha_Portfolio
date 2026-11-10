# Deployment guide

## Build artifact

The production build is written to `dist/`.

```sh
npm ci
npm run build
```

Run `npm run preview` locally before publishing. The site is a static SPA; configure your host to return `index.html` for the root route. The project includes a GitHub Pages workflow, a Netlify redirect rule, and an Amplify build specification.

## AWS Amplify

1. Connect the repository in the Amplify Console.
2. Select the app's branch and keep the repository-root `amplify.yml`.
3. Configure the SPA rewrite in **Hosting → Rewrites and redirects** if Amplify does not apply the included rule: source `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|svg|txt|woff|woff2|webp)$)([^.]+$)/>`, target `/index.html`, status `200`.
4. Save and deploy. The build output directory is `dist`.

## Amazon S3 + CloudFront

1. Run the build and upload `dist/` to a private S3 bucket configured for CloudFront Origin Access Control.
2. Create a CloudFront distribution with the S3 bucket as its origin and HTTPS redirect enabled.
3. Configure CloudFront custom error responses for S3 `403` and `404`: response page `/index.html`, HTTP response code `200`, TTL `0`.
4. Set the default root object to `index.html`, invalidate `/*` after releases, and attach a TLS certificate through ACM.
5. Restrict S3 access to the CloudFront distribution; do not make the bucket public.

## Netlify

Connect the repository and use the included `netlify.toml`, or set:

- Build command: `npm run build`
- Publish directory: `dist`

The SPA fallback is configured in `netlify.toml`.

## Vercel

Import the repository in Vercel. The Vite framework preset uses the standard build command (`npm run build`) and output directory (`dist`). Add a rewrite from `/(.*)` to `/` in the project settings if a custom route is introduced and direct navigation to that route must resolve to the SPA.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and publishes the app to GitHub Pages. In the repository settings, open **Pages** and set the source to **GitHub Actions**. The Vite config derives a project-site base path from `GITHUB_REPOSITORY`; user/organization sites use `/`.

If GitHub Pages is disabled by organization policy, use one of the other static hosts above.

## Post-deployment checks

- Confirm the root URL loads over HTTPS and refresh works.
- Check narrow and wide layouts, light/dark theme, and keyboard navigation.
- Generate and open both resume downloads.
- Submit the contact form and confirm it opens a prefilled email rather than claiming server delivery.
- Run Lighthouse on the public URL; target a score of 95+ while accounting for the visitor's device and network.
