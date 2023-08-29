/** @type {import('next').NextConfig} */
const nextConfig = {
    iimages: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}

module.exports = nextConfig