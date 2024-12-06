interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', disabled = false, children, onClick }) => {
  const baseClass = 'rounded focus:outline-none focus:ring-2'
  const sizeClass = size === 'small' ? 'px-2 py-1 text-sm' : size === 'large' ? 'px-6 py-3 text-lg' : 'px-4 py-2'

  const variantClass =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400'
      : variant === 'secondary'
        ? 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-gray-300'
        : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400'

  const disabledClass = disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''

  return (
    <button className={`${baseClass} ${sizeClass} ${variantClass} ${disabledClass}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
