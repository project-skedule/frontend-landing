// Entry point

// Calls router component, which determines
// which page to display and renders it
import("./pages/router").then(f => f.default())

// Needed for the file to be loaded as module
export {}
