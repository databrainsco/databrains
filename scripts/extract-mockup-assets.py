#!/usr/bin/env python3
"""Extract page assets from design mockup PNGs."""
from PIL import Image
import os

ASSETS_SRC = '/Users/michi/.cursor/projects/Users-michi-Desktop-databrainsdefinitivo/assets'
OUT_BASE = '/Users/michi/Desktop/databrainsdefinitivo/src/assets/images/pages'
CAROUSEL_LEFT = 54
CAROUSEL_RIGHT = 55
CAROUSEL_PHOTO_H = 15


def save(img, path, scale=2):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if scale > 1:
        img = img.resize((img.width * scale, img.height * scale), Image.Resampling.LANCZOS)
    img.convert('RGB').save(path, quality=95)
    print(f'saved {path} {img.size}')


def carousel_boxes(w, count):
    usable = w - CAROUSEL_LEFT - CAROUSEL_RIGHT
    cw = usable / count
    return [
        (int(CAROUSEL_LEFT + i * cw + 2), int(CAROUSEL_LEFT + (i + 1) * cw - 2))
        for i in range(count)
    ]


def extract_carousel(im, y1, count, out_dir, scale=8):
    boxes = carousel_boxes(im.width, count)
    y2 = y1 + CAROUSEL_PHOTO_H
    for i, (l, r) in enumerate(boxes, 1):
        save(im.crop((l, y1, r, y2)), f'{out_dir}/carousel-{i}.jpg', scale=scale)


def split_strip(im, box, count, out_dir, prefix, scale=6, photo_frac=0.38):
    strip = im.crop(box)
    w, h = strip.size
    photo_h = max(1, int(h * photo_frac))
    cw = w / count
    inset = max(1, int(cw * 0.02))
    for i in range(count):
        l = int(i * cw + inset)
        r = int((i + 1) * cw - inset)
        save(strip.crop((l, 0, r, photo_h)), f'{out_dir}/{prefix}-{i + 1}.jpg', scale=scale)


def extract(page, cfg):
    src = os.path.join(ASSETS_SRC, cfg['file'])
    im = Image.open(src)
    w, h = im.size
    out = os.path.join(OUT_BASE, page)

    if 'hero' in cfg:
        box = cfg['hero'](w, h) if callable(cfg['hero']) else cfg['hero']
        save(im.crop(box), f'{out}/hero.jpg', scale=2)

    if 'cta' in cfg:
        box = cfg['cta'](w, h) if callable(cfg['cta']) else cfg['cta']
        save(im.crop(box), f'{out}/cta.jpg', scale=2)

    if 'carousel' in cfg:
        extract_carousel(im, cfg['carousel']['y'], cfg['carousel']['count'], out)

    for key in ('before', 'after', 'results'):
        if key in cfg:
            box = cfg[key](w, h) if callable(cfg[key]) else cfg[key]
            save(im.crop(box), f'{out}/{key}.jpg', scale=2)

    if 'bi' in cfg:
        y1, y2 = cfg['bi']['y']
        split_strip(im, (0, y1, w, y2), cfg['bi']['count'], out, 'bi', scale=6, photo_frac=0.35)

    if 'audience' in cfg:
        y1, y2 = cfg['audience']['y']
        split_strip(im, (0, y1, w, y2), cfg['audience']['count'], out, 'audience', scale=5, photo_frac=0.85)

    if 'feature' in cfg:
        boxes = cfg['feature'](w, h) if callable(cfg['feature']) else cfg['feature']
        for i, box in enumerate(boxes, 1):
            save(im.crop(box), f'{out}/feature-{i}.jpg', scale=3)


PAGES = {
    'nube': {
        'file': '03-Soluciones_Empresariales_-_Nube-12294792-dc1e-418d-9e8b-4f0a7cf53f1b.png',
        'hero': lambda w, h: (175, 168, w - 6, 276),
        'cta': lambda w, h: (int(w * 0.53), 886, w - 4, 972),
        'carousel': {'y': 355, 'count': 5},
    },
    'devops': {
        'file': '03-Soluciones_Empresariales_-_DevOps2-934dfeec-83b9-496e-8b4f-825587225950.png',
        'hero': lambda w, h: (175, 168, w - 6, 276),
        'cta': lambda w, h: (int(w * 0.53), 884, w - 4, 970),
        'carousel': {'y': 348, 'count': 5},
        'before': lambda w, h: (155, 648, 275, 768),
        'after': lambda w, h: (305, 648, 425, 768),
    },
    'datascience': {
        'file': '03-Soluciones_Empresariales_-_DataScience-44ec6723-64c0-4aee-a705-7cea668403de.png',
        'hero': lambda w, h: (175, 168, w - 6, 298),
        'cta': lambda w, h: (int(w * 0.54), 892, w - 4, 978),
        'carousel': {'y': 462, 'count': 5},
        'bi': {'y': (658, 726), 'count': 6},
    },
    'ia': {
        'file': '03-Soluciones_Empresariales_-_IA-f3c8c430-7006-4538-9a5e-da6284baad52.png',
        'hero': lambda w, h: (175, 168, w - 6, 276),
        'cta': lambda w, h: (int(w * 0.53), 884, w - 4, 970),
        'carousel': {'y': 348, 'count': 5},
        'before': lambda w, h: (157, 648, 277, 768),
        'after': lambda w, h: (307, 648, 427, 768),
    },
    'software': {
        'file': '03-Soluciones_Empresariales_-_2Software_A_la_Medida-fc71688d-fa1a-4294-a1fe-8d510f68103a.png',
        'hero': lambda w, h: (175, 168, w - 6, 276),
        'cta': lambda w, h: (int(w * 0.53), 884, w - 4, 970),
        'carousel': {'y': 348, 'count': 5},
    },
    'blockchain': {
        'file': '03-Soluciones_Empresariales_-_Blockchain-a1d89794-17b3-4770-9119-cb9e974840c2.png',
        'hero': lambda w, h: (175, 168, w - 6, 276),
        'cta': lambda w, h: (int(w * 0.54), 892, w - 4, 978),
        'carousel': {'y': 348, 'count': 6},
        'audience': {'y': (718, 778), 'count': 5},
        'results': lambda w, h: (12, 812, 282, 902),
    },
    'landing': {
        'file': '08-_Emprendedores_M1B__-_Landing_Pages-83448147-bcce-43c7-a422-9dde6cd18a6e.png',
        'hero': lambda w, h: (6, 200, w - 6, 315),
        'feature': lambda w, h: [
            (14, 358, 280, 492),
            (296, 358, 562, 492),
            (14, 502, 280, 636),
            (296, 502, 562, 636),
        ],
    },
}


if __name__ == '__main__':
    for page, cfg in PAGES.items():
        extract(page, cfg)
