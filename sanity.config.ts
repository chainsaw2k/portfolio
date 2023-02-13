import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from "./components/StudioNavbar"
import Logo from "./components/Logo"

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID != undefined ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID : '';
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET != undefined ? process.env.NEXT_PUBLIC_SANITY_DATASET : '';

export default defineConfig({
  basePath: "/studio",
  name: 'Tom_Studio',
  title: 'Tom Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme,
})
