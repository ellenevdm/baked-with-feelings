# Deployment (Coolify)

## DNS

Point these A records at your DNS provider to the VPS IP **102.211.205.157**:

| Host | Type | Value |
|------|------|-------|
| `@` (apex) | A | `102.211.205.157` |
| `test` | A | `102.211.205.157` |

Coolify issues Let's Encrypt certificates once DNS resolves. Until then, the apps are live on the VPS but custom domains will not reach Coolify.

## Environments

| Environment | Branch | URL | Coolify app UUID |
|-------------|--------|-----|------------------|
| Production | `main` | https://bakedwithfeelings.co.za | `fwhimyvuzp4mhst7u9wv2hcd` |
| Testing | `test` | https://test.bakedwithfeelings.co.za | `gioxxwfkyiktdjvcivlx6umk` |

## Coolify

- Instance: https://coolify.upshft.app/
- Team: Ellene
- Project: bakedwithfeelings
- Server: localhost (`upshft.app`)

## Git integration (private repo)

The source repo (`ellenevdm/baked-with-feelings`) is private. Coolify clones from a deploy mirror at `GitBrendonvdm/baked-with-feelings` using an SSH deploy key.

On push to `main` or `test` in the source repo, the GitHub Action `.github/workflows/deploy-coolify.yml` syncs the branch to the mirror. Webhooks on the mirror then trigger Coolify auto-deploy.

Required GitHub secret on `ellenevdm/baked-with-feelings`:

- `COOLIFY_MIRROR_TOKEN` — PAT with `repo` access to both the source and mirror repos

### Optional: connect Coolify directly to ellenevdm

Ellene can add the Coolify deploy key in GitHub repo settings (Deploy keys) or connect a GitHub App in Coolify, then point the apps at `git@github.com:ellenevdm/baked-with-feelings.git`.
