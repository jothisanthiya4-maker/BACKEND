// Small helper functions to read and write localStorage.
// Not a React hook - just a normal function.

export function readFromStorage(key) {
  try {
    const text = localStorage.getItem(key);
    if (text === null) {
      return []; // nothing saved yet -> empty array
    }
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Creates a unique id like "cat-1718000000000-482"
export function makeId(prefix) {
  return prefix + "-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
}

// Shows date in Indian format, e.g. 29/09/2026
export function formatDate(isoText) {
  return new Date(isoText).toLocaleDateString("en-IN");
}
