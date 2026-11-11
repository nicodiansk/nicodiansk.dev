"""Generate the hero's animated glitch portrait (animated WebP) from the still photo.

Mostly-still loop with short glitch bursts: RGB split, displaced slices, scanlines
and a pink/teal riso-print flash. Run from the repo root:

    python3 scripts/make-portrait-loop.py

Requires Pillow. Output: public/images/nicholas-loop.webp
"""

import random

from PIL import Image, ImageChops, ImageDraw, ImageOps

SRC = "public/images/nicholas.jpg"
OUT = "public/images/nicholas-loop.webp"
SIZE = 480

INK = (7, 7, 7)
PINK = (239, 79, 122)
TEAL = (38, 183, 170)
PAPER = (243, 230, 200)

rng = random.Random(7)
base = Image.open(SRC).convert("RGB").resize((SIZE, SIZE), Image.LANCZOS)


def rgb_split(img, dx):
    r, g, b = img.split()
    r = ImageChops.offset(r, -dx, 0)
    b = ImageChops.offset(b, dx, dx // 3)
    return Image.merge("RGB", (r, g, b))


def slices(img, n, max_shift):
    out = img.copy()
    for _ in range(n):
        y = rng.randrange(0, SIZE - 20)
        h = rng.randrange(6, 48)
        dx = rng.randint(-max_shift, max_shift)
        band = img.crop((0, y, SIZE, y + h))
        out.paste(ImageChops.offset(band, dx, 0), (0, y))
    return out


def scanlines(img, alpha=60):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for y in range(0, SIZE, 4):
        d.line([(0, y), (SIZE, y)], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def riso(img, dark, mid, light):
    gray = ImageOps.autocontrast(img.convert("L"), cutoff=2)
    return ImageOps.colorize(gray, black=dark, mid=mid, white=light)


def glitch(img, strength):
    g = rgb_split(img, int(6 + 14 * strength))
    g = slices(g, int(3 + 8 * strength), int(10 + 50 * strength))
    return scanlines(g, int(40 + 50 * strength))


frames, durations = [], []


def add(img, ms):
    frames.append(img)
    durations.append(ms)


# beat 1: hold, then a strong burst ending on a riso flash
add(base, 2600)
add(glitch(base, 0.4), 70)
add(glitch(base, 1.0), 60)
add(riso(base, INK, PINK, PAPER), 90)
add(glitch(riso(base, INK, TEAL, PAPER), 0.7), 60)
add(glitch(base, 0.3), 70)
# beat 2: hold, short twitch
add(base, 2200)
add(rgb_split(base, 10), 60)
add(slices(base, 6, 40), 60)
# beat 3: hold, teal flash
add(base, 2400)
add(glitch(base, 0.6), 60)
add(riso(base, INK, TEAL, PAPER), 80)
add(glitch(base, 0.2), 60)

frames[0].save(
    OUT,
    save_all=True,
    append_images=frames[1:],
    duration=durations,
    loop=0,
    quality=72,
    minimize_size=True,
    allow_mixed=True,
    method=6,
)
print(f"wrote {OUT}: {len(frames)} frames, {sum(durations)} ms loop")
