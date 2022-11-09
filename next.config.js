/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'th.bing.com',
            's3-alpha-sig.figma.com',
            'images.pexels.com',
            'images.unsplash.com'
        ]
    }
}

module.exports = nextConfig
