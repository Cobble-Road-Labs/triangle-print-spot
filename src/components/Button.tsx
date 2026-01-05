import Link from 'next/link';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
    variant = 'primary', 
    href, 
    onClick, 
    children, 
    className = '',
    type = 'button'
}: ButtonProps) {
    const baseStyles = 'px-6 py-3 rounded-lg font-semibold font-mono transition-colors duration-200 inline-block text-center text-sm md:text-base';
    
    const variantStyles = {
        primary: 'bg-black text-white hover:bg-grey border-2 border-black hover:border-grey',
        secondary: 'bg-white text-black border-2 border-black hover:bg-grey hover:text-white hover:border-grey'
    };

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button 
            type={type}
            onClick={onClick} 
            className={buttonClasses}
        >
            {children}
        </button>
    );
}