/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    sassOptions: {
        // Bootstrap 5.3.x usa funciones globales de Sass ya deprecadas (mix(), @import);
        // silenciar solo esas categorías hasta que Bootstrap migre a los módulos "sass:*".
        silenceDeprecations: ['import', 'color-functions', 'global-builtin', 'mixed-decls'],
    },
};

export default nextConfig;
