function parsePlatform(platform: string): string {
  switch (platform) {
    case 'commodore-amiga':
      return 'commodore'

    case 'ios':
    case 'mac':
      return 'apple'

    default:
      return platform
  }
}

export { parsePlatform }
