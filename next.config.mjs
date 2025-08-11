/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "v8.api.sinusoid.in",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
