Polished build of GTNH Faithful x32 for **GTNH 2.9.x**.

**Install:** download `GTNH-Faithful-x32 v2.2.1.zip` below, put it in your `resourcepacks` folder *without extracting it*, and enable it in *Options → Resource Packs*.

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
