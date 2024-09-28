export default {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'pageTitle',
    maxLength: 200,
    slugify: (input: any) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
  },
}
