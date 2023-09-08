import styles from './Input.module.scss'

export default function Input({
  size,
  withBorder = false,
  fullWidth = false,
  type = 'text',
  className = '',
  labelText = '',
  placeholder,
  ...restProps
}) {
  return (
    <div>
      <label className={styles.labelText}>{labelText}</label>
      <input
      autoComplete='off'
      placeholder={placeholder}
        type={type}
        className={`${styles.input} ${styles[size]} ${
          styles[withBorder ? 'border' : 'no-border']
        } ${styles[fullWidth ? 'fullWidth' : '']} ${className}`}
        {...restProps}
      />
    </div>
  )
}
