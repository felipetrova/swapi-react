import * as Style from './ButtonStyle';

export default ({ txt, className, onClick }) => {
  return (
    <Style.Button className={`${className}`} onClick={onClick}>
      {txt}
    </Style.Button>
  );
}
