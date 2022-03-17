const Question = ({
  question,
  reponse,
}: {
  question: string;
  reponse: string;
}) => {
  return (
    <>
      <div className="QUESTION2">{question}</div>
      <div className="reponse2">{reponse}</div>
      <div className="box-for-button2">
        <input className="buttonfaq2" type="button" value="Lire la suite..." />
      </div>
      <div className="Trait2"> </div>
    </>
  );
};

export default Question;
