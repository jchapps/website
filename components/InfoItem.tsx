type Props = {
  children: React.ReactNode;
  className?: string;
};

const InfoItem: React.FunctionComponent<Props> = ({
  children,
  className,
}: Props) => {
  return (
    <p className={`text-primary text-2xl dark:text-white ${className}`}>
      {children}
    </p>
  );
};

export default InfoItem;
