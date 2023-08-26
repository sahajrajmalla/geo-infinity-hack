/** @type {import('next').NextConfig} */

const nextConfig ={
    webpack: (config, { isServer }) => {
      // Add a rule to handle PDF files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/pdf', // Change this to your desired output path
              publicPath: '/_next/static/pdf', // Change this to your public path
            },
          },
        ],
      });
  
      // Your other configurations...
  
      return config;
    },
  };
  
  
  

module.exports = nextConfig
