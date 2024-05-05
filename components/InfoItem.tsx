type Props = {
  children: React.ReactNode;
};
const InfoItem: React.FunctionComponent<Props> = ({ children }: Props) => {
  return <p className="text-primary text-2xl pt-7">{children}</p>;
};

export default InfoItem;
