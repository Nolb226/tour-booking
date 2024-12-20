import type { Config } from 'tailwindcss'

const config: Config = {
   darkMode: ['class'],
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
   	extend: {
   		container: {
   			screens: {
   				xl: '1200px'
   			}
   		},
   		boxShadow: {
   			xs: '0px 1px 2px 0px rgba(16,24,40,.05) '
   		},
   		backgroundImage: {
   			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
   			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
   		},
   		borderRadius: {
   			lg: 'var(--radius)',
   			md: 'calc(var(--radius) - 2px)',
   			sm: 'calc(var(--radius) - 4px)'
   		},
   		colors: {
   			background: 'hsl(var(--background))',
   			foreground: 'hsl(var(--foreground))',
   			card: {
   				DEFAULT: 'hsl(var(--card))',
   				foreground: 'hsl(var(--card-foreground))'
   			},
   			popover: {
   				DEFAULT: 'hsl(var(--popover))',
   				foreground: 'hsl(var(--popover-foreground))'
   			},
   			primary: {
   				DEFAULT: 'hsl(var(--primary))',
   				foreground: 'hsl(var(--primary-foreground))'
   			},
   			secondary: {
   				DEFAULT: 'hsl(var(--secondary))',
   				foreground: 'hsl(var(--secondary-foreground))'
   			},
   			muted: {
   				DEFAULT: 'hsl(var(--muted))',
   				foreground: 'hsl(var(--muted-foreground))'
   			},
   			accent: {
   				DEFAULT: 'hsl(var(--accent))',
   				foreground: 'hsl(var(--accent-foreground))'
   			},
   			destructive: {
   				DEFAULT: 'hsl(var(--destructive))',
   				foreground: 'hsl(var(--destructive-foreground))'
   			},
   			border: 'hsl(var(--border))',
   			input: 'hsl(var(--input))',
   			ring: 'hsl(var(--ring))',
   			chart: {
   				'1': 'hsl(var(--chart-1))',
   				'2': 'hsl(var(--chart-2))',
   				'3': 'hsl(var(--chart-3))',
   				'4': 'hsl(var(--chart-4))',
   				'5': 'hsl(var(--chart-5))'
   			},
   			'light-color-scheme': {
   				base1: '#ffffff',
   				base2: '#000000',
   				gray: {
   					'25': '#fcfcfd',
   					'50': '#f9fafb',
   					'100': '#f2f4f7',
   					'200': '#eaecf0',
   					'300': '#d0d5dd',
   					'400': '#98a2b3',
   					'500': '#667085',
   					'600': '#475467',
   					'700': '#344054',
   					'800': '#1d2939',
   					'900': '#101828'
   				},
   				primary: {
   					'25': '#f5faff',
   					'50': '#eff8ff',
   					'100': '#d1e9ff',
   					'200': '#b2ddff',
   					'300': '#84caff',
   					'400': '#53b1fd',
   					'500': '#2e90fa',
   					'600': '#1570ef',
   					'700': '#175cd3',
   					'800': '#1849a9',
   					'900': '#194185'
   				},
   				error: {
   					'25': '#fffbfa',
   					'50': '#fef3f2',
   					'100': '#fee4e2',
   					'200': '#fecdca',
   					'300': '#fda29b',
   					'400': '#f97066',
   					'500': '#f04438',
   					'600': '#d92d20',
   					'700': '#b42318',
   					'800': '#912018',
   					'900': '#7a271a'
   				},
   				warning: {
   					'25': '#fffcf5',
   					'50': '#fffaeb',
   					'100': '#fef0c7',
   					'200': '#fedf89',
   					'300': '#fec84b',
   					'400': '#fdb022',
   					'500': '#f79009',
   					'600': '#dc6803',
   					'700': '#b54708',
   					'800': '#93370d',
   					'900': '#7a2e0e'
   				},
   				success: {
   					'25': '#f6fef9',
   					'50': '#ecfdf3',
   					'100': '#d1fadf',
   					'200': '#a6f4c5',
   					'300': '#6ce9a6',
   					'400': '#32d583',
   					'500': '#12b76a',
   					'600': '#039855',
   					'700': '#027a48',
   					'800': '#05603a',
   					'900': '#054f31'
   				},
   				moss: {
   					'25': '#fafdf7',
   					'50': '#f5fbee',
   					'100': '#e6f4d7',
   					'200': '#ceeab0',
   					'300': '#acdc79',
   					'400': '#86cb3c',
   					'500': '#669f2a',
   					'600': '#4f7a21',
   					'700': '#3f621a',
   					'800': '#335015',
   					'900': '#2b4212'
   				},
   				greenLight: {
   					'25': '#f6fef9',
   					'50': '#ecfdf3',
   					'100': '#d1fadf',
   					'200': '#a6f4c5',
   					'300': '#6ce9a6',
   					'400': '#32d583',
   					'500': '#12b76a',
   					'600': '#039855',
   					'700': '#027a48',
   					'800': '#05603a',
   					'900': '#054f31'
   				},
   				teal: {
   					'25': '#f6fefc',
   					'50': '#f0fdfa',
   					'100': '#ccfbf1',
   					'200': '#99f6e0',
   					'300': '#5fe9d0',
   					'400': '#2ed3b7',
   					'500': '#15b79e',
   					'600': '#0e9384',
   					'700': '#107569',
   					'800': '#125d56',
   					'900': '#134e48'
   				},
   				cyan: {
   					'25': '#f5fdff',
   					'50': '#ecfbff',
   					'100': '#cff9fe',
   					'200': '#a5f0fc',
   					'300': '#67e3f9',
   					'400': '#22ccf5',
   					'500': '#06aed4',
   					'600': '#088ab2',
   					'700': '#0e7090',
   					'800': '#155b75',
   					'900': '#164c63'
   				},
   				blueLight: {
   					'25': '#f5fbff',
   					'50': '#f0f9ff',
   					'100': '#e0f2fe',
   					'200': '#b9e6fe',
   					'300': '#7cd4fd',
   					'400': '#36bffa',
   					'500': '#0ba5ec',
   					'600': '#0086c9',
   					'700': '#026aa2',
   					'800': '#065986',
   					'900': '#0b4a6f'
   				},
   				indigo: {
   					'25': '#f5f8ff',
   					'50': '#eef4ff',
   					'100': '#e0eaff',
   					'200': '#c7d7fe',
   					'300': '#a4bcfd',
   					'400': '#8098f9',
   					'500': '#6172f3',
   					'600': '#444ce7',
   					'700': '#3538cd',
   					'800': '#2d31a6',
   					'900': '#2d3282'
   				},
   				purple: {
   					'25': '#fafaff',
   					'50': '#f4f3ff',
   					'100': '#ebe9fe',
   					'200': '#d9d6fe',
   					'300': '#bdb4fe',
   					'400': '#9b8afb',
   					'500': '#7a5af8',
   					'600': '#6938ef',
   					'700': '#5925dc',
   					'800': '#4a1fb8',
   					'900': '#3e1c96'
   				},
   				pink: {
   					'25': '#fef6fb',
   					'50': '#fdf2fa',
   					'100': '#fce7f6',
   					'200': '#fccce4',
   					'300': '#faa7d1',
   					'400': '#f670c7',
   					'500': '#ee46bc',
   					'600': '#dd2590',
   					'700': '#c11574',
   					'800': '#9e165f',
   					'900': '#851651'
   				},
   				rose: {
   					'25': '#fff5f6',
   					'50': '#fff1f3',
   					'100': '#ffe4e8',
   					'200': '#fecdd6',
   					'300': '#fea3b4',
   					'400': '#fd6f8e',
   					'500': '#f63d68',
   					'600': '#e31b54',
   					'700': '#c01048',
   					'800': '#a11043',
   					'900': '#89123e'
   				},
   				orange: {
   					'25': '#fffaf5',
   					'50': '#fff6ed',
   					'100': '#ffead5',
   					'200': '#fddcab',
   					'300': '#feb273',
   					'400': '#fd853a',
   					'500': '#fb6514',
   					'600': '#ec4a0a',
   					'700': '#c4320a',
   					'800': '#9c2a10',
   					'900': '#7e2410'
   				}
   			},
   			sidebar: {
   				DEFAULT: 'hsl(var(--sidebar-background))',
   				foreground: 'hsl(var(--sidebar-foreground))',
   				primary: 'hsl(var(--sidebar-primary))',
   				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
   				accent: 'hsl(var(--sidebar-accent))',
   				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
   				border: 'hsl(var(--sidebar-border))',
   				ring: 'hsl(var(--sidebar-ring))'
   			}
   		},
   		spacing: {
   			'34': '136px'
   		},
   		keyframes: {
   			'accordion-down': {
   				from: {
   					height: '0'
   				},
   				to: {
   					height: 'var(--radix-accordion-content-height)'
   				}
   			},
   			'accordion-up': {
   				from: {
   					height: 'var(--radix-accordion-content-height)'
   				},
   				to: {
   					height: '0'
   				}
   			}
   		},
   		animation: {
   			'accordion-down': 'accordion-down 0.2s ease-out',
   			'accordion-up': 'accordion-up 0.2s ease-out'
   		}
   	}
   },
   plugins: [
      require('tailwindcss-animate'),
      require('@tailwindcss/typography'),
   ],
}
export default config
