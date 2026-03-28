$base = "c:\Users\josea\OneDrive\Escritorio\NACHO\img"

# Helper: move + rename in one step
function Move-Rename($src, $dst) {
    $dstDir = Split-Path $dst
    if (!(Test-Path $dstDir)) { New-Item -ItemType Directory -Force -Path $dstDir | Out-Null }
    Move-Item -Path $src -Destination $dst -Force
}

# ── 01 MITSUBISHI LANCER GRIS ────────────────────────
# wrangler-azul-2 from montero folder is actually a Lancer
Move-Rename "$base\17-mitsubishi-montero-azul\wrangler-azul-2.jpeg" "$base\01-mitsubishi-lancer-gris\lancer-gris-4.jpeg"

# ── 00 TOYOTA RAV4 GRIS ──────────────────────────────
# Files in this folder are named civic-mod but are actually RAV4 gray
Rename-Item "$base\00-toyotarav4-gris\civic-mod-2.jpeg" "rav4-gris-1.jpeg"
Rename-Item "$base\00-toyotarav4-gris\civic-mod-3.jpeg" "rav4-gris-2.jpeg"
# civic-mod-5 in this folder is a Honda Civic red — move to civic-modificado
Move-Rename "$base\00-toyotarav4-gris\civic-mod-5.jpeg" "$base\03-honda-civic-modificado\civic-mod-5.jpeg"
Rename-Item "$base\00-toyotarav4-gris" "00-toyota-rav4-gris"

# ── 02 TOYOTA RAV4 ROJO ──────────────────────────────
# rav4-rojo-3 is actually a Civic modified — move it
Move-Rename "$base\02-toyota-rav4-rojo\rav4-rojo-3.jpeg" "$base\03-honda-civic-modificado\civic-mod-3.jpeg"

# ── 03 HONDA CIVIC MODIFICADO ────────────────────────
# crv-plata-1 here is actually a CR-V — move it to the CR-V folder
Move-Rename "$base\03-honda-civic-modificado\crv-plata-1.jpeg" "$base\04-honda-crv-plata\crv-plata-1.jpeg"

# ── 04 HONDA CR-V PLATA ──────────────────────────────
# crv-plata-1 arriving from 03 above (already handled)
# Nissan Tiida folder has crv-plata-3 which is actually a Tiida (stays there)
# No changes needed here

# ── 05 YAMAHA RAPTOR AZUL ────────────────────────────
# crv-plata-4 here is actually the Yamaha Raptor — rename it
Rename-Item "$base\05-yamaha-raptor-azul\crv-plata-4.jpeg" "raptor-azul-1.jpeg"

# ── 06 JEEP WRANGLER AZUL ────────────────────────────
# All files here are Wrangler but named after other cars — rename them
Rename-Item "$base\06-jeep-wrangler-azul\civic-blanco-2.jpeg" "wrangler-azul-4.jpeg"
Rename-Item "$base\06-jeep-wrangler-azul\civic-plata-1.jpeg"  "wrangler-azul-5.jpeg"
Rename-Item "$base\06-jeep-wrangler-azul\crv-blanco-1.jpeg"   "wrangler-azul-6.jpeg"
Rename-Item "$base\06-jeep-wrangler-azul\crv-blanco-2.jpeg"   "wrangler-azul-7.jpeg"
Rename-Item "$base\06-jeep-wrangler-azul\suv-negro-3.jpeg"    "wrangler-azul-8.jpeg"

# ── 07 HONDA CIVIC AZUL VINTAGE ──────────────────────
# civic-azul-1 and civic-azul-3 are in civic-plata folder — move them
New-Item -ItemType Directory -Force -Path "$base\07-honda-civic-azul-vintage" | Out-Null
Move-Rename "$base\12-honda-civic-plata\civic-azul-1.jpeg" "$base\07-honda-civic-azul-vintage\civic-vintage-1.jpeg"
Move-Rename "$base\12-honda-civic-plata\civic-azul-3.jpeg" "$base\07-honda-civic-azul-vintage\civic-vintage-2.jpeg"

# ── 08 BMW SERIE 3 BLANCO ────────────────────────────
# Three files named after other cars are actually BMW — rename them
Rename-Item "$base\08-bmw-serie3-blanco\civic-azul-2.jpeg"   "bmw-s3-5.jpeg"
Rename-Item "$base\08-bmw-serie3-blanco\civic-blanco-1.jpeg" "bmw-s3-6.jpeg"
Rename-Item "$base\08-bmw-serie3-blanco\raptor-azul-4.jpeg"  "bmw-s3-7.jpeg"
# bmw-s3-2, bmw-s3-3, bmw-s3-4 are NOT BMWs — move them
Move-Rename "$base\11-suv-negro-levantado\bmw-s3-2.jpeg" "$base\11-suv-negro-levantado\suv-negro-2.jpeg"
Move-Rename "$base\11-suv-negro-levantado\bmw-s3-3.jpeg" "$base\11-suv-negro-levantado\suv-negro-3.jpeg"
# bmw-s3-4 is a Land Cruiser — move to landcruiser
Move-Rename "$base\13-toyota-landcruiser-verde\bmw-s3-4.jpeg" "$base\13-toyota-landcruiser-verde\landcruiser-2.jpeg"

# ── 09 HONDA CIVIC BLANCO ────────────────────────────
# crv-blanco-3 here is a Civic — rename it
Rename-Item "$base\09-honda-civic-blanco\crv-blanco-3.jpeg" "civic-blanco-6.jpeg"
# civic-blanco-4 and civic-blanco-5 are in montero folder — move them
Move-Rename "$base\17-mitsubishi-montero-azul\civic-blanco-4.jpeg" "$base\09-honda-civic-blanco\civic-blanco-4.jpeg"
Move-Rename "$base\17-mitsubishi-montero-azul\civic-blanco-5.jpeg" "$base\09-honda-civic-blanco\civic-blanco-5.jpeg"

# ── 10 HONDA CR-V BLANCO → DELETE (no actual CR-V blanco photos) ──
# suv-negro-2 here is a Civic — move to civic-plata
Move-Rename "$base\10-honda-crv-blanco\suv-negro-2.jpeg" "$base\12-honda-civic-plata\civic-plata-3.jpeg"
Remove-Item "$base\10-honda-crv-blanco" -Recurse -Force

# ── 11 SUV NEGRO LEVANTADO ───────────────────────────
# bmw-s3-2 and bmw-s3-3 already renamed above (suv-negro-2 and suv-negro-3)
# No more changes needed here

# ── 12 HONDA CIVIC PLATA ─────────────────────────────
# raptor-azul-3 is a silver Civic — rename it
Rename-Item "$base\12-honda-civic-plata\raptor-azul-3.jpeg" "civic-plata-1.jpeg"
# civic-plata-3 arriving from 10 (already handled above)

# ── 13 TOYOTA LAND CRUISER VERDE ─────────────────────
# bmw-s3-4 renamed to landcruiser-2 above
# landcruiser-3 in montero folder is actually a Toyota Corolla — move to corolla folder
New-Item -ItemType Directory -Force -Path "$base\toyota-corolla-blanco" | Out-Null
Move-Rename "$base\17-mitsubishi-montero-azul\landcruiser-3.jpeg" "$base\toyota-corolla-blanco\corolla-blanco-2.jpeg"

# ── 14 ISUZU D-MAX NEGRO ─────────────────────────────
# dmax-negro-1 is a white D-Max — move to D-Max Blanco folder
Move-Rename "$base\14-isuzu-dmax-negro\dmax-negro-1.jpeg" "$base\16-isuzu-dmax-blanco\dmax-negro-1.jpeg"
# dmax-negro-2 in montero folder is a Jimny gray — will be handled in jimny-gris section
Remove-Item "$base\14-isuzu-dmax-negro" -Recurse -Force

# ── 15 SUZUKI JIMNY ROJO ─────────────────────────────
# Move red Jimnys from D-Max blanco folder
Move-Rename "$base\16-isuzu-dmax-blanco\civic-plata-2.jpeg"  "$base\15-suzuki-jimny-rojo\jimny-rojo-7.jpeg"
Move-Rename "$base\16-isuzu-dmax-blanco\dmax-blanco-1.jpeg"  "$base\15-suzuki-jimny-rojo\jimny-rojo-8.jpeg"
Move-Rename "$base\16-isuzu-dmax-blanco\dmax-blanco-2.jpeg"  "$base\15-suzuki-jimny-rojo\jimny-rojo-9.jpeg"
Move-Rename "$base\16-isuzu-dmax-blanco\dmax-blanco-5.jpeg"  "$base\15-suzuki-jimny-rojo\jimny-rojo-10.jpeg"
Rename-Item "$base\15-suzuki-jimny-rojo\landcruiser-2.jpeg"  "jimny-rojo-11.jpeg"
# Move non-Jimny files OUT of this folder to new folders
New-Item -ItemType Directory -Force -Path "$base\vw-jetta-blanco" | Out-Null
Move-Rename "$base\15-suzuki-jimny-rojo\jimny-rojo-2.jpeg" "$base\vw-jetta-blanco\jetta-blanco-1.jpeg"
Move-Rename "$base\15-suzuki-jimny-rojo\jimny-rojo-3.jpeg" "$base\vw-jetta-blanco\jetta-blanco-2.jpeg"
New-Item -ItemType Directory -Force -Path "$base\suzuki-jimny-gris" | Out-Null
Move-Rename "$base\15-suzuki-jimny-rojo\jimny-rojo-1.jpeg" "$base\suzuki-jimny-gris\jimny-gris-1.jpeg"
Move-Rename "$base\15-suzuki-jimny-rojo\jimny-rojo-4.jpeg" "$base\suzuki-jimny-gris\jimny-gris-2.jpeg"
Move-Rename "$base\15-suzuki-jimny-rojo\jimny-rojo-5.jpeg" "$base\suzuki-jimny-gris\jimny-gris-3.jpeg"

# ── 16 ISUZU D-MAX BLANCO ────────────────────────────
# dmax-blanco-3 is a Toyota Corolla — move
Move-Rename "$base\16-isuzu-dmax-blanco\dmax-blanco-3.jpeg" "$base\toyota-corolla-blanco\corolla-blanco-1.jpeg"
# dmax-blanco-4 is the real D-Max — stays

# ── 17 MITSUBISHI MONTERO AZUL ───────────────────────
# raptor-azul-1 here is a Montero — rename it
Rename-Item "$base\17-mitsubishi-montero-azul\raptor-azul-1.jpeg" "montero-azul-4.jpeg"
# dmax-negro-2 here is a gray Jimny — move to jimny-gris
Move-Rename "$base\17-mitsubishi-montero-azul\dmax-negro-2.jpeg" "$base\suzuki-jimny-gris\jimny-gris-4.jpeg"

# ── NISSAN TIIDA NEGRO ───────────────────────────────
# crv-plata-3 here is the Nissan Tiida — rename for clarity
Rename-Item "$base\nissan-tiida-negro\crv-plata-3.jpeg" "tiida-negro-1.jpeg"

Write-Host "Reorganizacion completada."
