# Deployment (Coolify)

## DNS

Point these A records at your DNS provider to the VPS IP **102.211.205.157**:

| Host | Type | Value |
|------|------|-------|
| `@` (apex) | A | `102.211.205.157` |
| `test` | A | `102.211.205.157` |

Coolify issues Let's Encrypt certificates once DNS resolves.

## Environments

| Environment | Branch | URL |
|-------------|--------|-----|
| Production | `main` | https://bakedwithfeelings.co.za |
| Testing | `test` | https://test.bakedwithfeelings.co.za |

Pushes to `main` or `test` trigger auto-deploy via Coolify webhooks.

## Coolify

- Instance: https://coolify.upshft.app/
- Team: Ellene
- Project: bakedwithfeelings
