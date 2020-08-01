import CMS from 'netlify-cms-app'

import withStyledComponentsRendered from '@hooks/withStyledComponentsRendered'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import TheRealDealPagePreview from './preview-templates/TheRealDealPagePreview'

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview))
CMS.registerPreviewTemplate('index', withStyledComponentsRendered(AboutPagePreview))
CMS.registerPreviewTemplate('index', withStyledComponentsRendered(TheRealDealPagePreview))
