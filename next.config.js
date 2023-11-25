/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'placekitten.com'}, {hostname: 'loremflickr.com'}]
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
