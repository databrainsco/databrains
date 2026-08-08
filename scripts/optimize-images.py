#!/usr/bin/env python3
"""Compress oversized raster assets used by the marketing site (in-place, same format)."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "src" / "assets" / "images"
MAX_EDGE = 1600
JPEG_QUALITY = 78
SKIP_NAMES = {"cta-source.jpg"}


def should_skip(path: Path) -> bool:
    name = path.name.lower()
    if name in SKIP_NAMES:
        return True
    if "mockup-reference" in name:
        return True
    return False


def has_useful_alpha(img: Image.Image) -> bool:
    if img.mode not in {"RGBA", "LA"}:
        return False
    extrema = img.getchannel("A").getextrema()
    return extrema[0] < 255


def optimize_file(path: Path) -> tuple[int, int] | None:
    before = path.stat().st_size
    suffix = path.suffix.lower()

    with Image.open(path) as original:
        img = original.copy()

    w, h = img.size
    scale = min(1.0, MAX_EDGE / max(w, h))
    if scale < 1.0:
        img = img.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.Resampling.LANCZOS)

    tmp = path.with_suffix(path.suffix + ".tmp")

    try:
        if suffix in {".jpg", ".jpeg"}:
            if before < 160_000 and scale >= 1.0:
                return None
            rgb = img.convert("RGB")
            rgb.save(tmp, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        elif suffix == ".png":
            if before < 250_000 and scale >= 1.0:
                return None
            if has_useful_alpha(img if img.mode in {"RGBA", "LA"} else img.convert("RGBA")):
                out = img.convert("RGBA")
                out.save(tmp, format="PNG", optimize=True)
            else:
                # Opaque PNG → still PNG to keep imports stable, but compress harder via palette when small
                rgb = img.convert("RGB")
                rgb.save(tmp, format="PNG", optimize=True)
        else:
            return None

        after = tmp.stat().st_size
        if after >= before * 0.98:
            tmp.unlink(missing_ok=True)
            return None
        tmp.replace(path)
        return before, after
    except Exception:
        tmp.unlink(missing_ok=True)
        raise


def main() -> None:
    changed = 0
    saved = 0
    for dirpath, _, files in os.walk(ROOT):
        for name in files:
            path = Path(dirpath) / name
            if path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
                continue
            if should_skip(path):
                continue
            result = optimize_file(path)
            if not result:
                continue
            before, after = result
            changed += 1
            saved += before - after
            print(f"{before / 1e6:.2f}MB → {after / 1e6:.2f}MB  {path.relative_to(ROOT)}")

    print(f"\nOptimized {changed} files, saved {saved / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
