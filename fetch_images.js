import https from 'https';
https.get('https://asue-beauty.com', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const colorRegex = /#[0-9a-fA-F]{3,6}/g;
    let match;
    const colors = new Set();
    while ((match = colorRegex.exec(data)) !== null) {
      colors.add(match[0]);
    }
    console.log(Array.from(colors).join(', '));
  });
});
