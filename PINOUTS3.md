# Commodore Amiga Chip Pinouts

> Machine-readable hardware reference intended for Codex / code
> generators.
>
> **Scope:** major CPU/custom/system ICs used on Commodore classic Amiga
> motherboards. This is **not** a BOM of every DRAM, TTL, PAL/GAL, DAC,
> op-amp, video encoder, RTC, SCSI controller, or keyboard MCU.
>
> **Signal convention:** a leading `/` means active-low. `GND`, `VSS`,
> `VSSx` are ground. `VCC`, `VDD`, `VDDx` are positive supply. `NC`
> means not connected.
>
> **Generator rule:** never infer a missing pinout from another package.
> Package variants can have different numbering even when the logical IC
> is the same.

## Model → chip matrix

  -----------------------------------------------------------------------
  Model             CPU family        Main chipset      Additional
                                                        Commodore
                                                        custom/system
                                                        chips
  ----------------- ----------------- ----------------- -----------------
  A1000             68000             Agnus 8361/8367 + 2× CIA 8520;
                                      Denise 8362 +     early glue logic
                                      Paula 8364        is largely
                                                        discrete

  A500              68000             Agnus 8370/8371   Gary 5719, 2× CIA
                                      or later          
                                      8372A/8375 +      
                                      Denise            
                                      8362/8373 + Paula 

  A500+             68000             Agnus 8375 + ECS  Gary 5719, 2× CIA
                                      Denise 8373 +     
                                      Paula             

  A600              68000             Agnus 8375 + ECS  Gayle, 2× CIA
                                      Denise 8373 +     
                                      Paula             

  A1200             68EC020           Alice + Lisa +    Gayle, Budgie, 2×
                                      Paula             CIA

  A2000             68000             Agnus family +    Gary, Buster, 2×
                                      Denise family +   CIA
                                      Paula             

  A3000/T           68030             8372AB/B + ECS    Fat Gary, Super
                                      Denise + Paula    Buster, Ramsey,
                                                        DMAC, Amber, 2×
                                                        CIA

  A4000/T           68EC030/68040     Alice + Lisa +    Fat Gary, Super
                    variants          Paula             Buster, Ramsey,
                                                        Bridgette
                                                        (desktop), 2× CIA

  CDTV              68000             ECS-era Agnus +   Gary, DMAC/CD
                                      Denise + Paula    controller
                                                        support, 2× CIA

  CD32              68EC020           Alice + Lisa +    Akiko
                                      Paula             
  -----------------------------------------------------------------------

## Coverage / confidence

  ---------------------------------------------------------------------
  Device                           Typical package Pinout status in
                                                   this file
  -------------------- --------------------------- --------------------
  MC68000                                   DIP-64 COMPLETE

  Agnus 8361/8367                           DIP-48 COMPLETE

  Fat Agnus 8370/8371                      PLCC-84 COMPLETE

  Agnus 8372/8372AB/B                      PLCC-84 COMPLETE profile

  Agnus 8375                               PLCC-84 COMPLETE
  incl. 318069-10                                  

  Alice 8374                               PLCC-84 COMPLETE

  Denise 8362 / ECS                         DIP-48 COMPLETE; pin 34
  8373 DIP                                         differs by revision

  Paula 8364                                DIP-48 COMPLETE

  Lisa 4203                                PLCC-84 COMPLETE

  CIA 8520                                  DIP-40 COMPLETE

  CIA 8520 PLCC                            PLCC-44 PACKAGE KNOWN; pin
                                                   remap not included

  Gary 5719                                 DIP-48 PACKAGE KNOWN; pin
                                                   table intentionally
                                                   omitted pending
                                                   text-verification

  Gayle                                    PLCC-84 PACKAGE KNOWN; pin
                                                   table intentionally
                                                   omitted pending
                                                   text-verification

  Budgie                                  PQFP-128 PACKAGE KNOWN; pin
                                                   table intentionally
                                                   omitted pending
                                                   text-verification

  Fat Gary                                 PLCC-84 PACKAGE KNOWN; pin
                                                   table intentionally
                                                   omitted pending
                                                   text-verification

  Buster / Super                       PLCC family PACKAGE/REVISION
  Buster                                           DEPENDENT; not
                                                   expanded

  Ramsey                               PLCC family PACKAGE/REVISION
                                                   DEPENDENT; not
                                                   expanded

  DMAC                                 PLCC family PACKAGE/REVISION
                                                   DEPENDENT; not
                                                   expanded

  Amber                                PLCC family PACKAGE/REVISION
                                                   DEPENDENT; not
                                                   expanded

  Bridgette               custom QFP/PLCC-era ASIC not expanded

  Akiko 391563-01                         PQFP-160 PACKAGE VERIFIED;
                                                   pin table not
                                                   expanded here
  ---------------------------------------------------------------------

## Structured records

Each device section deliberately repeats: - `device` - `part_numbers` -
`models` - `package` - `pin_count` - `pinout_status`

This redundancy is intentional: it makes extraction by an LLM/code
generator less ambiguous.

------------------------------------------------------------------------

## MC68000 --- DIP-64

-   device: `MC68000`

-   models: `A1000, A500, A500+, A2000, CDTV`

-   package: `DIP-64`

-   footprint_type: `DIP, 64 pins, through-hole`

-   pin_count: `64`

-   pinout_status: `COMPLETE`

-   note: `No A0 pin; /UDS and /LDS provide byte selection.`

    Pin Signal ----- --------

| 1 \| `D4` \|
| 2 \| `D3` \|
| 3 \| `D2` \|
| 4 \| `D1` \|
| 5 \| `D0` \|
| 6 \| `/AS` \|
| 7 \| `/UDS` \|
| 8 \| `/LDS` \|
| 9 \| `R/W` \|
| 10 \| `/DTACK` \|
| 11 \| `/BG` \|
| 12 \| `/BGACK` \|
| 13 \| `/BR` \|
| 14 \| `VCC` \|
| 15 \| `CLK` \|
| 16 \| `GND` \|
| 17 \| `/HALT` \|
| 18 \| `/RESET` \|
| 19 \| `/VMA` \|
| 20 \| `E` \|
| 21 \| `/VPA` \|
| 22 \| `/BERR` \|
| 23 \| `/IPL2` \|
| 24 \| `/IPL1` \|
| 25 \| `/IPL0` \|
| 26 \| `FC2` \|
| 27 \| `FC1` \|
| 28 \| `FC0` \|
| 29 \| `A1` \|
| 30 \| `A2` \|
| 31 \| `A3` \|
| 32 \| `A4` \|
| 33 \| `A5` \|
| 34 \| `A6` \|
| 35 \| `A7` \|
| 36 \| `A8` \|
| 37 \| `A9` \|
| 38 \| `A10` \|
| 39 \| `A11` \|
| 40 \| `A12` \|
| 41 \| `A13` \|
| 42 \| `A14` \|
| 43 \| `A15` \|
| 44 \| `A16` \|
| 45 \| `A17` \|
| 46 \| `A18` \|
| 47 \| `A19` \|
| 48 \| `A20` \|
| 49 \| `VCC` \|
| 50 \| `A21` \|
| 51 \| `A22` \|
| 52 \| `A23` \|
| 53 \| `GND` \|
| 54 \| `D15` \|
| 55 \| `D14` \|
| 56 \| `D13` \|
| 57 \| `D12` \|
| 58 \| `D11` \|
| 59 \| `D10` \|
| 60 \| `D9` \|
| 61 \| `D8` \|
| 62 \| `D7` \|
| 63 \| `D6` \|
| 64 \| `D5` \|

------------------------------------------------------------------------

## Agnus 8361 / 8367 --- DIP-48

-   device: `Agnus`

-   variants: `8361 NTSC, 8367 PAL`

-   models: `A1000, early A2000`

-   package: `DIP-48`

-   footprint_type: `DIP, 48 pins, through-hole`

-   pin_count: `48`

-   pinout_status: `COMPLETE`

    Pin Signal ----- --------

| 1 \| `D8` \|
| 2 \| `D7` \|
| 3 \| `D6` \|
| 4 \| `D5` \|
| 5 \| `D4` \|
| 6 \| `D3` \|
| 7 \| `D2` \|
| 8 \| `D1` \|
| 9 \| `D0` \|
| 10 \| `VCC` \|
| 11 \| `/RES` \|
| 12 \| `/INT3` \|
| 13 \| `DMAL` \|
| 14 \| `/BLS` \|
| 15 \| `/DBR` \|
| 16 \| `/ARW` \|
| 17 \| `RGA8` \|
| 18 \| `RGA7` \|
| 19 \| `RGA6` \|
| 20 \| `RGA5` \|
| 21 \| `RGA4` \|
| 22 \| `RGA3` \|
| 23 \| `RGA2` \|
| 24 \| `RGA1` \|
| 25 \| `CCK` \|
| 26 \| `CCKQ` \|
| 27 \| `GND` \|
| 28 \| `DRA0` \|
| 29 \| `DRA1` \|
| 30 \| `DRA2` \|
| 31 \| `DRA3` \|
| 32 \| `DRA4` \|
| 33 \| `DRA5` \|
| 34 \| `DRA6` \|
| 35 \| `DRA7` \|
| 36 \| `DRA8` \|
| 37 \| `/LP` \|
| 38 \| `/VSY` \|
| 39 \| `/CSY` \|
| 40 \| `/HSY` \|
| 41 \| `GND` \|
| 42 \| `D15` \|
| 43 \| `D14` \|
| 44 \| `D13` \|
| 45 \| `D12` \|
| 46 \| `D11` \|
| 47 \| `D10` \|
| 48 \| `D9` \|

------------------------------------------------------------------------

## 8370/8371 (A500/A2000 OCS)

-   device: `Agnus`

-   package: `PLCC-84`

-   footprint_type: `PLCC, 84 leads, J-lead`

-   pin_count: `84`

-   pinout_status: `COMPLETE`

-   warning:
    `Use this exact profile. Do not assume all 84-pin Agnus/Alice revisions share the same pin functions.`

    Pin Signal ----- --------

| 1 \| `RD13` \|
| 2 \| `RD12` \|
| 3 \| `RD11` \|
| 4 \| `RD10` \|
| 5 \| `RD9` \|
| 6 \| `RD8` \|
| 7 \| `RD7` \|
| 8 \| `RD6` \|
| 9 \| `RD5` \|
| 10 \| `RD4` \|
| 11 \| `RD3` \|
| 12 \| `RD2` \|
| 13 \| `RD1` \|
| 14 \| `RD0` \|
| 15 \| `VCC` \|
| 16 \| `/RESET` \|
| 17 \| `/INT3` \|
| 18 \| `DMAL` \|
| 19 \| `/BLS` \|
| 20 \| `/DBR` \|
| 21 \| `RRW` \|
| 22 \| `PRW` \|
| 23 \| `/RGEN` \|
| 24 \| `/AS` \|
| 25 \| `/RAMEN` \|
| 26 \| `RGA8` \|
| 27 \| `RGA7` \|
| 28 \| `RGA6` \|
| 29 \| `RGA5` \|
| 30 \| `RGA4` \|
| 31 \| `RGA3` \|
| 32 \| `RGA2` \|
| 33 \| `RGA1` \|
| 34 \| `28MHz` \|
| 35 \| `XCLK` \|
| 36 \| `/XCLKEN` \|
| 37 \| `/CDAC` \|
| 38 \| `7MHz` \|
| 39 \| `CCKQ` \|
| 40 \| `CCK` \|
| 41 \| `TEST` \|
| 42 \| `GND` \|
| 43 \| `MA0` \|
| 44 \| `MA1` \|
| 45 \| `MA2` \|
| 46 \| `MA3` \|
| 47 \| `MA4` \|
| 48 \| `MA5` \|
| 49 \| `MA6` \|
| 50 \| `MA7` \|
| 51 \| `MA8` \|
| 52 \| `/LDS` \|
| 53 \| `/UDS` \|
| 54 \| `/CASL` \|
| 55 \| `/CASU` \|
| 56 \| `/RAS1` \|
| 57 \| `/RAS0` \|
| 58 \| `GND` \|
| 59 \| `A19` \|
| 60 \| `A1` \|
| 61 \| `A2` \|
| 62 \| `A3` \|
| 63 \| `A4` \|
| 64 \| `A5` \|
| 65 \| `A6` \|
| 66 \| `A7` \|
| 67 \| `A8` \|
| 68 \| `A9` \|
| 69 \| `A10` \|
| 70 \| `A11` \|
| 71 \| `A12` \|
| 72 \| `A13` \|
| 73 \| `A14` \|
| 74 \| `A15` \|
| 75 \| `A16` \|
| 76 \| `A17` \|
| 77 \| `A18` \|
| 78 \| `/LP` \|
| 79 \| `/VSYNC` \|
| 80 \| `/CSYNC` \|
| 81 \| `/HSYNC` \|
| 82 \| `GND` \|
| 83 \| `RD15` \|
| 84 \| `RD14` \|

------------------------------------------------------------------------

## 8372/8372AB/B (A3000 profile)

-   device: `Agnus`

-   package: `PLCC-84`

-   footprint_type: `PLCC, 84 leads, J-lead`

-   pin_count: `84`

-   pinout_status: `COMPLETE`

-   warning:
    `Use this exact profile. Do not assume all 84-pin Agnus/Alice revisions share the same pin functions.`

    Pin Signal ----- --------

| 1 \| `DRD13` \|
| 2 \| `DRD12` \|
| 3 \| `DRD11` \|
| 4 \| `DRD10` \|
| 5 \| `DRD9` \|
| 6 \| `DRD8` \|
| 7 \| `DRD7` \|
| 8 \| `DRD6` \|
| 9 \| `DRD5` \|
| 10 \| `DRD4` \|
| 11 \| `DRD3` \|
| 12 \| `DRD2` \|
| 13 \| `DRD1` \|
| 14 \| `DRD0` \|
| 15 \| `VCC` \|
| 16 \| `/RESET` \|
| 17 \| `/INTR` \|
| 18 \| `DMAL` \|
| 19 \| `/BLISS` \|
| 20 \| `/BLIT` \|
| 21 \| `/WE` \|
| 22 \| `R/W` \|
| 23 \| `/REGEN` \|
| 24 \| `/AS` \|
| 25 \| `/RAMEN` \|
| 26 \| `RGA8` \|
| 27 \| `RGA7` \|
| 28 \| `RGA6` \|
| 29 \| `RGA5` \|
| 30 \| `RGA4` \|
| 31 \| `RGA3` \|
| 32 \| `RGA2` \|
| 33 \| `RGA1` \|
| 34 \| `28MHz` \|
| 35 \| `A20` \|
| 36 \| `/XCLKEN` \|
| 37 \| `/CDAC` \|
| 38 \| `7MHz` \|
| 39 \| `CCKQ` \|
| 40 \| `CCK` \|
| 41 \| `TEST` \|
| 42 \| `GND` \|
| 43 \| `DRA0` \|
| 44 \| `DRA1` \|
| 45 \| `DRA2` \|
| 46 \| `DRA3` \|
| 47 \| `DRA4` \|
| 48 \| `DRA5` \|
| 49 \| `DRA6` \|
| 50 \| `DRA7` \|
| 51 \| `DRA8` \|
| 52 \| `/LDS` \|
| 53 \| `/UDS` \|
| 54 \| `/CASL` \|
| 55 \| `/CASU` \|
| 56 \| `DRA9` \|
| 57 \| `/RAS` \|
| 58 \| `GND` \|
| 59 \| `A19` \|
| 60 \| `A1` \|
| 61 \| `A2` \|
| 62 \| `A3` \|
| 63 \| `A4` \|
| 64 \| `A5` \|
| 65 \| `A6` \|
| 66 \| `A7` \|
| 67 \| `A8` \|
| 68 \| `A9` \|
| 69 \| `A10` \|
| 70 \| `A11` \|
| 71 \| `A12` \|
| 72 \| `A13` \|
| 73 \| `A14` \|
| 74 \| `A15` \|
| 75 \| `A16` \|
| 76 \| `A17` \|
| 77 \| `A18` \|
| 78 \| `/LPEN` \|
| 79 \| `/VSYNC` \|
| 80 \| `/CSYNC` \|
| 81 \| `/HSYNC` \|
| 82 \| `GND` \|
| 83 \| `DRD15` \|
| 84 \| `DRD14` \|

------------------------------------------------------------------------

## 8375 318069-10/-11 / 390544-01/-02 (A500+/A600 ECS)

-   device: `Agnus`

-   package: `PLCC-84`

-   footprint_type: `PLCC, 84 leads, J-lead`

-   pin_count: `84`

-   pinout_status: `COMPLETE`

-   warning:
    `Use this exact profile. Do not assume all 84-pin Agnus/Alice revisions share the same pin functions.`

    Pin Signal ----- --------

| 1 \| `DRD13` \|
| 2 \| `DRD12` \|
| 3 \| `DRD11` \|
| 4 \| `DRD10` \|
| 5 \| `DRD9` \|
| 6 \| `DRD8` \|
| 7 \| `DRD7` \|
| 8 \| `DRD6` \|
| 9 \| `DRD5` \|
| 10 \| `DRD4` \|
| 11 \| `DRD3` \|
| 12 \| `DRD2` \|
| 13 \| `DRD1` \|
| 14 \| `DRD0` \|
| 15 \| `VCC` \|
| 16 \| `/RESET` \|
| 17 \| `/INTR` \|
| 18 \| `DMAL` \|
| 19 \| `/BLISS` \|
| 20 \| `/BLIT` \|
| 21 \| `/WE` \|
| 22 \| `R/W` \|
| 23 \| `/REGEN` \|
| 24 \| `/AS` \|
| 25 \| `/RAMEN` \|
| 26 \| `RGA8` \|
| 27 \| `RGA7` \|
| 28 \| `RGA6` \|
| 29 \| `RGA5` \|
| 30 \| `RGA4` \|
| 31 \| `RGA3` \|
| 32 \| `RGA2` \|
| 33 \| `RGA1` \|
| 34 \| `28MHz` \|
| 35 \| `A20` \|
| 36 \| `/CDAC` \|
| 37 \| `7MHz` \|
| 38 \| `CCKQ` \|
| 39 \| `CCK` \|
| 40 \| `14MHz` \|
| 41 \| `GND` \|
| 42 \| `DRA0` \|
| 43 \| `DRA1` \|
| 44 \| `DRA2` \|
| 45 \| `DRA3` \|
| 46 \| `DRA4` \|
| 47 \| `DRA5` \|
| 48 \| `DRA6` \|
| 49 \| `DRA7` \|
| 50 \| `DRA8` \|
| 51 \| `/LDS` \|
| 52 \| `/UDS` \|
| 53 \| `/CASL` \|
| 54 \| `/CASU` \|
| 55 \| `DRA9` \|
| 56 \| `/RAS1` \|
| 57 \| `/RAS0` \|
| 58 \| `GND` \|
| 59 \| `A19` \|
| 60 \| `A1` \|
| 61 \| `A2` \|
| 62 \| `A3` \|
| 63 \| `A4` \|
| 64 \| `A5` \|
| 65 \| `A6` \|
| 66 \| `A7` \|
| 67 \| `A8` \|
| 68 \| `A9` \|
| 69 \| `A10` \|
| 70 \| `A11` \|
| 71 \| `A12` \|
| 72 \| `A13` \|
| 73 \| `A14` \|
| 74 \| `A15` \|
| 75 \| `A16` \|
| 76 \| `A17` \|
| 77 \| `A18` \|
| 78 \| `/LPEN` \|
| 79 \| `/VSYNC` \|
| 80 \| `/CSYNC` \|
| 81 \| `/HSYNC` \|
| 82 \| `GND` \|
| 83 \| `DRD15` \|
| 84 \| `DRD14` \|

------------------------------------------------------------------------

## Alice 8374 391010-01 (AGA)

-   device: `Alice`

-   package: `PLCC-84`

-   footprint_type: `PLCC, 84 leads, J-lead`

-   pin_count: `84`

-   pinout_status: `COMPLETE`

-   warning:
    `Use this exact profile. Do not assume all 84-pin Agnus/Alice revisions share the same pin functions.`

    Pin Signal ----- --------

| 1 \| `DRD13` \|
| 2 \| `DRD12` \|
| 3 \| `DRD11` \|
| 4 \| `DRD10` \|
| 5 \| `DRD9` \|
| 6 \| `DRD8` \|
| 7 \| `DRD7` \|
| 8 \| `DRD6` \|
| 9 \| `DRD5` \|
| 10 \| `DRD4` \|
| 11 \| `DRD3` \|
| 12 \| `DRD2` \|
| 13 \| `DRD1` \|
| 14 \| `DRD0` \|
| 15 \| `VCC1` \|
| 16 \| `/RESET` \|
| 17 \| `/INTR` \|
| 18 \| `DMAL` \|
| 19 \| `/BLS` \|
| 20 \| `/DBR` \|
| 21 \| `/WE` \|
| 22 \| `R/W` \|
| 23 \| `/REGEN` \|
| 24 \| `NC2` \|
| 25 \| `/RAMEN` \|
| 26 \| `RGA8` \|
| 27 \| `RGA7` \|
| 28 \| `RGA6` \|
| 29 \| `RGA5` \|
| 30 \| `RGA4` \|
| 31 \| `RGA3` \|
| 32 \| `RGA2` \|
| 33 \| `RGA1` \|
| 34 \| `SCLK` \|
| 35 \| `A20` \|
| 36 \| `14MHz` \|
| 37 \| `/CDAC` \|
| 38 \| `7MHz` \|
| 39 \| `CCKQ` \|
| 40 \| `CCK` \|
| 41 \| `/NTSC` \|
| 42 \| `GND2` \|
| 43 \| `DRA0` \|
| 44 \| `DRA1` \|
| 45 \| `DRA2` \|
| 46 \| `DRA3` \|
| 47 \| `DRA4` \|
| 48 \| `DRA5` \|
| 49 \| `DRA6` \|
| 50 \| `DRA7` \|
| 51 \| `DRA8` \|
| 52 \| `VCC2` \|
| 53 \| `NC1` \|
| 54 \| `/CAS` \|
| 55 \| `VBB` \|
| 56 \| `DRA9` \|
| 57 \| `/RAS` \|
| 58 \| `GND3` \|
| 59 \| `A19` \|
| 60 \| `A1` \|
| 61 \| `A2` \|
| 62 \| `A3` \|
| 63 \| `A4` \|
| 64 \| `A5` \|
| 65 \| `A6` \|
| 66 \| `A7` \|
| 67 \| `A8` \|
| 68 \| `A9` \|
| 69 \| `A10` \|
| 70 \| `A11` \|
| 71 \| `A12` \|
| 72 \| `A13` \|
| 73 \| `A14` \|
| 74 \| `A15` \|
| 75 \| `A16` \|
| 76 \| `A17` \|
| 77 \| `A18` \|
| 78 \| `/LPEN` \|
| 79 \| `/VSYNC` \|
| 80 \| `/CSYNC` \|
| 81 \| `/HSYNC` \|
| 82 \| `GND1` \|
| 83 \| `DRD15` \|
| 84 \| `DRD14` \|

------------------------------------------------------------------------

## Denise 8362 / ECS Denise 8373 --- DIP-48 profile

-   device: `Denise`

-   variants: `8362 OCS; 8373 ECS`

-   models: `A1000, A500, A500+, A2000, A3000`

-   package: `DIP-48`

-   footprint_type: `DIP, 48 pins, through-hole`

-   pin_count: `48`

-   pinout_status: `COMPLETE`

-   revision_note: `Pin 34 is NC on old Denise and CDAC on ECS Denise.`

    Pin Signal ----- --------

| 1 \| `D6` \|
| 2 \| `D5` \|
| 3 \| `D4` \|
| 4 \| `D3` \|
| 5 \| `D2` \|
| 6 \| `D1` \|
| 7 \| `D0` \|
| 8 \| `M1H` \|
| 9 \| `M0H` \|
| 10 \| `RGA8` \|
| 11 \| `RGA7` \|
| 12 \| `RGA6` \|
| 13 \| `RGA5` \|
| 14 \| `RGA4` \|
| 15 \| `RGA3` \|
| 16 \| `RGA2` \|
| 17 \| `RGA1` \|
| 18 \| `/BURST` \|
| 19 \| `VCC` \|
| 20 \| `R0` \|
| 21 \| `R1` \|
| 22 \| `R2` \|
| 23 \| `R3` \|
| 24 \| `B0` \|
| 25 \| `B1` \|
| 26 \| `B2` \|
| 27 \| `B3` \|
| 28 \| `G0` \|
| 29 \| `G1` \|
| 30 \| `G2` \|
| 31 \| `G3` \|
| 32 \| `/CSYNC` \|
| 33 \| `/ZD` \|
| 34 \| `NC_or_CDAC` \|
| 35 \| `7M` \|
| 36 \| `CCK` \|
| 37 \| `GND` \|
| 38 \| `M0V` \|
| 39 \| `M1V` \|
| 40 \| `D15` \|
| 41 \| `D14` \|
| 42 \| `D13` \|
| 43 \| `D12` \|
| 44 \| `D11` \|
| 45 \| `D10` \|
| 46 \| `D9` \|
| 47 \| `D8` \|
| 48 \| `D7` \|

------------------------------------------------------------------------

## Paula 8364 --- DIP-48

-   device: `Paula`

-   part_numbers: `252127-01, 252127-02`

-   package: `DIP-48`

-   footprint_type: `DIP, 48 pins, through-hole`

-   pin_count: `48`

-   pinout_status: `COMPLETE`

-   note:
    `Later Amigas also used a PLCC Paula package. Do not reuse DIP numbering for PLCC without a package-specific map.`

    Pin Signal ----- --------

| 1 \| `D8` \|
| 2 \| `D7` \|
| 3 \| `D6` \|
| 4 \| `D5` \|
| 5 \| `D4` \|
| 6 \| `D3` \|
| 7 \| `D2` \|
| 8 \| `GND` \|
| 9 \| `D1` \|
| 10 \| `D0` \|
| 11 \| `/RES` \|
| 12 \| `DMAL` \|
| 13 \| `/IPL0` \|
| 14 \| `/IPL1` \|
| 15 \| `/IPL2` \|
| 16 \| `/INT2` \|
| 17 \| `/INT3` \|
| 18 \| `/INT6` \|
| 19 \| `RGA8` \|
| 20 \| `RGA7` \|
| 21 \| `RGA6` \|
| 22 \| `RGA5` \|
| 23 \| `RGA4` \|
| 24 \| `RGA3` \|
| 25 \| `RGA2` \|
| 26 \| `RGA1` \|
| 27 \| `VCC` \|
| 28 \| `CCK` \|
| 29 \| `CCKQ` \|
| 30 \| `AUDB` \|
| 31 \| `AUDA` \|
| 32 \| `POT0X` \|
| 33 \| `POT0Y` \|
| 34 \| `VSSANA` \|
| 35 \| `POT1X` \|
| 36 \| `POT1Y` \|
| 37 \| `/DKRD` \|
| 38 \| `/DKWD` \|
| 39 \| `DKWE` \|
| 40 \| `TXD` \|
| 41 \| `RXD` \|
| 42 \| `D15` \|
| 43 \| `D14` \|
| 44 \| `D13` \|
| 45 \| `D12` \|
| 46 \| `D11` \|
| 47 \| `D10` \|
| 48 \| `D9` \|

------------------------------------------------------------------------

## Lisa 4203 --- PLCC-84

-   device: `Lisa`

-   Commodore_part: `391227-01`

-   models: `A1200, A4000, A4000T, CD32`

-   package: `PLCC-84`

-   footprint_type: `PLCC, 84 leads, J-lead`

-   pin_count: `84`

-   pinout_status: `COMPLETE`

    Pin Signal ----- --------

| 1 \| `VSS0` \|
| 2 \| `D6` \|
| 3 \| `D5` \|
| 4 \| `D4` \|
| 5 \| `D3` \|
| 6 \| `D2` \|
| 7 \| `D1` \|
| 8 \| `D0` \|
| 9 \| `/CAS` \|
| 10 \| `CCK` \|
| 11 \| `WIDE` \|
| 12 \| `RGA8` \|
| 13 \| `RGA7` \|
| 14 \| `RGA6` \|
| 15 \| `RGA5` \|
| 16 \| `RGA4` \|
| 17 \| `RGA3` \|
| 18 \| `RGA2` \|
| 19 \| `RGA1` \|
| 20 \| `MDAT` \|
| 21 \| `/MLD` \|
| 22 \| `SCLK` \|
| 23 \| `C14O` \|
| 24 \| `/RST` \|
| 25 \| `C28M` \|
| 26 \| `SOG` \|
| 27 \| `BLANK` \|
| 28 \| `ZD` \|
| 29 \| `B0` \|
| 30 \| `VDD0` \|
| 31 \| `B1` \|
| 32 \| `B2` \|
| 33 \| `VSS1` \|
| 34 \| `B3` \|
| 35 \| `B4` \|
| 36 \| `B5` \|
| 37 \| `B6` \|
| 38 \| `B7` \|
| 39 \| `G0` \|
| 40 \| `G1` \|
| 41 \| `G2` \|
| 42 \| `G3` \|
| 43 \| `C28OUT` \|
| 44 \| `G4` \|
| 45 \| `G5` \|
| 46 \| `G6` \|
| 47 \| `G7` \|
| 48 \| `R0` \|
| 49 \| `R1` \|
| 50 \| `R2` \|
| 51 \| `R3` \|
| 52 \| `R4` \|
| 53 \| `VSS2` \|
| 54 \| `R5` \|
| 55 \| `R6` \|
| 56 \| `VDD1` \|
| 57 \| `R7` \|
| 58 \| `/BURST` \|
| 59 \| `D31` \|
| 60 \| `D30` \|
| 61 \| `D29` \|
| 62 \| `D28` \|
| 63 \| `D27` \|
| 64 \| `D26` \|
| 65 \| `D25` \|
| 66 \| `D24` \|
| 67 \| `D23` \|
| 68 \| `D22` \|
| 69 \| `D21` \|
| 70 \| `D20` \|
| 71 \| `D19` \|
| 72 \| `D18` \|
| 73 \| `D17` \|
| 74 \| `D16` \|
| 75 \| `D15` \|
| 76 \| `D14` \|
| 77 \| `D13` \|
| 78 \| `D12` \|
| 79 \| `D11` \|
| 80 \| `D10` \|
| 81 \| `D9` \|
| 82 \| `D8` \|
| 83 \| `VDD2` \|
| 84 \| `D7` \|

------------------------------------------------------------------------

## MOS/CSG 8520 CIA --- DIP-40

-   device: `8520 CIA`

-   models:
    `most Amiga computers use two CIAs; CD32 integrates equivalent system functions differently`

-   package: `DIP-40`

-   footprint_type: `DIP, 40 pins, through-hole`

-   pin_count: `40`

-   pinout_status: `COMPLETE`

-   aliases:
    `RS0..RS3 are register-select inputs; PHI2 may be written O2/Ø2 in old documentation.`

    Pin Signal ----- --------

| 1 \| `GND` \|
| 2 \| `PA0` \|
| 3 \| `PA1` \|
| 4 \| `PA2` \|
| 5 \| `PA3` \|
| 6 \| `PA4` \|
| 7 \| `PA5` \|
| 8 \| `PA6` \|
| 9 \| `PA7` \|
| 10 \| `PB0` \|
| 11 \| `PB1` \|
| 12 \| `PB2` \|
| 13 \| `PB3` \|
| 14 \| `PB4` \|
| 15 \| `PB5` \|
| 16 \| `PB6` \|
| 17 \| `PB7` \|
| 18 \| `PC` \|
| 19 \| `TOD` \|
| 20 \| `VCC` \|
| 21 \| `/IRQ` \|
| 22 \| `R/W` \|
| 23 \| `/CS` \|
| 24 \| `/FLAG` \|
| 25 \| `PHI2` \|
| 26 \| `DB7` \|
| 27 \| `DB6` \|
| 28 \| `DB5` \|
| 29 \| `DB4` \|
| 30 \| `DB3` \|
| 31 \| `DB2` \|
| 32 \| `DB1` \|
| 33 \| `DB0` \|
| 34 \| `/RES` \|
| 35 \| `RS3` \|
| 36 \| `RS2` \|
| 37 \| `RS1` \|
| 38 \| `RS0` \|
| 39 \| `SP` \|
| 40 \| `CNT` \|

------------------------------------------------------------------------

# Package-only records for additional Amiga ASICs

These records are intentionally **not guessed**. They are useful to a
generator for inventory/package selection, but
`pinout_status != COMPLETE` means the generator MUST NOT synthesize
pins.

## Gary 5719

-   device: `Gary`
-   Commodore_part: `318072-01`
-   models: `A500, A2000B, CDTV`
-   package: `DIP-48`
-   footprint_type: `DIP, 48 pins, through-hole`
-   pin_count: `48`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`

## Gayle

-   device: `Gayle`
-   Commodore_parts: `391155-01, 391155-02, 391424-02`
-   models: `A600, A1200`
-   package: `PLCC-84`
-   footprint_type: `PLCC, 84 leads, J-lead`
-   pin_count: `84`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`
-   warning:
    `A600 and A1200 Gayle revisions must be checked against the correct schematic/specification.`

## Budgie

-   device: `Budgie`
-   Commodore_parts: `391425-01, 391425-02`
-   models: `A1200`
-   package: `PQFP-128`
-   footprint_type: `PQFP, 128 leads`
-   pin_count: `128`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`

## Fat Gary

-   device: `Fat Gary`
-   Commodore_part: `390540-02`
-   models: `A3000, A3000T, A4000, A4000T`
-   package: `PLCC-84`
-   footprint_type: `PLCC, 84 leads, J-lead`
-   pin_count: `84`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`

## Buster / Super Buster

-   device: `Buster`
-   known_parts: `318075-01, 390539-02, 390539-07, 390537-09, 390537-11`
-   models: `A2000, A3000, A4000`
-   package: `revision dependent`
-   pinout_status: `NEEDS_REVISION_SPECIFIC_PIN_TABLE`

## Ramsey

-   device: `Ramsey`
-   known_parts: `390541-04, 390541-07`
-   models: `A3000, A3000T, A4000, A4000T`
-   package: `PLCC family`
-   pinout_status: `NEEDS_REVISION_SPECIFIC_PIN_TABLE`

## DMAC / Super DMAC

-   device: `DMAC`
-   known_parts: `390537-02, 390563-02, 390537-04`
-   models:
    `A3000 family; CDTV and expansion controllers use related DMAC parts`
-   package: `revision dependent`
-   pinout_status: `NEEDS_REVISION_SPECIFIC_PIN_TABLE`

## Amber

-   device: `Amber`
-   Commodore_part: `390538-03` (known production family)
-   models: `A3000, A3000T`
-   package: `custom PLCC-era ASIC`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`

## Bridgette

-   device: `Bridgette`
-   models: `A4000 desktop`
-   package: `custom ASIC`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`

## Akiko

-   device: `Akiko`
-   Commodore_part: `391563-01`
-   models: `CD32`
-   package: `PQFP-160`
-   footprint_type: `PQFP, 160 leads`
-   pin_count: `160`
-   pinout_status: `NEEDS_VERIFIED_PIN_TABLE`
-   functions:
    `system glue/address decode, CD-ROM interface, chunky-to-planar corner-turn memory`

------------------------------------------------------------------------

# Code-generator parsing rules

``` yaml
schema:
  device: string
  part_numbers: [string]
  models: [string]
  package: string
  footprint_type: string
  pin_count: integer
  pinout_status: COMPLETE | NEEDS_VERIFIED_PIN_TABLE | NEEDS_REVISION_SPECIFIC_PIN_TABLE
  pins:
    - pin: integer
      signal: string

rules:
  - Generate schematic pins only when pinout_status == COMPLETE.
  - Preserve leading slash in active-low signal names.
  - Never invent NC, power, clock, or bus pins.
  - Never reuse pin numbering across DIP/PLCC/PQFP package variants.
  - Treat Agnus 8370/71, A3000 8372-family, A500+/A600 8375, and Alice as separate pinout profiles.
  - Treat Denise pin 34 as revision-dependent.
  - For PCB generation, package name alone is not sufficient to guarantee mechanical land-pattern dimensions.
```

# Primary verification sources used

1.  Commodore *Amiga Hardware Reference Manual*, Appendix J --- original
    Agnus, Denise, Paula, Fat Agnus pin allocation.
2.  Commodore / Amiga service manuals and schematics for A500, A500+,
    A600, A1200, A3000, A4000 and CD32.
3.  Commodore Lisa Specification --- 84-pin Lisa allocation.
4.  Commodore 8520 documentation / A500-A2000 Technical Reference Manual
    --- CIA pin configuration.
5.  Comparative Agnus/Alice pin table derived from Commodore service
    documentation.
6.  AmigaWiki / Big Book of Amiga Hardware / Aminet custom-chip pinout
    archive used as cross-checks.

# Important correction note

`318069-10` is an `8375`-family 2 MB ECS Agnus. For code generation, use
the **A500+/A600 8375 PLCC-84 profile** above, not the earlier 8370/8371
or A3000 8372 profile.

# TODO for a fully exhaustive revision

The next revision should add verified package-specific full pin tables
for: `Gary`, `Gayle`, `Budgie`, `Fat Gary`, `Buster/Super Buster`,
`Ramsey`, `DMAC`, `Amber`, `Bridgette`, `Akiko`, and PLCC variants of
`Paula`, `Denise`, and `8520`.

They are deliberately left incomplete here rather than supplying
plausible-but-wrong pin numbers.

------------------------------------------------------------------------

# PINOUTS2 additions

> Extends PINOUTS.md. For Codex/code generation, generate numeric pins
> only from sections marked `COMPLETE_VERIFIED`. A leading `/` denotes
> active-low.

## CPU MC68000FN8

-   package: `PLCC-68`
-   pinout_status: `COMPLETE_VERIFIED`
-   footprint_type: `PLCC-68, J-lead`

``` text
Pin    Signal
1      D4
2      D3
3      D2
4      D1
5      D0
6      /AS
7      /UDS
8      /LDS
9      R/W
10     /DTACK
11     /BG
12     /BGACK
13     /BR
14     VCC
15     CLK
16     GND
17     GND
18     NC
19     /HALT
20     /RESET
21     /VMA
22     E
23     /VPA
24     /BERR
25     /IPL2
26     /IPL1
27     /IPL0
28     FC2
29     FC1
30     FC0
31     NC
32     A1
33     A2
34     A3
35     A4
36     A5
37     A6
38     A7
39     A8
40     A9
41     A10
42     A11
43     A12
44     A13
45     A14
46     A15
47     A16
48     A17
49     A18
50     A19
51     A20
52     VCC
53     A21
54     A22
55     A23
56     GND
57     GND
58     D15
59     D14
60     D13
61     D12
62     D11
63     D10
64     D9
65     D8
66     D7
67     D6
68     D5
```

## Agnus 8371 --- A500/A2000 PAL

-   package: `PLCC-84`
-   pinout_status: `COMPLETE_VERIFIED`
-   Commodore_part: `318071-01`

``` text
Pin    Signal
1      RD13
2      RD12
3      RD11
4      RD10
5      RD9
6      RD8
7      RD7
8      RD6
9      RD5
10     RD4
11     RD3
12     RD2
13     RD1
14     RD0
15     VCC
16     /RST
17     /INT3
18     DMAL
19     /BLS
20     /DBR
21     RRW
22     PRW
23     /RGEN
24     /AS
25     /RAMEN
26     RGA8
27     RGA7
28     RGA6
29     RGA5
30     RGA4
31     RGA3
32     RGA2
33     RGA1
34     28MHz
35     XCLK
36     /XCLKEN
37     /CDAC
38     7MHz
39     CCKQ
40     CCK
41     TEST
42     GND
43     MA0
44     MA1
45     MA2
46     MA3
47     MA4
48     MA5
49     MA6
50     MA7
51     MA8
52     /LDS
53     /UDS
54     /CASL
55     /CASU
56     /RAS1
57     /RAS0
58     GND
59     A19
60     A1
61     A2
62     A3
63     A4
64     A5
65     A6
66     A7
67     A8
68     A9
69     A10
70     A11
71     A12
72     A13
73     A14
74     A15
75     A16
76     A17
77     A18
78     /LP
79     /VSYNC
80     /CSYNC
81     /HSYNC
82     GND
83     RD15
84     RD14
```

## Agnus 8372 / 8372A profile

-   package: `PLCC-84`
-   pinout_status: `COMPLETE_VERIFIED`
-   warning:
    `318069-03 is a 2 MB 8372-family Super Agnus associated with A3000; do not silently substitute it for an A500 8372A.`

``` text
Pin    Signal
1      DRD13
2      DRD12
3      DRD11
4      DRD10
5      DRD9
6      DRD8
7      DRD7
8      DRD6
9      DRD5
10     DRD4
11     DRD3
12     DRD2
13     DRD1
14     DRD0
15     VCC
16     /RESET
17     /INTR
18     DMAL
19     /BLISS
20     /BLIT
21     /WE
22     R/W
23     /REGEN
24     /AS
25     /RAMEN
26     RGA8
27     RGA7
28     RGA6
29     RGA5
30     RGA4
31     RGA3
32     RGA2
33     RGA1
34     28MHz
35     A20
36     /XCLKEN
37     /CDAC
38     7MHz
39     CCKQ
40     CCK
41     TEST
42     GND
43     DRA0
44     DRA1
45     DRA2
46     DRA3
47     DRA4
48     DRA5
49     DRA6
50     DRA7
51     DRA8
52     /LDS
53     /UDS
54     /CASL
55     /CASU
56     DRA9
57     /RAS
58     GND
59     A19
60     A1
61     A2
62     A3
63     A4
64     A5
65     A6
66     A7
67     A8
68     A9
69     A10
70     A11
71     A12
72     A13
73     A14
74     A15
75     A16
76     A17
77     A18
78     /LPEN
79     /VSYNC
80     /CSYNC
81     /HSYNC
82     GND
83     DRD15
84     DRD14
```

## Super Buster PLCC signal profile

-   package: `PLCC-84`
-   pinout_status: `COMPLETE_VERIFIED`
-   requested_part: `390539-02`; verify revision-specific behavior
    separately.

``` text
Pin    Signal
1      /FCS
2      /CCS
3      A2
4      A1
5      A0
6      R/W
7      SIZ0
8      SIZ1
9      /AS
10     /DS
11     /DSACK0
12     /DSACK1
13     /STERM
14     GND
15     /RMC
16     /SBR
17     /SBG
18     /CIIN
19     /MTACK
20     /DTACK
21     DOE
22     /WAIT
23     /BR
24     /BG
25     /BGACK
26     /HLT
27     /BERR
28     GND
29     /RESET
30     CPUCLK
31     C7M
32     /CDAC
33     /D2P
34     /DBOE1
35     /DBOE0
36     /DB16
37     DBLT
38     READ
39     /EDS2
40     /EDS3
41     EA1
42     VCC
43     /ABOE2
44     /ABOE0
45     MS2
46     /MTCR
47     /CACHE
48     A3
49     /CBREQ
50     /CBACK
51     /IOZ2
52     /MEMZ2
53     /ADDRZ3
54     MS1
55     /OWN
56     GND
57     /EBGACK
58     CLK90
59     /SLAVE4
60     EA2
61     EA3
62     /EDS0
63     /EBCLR
64     /SLAVE3
65     /SLAVE2
66     /SLAVE1
67     /SLAVE0
68     /BIGZ
69     /EBG4
70     GND
71     /EBG3
72     /EBG2
73     /EBG1
74     /EBG0
75     /ABOE1
76     /EBR4
77     /EBR3
78     /EBR2
79     /EBR1
80     /EBR0
81     MS0
82     /BINT
83     /EDS1
84     VCC
```

## Bridgette 391380-01

-   package: `PQFP-100`
-   pinout_status: `COMPLETE_VERIFIED`
-   models: `A4000, A4000T`

``` text
Pin    Signal
1      GND
2      CD5
3      CD6
4      CD7
5      CD8
6      CD9
7      CD10
8      CD11
9      CD12
10     CD13
11     CD14
12     CD15
13     CD16
14     CD17
15     CD18
16     CD19
17     CD20
18     VCC
19     CD21
20     CD22
21     CD23
22     CD24
23     CD25
24     CD26
25     CD27
26     CD28
27     CD29
28     GND
29     CD30
30     CD31
31     XD0
32     XD1
33     XD2
34     XD3
35     XD4
36     GND
37     XD5
38     XD6
39     XD7
40     XOEH
41     VCC
42     XD8
43     XD9
44     XD10
45     GND
46     XD11
47     XD12
48     XD13
49     XD14
50     XD15
51     XDIR
52     XOEL
53     GND
54     PD31
55     PD30
56     PD29
57     PD28
58     PD27
59     PD26
60     PD25
61     PD24
62     PD23
63     PD22
64     PD21
65     PD20
66     PD19
67     PD18
68     PD17
69     PD16
70     PD15
71     PD14
72     PD13
73     PD12
74     PD11
75     PD10
76     PD9
77     PD8
78     PD7
79     PD6
80     GND
81     PD5
82     PD4
83     PD3
84     PD2
85     PD1
86     PD0
87     CLATCH
88     XSTORED
89     COEL
90     COEH
91     VCC
92     XCLK
93     CDIR
94     CBR_DIR
95     CBR
96     CD0
97     CD1
98     CD2
99     CD3
100    CD4
```

# Requested parts still gated from automatic generation

For these parts I verified the identity/package family but did **not**
recover a sufficiently reliable textual numeric map in this pass. They
are deliberately marked as non-generatable rather than filling the file
with guessed pins.

## Budgie 391425-02

-   package: `PQFP-128`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `A1200 Rev A`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Gayle 391424-02

-   package: `PLCC-84`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `A1200`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Paula 391077-01

-   package: `PLCC-52`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `8364R7PL`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## CIA 391078-02

-   package: `PLCC-44`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `8520A-1PL 2 MHz`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## CPU MC68EC020

-   package: `PQFP-100 (FG suffix)`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `A1200/CD32; Motorola CASE 842D-01`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Gayle 391155-01

-   package: `PLCC-84`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `A600`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Super Denise 391081-01

-   package: `PLCC`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `8373R4, A600`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Gary 318072-01

-   package: `DIP-48`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `5719, A500/A2000/CDTV`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Buster 318075-01

-   package: `DIP-48`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `5721 early A2000 Buster; NOT the PLCC table above`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Akiko 391563-01

-   package: `PQFP-160`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `CD32`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Ramsey 390541-04

-   package: `PLCC`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `A3000`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## Fat Gary 390540-01/-02

-   package: `PLCC-84`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `User supplied`390540-0`; known suffixes include -01/-02`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## CPU MC68030 from A3000

-   package: `PGA, 128 used pins / 169-position grid`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `MC68030RC/RP family`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## CPU MC68040 from A4000

-   package: `PGA-179`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `MC68040RC25 family`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

## DMAC 390563-02

-   package: `custom/PLCC gate-array package`
-   pinout_status: `PACKAGE_VERIFIED_PINMAP_NOT_TEXT_VERIFIED`
-   note: `Enhanced DMAC; do not confuse with 390537-02`
-   generator_action:
    `STOP; require revision/package-specific numeric pin table`

# Important package corrections

-   `391077-01` Paula is PLCC-52, not the DIP-48 Paula map.
-   `391078-02` CIA is PLCC-44, not the DIP-40 CIA map.
-   `391424-02` and `391155-01` Gayle are PLCC-84.
-   `391380-01` Bridgette is PQFP-100.
-   `318075-01` is DIP-48 Buster and must not inherit the PLCC
    Super-Buster table.
-   `MC68000FN8` is PLCC-68 and has four extra package positions
    relative to DIP-64.

# Verification sources

Motorola/Freescale/NXP CPU manuals; Commodore service schematics;
AmigaWiki Agnus, Buster, Bridgette, Gayle, Paula, CIA, Denise and
custom-chip pages; Aminet custom-chip pinout archive as cross-check.


---


# PINOUTS3 — pinouts recovered from `pinouts.zip`

This revision extends `PINOUTS2.md` using the diagrams and text files supplied in `pinouts.zip`.

## Source-handling rules

- `COMPLETE_FROM_ARCHIVE` means the pin map was read directly from a supplied text file or an unambiguous supplied diagram.
- `PARTIAL_FROM_ARCHIVE` means the supplied source itself leaves one or more leads blank or visually ambiguous. Those leads are written as `UNLABELLED_IN_SOURCE`; they are **not guessed**.
- For PGA devices, the physical pin identifier is an alphanumeric grid coordinate such as `A1`, not a sequential integer.
- A leading `/` means active-low.
- `VSS`/`GND` are ground; `VCC` is positive supply.

## Gary 318072-01 / 5719

- package: `DIP-48, 0.600 inch row spacing, 0.100 inch pitch`
- pinout_status: `COMPLETE_FROM_ARCHIVE`
- source_in_archive: `gary.txt`
- model_family: `A500 / A2000`
- note: `Signal names normalized from the archive's Nxxxx active-low notation to /xxxx.`

```text
Pin     Signal
1       GND
2       /VPA
3       /CDR
4       /CDW
5       /KRES
6       VCC
7       /MTR
8       /DKWD
9       DKWE
10      /LDS
11      /UDS
12      R/W
13      /AS
14      /BGACK
15      /DBR
16      /SEL0
17      VCC
18      /RGAE
19      /BLS
20      /RAME
21      /ROME
22      /RTCR
23      /RTCW
24      GND
25      C4
26      /CDAC
27      C3
28      C1
29      /OVR
30      OVL
31      XRDY
32      /EXP
33      A17
34      A18
35      A19
36      A20
37      A21
38      A22
39      A23
40      NC
41      /RESET
42      /HALT
43      /DTACK
44      DKWEB
45      DKWDB
46      MTR0D
47      MTRXD
48      VCC
```

## Gayle 391424-02 / 391155-family AA-Gayle pin map

- package: `PLCC-84`
- pinout_status: `COMPLETE_FROM_ARCHIVE`
- source_in_archive: `aa-gayle-plcc.png`
- models_shown_by_source: `A1200 / A4000`; related Gayle revisions also occur in A600`
- warning: `Use revision-specific schematic checks when substituting 391155-01 vs 391424-02.`

```text
Pin     Signal
1       PE12
2       PE5
3       GND1
4       NOISE
5       CC_RESET
6       /CC_ENA
7       /REG
8       /WE
9       /OE
10      E
11      /FLASH
12      /IDE_IRQ
13      /IDE_CS(1)
14      /IDE_CS(2)
15      /SPARE_CS
16      /NET_CS
17      /RTC_CS
18      /IOWR
19      /IORD
20      VCC1
21      /ROMEN
22      C14M
23      CCK
24      GND2
25      XRDY
26      /OVR
27      CC_A0
28      /OEB
29      /DBR
30      /BLS
31      /REGEN
32      /RAMEN
33      /AS
34      /DS
35      /DSACK1
36      R/W
37      /DSACK0
38      /BG
39      /HLT
40      /RST
41      A12
42      A13
43      A14
44      A15
45      GND3
46      A16
47      A17
48      A18
49      A19
50      A20
51      A21
52      A22
53      A23
54      D15
55      D14
56      D13
57      D12
58      D11
59      D10
60      D9
61      D8
62      VCC2
63      /KBRESET
64      /SENSE
65      /FPU_CS
66      GND4
67      /MTRON
68      /WIDE
69      FC1
70      FC0
71      /MTR
72      /SEL
73      /ODD_CIA
74      /EVEN_CIA
75      /CC_CD1
76      /CC_CD2
77      /CC_BVD1
78      /CC_BVD2
79      /CC_WP
80      /CC_BUSY
81      /WAIT
82      /BERR
83      /INT6
84      /INT2
```

## Budgie 391425-02

- package: `PQFP-128`
- pinout_status: `PARTIAL_FROM_ARCHIVE`
- source_in_archive: `Budgie.gif`
- model: `A1200`
- warning: `The old diagram leaves one lower-left lead visually unresolved; it is preserved as UNLABELLED_IN_SOURCE.`

```text
Pin     Signal
1       D7
2       D6
3       D5
4       D4
5       D3
6       D2
7       D1
8       D0
9       VSS2
10      /UDS
11      /LDS
12      /DS
13      A1
14      A0
15      SIZE_1
16      SIZE_0
17      R/W
18      /CAS_XX
19      /CAS_LL
20      /CAS_LM
21      /CAS_UM
22      /CAS_UU
23      /CAS
24      VCC2
25      /RAS_0
26      /RAS_1
27      /RAS
28      DRA0
29      /BWE
30      /WE
31      VSS3
32      VSS1
33      /DBR
34      CCK_4
35      CCK
36      DRD0
37      DRD1
38      DRD2
39      DRD3
40      DRD4
41      DRD5
42      DRD6
43      DRD7
44      VSS4
45      DRD8
46      DRD9
47      DRD10
48      DRD11
49      DRD12
50      DRD13
51      DRD14
52      DRD15
53      VSS5
54      DRD16
55      DRD17
56      DRD18
57      DRD19
58      DRD20
59      DRD21
60      DRD22
61      DRD23
62      DRD24
63      DRD25
64      VCC3
65      DRD26
66      DRD27
67      DRD28
68      DRD29
69      DRD30
70      DRD31
71      XD15
72      XD14
73      XD13
74      XD12
75      XD11
76      VSS6
77      XD10
78      XD9
79      XD8
80      XD7
81      XD6
82      XD5
83      XD4
84      XD3
85      XD2
86      XD1
87      XD0
88      VCC4
89      CPUCLK
90      /CDAC
91      C7MHZ
92      /RESET
93      D3C
94      C28MHZ
95      VSS7
96      XCLK
97      /XCLKEN
98      /BGACK
99      /XEN
100     /OEB
101     D31
102     D30
103     D29
104     D28
105     D27
106     VSS8
107     D26
108     D25
109     D24
110     D23
111     D22
112     D21
113     D20
114     D19
115     D18
116     D17
117     D16
118     VSS1
119     D15
120     D14
121     D13
122     D12
123     D11
124     D10
125     D9
126     D8
127     UNLABELLED_IN_SOURCE
128     VCC1
```

## Buster 318075-01 / 5721

- package: `DIP-48`
- pinout_status: `PARTIAL_FROM_ARCHIVE`
- source_in_archive: `Buster.gif`
- model: `A2000`
- warning: `Several power/unused positions are blank in the supplied image. They are not inferred.`

```text
Pin     Signal
1       UNLABELLED_IN_SOURCE
2       /BG1
3       /BG2
4       /BG3
5       /BG4
6       /BG5
7       /BR1
8       /BR2
9       /BR3
10      /BR4
11      /BR5
12      /SLAVE1
13      /SLAVE2
14      /SLAVE3
15      /SLAVE4
16      /SLAVE5
17      /BG
18      /CDAC
19      C1
20      C3
21      /C2
22      /C4
23      /GBG
24      UNLABELLED_IN_SOURCE
25      UNLABELLED_IN_SOURCE
26      /BEER
27      /BR
28      /CBR
29      /CBG
30      A19
31      A20
32      A21
33      A22
34      A23
35      READ
36      UNLABELLED_IN_SOURCE
37      /LDS
38      /UDS
39      /BOSS
40      /OVR
41      /OWN
42      /RST
43      TEST
44      PTEST
45      /D2P
46      /DBOE
47      DOE
48      UNLABELLED_IN_SOURCE
```

## Super Agnus 8372B / 2 MB Agnus

- package: `PLCC-84`
- pinout_status: `COMPLETE_FROM_ARCHIVE`
- source_in_archive: `8372b-agnus_pin.txt`
- note: `The archive calls this 8327B in its title, evidently a typo; the described device is 8372B 2-Meg Agnus.`
- candidate_relation: `Use this table when validating 318069-03 only after matching the exact board/revision.`

```text
Pin     Signal
1       DRD13
2       DRD12
3       DRD11
4       DRD10
5       DRD9
6       DRD8
7       DRD7
8       DRD6
9       DRD5
10      DRD4
11      DRD3
12      DRD2
13      DRD1
14      DRD0
15      VCC
16      /RESET
17      /INTR
18      DMAL
19      /BLISS
20      /BLIT
21      /WE
22      R/W
23      /REGEN
24      /AS
25      /RAMEN
26      RGA8
27      RGA7
28      RGA6
29      RGA5
30      RGA4
31      RGA3
32      RGA2
33      RGA1
34      C28M
35      A20
36      NC
37      /CDAC
38      C7M
39      CCKQ
40      CCK
41      PAL/NTSC
42      VSS
43      DRA0
44      DRA1
45      DRA2
46      DRA3
47      DRA4
48      DRA5
49      DRA6
50      DRA7
51      DRA8
52      /LDS
53      /UDS
54      /CASL
55      /CASU
56      DRA9
57      /RAS
58      VSS
59      A19
60      A1
61      A2
62      A3
63      A4
64      A5
65      A6
66      A7
67      A8
68      A9
69      A10
70      A11
71      A12
72      A13
73      A14
74      A15
75      A16
76      A17
77      A18
78      /LPEN
79      /VSYNC
80      /CSYNC
81      /HSYNC
82      VSS
83      DRD15
84      DRD14
```

## CIA 391078-02 / 8520A-1PL

- package: `PLCC-44`
- pinout_status: `COMPLETE_FROM_CHAT_IMAGE`
- source_in_archive: `user-supplied CIA DIP/PLCC comparison image`
- note: `A0..A3 are register-select/address inputs; PHI2 is the Ø2 clock.`

```text
Pin     Signal
1       PA0
2       PA1
3       PA2
4       NC
5       NC
6       NC
7       PA3
8       PA4
9       PA5
10      PA6
11      PA7
12      PB0
13      PB1
14      PB2
15      PB3
16      PB4
17      PB5
18      PB6
19      PB7
20      PC
21      TOD
22      VCC
23      VCC
24      /IRQ
25      R/W
26      /FLAG
27      /CS
28      PHI2
29      D7
30      D6
31      D5
32      D4
33      D3
34      D2
35      D1
36      D0
37      /RST
38      A3
39      A2
40      NC
41      A1
42      A0
43      SP
44      CNT
```

## MC68030 PGA — A3000-style RC package

- package: `PGA, 169-position 13x13 grid with unpopulated positions`
- pinout_status: `COMPLETE_FROM_ARCHIVE`
- source_in_archive: `68030PGA.gif`
- view_in_source: `BOTTOM VIEW`
- note: `Pin identifiers are PGA coordinates, not numeric pin numbers.`

```text
Pin     Signal
A1      /BR
A2      A0
A3      A30
A4      A28
A5      A26
A6      A24
A7      A23
A8      A21
A9      A19
A10     A17
A11     A15
A12     A13
A13     A10
B1      RMC
B2      /BG
B3      A31
B4      A29
B5      A27
B6      A25
B7      A22
B8      A20
B9      A16
B10     A14
B11     A12
B12     A8
B13     A7
C1      FC1
C2      CLOUT
C3      /BGACK
C4      A1
C5      GND
C6      VCC
C7      GND
C8      A18
C9      GND
C10     A11
C11     A9
C12     A5
C13     A4
D1      FC2
D2      FC0
D3      /OCS
D4      VCC
D5      NC
D10     VCC
D11     A6
D12     A3
D13     A2
E1      CLK
E2      /AVEC
E3      GND
E11     GND
E12     NC
E13     /IPEND
F1      /DSACK0
F2      VCC
F3      GND
F4      NC
F10     NC
F11     VCC
F12     /RST
F13     MMUDIS
G1      /STERM
G2      /DSACK1
G3      GND
G11     GND
G12     /IPL2
G13     /IPL1
H1      /BERR
H2      /HALT
H3      VCC
H11     VCC
H12     /CDIS
H13     /IPL0
J1      /CBACK
J2      /AS
J3      GND
J11     GND
J12     STATUS
J13     /REFILL
K1      /CBREQ
K2      /DS
K3      SIZ1
K4      VCC
K5      NC
K10     VCC
K11     D5
K12     D1
K13     D0
L1      /CIIN
L2      SIZ0
L3      R/W
L4      D30
L5      GND
L6      VCC
L7      GND
L8      GND
L9      GND
L10     D10
L11     D7
L12     D4
L13     D2
M1      /DBEN
M2      /ECS
M3      D29
M4      D27
M5      D24
M6      D22
M7      D20
M8      D17
M9      D14
M10     D12
M11     D8
M12     D6
M13     D3
N1      D31
N2      D28
N3      D26
N4      D25
N5      D23
N6      D21
N7      D19
N8      D18
N9      D16
N10     D15
N11     D13
N12     D11
N13     D9
```



# Paula 391077-01 / 8364R7PL — added from supplied diagram

- device: `Paula`
- Commodore_part: `391077-01`
- chip_marking: `8364R7PL`
- package: `PLCC-52`
- footprint_type: `PLCC-52, J-lead`
- pin_count: `52`
- pinout_status: `COMPLETE_FROM_CHAT_IMAGE`
- source: `user-supplied CSG 391077-01 8364R7PL (Paula) pinout diagram`
- signal_convention: `leading / means active-low`

```text
Pin    Signal
1      DRD2
2      DRD3
3      DRD4
4      DRD5
5      DRD6
6      DRD7
7      DRD8
8      GND
9      DRD1
10     DRD0
11     /RESET
12     DMAL
13     /IPL0
14     /IPL1
15     /IPL2
16     NC
17     NC
18     NC
19     /INT2
20     /INT3
21     /INT6
22     RGA8
23     RGA7
24     RGA6
25     RGA5
26     RGA4
27     RGA3
28     RGA2
29     RGA1
30     VCC
31     CCK
32     CCKQ
33     RIGHT
34     LEFT
35     P0X
36     P0Y
37     A_GND
38     P1X
39     P1Y
40     /DKRD
41     /DKWD
42     DKWE
43     /TXD
44     /RXD
45     DRD15
46     DRD14
47     NC
48     DRD13
49     DRD12
50     DRD11
51     DRD10
52     DRD9
```

## Paula 391077-01 code-generator record

```yaml
device: Paula
commodore_part_number: 391077-01
chip_marking: 8364R7PL
package: PLCC-52
pin_count: 52
pinout_status: COMPLETE_FROM_CHAT_IMAGE
```

# Remaining unresolved entries from PINOUTS2

The supplied archive did **not** provide an unambiguous package-specific numeric pin map for the following requested parts, so PINOUTS3 deliberately does not invent them:

- `Super Denise 391081-01` — package-specific map still required; archive contains the DIP Denise/ECS table only.
- `Akiko 391563-01` — PQFP-160 map not present in this archive.
- `Ramsey 390541-04` — numeric package map not present in this archive.
- `Fat Gary 390540-01/-02` — numeric PLCC map not present in this archive.
- `MC68040 from A4000` — package-specific map not present in this archive.
- `DMAC 390563-02` — numeric package map not present in this archive.

# Generator policy

```yaml
generator_policy:
  allowed_statuses:
    - COMPLETE_FROM_ARCHIVE
    - COMPLETE_FROM_CHAT_IMAGE
  partial_status:
    PARTIAL_FROM_ARCHIVE:
      action: "generate only if UNLABELLED_IN_SOURCE pins are explicitly accepted by caller"
  forbidden_behavior:
    - "Do not fill archive blanks from memory."
    - "Do not transfer pin numbers between DIP, PLCC, PQFP, or PGA variants."
    - "Do not assume two Commodore part-number suffixes are electrically interchangeable."
    - "Preserve PGA coordinate pin identifiers exactly."
```
