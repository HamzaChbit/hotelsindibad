import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
export default defineConfig({
  name: 'default',
  title: 'sanity-hotel-management',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  plugins: [deskTool(), visionTool()],
  basePath: "/studio",
  schema: {
    types: schemaTypes,
  },
})
