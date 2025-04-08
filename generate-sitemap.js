import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

const links = [
  { url: '/home', changefreq: 'weekly', priority: 1.0 },
  { url: '/servicios-mudanzas', changefreq: 'weekly', priority: 0.9 },
  { url: '/solicitar-presupuesto', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacto-transportes', changefreq: 'monthly', priority: 0.7 },
  { url: '/consejos-mudanzas', changefreq: 'monthly', priority: 0.6 },
]

const sitemap = new SitemapStream({ hostname: 'https://transportescn-mudanzas.es' })
const writeStream = createWriteStream('./public/sitemap.xml')

streamToPromise(sitemap).then(() => console.log('✅ Sitemap generado correctamente'))

sitemap.pipe(writeStream)
links.forEach(link => sitemap.write(link))
sitemap.end()
