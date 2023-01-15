module.exports = {
    distDir: 'build',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/nashihu/**',
            },
        ],
        unoptimized: true
    }
}