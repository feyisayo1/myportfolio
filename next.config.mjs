/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// allow external images from kjk.africa (used in `Experience.tsx`)
		domains: ["kjk.africa"],
		// alternatively you can use `remotePatterns` for more control:
		// remotePatterns: [
		//   { protocol: 'https', hostname: 'kjk.africa', pathname: '/**' }
		// ]
	},
};

export default nextConfig;
