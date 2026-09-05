export interface ChipInfo {
  id: string;
  name: string;
  partNumber: string;
  package: string;
  pinCount: number;
  description: string;
  function: string;
}

export interface AmigaModel {
  id: string;
  name: string;
  shortName: string;
  year: string;
  chips: ChipInfo[];
}

export const AMIGA_MODELS: AmigaModel[] = [
  {
    id: "a1200",
    name: "Amiga A1200",
    shortName: "A1200",
    year: "1992",
    chips: [
      { id: "budgie", name: "Budgie", partNumber: "391425-02", package: "PQFP128", pinCount: 128, description: "Memory/expansion bus controller", function: "AGA memory and expansion controller" },
      { id: "gayle", name: "Gayle", partNumber: "391424-02", package: "PLCC84", pinCount: 84, description: "IDE/PCMCIA controller", function: "I/O and storage controller" },
      { id: "lisa", name: "Lisa", partNumber: "391227-01", package: "PLCC84", pinCount: 84, description: "AGA display controller", function: "Advanced graphics architecture" },
      { id: "paula", name: "Paula", partNumber: "391077-01", package: "PLCC52", pinCount: 52, description: "Audio/Serial/Disk controller", function: "Sound and I/O" },
      { id: "alice", name: "Alice", partNumber: "391010-01", package: "PLCC84", pinCount: 84, description: "AGA DMA controller", function: "Memory and DMA controller" },
      { id: "cia_u7", name: "CIA U7", partNumber: "391078-02 U7", package: "PLCC44", pinCount: 44, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_u8", name: "CIA U8", partNumber: "391078-02 U8", package: "PLCC44", pinCount: 44, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu", name: "CPU", partNumber: "MC68EC020FG16", package: "PQFP100", pinCount: 100, description: "Motorola 68EC020 CPU", function: "32-bit processor @ 14.3 MHz" },
    ],
  },
  {
    id: "a600",
    name: "Amiga A600",
    shortName: "A600",
    year: "1992",
    chips: [
      { id: "gayle_a6", name: "Gayle", partNumber: "391155-01", package: "PLCC84", pinCount: 84, description: "IDE/PCMCIA controller", function: "I/O and storage controller" },
      { id: "paula_a6", name: "Paula", partNumber: "391077-01", package: "PLCC52", pinCount: 52, description: "Audio/Serial/Disk controller", function: "Sound and I/O" },
      { id: "agnus_a6", name: "Fat Agnus", partNumber: "390544-01", package: "PLCC84", pinCount: 84, description: "8375 ECS DMA controller", function: "2MB chip RAM DMA" },
      { id: "denise_a6", name: "Super Denise", partNumber: "391081-01", package: "PLCC52", pinCount: 52, description: "ECS display controller", function: "ECS display chip" },
      { id: "cia_u6", name: "CIA U7", partNumber: "391078-01 U7", package: "PLCC44", pinCount: 44, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_u7_a6", name: "CIA U8", partNumber: "391078-01 U8", package: "PLCC44", pinCount: 44, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu_a6", name: "CPU", partNumber: "MC68000FN8", package: "PLCC68", pinCount: 68, description: "Motorola 68000 CPU", function: "16/32-bit processor @ 7.16 MHz" },
    ],
  },
  {
    id: "a500",
    name: "Amiga A500",
    shortName: "A500",
    year: "1987",
    chips: [
      { id: "agnus_a5", name: "Fat Agnus", partNumber: "318069-10", package: "PLCC84", pinCount: 84, description: "8375 ECS DMA controller", function: "2MB chip RAM DMA" },
      { id: "denise_a5", name: "Denise", partNumber: "252126-02", package: "DIP48", pinCount: 48, description: "Display controller", function: "OCS display chip" },
      { id: "paula_a5", name: "Paula", partNumber: "252127-02", package: "DIP48", pinCount: 48, description: "Audio/Serial/Disk", function: "Sound and I/O controller" },
      { id: "cia_a_a5", name: "CIA-A", partNumber: "318029-02 U7", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_b_a5", name: "CIA-B", partNumber: "318029-02 U8", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu_a5", name: "CPU", partNumber: "MC68000", package: "DIP64", pinCount: 64, description: "Motorola 68000 CPU", function: "16/32-bit @ 7.16 MHz" },
      { id: "gary_a5", name: "Gary", partNumber: "318072-01", package: "DIP48", pinCount: 48, description: "Address decode / bus control", function: "System bus control" },
    ],
  },
  {
    id: "a2000",
    name: "Amiga A2000",
    shortName: "A2000",
    year: "1987",
    chips: [
      { id: "agnus_a2", name: "Fat Agnus", partNumber: "318069-02", package: "PLCC84", pinCount: 84, description: "8372 ECS DMA controller", function: "1MB chip RAM DMA" },
      { id: "denise_a2", name: "Denise", partNumber: "252126-01", package: "DIP48", pinCount: 48, description: "Display controller", function: "OCS display chip" },
      { id: "paula_a2", name: "Paula", partNumber: "252127-01", package: "DIP48", pinCount: 48, description: "Audio/Serial/Disk", function: "Sound and I/O" },
      { id: "cia_a_a2", name: "CIA-A", partNumber: "318029-02 U9", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_b_a2", name: "CIA-B", partNumber: "318029-02 U10", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu_a2", name: "CPU", partNumber: "MC68000", package: "DIP64", pinCount: 64, description: "Motorola 68000 CPU", function: "16/32-bit @ 7.16 MHz" },
      { id: "gary_a2", name: "Gary", partNumber: "318072-01", package: "DIP48", pinCount: 48, description: "Address decode / bus control", function: "System bus control" },
      { id: "buster_a2", name: "Buster", partNumber: "318075-01", package: "DIP48", pinCount: 48, description: "Zorro II bus controller", function: "Expansion bus arbiter" },
    ],
  },
  {
    id: "cd32",
    name: "Amiga CD32",
    shortName: "CD32",
    year: "1993",
    chips: [
      { id: "akiko_cd", name: "Akiko", partNumber: "391563-01", package: "PQFP160", pinCount: 160, description: "CD32 custom chip", function: "CD-ROM + chunky-to-planar" },
      { id: "alice_cd", name: "Alice", partNumber: "391010-01", package: "PLCC84", pinCount: 84, description: "AGA DMA controller", function: "Memory and DMA" },
      { id: "lisa_cd", name: "Lisa", partNumber: "391227-01", package: "PLCC84", pinCount: 84, description: "AGA display controller", function: "Advanced graphics" },
      { id: "paula_cd", name: "Paula", partNumber: "391077-01", package: "PLCC52", pinCount: 52, description: "Audio/Serial/Disk", function: "Sound and I/O" },
      { id: "cpu_cd", name: "CPU", partNumber: "MC68EC020FG16", package: "PQFP100", pinCount: 100, description: "Motorola 68EC020", function: "32-bit @ 14.3 MHz" },
    ],
  },
  {
    id: "a3000",
    name: "Amiga A3000",
    shortName: "A3000",
    year: "1990",
    chips: [
      { id: "super_agnus_a3", name: "Super Agnus", partNumber: "318069-03", package: "PLCC84", pinCount: 84, description: "8372AB ECS DMA controller", function: "2MB chip RAM DMA" },
      { id: "super_denise_a3", name: "Super Denise", partNumber: "390433-01", package: "DIP48", pinCount: 48, description: "ECS display controller", function: "Productivity modes" },
      { id: "paula_a3", name: "Paula", partNumber: "252127-01", package: "DIP48", pinCount: 48, description: "Audio/Serial/Disk", function: "Sound and I/O" },
      { id: "ramsey_a3", name: "Ramsey", partNumber: "390541-04", package: "PLCC84", pinCount: 84, description: "RAM controller", function: "DRAM/ZIPP memory arbiter" },
      { id: "buster_a3", name: "Super Buster", partNumber: "390539-02", package: "PLCC84", pinCount: 84, description: "Zorro III bus controller", function: "Expansion bus arbiter" },
      { id: "fat_gary_a3", name: "Fat Gary", partNumber: "390540-02", package: "PLCC84", pinCount: 84, description: "System controller", function: "Address decode and bus control" },
      { id: "cia_a3", name: "CIA-A", partNumber: "318029-02 U300", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_b_a3", name: "CIA-B", partNumber: "318029-02 U350", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu_a3", name: "CPU", partNumber: "MC68030", package: "QFP132", pinCount: 132, description: "Motorola 68030", function: "32-bit @ 25/40 MHz" },
    ],
  },
  {
    id: "a4000",
    name: "Amiga A4000",
    shortName: "A4000",
    year: "1992",
    chips: [
      { id: "alice_a4", name: "Alice", partNumber: "391010-01", package: "PLCC84", pinCount: 84, description: "AGA DMA controller", function: "Memory and DMA" },
      { id: "lisa_a4", name: "Lisa", partNumber: "391227-01", package: "PLCC84", pinCount: 84, description: "AGA display controller", function: "Advanced graphics" },
      { id: "paula_a4", name: "Paula", partNumber: "391077-01", package: "PLCC52", pinCount: 52, description: "Audio/Serial/Disk", function: "Sound and I/O" },
      { id: "ramsey_a4", name: "Ramsey", partNumber: "390541-07", package: "PLCC84", pinCount: 84, description: "RAM controller", function: "DRAM memory arbiter" },
      { id: "fat_gary_a4", name: "Fat Gary", partNumber: "390540-02", package: "PLCC84", pinCount: 84, description: "System controller", function: "Address decode and bus control" },
      { id: "buster_a4", name: "Super Buster", partNumber: "390539-09", package: "PLCC84", pinCount: 84, description: "Zorro III bus controller", function: "Expansion bus arbiter" },
      { id: "bridgette_a4", name: "Bridgette", partNumber: "391380-01", package: "PQFP100", pinCount: 100, description: "A4000 custom system ASIC", function: "Bus and peripheral glue logic" },
      { id: "cia_a_a4", name: "CIA-A", partNumber: "391078-02 U300", package: "PLCC44", pinCount: 44, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_b_a4", name: "CIA-B", partNumber: "391078-02 U350", package: "PLCC44", pinCount: 44, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu_a4", name: "CPU", partNumber: "MC68040", package: "PGA179", pinCount: 179, description: "Motorola 68040", function: "32-bit @ 25/40 MHz" },
    ],
  },
  {
    id: "cdtv",
    name: "Amiga CDTV",
    shortName: "CDTV",
    year: "1991",
    chips: [
      { id: "fat_agnus_cdtv", name: "Fat Agnus", partNumber: "318069-02", package: "PLCC84", pinCount: 84, description: "8372 ECS DMA controller", function: "1MB chip RAM DMA" },
      { id: "super_denise_cdtv", name: "Denise", partNumber: "252126-02", package: "DIP48", pinCount: 48, description: "OCS display controller", function: "Display output" },
      { id: "paula_cdtv", name: "Paula", partNumber: "252127-02", package: "DIP48", pinCount: 48, description: "Audio/Serial/Disk", function: "Sound and I/O" },
      { id: "dmac_cdtv", name: "DMAC", partNumber: "390563-02", package: "PLCC84", pinCount: 84, description: "DMA controller", function: "SCSI + CD-ROM DMA" },
      { id: "gary_cdtv", name: "Gary", partNumber: "318072-01", package: "DIP48", pinCount: 48, description: "Address decode / bus control", function: "System bus control" },
      { id: "cia_cdtv", name: "CIA-A", partNumber: "318029-03 U9", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter A", function: "Parallel, serial, timers" },
      { id: "cia_b_cdtv", name: "CIA-B", partNumber: "318029-03 U10", package: "DIP40", pinCount: 40, description: "Complex Interface Adapter B", function: "Disk, joystick, timers" },
      { id: "cpu_cdtv", name: "CPU", partNumber: "MC68000", package: "DIP64", pinCount: 64, description: "Motorola 68000 CPU", function: "16/32-bit @ 7.16 MHz" },
    ],
  },
];

// Pin data for common packages
export interface PinData {
  number: number;
  name: string;
  signal: string;
  direction: "IN" | "OUT" | "BI" | "PWR" | "GND" | "NC" | "UNKNOWN";
  description: string;
}

export const PINOUT_PROFILES = {
  mc68000_dip64: [
    "D4", "D3", "D2", "D1", "D0", "/AS", "/UDS", "/LDS", "R/W", "/DTACK", "/BG", "/BGACK", "/BR", "VCC", "CLK", "GND",
    "/HALT", "/RESET", "/VMA", "E", "/VPA", "/BERR", "/IPL2", "/IPL1", "/IPL0", "FC2", "FC1", "FC0", "A1", "A2", "A3", "A4",
    "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20",
    "VCC", "A21", "A22", "A23", "GND", "D15", "D14", "D13", "D12", "D11", "D10", "D9", "D8", "D7", "D6", "D5",
  ],
  agnus_8361_8367_dip48: [
    "D8", "D7", "D6", "D5", "D4", "D3", "D2", "D1", "D0", "VCC", "/RES", "/INT3", "DMAL", "/BLS", "/DBR", "/ARW",
    "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2", "RGA1", "CCK", "CCKQ", "GND", "DRA0", "DRA1", "DRA2", "DRA3", "DRA4",
    "DRA5", "DRA6", "DRA7", "DRA8", "/LP", "/VSY", "/CSY", "/HSY", "GND", "D15", "D14", "D13", "D12", "D11", "D10", "D9",
  ],
  agnus_8370_8371_plcc84: [
    "RD13", "RD12", "RD11", "RD10", "RD9", "RD8", "RD7", "RD6", "RD5", "RD4", "RD3", "RD2", "RD1", "RD0", "VCC", "/RESET",
    "/INT3", "DMAL", "/BLS", "/DBR", "RRW", "PRW", "/RGEN", "/AS", "/RAMEN", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2",
    "RGA1", "28MHz", "XCLK", "/XCLKEN", "/CDAC", "7MHz", "CCKQ", "CCK", "TEST", "GND", "MA0", "MA1", "MA2", "MA3", "MA4", "MA5",
    "MA6", "MA7", "MA8", "/LDS", "/UDS", "/CASL", "/CASU", "/RAS1", "/RAS0", "GND", "A19", "A1", "A2", "A3", "A4", "A5",
    "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "/LP", "/VSYNC", "/CSYNC", "/HSYNC", "GND", "RD15", "RD14",
  ],
  agnus_8372_plcc84: [
    "DRD13", "DRD12", "DRD11", "DRD10", "DRD9", "DRD8", "DRD7", "DRD6", "DRD5", "DRD4", "DRD3", "DRD2", "DRD1", "DRD0", "VCC", "/RESET",
    "/INTR", "DMAL", "/BLISS", "/BLIT", "/WE", "R/W", "/REGEN", "/AS", "/RAMEN", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2",
    "RGA1", "28MHz", "A20", "/XCLKEN", "/CDAC", "7MHz", "CCKQ", "CCK", "TEST", "GND", "DRA0", "DRA1", "DRA2", "DRA3", "DRA4", "DRA5",
    "DRA6", "DRA7", "DRA8", "/LDS", "/UDS", "/CASL", "/CASU", "DRA9", "/RAS", "GND", "A19", "A1", "A2", "A3", "A4", "A5",
    "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "/LPEN", "/VSYNC", "/CSYNC", "/HSYNC", "GND", "DRD15", "DRD14",
  ],
  agnus_8375_plcc84: [
    "DRD13", "DRD12", "DRD11", "DRD10", "DRD9", "DRD8", "DRD7", "DRD6", "DRD5", "DRD4", "DRD3", "DRD2", "DRD1", "DRD0", "VCC", "/RESET",
    "/INTR", "DMAL", "/BLISS", "/BLIT", "/WE", "R/W", "/REGEN", "/AS", "/RAMEN", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2",
    "RGA1", "28MHz", "A20", "/CDAC", "7MHz", "CCKQ", "CCK", "14MHz", "GND", "DRA0", "DRA1", "DRA2", "DRA3", "DRA4", "DRA5", "DRA6",
    "DRA7", "DRA8", "/LDS", "/UDS", "/CASL", "/CASU", "DRA9", "/RAS1", "/RAS0", "GND", "A19", "A1", "A2", "A3", "A4", "A5",
    "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "/LPEN", "/VSYNC", "/CSYNC", "/HSYNC", "GND", "DRD15", "DRD14",
  ],
  alice_8374_plcc84: [
    "DRD13", "DRD12", "DRD11", "DRD10", "DRD9", "DRD8", "DRD7", "DRD6", "DRD5", "DRD4", "DRD3", "DRD2", "DRD1", "DRD0", "VCC1", "/RESET",
    "/INTR", "DMAL", "/BLS", "/DBR", "/WE", "R/W", "/REGEN", "NC2", "/RAMEN", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2",
    "RGA1", "SCLK", "A20", "14MHz", "/CDAC", "7MHz", "CCKQ", "CCK", "/NTSC", "GND2", "DRA0", "DRA1", "DRA2", "DRA3", "DRA4", "DRA5",
    "DRA6", "DRA7", "DRA8", "VCC2", "NC1", "/CAS", "VBB", "DRA9", "/RAS", "GND3", "A19", "A1", "A2", "A3", "A4", "A5",
    "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "/LPEN", "/VSYNC", "/CSYNC", "/HSYNC", "GND1", "DRD15", "DRD14",
  ],
  denise_8362_dip48: [
    "D6", "D5", "D4", "D3", "D2", "D1", "D0", "M1H", "M0H", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2",
    "RGA1", "/BURST", "VCC", "R0", "R1", "R2", "R3", "B0", "B1", "B2", "B3", "G0", "G1", "G2", "G3", "/CSYNC",
    "/ZD", "NC", "7M", "CCK", "GND", "M0V", "M1V", "D15", "D14", "D13", "D12", "D11", "D10", "D9", "D8", "D7",
  ],
  denise_8373_dip48: [
    "D6", "D5", "D4", "D3", "D2", "D1", "D0", "M1H", "M0H", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2",
    "RGA1", "/BURST", "VCC", "R0", "R1", "R2", "R3", "B0", "B1", "B2", "B3", "G0", "G1", "G2", "G3", "/CSYNC",
    "/ZD", "CDAC", "7M", "CCK", "GND", "M0V", "M1V", "D15", "D14", "D13", "D12", "D11", "D10", "D9", "D8", "D7",
  ],
  paula_8364_dip48: [
    "D8", "D7", "D6", "D5", "D4", "D3", "D2", "GND", "D1", "D0", "/RES", "DMAL", "/IPL0", "/IPL1", "/IPL2", "/INT2",
    "/INT3", "/INT6", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4", "RGA3", "RGA2", "RGA1", "VCC", "CCK", "CCKQ", "AUDB", "AUDA", "POT0X",
    "POT0Y", "VSSANA", "POT1X", "POT1Y", "/DKRD", "/DKWD", "DKWE", "TXD", "RXD", "D15", "D14", "D13", "D12", "D11", "D10", "D9",
  ],
  lisa_4203_plcc84: [
    "VSS0", "D6", "D5", "D4", "D3", "D2", "D1", "D0", "/CAS", "CCK", "WIDE", "RGA8", "RGA7", "RGA6", "RGA5", "RGA4",
    "RGA3", "RGA2", "RGA1", "MDAT", "/MLD", "SCLK", "C14O", "/RST", "C28M", "SOG", "BLANK", "ZD", "B0", "VDD0", "B1", "B2",
    "VSS1", "B3", "B4", "B5", "B6", "B7", "G0", "G1", "G2", "G3", "C28OUT", "G4", "G5", "G6", "G7", "R0",
    "R1", "R2", "R3", "R4", "VSS2", "R5", "R6", "VDD1", "R7", "/BURST", "D31", "D30", "D29", "D28", "D27", "D26",
    "D25", "D24", "D23", "D22", "D21", "D20", "D19", "D18", "D17", "D16", "D15", "D14", "D13", "D12", "D11", "D10", "D9", "D8", "VDD2", "D7",
  ],
  cia_8520_dip40: [
    "GND", "PA0", "PA1", "PA2", "PA3", "PA4", "PA5", "PA6", "PA7", "PB0", "PB1", "PB2", "PB3", "PB4", "PB5", "PB6",
    "PB7", "PC", "TOD", "VCC", "/IRQ", "R/W", "/CS", "/FLAG", "PHI2", "DB7", "DB6", "DB5", "DB4", "DB3", "DB2", "DB1",
    "DB0", "/RES", "RS3", "RS2", "RS1", "RS0", "SP", "CNT",
  ],
} as const satisfies Record<string, readonly string[]>;

export type PinoutProfile = keyof typeof PINOUT_PROFILES;

const CHIP_PINOUT_PROFILES: Record<string, PinoutProfile> = {
  cpu_a5: "mc68000_dip64",
  cpu_a2: "mc68000_dip64",
  cpu_cdtv: "mc68000_dip64",
  agnus_a5: "agnus_8375_plcc84",
  agnus_a6: "agnus_8375_plcc84",
  agnus_a2: "agnus_8372_plcc84",
  super_agnus_a3: "agnus_8372_plcc84",
  fat_agnus_cdtv: "agnus_8372_plcc84",
  alice: "alice_8374_plcc84",
  alice_cd: "alice_8374_plcc84",
  alice_a4: "alice_8374_plcc84",
  denise_a5: "denise_8362_dip48",
  denise_a2: "denise_8362_dip48",
  super_denise_cdtv: "denise_8362_dip48",
  super_denise_a3: "denise_8373_dip48",
  paula_a5: "paula_8364_dip48",
  paula_a2: "paula_8364_dip48",
  paula_a3: "paula_8364_dip48",
  paula_cdtv: "paula_8364_dip48",
  lisa: "lisa_4203_plcc84",
  lisa_cd: "lisa_4203_plcc84",
  lisa_a4: "lisa_4203_plcc84",
  cia_a_a5: "cia_8520_dip40",
  cia_b_a5: "cia_8520_dip40",
  cia_a_a2: "cia_8520_dip40",
  cia_b_a2: "cia_8520_dip40",
  cia_a3: "cia_8520_dip40",
  cia_b_a3: "cia_8520_dip40",
  cia_cdtv: "cia_8520_dip40",
  cia_b_cdtv: "cia_8520_dip40",
};

export function hasVerifiedPinout(chipId: string): boolean {
  return chipId in CHIP_PINOUT_PROFILES;
}

export function getPinsForChip(chipId: string): PinData[] {
  const profile = CHIP_PINOUT_PROFILES[chipId];
  if (!profile) return [];
  if (profile === "mc68000_dip64") return generateMC68000Pins();
  return generatePins(PINOUT_PROFILES[profile]);
}

function generatePins(pinNames: readonly string[]): PinData[] {
  return pinNames.map((name, index) => ({
    number: index + 1,
    name,
    signal: name,
    direction: getPinDirection(name),
    description: getPinDescription(name),
  }));
}

function getPinDirection(name: string): PinData["direction"] {
  if (/^(GND|VSS)/.test(name)) return "GND";
  if (/^(VCC|VDD|VBB)/.test(name)) return "PWR";
  if (name.startsWith("NC")) return "NC";
  return "UNKNOWN";
}

function getPinDescription(name: string): string {
  const map: Record<string, string> = {
    "VCC": "+5V power supply rail",
    "GND": "Ground / 0V reference",
    "/RES": "System reset (active low)",
    "/RESET": "System reset (active low)",
    "CCK": "Color clock (3.58/3.54 MHz)",
    "CCKQ": "Color clock quadrature",
    "C1": "Clock phase 1",
    "C3": "Clock phase 3",
    "/RAS0": "Row address strobe 0 (active low)",
    "/RAS1": "Row address strobe 1 (active low)",
    "/CAS0": "Column address strobe 0 (active low)",
    "/CAS1": "Column address strobe 1 (active low)",
    "/WE": "Write enable (active low)",
    "DMAL": "DMA request line",
    "DKRD": "Disk read data",
    "DKWD": "Disk write data",
    "DKWE": "Disk write enable",
    "/DKBR": "Disk byte ready (active low)",
    "RXD": "Serial receive data",
    "TXD": "Serial transmit data",
    "/RTS": "Request to send (active low)",
    "/CTS": "Clear to send (active low)",
    "/INT2": "Level 2 interrupt (active low)",
    "/INT3": "Level 3 interrupt (active low)",
    "/INT6": "Level 6 interrupt (active low)",
    "/OVR": "Override (active low)",
    "XCLK": "External clock input",
    "XCLKEN": "External clock enable",
    "ACH0": "Audio channel 0 output",
    "ACH1": "Audio channel 1 output",
    "ACH2": "Audio channel 2 output",
    "ACH3": "Audio channel 3 output",
    "/AS": "Address strobe (active low)",
    "/DS": "Data strobe (active low)",
    "/DTACK": "Data transfer acknowledge (active low)",
    "R/W": "Read/Write direction",
    "/HALT": "CPU halt (active low)",
    "PHI2": "Phase 2 clock",
    "/CS": "Chip select (active low)",
    "/IRQ": "Interrupt request (active low)",
    "TOD": "Time-of-day clock input",
    "/FLAG": "External flag input (active low)",
    "PC": "Peripheral control strobe",
    "SP": "Serial port data",
    "CNT": "Counter clock/input",
    "NC": "No connect",
  };
  if (map[name]) return map[name];
  if (name.startsWith("NC")) return "No connect";
  if (/^(D|DB|RD|DRD)\d+$/.test(name)) return `${name} data bus signal`;
  if (/^(A|MA|DRA|RGA)\d+$/.test(name)) return `${name} address bus signal`;
  return `${name} signal pin`;
}

function generateMC68000Pins(): PinData[] {
  const pinNames = PINOUT_PROFILES.mc68000_dip64;

  const inputPins = new Set([
    "/DTACK", "/BGACK", "/BR", "CLK", "/VPA", "/BERR",
    "/IPL2", "/IPL1", "/IPL0",
  ]);
  const bidirectionalPins = new Set(["/HALT", "/RESET"]);

  return pinNames.map((name, index) => {
    let direction: PinData["direction"] = "OUT";
    if (name === "VCC") direction = "PWR";
    else if (name === "GND") direction = "GND";
    else if (name.startsWith("D") || bidirectionalPins.has(name)) direction = "BI";
    else if (inputPins.has(name)) direction = "IN";

    return {
      number: index + 1,
      name,
      signal: name,
      direction,
      description: getPinDescription(name),
    };
  });
}
