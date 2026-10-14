const colors = {
  white: '#ffffff',
  lilac50: '#f8f7fc',
  lilac100: '#eeecf8',
  lilac200: '#ddd9ef',
  lilac300: '#c7c0e2',
  lilac600: '#594a86',
  lilac700: '#493a70',
  cocoa600: '#62504a',
  cocoa700: '#4f403b',
  cocoa800: '#3b302c',
  cocoa900: '#2b2321',
  cocoa950: '#1b1514',
  cream50: '#fdfbf8',
}

const checks = [
  ['violeta principal sobre blanco', 'lilac600', 'white', 7],
  ['violeta principal sobre fondo lila', 'lilac600', 'lilac50', 7],
  ['violeta principal sobre crema', 'lilac600', 'cream50', 7],
  ['violeta oscuro sobre blanco', 'lilac700', 'white', 7],
  ['violeta oscuro sobre lila claro', 'lilac700', 'lilac100', 7],
  ['texto cacao sobre lila claro', 'cocoa600', 'lilac50', 7],
  ['texto secundario sobre blanco', 'cocoa700', 'white', 7],
  ['texto secundario sobre crema', 'cocoa700', 'cream50', 7],
  ['texto de botón secundario', 'cocoa800', 'white', 7],
  ['texto blanco sobre botón violeta', 'white', 'lilac600', 7],
  ['texto blanco sobre botón oscuro', 'white', 'cocoa900', 7],
  ['texto blanco sobre sección oscura', 'white', 'cocoa950', 7],
  ['texto lila claro sobre sección oscura', 'lilac300', 'cocoa950', 7],
  ['títulos lila claro sobre sección oscura', 'lilac200', 'cocoa950', 7],
  ['indicador de foco sobre blanco', 'lilac700', 'white', 3],
  ['indicador de foco sobre lila claro', 'lilac700', 'lilac50', 3],
]

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16) / 255)
  const [red, green, blue] = channels.map((value) =>
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
  )

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrastRatio(foreground, background) {
  const foregroundLuminance = luminance(foreground)
  const backgroundLuminance = luminance(background)
  const lighter = Math.max(foregroundLuminance, backgroundLuminance)
  const darker = Math.min(foregroundLuminance, backgroundLuminance)

  return (lighter + 0.05) / (darker + 0.05)
}

let failed = false

for (const [label, foreground, background, minimum] of checks) {
  const ratio = contrastRatio(colors[foreground], colors[background])
  const passes = ratio >= minimum
  failed ||= !passes
  console.log(`${passes ? 'PASS' : 'FAIL'} ${ratio.toFixed(2)}:1 — ${label} (mínimo ${minimum}:1)`)
}

if (failed) {
  process.exitCode = 1
}
