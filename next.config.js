/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placekitten.com', 'loremflickr.com',]
        // remotePatterns: [
        //     {
        //     protocol: 'http',
        //     hostname: 'placekitten.com',
        //     port: '',
        //     pathname: '*/g/*',
        //   },
        //   {
        //     protocol: 'http',
        //     hostname: 'loremflickr.com',
        //     port: '',
        //     pathname: '*',
        //   },
        // ]
    }
}

module.exports = nextConfig
