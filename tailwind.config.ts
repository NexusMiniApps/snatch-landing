
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				snatch: {
					purple: "#A855F7",
					pink: "#EC4899",
					yellow: "#FDE047",
					darkblue: "#1E1B4B",
					darkpurple: "#3B0764",
				},
				partiful: {
          purple: "#5b3bd7",
          dark: "#1a1828",
          pink: "#b14f8c",
          blue: "#4bb6e7",
          lightblue: "#a4d4dc",
          cream: "#efce99",
          orange: "#dba663",
        },
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
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
				},
				'bounce-subtle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-scale': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.1)'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0.2'
					},
					'50%': {
						opacity: '1'
					}
				},
				'countdown': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.2)'
					}
				},
				'ping-slow': {
					'0%': {
						transform: 'scale(1)',
						opacity: '0.5'
					},
					'50%': {
						transform: 'scale(1.2)',
						opacity: '0.1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '0.5'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'diagonal-move': {
					'0%': {
						transform: 'translate(0, 0)'
					},
					'100%': {
						transform: 'translate(10px, 10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
				'fade-up': 'fade-up 0.5s ease-out',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'countdown': 'countdown 1s ease-in-out infinite',
				'ping-slow': 'ping-slow 3s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s ease-in-out infinite',
				'diagonal': 'diagonal-move 0.3s ease-out forwards',
			},
			backgroundImage: {
				'gradient-party': 'linear-gradient(135deg, #1E1B4B, #3B0764)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'partiful-gradient': 'linear-gradient(to right, #a4d4dc, #b14f8c, #4bb6e7)',
				'modern-gradient': 'linear-gradient(to right, #EC4899, #8B5CF6, #3B82F6)',
				'soft-glow': 'radial-gradient(circle at center, rgba(91, 59, 215, 0.3) 0%, rgba(26, 24, 40, 0) 70%)',
			},
			fontFamily: {
				'fredoka': ['"Fredoka One"', 'cursive'],
				'inter': ['Inter', 'sans-serif'],
				'nunito': ['Nunito', 'sans-serif'],
				'outfit': ['Outfit', 'sans-serif'],
			},
			boxShadow: {
				'glow-sm': '0 0 15px rgba(91, 59, 215, 0.3)',
				'glow-md': '0 0 25px rgba(91, 59, 215, 0.4)',
				'glow-lg': '0 0 35px rgba(91, 59, 215, 0.5)',
				'glow-pink': '0 0 25px rgba(236, 72, 153, 0.5)',
			},
			dropShadow: {
				'glow-sm': '0 0 8px rgba(91, 59, 215, 0.5)',
				'glow-md': '0 0 12px rgba(91, 59, 215, 0.6)',
				'glow-pink': '0 0 10px rgba(236, 72, 153, 0.6)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
