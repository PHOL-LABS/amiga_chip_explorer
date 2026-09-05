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

  ------------------------------------------------------------------------
  Device                             Typical package Pinout status in this
                                                     file
  --------------------- ---------------------------- ---------------------
  MC68000                                     DIP-64 COMPLETE

  Agnus 8361/8367                             DIP-48 COMPLETE

  Fat Agnus 8370/8371                        PLCC-84 COMPLETE

  Agnus 8372/8372AB/B                        PLCC-84 COMPLETE profile

  Agnus 8375                                 PLCC-84 COMPLETE
  incl. 318069-10                                    

  Alice 8374                                 PLCC-84 COMPLETE

  Denise 8362 / ECS                           DIP-48 COMPLETE; pin 34
  8373 DIP                                           differs by revision

  Paula 8364                                  DIP-48 COMPLETE

  Lisa 4203                                  PLCC-84 COMPLETE

  CIA 8520                                    DIP-40 COMPLETE

  CIA 8520 PLCC                              PLCC-44 PACKAGE KNOWN; pin
                                                     remap not included

  Gary 5719                                   DIP-48 PACKAGE KNOWN; pin
                                                     table intentionally
                                                     omitted pending
                                                     text-verification

  Gayle                                      PLCC-84 PACKAGE KNOWN; pin
                                                     table intentionally
                                                     omitted pending
                                                     text-verification

  Budgie                                    PQFP-128 PACKAGE KNOWN; pin
                                                     table intentionally
                                                     omitted pending
                                                     text-verification

  Fat Gary                                   PLCC-84 PACKAGE KNOWN; pin
                                                     table intentionally
                                                     omitted pending
                                                     text-verification

  Buster / Super Buster                  PLCC family PACKAGE/REVISION
                                                     DEPENDENT; not
                                                     expanded

  Ramsey                                 PLCC family PACKAGE/REVISION
                                                     DEPENDENT; not
                                                     expanded

  DMAC                                   PLCC family PACKAGE/REVISION
                                                     DEPENDENT; not
                                                     expanded

  Amber                                  PLCC family PACKAGE/REVISION
                                                     DEPENDENT; not
                                                     expanded

  Bridgette                 custom QFP/PLCC-era ASIC not expanded

  Akiko 391563-01                           PQFP-160 PACKAGE VERIFIED; pin
                                                     table not expanded
                                                     here
  ------------------------------------------------------------------------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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

    Pin Signal
  ----- --------

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
