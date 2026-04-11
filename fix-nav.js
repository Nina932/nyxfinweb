const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Extract CSS
const cssMatch = indexHtml.match(/(\/\*\s*═══════════════ NAVIGATION ═══════════════\s*\*\/\s*nav\s*\{[\s\S]*?\.nav-cta:hover\s*\{[\s\S]*?\})/);
let navCss = cssMatch[1];
// Ensure to use hardcoded color instead of var(--accent-teal) just in case
navCss = navCss.replace(/var\(--accent-teal\)/g, '#4fd1c5');

// 2. Extract HTML
const htmlMatch = indexHtml.match(/(<nav id="navbar">[\s\S]*?<\/nav>)/);
const navHtml = htmlMatch[1];


const filesToUpdate = ['features.html', 'platform.html', 'use-cases.html', 'about.html'];

for (const file of filesToUpdate) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace CSS
    // The existing CSS for nav in other files might vary
    if(file === 'features.html') {
        content = content.replace(/\/\*\s*========== NAVIGATION ==========\s*\*\/\s*nav\s*\{[\s\S]*?\.nav-toggle\s*\{[\s\S]*?\}/, navCss);
    } else if (file === 'platform.html') {
        content = content.replace(/\.nav-logo\s*\{[\s\S]*?\.nav-toggle\s*\{[\s\S]*?\}/, navCss);
        content = content.replace(/nav\s*\{\s*position:\s*fixed;[\s\S]*?padding:\s*1rem\s*0;[\s\S]*?\}/, ''); // clean up any remaining nav block
    } else if (file === 'use-cases.html') {
        content = content.replace(/\/\*\s*Navigation\s*\*\/\s*nav\s*\{[\s\S]*?\.nav-toggle\s*\{[\s\S]*?\}/, navCss);
    } else if (file === 'about.html') {
        content = content.replace(/\/\*\s*Navigation\s*\*\/\s*nav\s*\{[\s\S]*?\.nav-links a\.active\s*\{\s*color:\s*var\(--accent\);\s*\}/, navCss);
    }
    
    // Replace HTML
    // Different files might have <nav> or <nav id="navbar">
    content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/, navHtml);
    
    // Set active class
    const pageName = file.replace('.html', '');
    
    // reset active class everywhere in the new injected HTML
    // The injected HTML will have active on Home.
    content = content.replace(/(<li><a href="index\.html" class=")active(">Home<\/a><\/li>)/, '$1$2');
    
    // Now add active to the current file's link
    if(file === 'features.html') {
        content = content.replace(/<li><a href="features\.html">Features<\/a><\/li>/, '<li><a href="features.html" class="active">Features</a></li>');
    } else if (file === 'platform.html') {
         content = content.replace(/<li><a href="platform\.html">Platform<\/a><\/li>/, '<li><a href="platform.html" class="active">Platform</a></li>');
    } else if (file === 'use-cases.html') {
         content = content.replace(/<li><a href="use-cases\.html">Use Cases<\/a><\/li>/, '<li><a href="use-cases.html" class="active">Use Cases</a></li>');
    } else if (file === 'about.html') {
         content = content.replace(/<li><a href="about\.html">About<\/a><\/li>/, '<li><a href="about.html" class="active">About</a></li>');
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}
