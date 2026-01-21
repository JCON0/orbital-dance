// Convert a string to a URL-friendly slug
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

// Find event by slug
export const findEventBySlug = (events, slug) => {
  return events.find(event => createSlug(event.title) === slug)
}
