# GTNH Faithful Texture Pack
By Ethryan and [plenty of other contributors](https://github.com/Ethryan/GTNH-Faithful-Textures/graphs/contributors).

**No Other Resource Pack is required.**

- Github: https://github.com/Ethryan/GTNH-Faithful-Textures
- GTNH Resource Pack wiki page: https://wiki.gtnewhorizons.com/wiki/Resource_Packs

## Installation

1. Download `GTNH-Faithful-x32 vX.Y.Z.zip` from the [Releases](../../releases) page.
2. Put the `.zip` in your instance's `resourcepacks` folder. Do **not** extract it.
3. In-game, open *Options → Resource Packs* and move **GT New Horizons Faithful x32** to the selected side, above any vanilla-style packs.

Built for GTNH 2.9.x.

## What's new in v2.2.1

A polish pass checked against the default textures of GTNH 2.9.0-RC-2 (GT5-Unofficial 5.09.54.205 and the GitHub-hosted mods in the 2.9 manifest).

**Fixes**
- 82 GregTech component textures had a corrupted colour profile chunk and could not be opened by strict PNG readers.
- 36 animation `.mcmeta` files were invalid JSON. One animation (GT `ENRICHED/ore_animated`) pointed at a frame that does not exist, which makes the game show the missing texture.
- The Amazing Trophies pedestal was drawn for an old version of the mod, so trophies rendered as a jumble of wood pieces. It is redrawn for the current model.
- 7 GregTech items showed a different item because their meta IDs were reassigned in GT 5.09.54: Circuit Board Exotic/Cosmic/Transcendent, the Wireless Controller, Needs Maintenance and Advanced Wireless covers, and the internal Advanced Redstone Receiver. They now use the mod's correct icon.
- 5 block sprites had odd sizes (28, 33 or 35 px). In 1.7.10 one odd-sized sprite lowers the mipmap level of the whole block atlas, so distant blocks shimmer. These are now 32×32.
- 37 animated textures had no `.mcmeta` of their own, so they played at the wrong speed and order. They now ship the mod's animation data.
- Misaligned overlays and odd canvases fixed: Tinkers spider crossbow effect, monster jerky, OpenBlocks dev/null and dev/full. A 512×512 GT++ icon that aliased badly in inventories was downscaled.

**Polish**
- 503 item textures had near-invisible stray pixels, which showed as specks or a faint square in inventories. These pixels were removed.
- Animation restored on 16 textures that were frozen on one frame:
  - UV+ emitters and sensors;
  - circuit wafers;
  - BartWorks infinity glass;
  - Twilight Forest magic leaves;
  - Ender IO end steel and pink slime.

**New x32 textures (about 1,400)**
Missing textures were generated only where a finished x32 sibling has the exact same 16x pixel structure. The finished texture is either reused or recoloured to the new palette. This covers:
- GregTech energy hatches of every tier, CUSTOM material icons, machine overlays and GT++ circuits;
- Chisel planks for every wood type;
- Storage Drawers for Forestry, Natura and BoP woods;
- the AE2 controller and the AE2FC fluid interface in all 16 colours;
- Tinkers tool parts, stripped logs, Ender IO fluids, and more.

The progress percentage now counts the textures that exist in GTNH 2.9, so it reads slightly lower than before even though more textures are done.

## Pictures:
<img width="773" height="653" alt="image" src="https://github.com/user-attachments/assets/e3039068-4462-46f1-9d6d-13878ef54926" />
<img width="667" height="761" alt="image" src="https://github.com/user-attachments/assets/4d8c7689-6bec-4aa6-9280-50dc3ca1a7a5" />
<img width="664" height="477" alt="image" src="https://github.com/user-attachments/assets/56539e92-48aa-4bdc-b589-699f45c963d9" />
<img width="1644" height="1012" alt="image" src="https://github.com/user-attachments/assets/e9ee3610-079f-4a35-acce-cc9f567817f4" />


### Credits:

- Credits to the [FaithfulPack Team](https://faithfulpack.net/), since I imported the majority of all vanilla textures for Et Futurum Requiem from there. Specifically from their [Classic Faithful Branch](https://github.com/ClassicFaithful/Classic-32x-Java/)

- Credits to Magnetanide for her excellent block textures from the pack [Stellar Fusion](https://web.archive.org/web/20230430014009/https://www.gtnewhorizons.com/forum/m/36844562/viewthread/32547244-stellar-fusion-gregtech-32x32-v034) - Archive Link

### Information:

- If you cloned this repository instead of downloading the zip from the releases page **and you do not want to help developing the pack**, you can safely delete all the files/directories **except** for:
	- assets/
	- pack.mcmeta
	- pack.png
	- README.md

- If you want to help developing the pack and use the scripts in the `.scripts` directory, refer to the [README.md](/.scripts/README.md) file in the `.scripts` directory for more information on how to use them.
