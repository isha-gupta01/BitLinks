/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "png.pngtree.com"
            }
        ]
    }
};

export default nextConfig;
