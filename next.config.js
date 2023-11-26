/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'placekitten.com' }, { hostname: 'loremflickr.com' }, { hostname: 'placeholder.pics' }],
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
