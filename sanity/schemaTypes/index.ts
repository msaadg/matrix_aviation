import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {productCategoryType} from './productCategoryType'
import {productType} from './productType'
import {subProductType} from './subProductType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    categoryType, 
    postType, 
    authorType,
    productCategoryType,
    productType,
    subProductType
  ],
}
