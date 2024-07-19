type Props = {
  className?: string;
};

const Divider: React.FunctionComponent<Props> = ({ className }) => {
  return (
    <hr
      className={`rounded-md text-primary dark:text-white border ${className}`}
    />
  );
};

export default Divider;
