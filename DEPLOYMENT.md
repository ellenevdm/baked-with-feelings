# Deployment (Coolify)

## DNS (required for HTTPS)

The domain currently uses **Afrihost parking DNS** (`parking1.zadns.co.za`) and points to the wrong server. Let's Encrypt cannot sign certificates until this is fixed.

| Check | Current | Required |
|-------|---------|----------|
| `bakedwithfeelings.co.za` | `102.214.8.148` (parking) | `102.211.205.157` |
| `test.bakedwithfeelings.co.za` | does not exist | `102.211.205.157` |

At your Afrihost / domain control panel, remove parking records and add:

| Host | Type | Value |
|------|------|-------|
| `@` (apex) | A | `102.211.205.157` |
| `test` | A | `102.211.205.157` |

After DNS propagates (usually 5–30 minutes), Coolify Traefik will automatically request Let's Encrypt certificates. Force HTTPS is already enabled on both apps.

To retry manually: restart the proxy on the VPS (`docker restart coolify-proxy`) once DNS resolves correctly.

## HTTPS / SSL

Coolify uses Traefik + Let's Encrypt (HTTP challenge on port 80). Certificates are requested automatically when:

1. DNS points to `102.211.205.157`
2. Port 80 is reachable from the internet
3. No other host answers the ACME challenge for that domain

If cert issuance fails, check Traefik logs: `docker logs coolify-proxy | grep bakedwithfeelings`

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
