import CMS from 'netlify-cms-app'

import withStyledComponentsRendered from '@hooks/withStyledComponentsRendered'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import TheRealDealPagePreview from './preview-templates/TheRealDealPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('the-real-deal', TheRealDealPagePreview)
