const https = require('https');

const url = 'https://app.gdacademy.et/api/v2/blogs/all';

https.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      if (result && result.result && Array.isArray(result.result)) {
        const privacyPolicy = result.result.find(post => 
          post.slug && post.slug.toLowerCase() === 'privacy-and-policy'
        );
        
        if (privacyPolicy) {
          console.log('Found Privacy Policy:');
          console.log('Title:', privacyPolicy.title);
          console.log('Slug:', privacyPolicy.slug);
          console.log('Content Preview:', privacyPolicy.content?.substring(0, 200) + '...');
        } else {
          console.log('No privacy policy found in the blog posts');
          console.log('Available slugs:', result.result.map(p => p.slug));
        }
      } else {
        console.log('Unexpected API response format:', JSON.stringify(result, null, 2));
      }
    } catch (e) {
      console.error('Error parsing API response:', e);
    }
  });
  
}).on('error', (e) => {
  console.error('Error fetching blog posts:', e);
});
