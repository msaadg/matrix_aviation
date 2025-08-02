import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {productCategoryType} from './productCategoryType'
import {productType} from './productType'
import {subProductType} from './subProductType'
import {brandType} from './brandType'
import {procurerType} from './procurerType'
import {contactType} from './contactType'
import {companyType} from './companyType'
import {conditionsOfSaleType} from './conditionsOfSaleType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    categoryType, 
    postType, 
    authorType,
    productCategoryType,
    productType,
    subProductType,
    brandType,
    procurerType,
    contactType,
    companyType,
    conditionsOfSaleType
  ],
}
