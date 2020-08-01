import CMS from 'netlify-cms-app'

import withStyledComponentsRendered from '@hooks/withStyledComponentsRendered'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import TheRealDealPagePreview from './preview-templates/TheRealDealPagePreview'

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview))
CMS.registerPreviewTemplate('about', withStyledComponentsRendered(AboutPagePreview))
CMS.registerPreviewTemplate('the-real-deal', withStyledComponentsRendered(TheRealDealPagePreview))
