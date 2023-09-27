export interface InfoTextBoxProps {
  title: string;
  data: any;
}
const InfoTextBox: React.FC<InfoTextBoxProps> = ({ title, data }) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <span>
          <h2 className="text-[9pt] font-semibold">{title}</h2>
        </span>

        <div className="text-[9pt] font-light">
          {data.map((person: any) => (
            <div key={person.name}>
              <span className="mr-2">{person.name}</span>
              <span className="mr-2">{person.phoneNumber}</span>
              <span>{person.email}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoTextBox;
