# ti_unified_templates
Enterprise Unified Templates

## Install
From project root folder run:
`./install.sh`

## Generate/Watch Pattern Lab with Browsersync:
From root folder:
`npm run local-dev`

You should now be able to open http://localhost:3000 to see your generated site. Any changes you make in ./source/ will automatically rebuild your site and reload your browser.

## Atomic Design Principles to Follow

Atoms - should only contain HTML/SVG markup, Atoms should not include other elements.

Molecules - can contain HTML/SVG markup and Atoms.  Molecules should not contain other Molecules or Organisms.

Organisms - can contain HTML/SVG mark up, Atoms, Molecules, and other Organisms.

