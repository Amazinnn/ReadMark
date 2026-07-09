# Versioning

ReadMark uses SemVer-style versioning.

## Version Sources

Keep these files in sync for every release:

- `manifest.json`
- `package.json`
- `package-lock.json`
- `versions.json`
- Git tag
- GitHub Release

Current version:

```text
0.2.1
```

Current minimum Obsidian version:

```text
1.5.0
```

## Version Meaning

- Patch: bug fixes, documentation updates, small UI adjustments, internal cleanup.
- Minor: user-facing features, new stats views, new recognized excerpt formats, new settings.
- Major: incompatible data model changes, plugin ID changes, or migrations that require user action.

Until the plugin reaches `1.0.0`, minor versions may still include behavior changes, but data compatibility must remain explicit.

## Release Checklist

Before a release:

1. Update `manifest.json.version`.
2. Update `package.json.version`.
3. Run `npm install` if `package-lock.json` needs to reflect the package version.
4. Update `versions.json` with the release version and minimum Obsidian version.
5. Run `npm run build`.
6. Verify Obsidian can load the plugin from this directory.
7. Confirm no runtime data is staged:

```powershell
git status --short --ignored
```

8. Commit with a release-oriented message.
9. Tag the release:

```powershell
git tag v0.2.1
```

10. Push commit and tag:

```powershell
git push origin main
git push origin v0.2.1
```

11. Create a GitHub Release containing:

- `manifest.json`
- `main.js`
- `styles.css`

## Obsidian Compatibility

`versions.json` maps plugin versions to minimum Obsidian versions.

Example:

```json
{
  "0.2.1": "1.5.0"
}
```

Only raise the minimum Obsidian version when the plugin uses APIs that require it.

## Git Branch

Use `main` as the primary branch.

Do not push runtime data or local vault files. This repository lives inside an Obsidian vault's plugin directory for fast testing, but it is still the source repository.
