export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string,
  scrambleRate: number,
  isAnimated?: boolean,
  className?: string,
}